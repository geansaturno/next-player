import Image from 'next/image'
import style from './Library.module.scss'

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
                    <div key={song.id} className={style.cover}>
                        <Image className={style.image}
                            src={`/assets/images/${song.song.files.coverArt}`}
                            width={204}
                            height={204}
                            alt={`${song.song.title} - ${song.song.artist}`}
                        />
                        <div className={style.content}>
                            <div>
                                <p className={style.title}>{song.song.title}</p> 
                                <p className={style.artist}>{song.song.artist}</p> 
                            </div>
                            <button>Like</button>
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
    )
}