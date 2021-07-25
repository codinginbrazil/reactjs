import Navbar from './navbar'
import Footer from './footer'


export default function Layout({ children }) {
    return (
        <>
            <title>Code in Brazil</title>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}