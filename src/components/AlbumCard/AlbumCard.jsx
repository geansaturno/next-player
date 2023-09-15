import AlbumImage from "../AlbumImage/AlbumImage";
import style from './AlbumCard.module.scss'

export default function AlbumCard({ song, className }) {
  return (
    <div className={`${className} ${style.cover}`}>
      <AlbumImage
        className={style.image}
        song={song}
      />
      <div className={style.content}>
        <div>
          <p className={style.title}>{song.song.title}</p>
          <p className={style.artist}>{song.song.artist}</p>
        </div>
      </div>
    </div>
  );
}
