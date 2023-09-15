import Link from "next/link";
import AlbumImage from "../AlbumImage/AlbumImage";
import style from "./AlbumCard.module.scss";

export default function AlbumCard({ song, className }) {
  return (
    <Link
      className={`${className} ${style.cover}`}
      href={`/${encodeURIComponent(song.id)}`}
    >
      <AlbumImage className={style.image} song={song} />
      <div className={style.content}>
        <div>
          <p className={style.title}>{song.song.title}</p>
          <p className={style.artist}>{song.song.artist}</p>
        </div>
      </div>
    </Link>
  );
}
