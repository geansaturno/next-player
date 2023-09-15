import Link from 'next/link'
import style from './Header.module.scss'

export default function Header({showSearch}){
    return <header className={style.header}>
        <div className='container'>
            <Link className={style.logo} href='/'>
                MUSE.ai
            </Link>
        </div>
        
    </header>
}