import React from 'react';
import './Frame.css';
import Coin from './Coin';
import Banner from './Banner';
import InfoBar from './InfoBar';
import {useState} from 'react';

const Frame = ({title}) => {
    const [isHeads,setHeads] = useState(true);
    const [count,setCount] = useState({heads: 0, tails: 0});

    const flipCoin = () => {
        const val = Math.random();
        if (val >= 0.5) { 
            setHeads(true);
            setCount(
                {
                    ...count,
                    heads:count.heads+1
                }
            );
        } else {
            setHeads(false);
            setCount(
                {
                    ...count,
                    tails:count.tails+1
                }
            );
        };
    };

    return (
        <div className="Frame">
            <Banner title={title}/>
            <Coin isHeads={isHeads}/>
            <button className="Frame-Button" onClick={flipCoin}>Flip the coin!</button>
            <InfoBar count={count}/>
        </div>
    )
};

Frame.defaultProps = {
    title: 'Coin Flip App',
}

export default Frame;