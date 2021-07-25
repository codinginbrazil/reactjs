import Layout from '../components/layout'


export default function HomePage() {
    return(
        <div>
            <br></br>
            <h1>Welcome to Next.js!</h1>
        </div>
    )
}


HomePage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
