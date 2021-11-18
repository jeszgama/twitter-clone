# Criando projeto

 `cd pastaprojetos`

 -- Comando para criar o projeto:

 - `npx create-react-app nomedoprojeto --template=typescript`

 ou se estiver instalado o yarn: 

 - `yarn create-react-app nomedoprojeto --template=typescript`

-- Para rodar a aplicação:

 - `yarn start`

-  ou pode entrar no package.json e ver os scripts, o comando que estiver lá deverá ser usado para executar a aplicação

<hr>

### Extensões:

- colorize, vscode-styled-components, rocketseat react js, rocketseat react native, bracket pair colorizer, prettier

<hr>

### Configurando ambiente:

criar arquivo .prettierrc

criar arquivo .editorconfig

na pasta src deixar apenas os arquivos:

- App.tsx, index.tsx e react-app-env.d.ts

<hr>

### Instalando dependecias:

`yarn add styled-components styled-icons`

`yarn add react-sticky-box`

-- dependencias de desenvolvimento:

`yarn add -D @types/styled-components`

 <hr>

 no arquivo tsconfig.json: 

 - `"isolatedModules": false,`

 <hr>

 ### Configurando aplicação:

 Criar pasta styles para inserir o GlobalStyles.ts

 Dentro da pasta src: 

 - criar pasta components

 - criar Layout e dentro dele uma index.tsx e um styles.ts


