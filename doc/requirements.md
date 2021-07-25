# Requisitos

## Tecnologia
* `Javascript` 
* [`Node.js v14.17.3 LTS`](https://nodejs.org/dist/latest-v14.x/docs/api/)
* [`ReactJS v17.0.2`](https://reactjs.org/versions)
* [`NextJS v11.0.1`](https://github.com/vercel/next.js/releases)
    * [Manual Setup](https://nextjs.org/docs#manual-setup)
    ~~~bash
    npm install next react react-dom    
    ~~~

---

Criação de uma lógica que faça com que o usuário que está acessando o sistema só possa acessar caso tenha um token de acesso válido (pode ser criado uma variável auxiliar simulando o token que o frontend receberia do backend)
                        

Criação de uma lógica que faça com que o usuário caso feche o navegador ainda possua sua sessão ativa impedindo a necessidade de fazer login novamente. 
 

## Tela de login
* email : string 
* senha : string

## Menu 

### Adicionar cliente - Formulário

* Tipo cliente : select 
    * CPF
    * CNPJ
* situação do cliente : radio
    * Ativo 
    * Inativo

* Dependende do Tipo Cliente:

| Tipo 	 |	CPF 	 | CNPJ          |
|:------:|:---------:|:--------------|
| Nome 	 | Cliente 	 | Fantasia      |
| Outro	 | Sobrenome | Razão Social  |
| Número | CPF		 | CNPJ          |


* Email:string
* Telefone:string

* CEP
* Rua
* Número
* Cidade
* Estado

* Horário de abertura da loja : tipo time
* Dia de atendimento : data 
* Veículo utilizado : checkbox
    * Caminhão
    * Carro
    * Moto


### Lista de clientes

* ID DO CLIENTE
* NOME FANTASIA ou NOME DO CLIENTE
* RAZÃO SOCIAL ou SOBRENOME DO CLIENTE
* TIPO DE PESSOA (jurídica ou física)
 