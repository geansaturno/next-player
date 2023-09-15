import Image from "next/image";
import style from './AlbumImage.module.scss'

export default function AlbumImage({song, className}) {
    return (
        <Image
            className={`${className} ${style.image}`}
            src={`/assets/images/${song.song.files.coverArt}`}
            width={204}
            height={204}
            alt={`${song.song.title} - ${song.song.artist}`}
        />
    )
}
