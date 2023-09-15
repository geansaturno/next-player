"use client";

import style from "./Song.module.scss";
import { useState } from "react";
import { Play } from "../../../icons/Play";
import AlbumImage from "../../shared/AlbumImage/AlbumImage";

export default function Song(song) {
  const [audio] = useState(new Audio(`/assets/audio/${song.song.files.audio}`));
  const [isPlaying, setPlayState] = useState(false);

  audio.onplay = () => setPlayState(true);
  audio.onpause = () => setPlayState(false);

  function tooglePlay() {
    isPlaying ? audio.pause() : audio.play();
  }

  return (
    <section className={`${style.section} container`}>
      <AlbumImage
        className={style.image}
        song={song}
      />
      <div className={style.data}>
        <p className={style.title}>{song.song.title}</p>

        <p className={style.desc}>
          {`${song.song.artist} | ${song.song.album.title} | ${song.song.album.year}`}
        </p>

        <button onClick={tooglePlay} className={style.button}>
          {isPlaying ? <span>| |</span> : <Play className={style.icon} />}
        </button>
      </div>
    </section>
  );
}
