import { useNavigate } from 'react-router-dom';
import './GameCard.css'; // buat gaya nanti

const GameCard = ({ title, image, link }) => {
    const navigate = useNavigate();

    return (
        <div className="game-card" onClick={() => navigate(link)}>
        <img src={image} alt={title} />
        <p>{title}</p>
        </div>
    );
};

export default GameCard;
