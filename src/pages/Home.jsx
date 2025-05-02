import GameCard from '../components/GameCard';
import moleIcon from '../assets/icons/tikus.png';
import ticTacToeIcon from '../assets/icons/tictactoe.png';
import racingIcon from '../assets/icons/racing.png'; // import ikon balapan
import quizIcon from '../assets/icons/quiz.png'; // import ikon kuis
import guessImageIcon from '../assets/icons/guess-image.png'; // import ikon tebak gambar
// import suaraHewanIcon from '../assets/icons/sound-hewan.png'; // import ikon suara hewan
// import jodohIcon from '../assets/icons/jodoh.png'; // import ikon jodoh
// import ultahIcon from '../assets/icons/ultah.png'; // import ikon ultah
import adminIcon from '../assets/icons/admin.png'; // import ikon admin grup
// import semua ikon

const games = [
    { title: "Whack A Mole", image: moleIcon, link: "/mole" },
    { title: "Tic Tac Toe", image: ticTacToeIcon, link: "/tic-tac-toe" },
    { title: "Racing", image: racingIcon, link: "/racing-game" },
    { title: "Quiz", image: quizIcon, link: "/quiz" },
    { title: "Tebak Gambar", image: guessImageIcon, link: "/tebak-gambar" },
    // { title: "Suara Hewan", image: suaraHewanIcon, link: "/animal-sound" },
    // { title: "Tes Jodoh", image: jodohIcon, link: "/name-match" },
    // { title: "Tebak Ultah", image: ultahIcon, link: "/birthday-guess" },
    { title: "Admin GC", image: adminIcon, link: "/admin" },
];

export default function Home() {
return (
    <div style={{ maxWidth: '40rem', margin: '0 auto', padding: '1rem' }}>
        <h1 style={{ textAlign: 'center' }}>🎮 Minigames 𝐋 𝐔 𝐍 𝐀 𝐑 𝐈 𝐒  𝐂 𝐈 𝐑 𝐂 𝐋 E</h1>
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
        lebih burik daripada epep
        </p>
        <div style={{ width: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(6rem, 1fr))', gap: '1rem' }}>
        {games.map((game, i) => (
            <GameCard key={i} {...game} />
        ))}
        </div>
        <p>designed by <a href="https://github.com/henryhen-bit">henry</a></p>
        <p>generated with AI chatGPT, Please understand if it's not good enough</p>
    </div>
    );
}
