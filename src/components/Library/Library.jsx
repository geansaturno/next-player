import style from "./Library.module.scss";
import AlbumCard from "../AlbumCard/AlbumCard";

export default function Library({ songs }) {
  return (
    <section className={` ${style.section}`}>
      <div className="container">
        <div className={style.header}>
          <div>
            <div>
              <h1 className={style.header_title}>Your Library</h1>
            </div>
            <p className={style.header_desc}>
              You have {songs.length} songs in your library
            </p>
          </div>
        </div>

        <div className={style.wrapper}>
          {songs.map((song) => (
            <AlbumCard song={song} className={style.card} key={song.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
