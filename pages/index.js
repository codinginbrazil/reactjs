import Layout from '../components/layout'


export default function HomePage() {

    const registerUser = async event => {
        event.preventDefault()

        const res = await fetch('/api/register', {
            body: JSON.stringify({
                name: event.target.name.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()
        // result.user => 'Ada Lovelace'
    }

    return (
        <div>
            <hr></hr>
            <h1>Bem-vindo</h1>
            <form onSubmit={registerUser}>
                <div className="form-group">
                    <label htmlFor="login">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Digite o seu email"
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Digite a sua senha"
                        className="form-control"
                        required
                    />
                </div>

                <button type="submit"> Iniciar Sessão </button>
            </form>
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
