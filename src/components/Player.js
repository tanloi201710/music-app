import React, { useCallback, useEffect, useRef, useState } from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'

function Player(props) {
    const audio = useRef(null);
    const [isPlaying,setIsPlaying] = useState(false);
    const [duration,setDuration] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [currentTime,setCurrentTime] = useState(0);
    const [volume,setVolume] = useState(0);
    const [isMuted,setIsMuted] = useState(false);
    //const [prevVolume,setPreVolume] = useState(0);

    const SkipSong = useCallback((forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length - 1) {
                    temp = 0;
                };

                return temp;
            });
            setPercentage(0);
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0) {
                    temp = props.songs.length - 1;
                };

                return temp;
            });
            setPercentage(0);
        }
    }, [props]);

    useEffect(() => {
        if(isPlaying) {
            const playPromise = audio.current.play();
            if(playPromise !== undefined) {
                playPromise.then().catch((error) => console.log(error));
            }
        } else {
            audio.current.pause();
        }
    }, [SkipSong,isPlaying]);


    

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
        const time = e.currentTarget.currentTime;

        if(!isNaN(percent)) setPercentage(+percent);
        
        setCurrentTime(time.toFixed(2));
    };

    const onChange = (e) => {
        const audioC = audio.current;
        audioC.currentTime = (audioC.duration / 100) * e.target.value;
        setPercentage(e.target.value);
    };

    const onVolumeChange = (e) => {
        const audioC = audio.current;
        audioC.volume = (e.target.value / 100).toFixed(2);
        setVolume(e.target.value);
    };

    const muteControl = () => {
        const audioC = audio.current;
        audioC.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div className="c-player">
            <audio 
            src={props.songs[props.currentSongIndex].src} 
            ref={audio}
            onTimeUpdate={getCurrDuration}
            onLoadedData={(e) => {
                setDuration(e.currentTarget.duration.toFixed(2));
                setVolume(e.currentTarget.volume * 100);
            }}
            onEnded={() => SkipSong()}
            ></audio>
            <h4>Đang phát</h4>
            <PlayerDetails 
                song={props.songs[props.currentSongIndex]} 
            />
            <PlayerControls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                SkipSong={SkipSong}
                percentage={percentage} 
                onChange={onChange}
                duration={duration}
                currentTime={currentTime}
                volume={volume}
                onVolumeChange={onVolumeChange}
                isMuted={isMuted}
                muteControl={muteControl}
            />
            <p><strong>Tiếp theo:</strong> {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
        </div>
    )
}

export default Player
