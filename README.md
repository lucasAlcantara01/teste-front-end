# Econverse Front-End Test

Este é o repositório do projeto desenvolvido para o teste de Desenvolvedor Front-End da Econverse. A aplicação consiste em uma vitrine virtual responsiva, consumindo dados de uma API (JSON) e seguindo o layout proposto.

## Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e boas práticas:

- **React (v19)**: Biblioteca principal para construção da interface de usuário.
- **TypeScript**: Tipagem estática para maior segurança e prevenção de bugs.
- **Vite**: Ferramenta de build super rápida para desenvolvimento local.
- **SASS / SCSS Modules**: Para estilização modularizada, utilizando a metodologia BEM e evitando vazamento de escopo de CSS.
- **React Query (@tanstack/react-query)**: Para chamadas à API.

## Como executar o projeto

Para compilar e rodar o projeto localmente, você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

Siga os passos abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/lucasAlcantara01/teste-front-end.git
```

2. Acesse a pasta do projeto:
```bash
cd teste-front-end-econverse
```

3. Instale as dependências:
```bash
pnpm install
# ou npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
pnpm run dev
# ou npm run dev
```

5. O projeto estará rodando. Acesse em seu navegador a URL informada no terminal (geralmente `http://localhost:5173`).

## Instruções Originais do Teste

### Vem ser #Econverse!

Segue abaixo as instruções para a execução do teste.

### Instruções
- Faça um fork desse projeto para a sua conta pessoal do GitHub.
- Desenvolva a página conforme as **Especificações Técnicas** 
- Crie um README com as instruções para compilar, testar e rodar o projeto.
- O link do repositório deverá ser enviado para o e-mail julia.gardiano@econverse.com.br com o título **Teste Vaga FrontEnd**

### Especificações Técnicas
- Desenvolver a pagina em React e TypeScript conforme o [layout](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1). Para conseguir pegar os elementos do Figma, basta copiar o layout para sua conta que terá acesso de edição.
- Montar a [vitrine](https://app.econverse.com.br/teste-front-end/junior/tecnologia/layout/vitrine-produtos.png) de produtos consumindo as informações dos produtos em json atraves desse [Link](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json).
- Desenvolver a interação ao clicar em um produto conforme layout. A interação consiste em abrir um modal com as principais informações do produto presente no arquivo [JSON](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json) conforme o produto que clicar.
- Utilizar Pré-processador Sass, Less ou Stylus.
- Respeitar o Layout pixel a pixel, tamanho das fontes, cores e botões.
- Não Utilizar bibliotecas UI como Bootstrap, Foundation, ou afins.

### Pontos Extras
- Utilizar Boas práticas de SEO
- Uso de HTML semântico

### O que avaliaremos em seu teste
- Organização do projeto
- Lógica do código
- Componentização
- Alcance dos objetivos propostos

**Boa sorte! ;)**
