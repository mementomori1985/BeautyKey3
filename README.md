# BeautyKey3

Primeiramente, é necessário entender que o projeto é composto por 05 pastas-raizes até o momento:
 
•	.Vscode – somente os logs da IDE utilizada (VSCode)
•	App – Nesta pasta estão as configurações do aplicativo em React Native, que é uma interface extra do usuário Cliente
•	Collections – Aqui estão as collections utilizadas para a construção base do banco beauty_key no MongoDB (banco de dados não-relacional orientado a objetos);
•	Coections.tests – Aqui estão alguns documentos no formato JSON que serviram para os testes no Insomnia API REST
•	Web – Todo o painel de controle do salão e o frontend também do colaborador estão nesta pasta, construído em React.js, Node.js e outras dependências.
•	WS (web service)  - Aqui está todo o backend, configuração das rotas e de banco de dados da aplicação, bem como a configuração dos serviços de API da Amazon IAM (Identity and Access Management) e do Pagarme (serviço de transações bancárias)
Algumas subpastas e arquivos importantes presentes no projeto nas pastas principais são:

1)	node_modules: O NODE.MODULES NÃO ESTÁ INSTALADO NAS pastas WS, WEB e APP, esta subpasta contém todas as dependências e subdependências listadas no arquivo package.json. 
Ela é gerada automaticamente pelo npm (Node Package Manager) quando você executa npm install. TODA VEZ QUE ELE É INSTALADO EM CADA PASTA, A APLICAÇÃO FICA PESADA.
 
2)	public: Presente na pasta WEB, esta subpasta contém os recursos (assets) estáticos do projeto, como o arquivo HTML, favicon e imagens.
 
3)	src: Presente nas pastas WS, WEB e APP, Esta é a pasta principal onde você encontrará todo o código-fonte do projeto. As seguintes subpastas e arquivos principais são:
a.	Presentes na pasta WS
 
•	Models: Presente na pasta WS, é a camada que possui a lógica da aplicação. Ele é o responsável pelas regras de negócios, persistência com o banco de dados e as classes de entidades.
 
•	Routes (Rotas) - Presente na pasta WS, as Routes definem os URLs que sua aplicação React irá usar para renderizar diferentes componentes. Elas são configuradas usando bibliotecas como o React Router. Cada rota tem um caminho (URL) e um componente associado.
 
•	Services (Serviços) -  Presente na pasta WS, os Services são responsáveis por interagir com APIs ou automatizações externas ou outras fontes de dados. Eles encapsulam as chamadas assíncronas e fornecem uma interface simples

b.	Presentes em WEB e APP:
 
•	Assets – arquivos estáticos da aplicação
•	Components: Esta pasta contém componentes React reutilizáveis que podem ser usados em todo o aplicativo.
•	Pages: Esta pasta contém as diferentes telas ou páginas do aplicativo.
•	Services: os serviços da aplicação
•	Store – as configurações de armazenamento no banco de dados
•	Styles: os estilos da aplicação

Os principais arquivos .js são:
•	Utils.js: Este arquivo, presente nas pastas WS, WEB e APP, contém funções utilitárias e auxiliares que podem ser usadas em todo o aplicativo. 
•	Reducers.js - Em um projeto React com Redux, os reducers são funções puras que atualizam o estado da aplicação em resposta a ações. Eles são responsáveis por receber a ação disparada e o estado atual, e retornar o novo estado da aplicação.
•	Sagas.js - As sagas são funções assíncronas que podem realizar efeitos como fazer chamadas à API, armazenar dados no localStorage ou disparar outras ações. Elas são gerenciadas pelo Redux Saga, uma biblioteca que facilita a criação e o gerenciamento de sagas.
•	databases.js – Configuração do banco de dados do projeto em JavaScript
•	App.js: Este é o componente principal do aplicativo, responsável por renderizar as diferentes telas ou páginas.
•	Index.js: Este é o ponto de entrada do aplicativo, responsável por renderizar o componente App.
4	Dependências já instaladas no projeto
Basta ir no arquivo package.json das pastas WS, WEB e APP para ver as dependências instaladas
1.	Pasta WS
2.	Pasta WEB
3.	Pasta APP

Principais COMANDOS  do NPM no terminal:
Primeiro, o terminal da pasta que se quer trabalhar deve ser aberto (ou o CD deve ser usado para ir até a pasta). Então pode-se dar o seguintes com o npm :
o	Gerenciamento de dependências: npm install  - sem pacote. Este comando em específico instala TODAS as dependências listadas no arquivo package.json
o	Instalação de pacotes: npm install < nome do pacote >
o	Atualização de pacotes: npm update < nome do pacote >
o	Remoção de pacotes: npm uninstall < nome do pacote >
o	Publicação de pacotes: npm publish
Neste exemplo abaixo, queremos instalar o pacote node-modules na pasta WS:
 
O Yarn TAMBÉM é um gerenciador de pacotes alternativo para projetos JavaScript. Ele se baseia na infraestrutura do NPM, mas oferece algumas vantagens adicionais, como:
o	Instalação mais rápida: 
o	Determinismo: O Yarn garante que a mesma versão de um pacote seja instalada em todas as máquinas, independentemente do ambiente.
o	Gerenciamento offline: O Yarn pode ser usado para instalar pacotes offline
OBS: O NODE.JS DEVE SER INSTALADO NO SISTEMA E AS VARIÁVEIS DE AMBIENTE DEVEM SER CONFIGURADAS (NO CASO DO WINDOWS), ALÉM DE SE CONFIGURAR AS POLÍTICAS DE EXECUÇÃO DO POWERSHELL DO WINDOWS:
https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4 
O Yarn deve ser instalado primeiramente através do comando:
npm install -g  yarn
Primeiro, o terminal da pasta que se quer trabalhar deve ser aberto (ou o CD deve ser usado para ir até a pasta). Então pode-se dar o seguintes com o yarn:
•	Gerenciamento de dependências: yarn install. Esse comando instala TODAS as dependências listadas no arquivo yarn.lock 
•	Instalação de pacotes: yarn add < nome do pacote> 
•	Atualização de pacotes: yarn upgrade < nome do pacote> 
•	Remoção de pacotes: yarn remove < nome do pacote> 
•	Publicação de pacotes: yarn publish


O Projeto apresenta algumas deficiências, a saber:
 - Deve haver um conflito de dependências em todas as pastas, uma vez que o node.modules foi atualizado em todos os módukos
 - algumas declarações em variáveis nas pastas WEB e APP ficaram desatualizadas depois que o node.modules foi atualizado.
 - O frontend carrega, mas não conversa com o backend, não armazenando os dados. O backend conecta, todos os POSTS foram testados e funcionam, mas os GETS, PUTS e DELETES apresentam algum problema que não sabemos resolver.
 - Na parte de WEB, quando roda-se a aplicação, não se consegue preencher os campos dos colaboradores ao se gerar um novo colaborador.
 - As APIS do AWS IAM e do Pagarme estão desativadas. Novos links de API deven ser gerados.
 - Os scripts no package.json na pasta APP não iniciam ou funcionam.
 
