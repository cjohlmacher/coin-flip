import React from 'react';

const InfoBar = ({count}) => {
    return (
        <div className="InfoBar">
            <p>Heads: {count.heads}</p>
            <p>Tails: {count.tails}</p>
        </div>
    )
};

InfoBar.defaultProps = {
    count: {heads: 0, tails: 0}
}

export default InfoBar;