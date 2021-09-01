import { useEffect, useState } from 'react';
import Player from './components/Player';

import './glass.css';


function App() {
  const [songs] = useState([
    {
      title: 'Rồi Tới Luôn',
      artist: 'Nal',
      img_src: './assets/roitoiluon.jpg',
      src: './sounds/RoiToiLuon.flac'
    },
    {
      title: '3107-3',
      artist: 'W/n - Duongg - Nâu - Titie',
      img_src: './assets/3107-3.jpg',
      src: './sounds/3107-3.flac'
    },
    {
      title: 'Qua Khung Cửa Sổ',
      artist: 'Chillies',
      img_src: './assets/quakhungcuaso.jpg',
      src: './sounds/QuaKhungCuaSo.flac'
    },
    {
      title: 'Vùng Ký Ức',
      artist: 'Chillies',
      img_src: './assets/vungkyuc.jpg',
      src: './sounds/VungKyUc.flac'
    },
    {
      title: 'Trốn Tìm',
      artist: 'Đen - MTV',
      img_src: './assets/trontim.jpg',
      src: './sounds/TronTim.flac'
    },
    {
      title: 'East Of Eden',
      artist: 'someone',
      img_src: './assets/eastofeden.jpg',
      src: './sounds/EastOfEden.flac'
    },
    {
      title: 'Thunder',
      artist: 'Gabry Ponte - LUM!X - Prezioso',
      img_src: './assets/thunder.jpg',
      src: './sounds/Thunder.mp3'
    }
  ]);

  const [currentSongIndex,setCurrentSongIndex] = useState(0);
  const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);
  
  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex,songs.length]);

  
  return (
      <div className="App" >
        <Player 
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </div>
  );
}

export default App;
