"use client"
import { Game, TeamScore } from "./types";

const GAMES_CSV_URL = 'https://docs.google.com/spreadsheets/d/1j3zgWNeTYNF9nJmJJMgLkkleyXVegc8msODOZZKAYZ8/pub?gid=0&single=true&output=tsv';

const players: string[] = [
    "Achinthya", "Alex", "Allison", "Ash", "Ben", "Cecilia", "Chase", "Colina", "Constance", "David", "Devin", "Edward", "Eugene", "Frank", "Garrick", "Grace", "Isabel", "Jackie", "Jeff", "Juan", "Justine", "Ray", "Susan", "Tara", "Tyler", "Will",
];


async function loadTSVData(url: string, ignoreHeader: boolean = true) {
    // Use fetch to get the CSV data
    const results = await fetch(url);
    const csvData = await results.text();
    
    // Get the rows from the CSV data
    const rows = csvData.split('\n');

    // Get the last updated time stamp
    // This the last element in the header row
    const lastUpdated = rows[0].split('\t').pop() || "";

    if (ignoreHeader) {
        // Ignore the first row (header)
        rows.shift();
    }

    return {rows, lastUpdated};
}

function getSetScore(score: string): number {
    return parseInt(score) || 0;
}

function mapGamesTSVToGames(csvData: string[]): Game[] {
    // Each 2 rows represent a game
    // The CSV data is formatted as follows:
    //  time, court, team name, player1, player2, player3, player4, set1 score, set2 score
    // 
    // Example:
    //  10:15,1,Digma Balls,Erik,Constance,Cole,Alex S,13,17
    //  10:15,,Calm Yo Tips,Hoang,Kristi,Chase,Colina,21,21

    const games: { [id: number]: Game } = {};
    for (let i = 0; i < csvData.length; i += 1) {
        const [id, round, time, court, format, notes, t1_name, t1_players, t1_score, t2_name, t2_players, t2_scores, referees] = csvData[i].split('\t');
        
        const gameId = parseInt(id);
        const courtNumber = parseInt(court);
        const team1Players = t1_players.split(",");
        const team2Players = t2_players.split(",")
        const refs = referees.split(",");
        
        const gameSet = {
            team1Score: parseInt(t1_score),
            team2Score: parseInt(t2_scores),
        };

        if (!games[gameId]) {
            games[gameId] = {
                id: gameId,
                team1Name: t1_name,
                team2Name: t2_name,
                team1Players,
                team2Players,
                sets: [gameSet],
                court: courtNumber,
                format,
                time,
                notes,
                refs,
            };
        } else {
            games[gameId].sets.push(gameSet);
        }
    }

    return Object.values(games);
}

export async function getGames() {
    const {rows: csvData, lastUpdated} = await loadTSVData(GAMES_CSV_URL);
    return {games: mapGamesTSVToGames(csvData), lastUpdated};
}

export async function getGamesFor(player: string) {
    const {rows: csvData, lastUpdated} = await loadTSVData(GAMES_CSV_URL);
    const games = mapGamesTSVToGames(csvData).filter(game => game.team1Players.includes(player) || game.team2Players.includes(player) || game.refs.includes(player));
    return {games, lastUpdated};
}

export function getTeamScores(games: Game[]): [TeamScore, TeamScore] {    
    // Get team names from the games
    const team1Name = games[0].team1Name;
    const team2Name = games[0].team2Name;

    // Get the total wins for each team
    // Only count sets where a team won by 2 points and scored at least 15 points
    const totalWins = games.reduce(([team1Wins, team2Wins], game) => {
        const team1Won = game.sets.filter(({ team1Score, team2Score }) => team1Score > team2Score + 1 && team1Score >= 15).length;
        const team2Won = game.sets.filter(({ team1Score, team2Score }) => team2Score > team1Score + 1 && team2Score >= 15).length;
        return [team1Wins + team1Won, team2Wins + team2Won];
    }, [0, 0]);

    // Get the total points for each team
    const totalPoints = games.reduce(([team1Points, team2Points], game) => {
        const team1PointsWon = game.sets.reduce((total, { team1Score }) => total + team1Score, 0);
        const team2PointsWon = game.sets.reduce((total, { team2Score }) => total + team2Score, 0);
        return [team1Points + team1PointsWon, team2Points + team2PointsWon];
    }, [0, 0]);
    
    return [
        {name: team1Name, score: totalWins[0], totalPoints: totalPoints[0]},
        {name: team2Name, score: totalWins[1], totalPoints: totalPoints[1]},
    ];
}

export function getPlayers(): string[] {
    return players;
}
