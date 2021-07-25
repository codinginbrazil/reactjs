import Layout from '../components/layout'


export default function About() {
    return(
        <div>
            <h1>About</h1>
        </div>
    )    
}


About.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
