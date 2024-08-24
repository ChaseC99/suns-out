"use client"
import { useEffect, useState } from "react";
import PlayerPicker from "../components/player-picker";
import { getGamesFor } from "../data";
import { Game as GameType } from "../types";
import GamesList from "../components/games-list";
import GameListLoading from "../components/games-list-loading";

export default function Me() {
    const [player, setPlayer] = useState(
        typeof window !== 'undefined' ? localStorage.getItem("player") || "" : ""
    );
    const [games, setGames] = useState<GameType[]>(
        typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("mySchedule") || "[]") as GameType[] : []
    );
    const [lastUpdated, setLastUpdated] = useState("");

    // When the player name changes, 
    // save it to local storage and fetch the player's data
    useEffect(() => {
        localStorage.setItem("player", player);
        getGamesFor(player).then(({ games, lastUpdated }) => {
            localStorage.setItem("mySchedule", JSON.stringify(games));
            setGames(games)
            setLastUpdated(lastUpdated || "");
        });
    }, [player]);

    useEffect(() => {
        if (player) {
            getGamesFor(player).then(({ games, lastUpdated }) => {
                localStorage.setItem("mySchedule", JSON.stringify(games));
                setGames(games)
                setLastUpdated(lastUpdated || "");
            });
        }
    }, []);

    return (
        <div style={{ marginBottom: 100, margin: 12 }}>
            <PlayerPicker value={player} onChange={setPlayer} />
            {
                player && (
                    <div style={{ marginTop: 24 }}>
                        <h2>Your Schedule</h2>
                        {
                            games.length === 0 ? (
                                <GameListLoading count={4}/>
                            ) : <GamesList games={games} />
                        }
                        
                        {
                            lastUpdated && (
                                <div style={{ color: "#444", textAlign: "center", marginTop: 24 }}>
                                    Last updated: {lastUpdated}
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}