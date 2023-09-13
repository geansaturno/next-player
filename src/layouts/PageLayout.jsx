import Header from "../components/Header/Header";

export default function Page({children}) {
    return (
        <main>
            <Header/>
            <section>
                {children}
            </section>
        </main>
    )
}