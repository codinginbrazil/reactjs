import Layout from '../components/layout'


export default function Form() {
    // https://nextjs.org/docs/authentication

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
                    <label htmlFor="login">Nome de usuário</label>
                    <input
                        id="login" 
                        name="login"
                        type="text"
                        autocomplete="name" 
                        placeholder="Digite o seu nome de usuário"
                        className="form-control"
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password" 
                        name="password"
                        type="text"
                        autocomplete="name"
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


Form.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
