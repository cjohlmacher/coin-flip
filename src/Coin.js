import React from 'react';
import './Coin.css';

const Coin = ({isHeads}) => {
    
    const headsImg = <img className="Coin-Image" alt="coin-heads" src="https://images.pexels.com/photos/7702774/pexels-photo-7702774.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />;
    const tailsImg = <img className="Coin-Image" alt="coin-tails" src="https://images.pexels.com/photos/8466440/pexels-photo-8466440.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />;
    const img = isHeads ? headsImg : tailsImg;

    return (
        <div className="Coin">
            {img}
        </div>
    )
};

export default Coin;