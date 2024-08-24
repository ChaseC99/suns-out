import React from 'react';
import styles from './game.module.css';
import { Game as GameProps } from '../types';

export default function Game({ team1Name, team2Name, team1Players, team2Players, refs, sets, court, time, format }: GameProps) {
    // Filter out sets that are not yet played
    // sets = sets.filter(({ team1Score, team2Score }) => team1Score !== 0 || team2Score !== 0);

    if (format.includes("break")) {
        return (
            <div>
                Break
            </div>
        )
    }

    return (
        <div className={styles.game}>
            <div className={styles.gameHeader}>
                <span>Court {court}</span>
                <span>{time?.toLowerCase()}</span>
            </div>

            <div className={styles.teamNames}>
                <span>{team1Name}</span>
                <span>{team2Name}</span>
            </div>

            <div className={styles.playersContainer}>
                <div className={styles.players}>
                    {team1Players.join(", ")}
                </div>
                <div style={{ margin: "0px 12px" }}>|</div>
                <div className={styles.players}>
                    {team2Players.join(", ")}
                </div>
            </div>

            {sets.map(({ team1Score, team2Score }, i) => (
                <>
                    <div key={i} className={styles.scores}>
                        <div>{team1Score}</div>
                        -
                        <div>{team2Score}</div>
                    </div>
                    {i !== sets.length - 1 && <div className={styles.divider}></div>}
                </>

            ))}

            <div className={styles.refs}>
                <span>Refs: {refs.join(', ')}</span>
            </div>
        </div>
    );
}

