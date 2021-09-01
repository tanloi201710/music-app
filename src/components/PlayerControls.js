import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faCompactDisc, faForward, faPause, faPlay, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

function PlayerControls(props) {
    const [position,setPosition] = useState(0);
    const [marginLeft,setMarginLeft] = useState(0);
    const [progressBarWidth,setProgressBarWidth] = useState(0);

    const rangeRef = useRef();
    const thumbRef = useRef();
    const volumeRef = useRef();
    const autoClick = useRef();

    useEffect(() => {
        const rangeWidth = rangeRef.current.getBoundingClientRect().width;
        const thumbWidth = thumbRef.current.getBoundingClientRect().width;
        const centerThumb = (thumbWidth / 100) * props.percentage * -1;
        const centerProgressBar =
            thumbWidth + (rangeWidth / 100) * props.percentage - (thumbWidth / 100) * props.percentage;
        setPosition(props.percentage);
        setMarginLeft(centerThumb);
        setProgressBarWidth(centerProgressBar);
    }, [props.percentage]);

    const timeFormat = (seconds) => {
        if(!seconds) return '00:00';
        let duration = seconds;
        let hours = parseInt(duration / 3600);
        duration %= 3600;
        let min = parseInt(duration / 60);
        duration %= 60;
        let sec = parseInt(duration);

        if(sec < 10) sec = `0${sec}`;

        if(min < 10) min = `0${min}`;

        if(hours > 0) {
            return `${hours}:${min}:${sec}`;
        } else if(min === 0) {
            return `00:${sec}`;
        } else {
            return `${min}:${sec}`;
        }
    };

    useEffect(() => {
        if(props.isMuted) {
            volumeRef.current.value = 0;
        } else {
            volumeRef.current.value = props.volume;
        }
    });


    return (
        <>
            <div className="timer">
                <div 
                    className="progress-bar-cover"
                    style={{ width: `${progressBarWidth}px`}}
                ></div>
                <div 
                    className="thumb" 
                    ref={thumbRef}
                    style={{left: `${position}%`,marginLeft: `${marginLeft}px`}}
                ></div>
                <input 
                    type="range" 
                    step="0.01" 
                    className="timer-range" 
                    min="0" 
                    max="100" 
                    value={position} 
                    onChange={props.onChange} 
                    ref={rangeRef}
                />
            </div>
            <div className="controlTimes">
                <span className="time">{timeFormat(props.currentTime)}</span>
                <span className="time">{timeFormat(props.duration)}</span>
            </div>
            <div className="c-player--controls">
                <button className="playlist-btn">
                    <FontAwesomeIcon icon={faCompactDisc} />
                </button>
                <button className="skip-btn" onClick={() => props.SkipSong(false)} >
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                    <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} style={!props.isPlaying && {transform: 'translate(2px,0px)'}}/>
                </button>
                <button className="skip-btn" ref={autoClick} onClick={() => props.SkipSong()} >
                <FontAwesomeIcon icon={faForward} />
                </button>
                <button className="volume-btn" onClick={props.muteControl}>
                    <FontAwesomeIcon icon={props.isMuted ? faVolumeMute : faVolumeUp} />
                </button>
                <div className="volumeSlider">
                    <input 
                        type="range" 
                        className="volumeRange" 
                        min="0" 
                        max="100"
                        onChange={props.onVolumeChange} 
                        ref={volumeRef}
                    />
                    <div className="cover">
                        <span className="progress" style={{width: `${volumeRef?.current?.value ? volumeRef.current.value : props.volume}%`}}></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayerControls
