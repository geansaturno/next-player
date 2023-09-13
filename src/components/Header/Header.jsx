import style from './Header.module.scss'

export default function Header({showSearch}){
    return <header className={style.header}>
        <div className='container'>
            <span className={style.logo}>
                MUSE.ai
            </span>
        </div>
        
    </header>
}