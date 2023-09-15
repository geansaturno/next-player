"use client";

import Image from "next/image";

import style from "./Song.module.scss";
import { useEffect } from "react";
import { Play } from "../../icons/Play";

export default function Song(song) {
  let isPlaying = false;
  let audio;

  function tooglePlay() {
    isPlaying ? audio.pause() : audio.play();
  }

  useEffect(() => {
    audio = new Audio(`/assets/audio/${song.song.files.audio}`);

    if (audio) {
      audio.onplay = () => (isPlaying = true);
      audio.onpause = () => (isPlaying = false);
    }
  });

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

        <button onClick={tooglePlay} className={style.button}>
          <Play className={style.icon} />
        </button>
      </div>

      <p>Other albums</p>
    </section>
  );
}
