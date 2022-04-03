import '../../styles/home.css'
import Navigation from "../navigation/Navigation";
import Menu from "../leftBar/Menu";
import Ideas from '../explore/idea/Ideas'

export default function Home () {
    return(
        <>
            <Navigation />
            <section className={'main'}>
                <Menu />
                <Ideas />

            </section>
        </>
    )
}