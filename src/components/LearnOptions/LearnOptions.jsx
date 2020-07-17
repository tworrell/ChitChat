import React from 'react';
import './LearnOptions.css';

const LearnOptions = (props) => {
    const options = [
        { text: "Cyberpunk 2077", handler: props.actionProvider.handleCyberpunkList, id: 1 },
        { text: "Halo Infinite", handler: props.actionProvider.handleDeathloopList, id: 2 },
        { text: "Deathloop", handler: props.actionProvider.handleDeathloopList, id: 3 },
        { text: "Spider-Man: Miles Morales", handler: props.actionProvider.handleSpidermanList, id: 4 },
        { text: "GhostWire: Tokyo", handler: props.actionProvider.handleGhostwireList, id: 5 },
    ];

    const optionsMarkup = options.map((option) => (
    <button className = "game-option-button" key={option.id} onClick={option.handler} >{option.text}</button>
    ));

    return <div className = "game-options-container">{optionsMarkup}</div>
}
export default LearnOptions