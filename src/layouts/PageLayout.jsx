import Header from "../components/Header/index";

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