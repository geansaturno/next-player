import Image from "next/image";

export default function AlbumImage({song, className}) {
    return (
        <Image
            className={className}
            src={`/assets/images/${song.song.files.coverArt}`}
            width={204}
            height={204}
            alt={`${song.song.title} - ${song.song.artist}`}
        />
    )
}
