import Header from '../src/components/structure/Header/Header'
import '../styles/globals/index.scss'

export default function RootLayout({children}) {
    return (
    <html lang="en">
      <body>
        <main>
            <Header/>
            {children}
        </main>
      </body>
    </html>
    )
}