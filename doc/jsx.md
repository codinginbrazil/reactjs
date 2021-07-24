# Add JSX to a Project
~~~bash
    # initial npm
	npm init -y \
	npm install babel-cli@6 babel-preset-react-app@3 \
    mkdir src \ 
    cd src \
    npx babel --watch src --out-dir . --presets react-app/prod
~~~


## Referência
* [Add react to a website](https://reactjs.org/docs/add-react-to-a-website.html)
