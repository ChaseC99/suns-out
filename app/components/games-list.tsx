import { Game as GameProp } from "../types";
import Game from "./game";

type GamesListProps = {
    games: GameProp[];
}

export default function GamesList({games}: GamesListProps) {
    return (
        <div style={{display: "flex", gap: 12, flexDirection: "column", margin: "0"}}>
            {games.map((game: GameProp, i: number) => (
                <Game key={i} {...game} />
            ))}
        </div>
    );
}