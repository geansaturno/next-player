"use client";

import Image from "next/image";

import style from "./Song.module.scss";
import { useState } from "react";
import { Play } from "../../icons/Play";

export default function Song(song) {
  const [audio] = useState(new Audio(`/assets/audio/${song.song.files.audio}`))
  const [isPlaying, setPlayState] = useState(false)

  audio.onplay = () => (setPlayState(true));
  audio.onpause = () => (setPlayState(false));

  function tooglePlay() {
    isPlaying ? audio.pause() : audio.play();
  }

  return (
    <section className={`${style.section} container`}>
      <Image
        className={style.image}
        src={`/assets/images/${song.song.files.coverArt}`}
        width={204}
        height={204}
        alt={`${song.song.title} - ${song.song.artist}`}
      />
      <div className={style.data}>
        <p className={style.title}>{song.song.title}</p>

        <p className={style.desc}>
          {`${song.song.artist} | ${song.song.album.title} | ${song.song.album.year}`}
        </p>
        
        <audio src={`/assets/audio/${song.song.files.audio}`}/>

        <button onClick={tooglePlay} className={style.button}>
            {isPlaying ? <span>| |</span> : <Play className={style.icon} />}
        </button>
      </div>

      <p>Other albums</p>
    </section>
  );
}
