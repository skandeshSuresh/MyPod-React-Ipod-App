import React from 'react';



const Buttons = (props) =>
{
    return (
        <div className="buttons-container">
            <button className="center-circle" onClick={props.selectButtonClicked}></button>
            <button className="menu-button" onClick={props.menuButtonClicked}>
                <i className="fas fa-bars"></i>
            </button>
            <button className="left-button" onClick={props.leftButtonClicked}>
                <i className="fas fa-backward"></i>
            </button>
            <button className="right-button">
                <i className="fas fa-forward"></i>
            </button>
            <button className="play-pause">
                <i className="fas fa-play"></i>/<i className="fas fa-pause"></i>
            </button>
        </div>
    );
}

export default Buttons;