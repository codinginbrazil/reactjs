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
            <h1>Adicionar cliente</h1>
            <form onSubmit={registerUser}>
                <div className="form-group">
                    <label htmlFor="client">Tipo cliente:</label>
                    <select id="client" name="client" className="form-control">
                        <option value="cnpj">CNPJ</option>
                        <option value="cpf">CPF</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="client">Situação do cliente:</label>
                    <br></br> &nbsp; &nbsp;
                    <input 
                        type="radio" 
                        id="client_status" 
                        name="client_status"
                        value="on" 
                    /> Ativo
                    <br></br> &nbsp; &nbsp;
                    <input 
                        type="radio" 
                        id="client_status" 
                        name="client_status"
                        value="off" 
                        checked
                    /> Inativo
                </div>

                <div className="form-group">
                    <label htmlFor="client_name">Nome:</label>
                    <input
                        id="client_name"
                        name="client_name"
                        type="text"
                        placeholder="Digite o nome"
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="client_appellation">Sobrenome:</label>
                    <input
                        id="client_appellation"
                        name="client_appellation"
                        type="text"
                        placeholder="Digite o nome"
                        className="form-control"
                        required
                    />
                </div>
                                
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
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
                    <label htmlFor="tel">Telefone:</label>
                    <input
                        id="tel"
                        name="tel"
                        type="tel"
                        placeholder="Digite o seu telefone"
                        className="form-control"
                        required
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="cep">CEP:</label>
                    <input
                        id="cep"
                        name="cep"
                        type="text"
                        placeholder="Digite o seu CEP"
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="street">Endereço:</label>
                    <input
                        id="street"
                        name="street"
                        type="text"
                        placeholder="Digite o seu endereço"
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="number">Número:</label>
                    <input
                        id="number"
                        name="number"
                        type="text"
                        placeholder="Digite o seu número"
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="city">Cidade:</label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Digite a sua cidade"
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="city">Estado:</label>
                    <input
                        id="state"
                        name="state"
                        type="text"
                        placeholder="Digite a sua estado"
                        className="form-control"
                        required
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="open">Horário de abertura:</label>
                    <input
                        id="open"
                        name="open"
                        type="time"
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Dia de atendimento:</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="client">Veículo utilizado:</label>
                    <br></br> &nbsp; &nbsp;
                    <input 
                        type="checkbox" 
                        id="vehicle" 
                        name="vehicle"
                        value="truck" 
                    /> Caminhão
                    <br></br> &nbsp; &nbsp;
                    <input 
                        type="checkbox" 
                        id="vehicle" 
                        name="vehicle"
                        value="car" 
                    /> Carro
                    <br></br> &nbsp; &nbsp;
                    <input 
                        type="checkbox" 
                        id="vehicle" 
                        name="vehicle"
                        value="moto" 
                    /> Moto
                </div>

                <br></br>
                <button type="submit"> Cadastrar </button>
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
