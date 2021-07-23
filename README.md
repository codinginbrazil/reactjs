# [ReactJS](https://reactjs.org/)
> [`Node.js v14.17.3`](https://nodejs.org/dist/latest-v14.x/docs/api/)

Biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. 
Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.


## Recomendação
* Aprendendo React ou criando um novo single-page app, use [Create React App](https://create-react-app.dev/).
Ambiente confortável para aprender React, e é a melhor maneira de começar um single-page application em React. 
Além de configurar seu ambiente de desenvolvimento para utilizar as funcionalidades mais recentes do JavaScript, ele fornece uma experiência de desenvolvimento agradável, e otimiza o seu app para produção.

* Fazendo um site renderizado no servidor (SSR) com Node.js, tente [Next.js](https://nextjs.org/).
Framework leve e popular para aplicações estáticas e renderizadas no servidor feito com React. 
Ele inclui soluções para estilização e roteamento prontas, e presume que esteja rodando Node.js como ambiente de servidor.

* Fazendo um site estático orientado a conteúdo, experimente [Gatsby](https://www.gatsbyjs.com/).
criar sites estáticos usando React. Ele permite usar componentes React, porém produzindo HTML e CSS pré-renderizado para garantir a velocidade mais rápida possível de carregamento.

* Montando uma biblioteca de componentes ou integrando com um código-base existente, veja Toolchains Mais Flexíveis.


## [Toolchains](https://reactjs.org/docs/create-a-new-react-app.html)

* Escalar para muitos arquivos e componentes.
* Usar bibliotecas de terceiros através do npm.
* Detectar erros comuns cedo.
* Edição em tempo real de CSS e JS em desenvolvimento.
* Otimizar a saída para produção

---

initial npm


Add JSX to a Project
~~~bash
	npm init -y \
	npm install babel-cli@6 babel-preset-react-app@3 \
    mkdir src \ 
    cd src \
    npx babel --watch src --out-dir . --presets react-app/prod
~~~

https://pt-br.reactjs.org/docs/add-react-to-a-website.html


## Referência

* [JUSTEN, William. NextJS, Gatsby ou Create React App? Entendendo os conceitos de SSR, SSG e SPA, 2020](https://willianjusten.com.br/nextjs-gatsby-ou-create-react-app-entendendo-os-conceitos-de-ssr-ssg-e-spa)