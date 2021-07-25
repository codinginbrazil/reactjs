import Layout from '../components/layout'


export default function List() {
    return (
        <div>
            <hr></hr>
            <h1>Listar Cliente</h1>
            <br></br>
            <p id="client_id"> Número do cliente: </p>
            <p id="client_name"> Nome: </p>
            <p id="client_appellation"> Sobrenome: </p>
            <p id="client"> Tipo do cliente: </p>
            <br></br><br></br>
        </div>
    )
}


List.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
