import Footer from '../components/footer/footer';
import Landing from '../components/landing/landing'
import Nav from '../components/nav/nav'
import SeasonHarvest from '../components/seasonharvests/seasonharvests';



const Homepage = () =>{
    return(
        <>
        <Landing/>
        <SeasonHarvest/>
        <Nav/>
        <Footer/>
        </>
    )
}

export default Homepage;