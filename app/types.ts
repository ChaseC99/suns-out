type GameSet = {
    team1Score: number;
    team2Score: number;
};

export type Game = {
    id: number;
    team1Name: string;
    team2Name: string;
    team1Players: string[];
    team2Players: string[];
    sets: GameSet[];
    court: number;
    format: string;
    time: string;
    notes: string;
    refs: string[];
};

export type Team = {
    name: string;
    color: string;
};

export type TeamWins = Team & {
    wins: number;
};
