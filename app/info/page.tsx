import styles from './page.module.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Collapsible from '../components/collapsible';

export default function Info() {
    return (
        <div className={styles.infoPage}>
            <div className={styles.header}>
                <h1>Sun&#39;s Out<br />Balls Out</h1>
                <div className={styles.datetime}>
                    <img src="/logo.png" alt="Tournament logo" className={styles.headerLogo} />
                    <div>
                        <p>9am - 4pm</p>
                        <p>Saturday, August 24</p>
                    </div>
                    <img src="/logo.png" alt="Tournament logo" className={styles.headerLogo} />
                </div>

            </div>

            <a
                className={styles.linkContainer}
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.google.com/maps/search/?api=1&query=Kevin%20Moran%20Park'
            >
                <LocationOnOutlinedIcon />
                <div>
                    <p>Kevin Moran Park</p>
                    <p>12415 Scully Ave, Saratoga, CA 95070</p>
                </div>
            </a>

            <Collapsible title="Teams" roundedTop roundedBottom>
                <h3>🔴 Can-A-Deez</h3>
                <ul className={styles.threeColumnList}>
                    <li>Achinthya</li>
                    <li>Alex C</li>
                    <li>Anne</li>
                    <li>Ash</li>
                    <li>Christine</li>
                    <li>Jerry</li>
                    <li>Julia</li>
                </ul>
                <br />
                <h3>⚫️ Blockanda</h3>
                <ul className={styles.threeColumnList}>
                    <li>Albert</li>
                    <li>Alex S</li>
                    <li>Alexis</li>
                    <li>Chase</li>
                    <li>Colina</li>
                    <li>Grace</li>
                    <li>William</li>
                </ul>
                <br />
                <h3>⚪️ JaBackPain</h3>
                <ul className={styles.threeColumnList}>
                    <li>Constance</li>
                    <li>Edward</li>
                    <li>Hoang</li>
                    <li>Jackie</li>
                    <li>Jeffrey</li>
                    <li>Ray</li>
                    <li>Tim</li>
                </ul>
                <br />
                <h3>🔵 Naurway</h3>
                <ul className={styles.threeColumnList}>
                    <li>Ben</li>
                    <li>Eugene</li>
                    <li>Frank</li>
                    <li>Jacob</li>
                    <li>Justine</li>
                    <li>Solaine</li>
                    <li>Soob</li>
                </ul>
            </Collapsible>

            <div className={styles.infoBody}>
                <Collapsible title="Gameplay" roundedTop>
                    <div>
                        <div>
                            <p><strong>2 Warmup Games</strong></p>
                            <ul>
                                <li>Everyone plays in 6v6 format (there will be 1 sub at a time, rotating in every time your team rotates servers).</li>
                                <li>The opportunity to build chemistry and discover your position and format preferences!</li>
                                <li>Based on the warmup results and team’s preferences, the teams will be seeded as team A, B, C, or D for the 3 competition rounds. </li>
                            </ul>
                        </div>
                        <br />
                        <div>
                            <p><strong>15m Break: Team Lineups Selection</strong></p>
                            <ul>
                                <li>This will be when each team will choose who will play in each game. </li>
                                <li>The Home team in each round will choose first, and the Away team will get to respond accordingly. </li>
                                <li>No gender requirements in any of the games. </li>
                            </ul>
                        </div>
                        <br />
                        <div>
                            <p><strong>3 Competition Rounds</strong></p>
                            <ul>
                                <li>Each round consists of 2 separate games. </li>
                                <li>Each player will play in exactly 1 game (2 sets) per competition round. </li>
                                <li>By the end of the day, everyone will play 2 warmups and 3 competition games. </li>
                            </ul>
                    </div>
                    </div>
                </Collapsible>

                <Collapsible title="Court Setup">
                    <ul>
                        <li>4v4 and 5v5: full court size</li>
                        <li>{"3v3 and 2v2: small 'doubles' court size"}</li>
                    </ul>
                </Collapsible>

                <Collapsible title="Net Height">
                    <p>Simple (not enforced, but strongly encouraged)</p>
                    <ul>
                        <li>Coed Game == Coed Height</li>
                        <li>{"Men's Game == Men's Height"}</li>
                        <li>{"Women's Game == Women's Height"}</li>
                    </ul>
                </Collapsible>

                <Collapsible title="Game Rules">
                    <div>
                        <p>{"There's a broad range of skill levels amongst everyone, so the recommendation is that you hold yourself to your own standards/expectations when it comes to calls for doubles, lift, net touches, etc."}</p>
                        <br />
                        <p>{"Might be a good idea to go over expectations (e.g. open hand receives) before each match, especially if you think it's going to be a competitive game."}</p>
                        <br />
                        <p>When in doubt, you can always redo a point 🙂</p>
                    </div>
                </Collapsible>

                <Collapsible title="House Rules!">
                    <div>
                        <p><strong>No touch ace == Steal a point</strong></p>
                        <p>{"If you get an ace where the other team doesn't even touch the ball before the ball touches the ground, not only do you get a point, but the other team LOSES a point."}</p>
                    </div>
                    <br />
                    <div>
                        <p><strong>Give up the ball == Give up the point</strong></p>
                        <p>{"Let's say you just won a point and the ball is on your side of the court. If for some reason you roll/toss/kick the ball to the other side of the court, the previous point is voided and the other team serves. (The other team does not win a point though)."}</p>
                    </div>
                </Collapsible>

                <Collapsible title="Game Scoring">
                    <ul>
                        <li>Each warmup game will be just 1 set to 25 points (must win by 2, no hard cap). </li>
                        <li>Each competition game will be 2 sets to 21 points (must win by 2, no hard cap). </li>
                        <li>The team with most sets won at the end will be the winner of the tournament!</li>
                        <li>There will also be some individual recognition.</li>
                    </ul>
                </Collapsible>

                <Collapsible title="Common Volleyball Rules" roundedBottom>
                    <ul>
                        <li>NO open hand serves receive.</li>
                        <li>NO open hand receives on free ball OR during rallies.</li>
                        <li>OK to open hand receive for hard driven.</li>
                        <li>OK to set over the net with 2 hands (as long as shoulders square with direction) otherwise NO.</li>
                        <li>OK to cross other side of the net during the play as long as not interrupting the game.</li>
                    </ul>
                </Collapsible>
            </div>

            <div className={styles.whatToBringContainer}>
                <h2>What to Bring</h2>
                <ul className={styles.twoColumnList}>
                    <li>🏐 Volleyball</li>
                    <li>💦 Plenty of water</li>
                    <li>🧴 Sunscreen</li>
                    <li>🍌 Snacks</li>
                    <li>🧦 Extra socks</li>
                    <li>🪑 Lawn chairs</li>
                    <li>⚡️ Energy</li>
                    <li>🥳 Enthusiasm</li>
                    <li>😎 Vibes</li>
                </ul>
            </div>

            <div>
                <a
                    className={styles.linkContainer}
                    style={{ justifyContent: 'space-between', marginBottom: '12px'}}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://www.rapidtables.com/tools/scoreboard.html'
                >
                    <p>Score Keeeper Tool</p>
                    <ScoreboardIcon />
                </a>
                <a
                    className={styles.linkContainer}
                    style={{ justifyContent: 'space-between', marginBottom: '12px'}}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://open.spotify.com/playlist/7nj68KOKSnECq23LMc4Ok8?si=iOOAEyc_S-m1NmrP_6MOQw&pt=7ee11c9e2c53ea43752aa2a75d935024&pi=w8tR7O93Qfed5'
                >
                    <p>Spotify Playlist</p>
                    <LibraryMusicOutlinedIcon />
                </a>
                <a
                    className={styles.linkContainer}
                    style={{ justifyContent: 'space-between', marginBottom: '12px'}}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://forms.gle/VCMnsypTr3wWXjL58'
                >
                    <p>Superlatives Voting</p>
                    <EmojiEventsIcon />
                </a>
                <a
                    className={styles.linkContainer}
                    style={{ justifyContent: 'space-between' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://docs.google.com/spreadsheets/d/1j3zgWNeTYNF9nJmJJMgLkkleyXVegc8msODOZZKAYZ8/edit?usp=sharing'
                >
                    <p>Google Sheets Schedule</p>
                    <OpenInNewIcon />
                </a>
            </div>
        </div>
    );
}