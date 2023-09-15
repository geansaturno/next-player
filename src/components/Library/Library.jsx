import style from './Library.module.scss'
import Link from 'next/link'
import AlbumCard from '../AlbumCard/AlbumCard'

export default function Library({songs}) {

    return (
        <section className={`container ${style.section}`}>
            <div className={style.header}>
                <div>
                    <div>
                        <h1 className={style.header_title}>Your Library</h1>
                    </div>
                    <p className={style.header_desc}>You have {songs.length} songs in your library</p>
                </div>
            </div>

            <div className={style.wrapper}>
                {
                    songs.map((song) =>  
                    <Link key={song.id} href={`/${encodeURIComponent(song.id)}`}>
                       <AlbumCard song={song}/>
                    </Link>
                    )
                }
            </div>
        </section>
    )
}