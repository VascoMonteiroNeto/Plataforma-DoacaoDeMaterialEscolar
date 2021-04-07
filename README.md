# HackathonFCamara-Squad26

## Instruções para deploy da aplicação:
### Como não possui servidor ou backend propriamente dito, é só iniciar o "index.html" em um server local, como o plugin Live Server do VSCode ou análogo.
### Também funciona se for aberto direto no navegador de sua preferência.

### A integração com o banco de dados(Cloud Firestore) na nuvem foi feita toda através do código javascript, onde eles são inseridos e atualizados em tempo real.

### 1ª Observação: Algumas funcionalidades não foram implementadas, como o cadastro de perfil por exemplo.

### 2ª Observação: Por estar usando a versão gratuita do Firestore(onde há uma limitação no número de acessos diários ao banco), foram inseridas no banco apenas 4 escolas divididas entre dois município de dois estados diferente, porém a estrutura do banco é totalmente escalável, onde podemos inserir os dados das +170.000 escolas públicas de todos os municípios das 27 UF brasileiras retirados do portal do INEP. Vide o script auxiliar abaixo.

Link do código auxiliar usado para criação do banco no Cloud Firestore.
https://github.com/VascoMonteiroNeto/codAuxiliarHackatonFCamara
