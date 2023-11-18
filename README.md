
<!--  docs: update Readme   -->



<!-- VISUALIZAR NO README VSCODE  CTRL + K  V -->

<!-------------------------------------------------------------------->
<!-- COMO CONSTRUIR BADGES ---------
<!--------------------------------------------------------------------
https://www.youtube.com/watch?v=cRoBt6AZgjc
https://dev.to/envoy_/150-badges-for-github-pnk

    BUILD 
      https://shields.io
    ICONS
    https://simpleicons.org/?q=react

     EXEMPLO
     <a href="https://devdigoarthur.notion.site/Map-a87c73417a064372b122bf448f4c6ed4"> ![Alt ou título da imagem](https://img.shields.io/badge/-JavaScript-/?logo=JavaScript&logoColor=white&color=yellow)<a/>

# JavaScript - Nome que aparece na Bag
# logo=JavaScript - Muda a logo vide <https://simpleicons.org/?q=react>
# color=yellow - Define a cor da bag vide <https://shields.io>
# logoColor=white - Define a cor do icone
-->







<!------------------------------------ LANGUAGE BUTTONS-->
<!--
<div align="right">
<a href="https://github.com/DIGOARTHUR/github-automated-repos#readme">
    <img  height="35" src="https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/257623321-95c81f57-b751-4956-b0ab-7a804ae44506.svg" alt="language_USA" border="0">
<a/>
<br/>
<a href="https://github.com/DIGOARTHUR/github-automated-repos/blob/main/README_PT.md">
<img  alt="language_Brazil"  height="35" src="https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/277121999-ebbd8cff-f85a-49a6-aa6b-acd3fde2adb8.svg">
<a/>

</div>
-->


<!-------------------------------------------------------------------->
 <!------------------------------------BANNER PROJECT----------------->
<!-------------------------------------- 280 x 1400 ------------------------------>







<h1 align="center">
  Construa seu pacote/biblioteca NPM
</h1>

<p align="center">
  <!-------------------------------------------------------------------->
  <!------------------------------------PROJECT ICON-------------------->
  <!-------------------------------------------------------------------->
  <img height="200px" alt="bashftreactgit" title="bashftreactgit" src="https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/283223606-f9bea4a6-699c-4e7b-8d9a-ca968fb017c0.svg" />
  <br>
  <br>
  <i>De forma fácil e prática! Utilize Javascript <img height="15px" alt="bashftreactgit" title="bashftreactgit" src="https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/283226388-6bd63b03-9906-4da0-8a4b-d06c900e97b1.svg" /> / Typescript <img height="15px" alt="bashftreactgit" title="bashftreactgit" src="https://github.com/DIGOARTHUR/how-to-build-NPM-package/assets/59892368/6f5dc450-35f9-47b3-8da1-74223764fa07.svg" /> e React <img height="15px" alt="bashftreactgit" title="bashftreactgit" src="https://github.com/DIGOARTHUR/how-to-build-NPM-package/assets/59892368/d0e89ec9-e557-40e8-842b-e817af6df9b7.svg" /> para criar funções, componentes, hooks e etc... </i>
	

  <br>
<div align="center">


</div>
</p>

<h1 align="center">

</h1>

<!-------------------------------------------------------------------->
 <!------------------------------------BADGES PROJECT  ---------------->
 <!-------------------------------------------------------------------->

  ![GitHub last commit](https://img.shields.io/github/last-commit/digoarthur/how-to-build-NPM-package
)
  ![GitHub](https://img.shields.io/github/license/digoarthur/how-to-build-NPM-package
)
  
  
<!-------------------------------------------------------------------->
 <!------------------------------------STACKS && TOOLS --------->
  <!-------------------------------------------------------------------->
  

  
  
<!-------------------------------------------------------------------->
<!------------------------------------SUMMARY------------------------->
<!-------------------------------------------------------------------->
<p align="center">
  <a href="https://github.com/DIGOARTHUR/how-to-build-NPM-package/#--sobre-a-aplicação">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/DIGOARTHUR/how-to-build-NPM-package/#--comandos"> Configurando Ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/DIGOARTHUR/how-to-build-NPM-package/#-rodando-a-aplicação"> Construindo Pacote</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/DIGOARTHUR/how-to-build-NPM-package/#-rodando-a-aplicação"> Testando Pacote - LOCAL</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/DIGOARTHUR/how-to-build-NPM-package/#-rodando-a-aplicação"> Deploy NPM</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/DIGOARTHUR/how-to-build-NPM-package/#-rodando-a-aplicação"> Testando Pacote - REMOTO</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>  

   <!-------------------------------------------------------------------->
   <!------------------------------------DESCRIPTION--------------------->
   <!---write here : talk a little about project: what's does, example.  -->
   
# <img  alt="skills"  width="40" height="40" src="https://user-images.githubusercontent.com/59892368/148622497-164365e8-f6b0-4f40-bc75-a0ed4da6059b.png">  Sobre a aplicação 
---
> Teve uma ideia de funcionalidade super interessante, quer colocar em prática e disponibilizar para a comunidade usar? A plataforma NPM te dá essa possibilidade. Neste repositório
> darei os passos para a construção do seu `pacote`/`biblioteca` para que possa criar suas `Funções`, `Componentes`,`Hooks`  etc, e mostrar para o Mundo! Passo a passo de forma prática e clara.

---

  <br>   <br>  

 <!-------------------------------------------------------------------->
  <!------------------------------------CONTENT------->
  <!-------------------------------------------------------------------->
  
# <img  alt="skills"  width="40" height="40" src="https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/265221445-3a17120c-8847-4987-95ba-2014dc8d2e5f.png">  Configurando Ambiente


  
## `1.` git init

para inicializar o arquivo (`.git`) de versionamento GIT

```powershell
git init
```
## `2.` npm init 
para inicializar o arquivo `package.json`

```powershell
npm init
```
- **_package name_**: insira aqui o nome do seu projeto. ( todas letras minúsculas)

- **_version_**: a versão inicial é a 1.0.0 (pode deixar a que estiver)

- **_description_**: descreva resumidamente sobre o que é o seu projeto, do que se trata.

- **_entry point_**: nomear o arquivo principal, o arquivo que quando for feita a importação da sua bibilioteca os arquivos serão localizados nele. Pode nomear /src/index.js (caso use Javascript) ou /src/index.ts (caso use Typescript)

- **_test command_**: iremos configurar em outra etapa, deixe em branco.

- **_git repository_**: coloque aqui a URL do repositório criado lá no GitHub para este projeto 

- **_keywords_**: coloque aqui separado por virgulas, palavras chaves que tenha relação com seu projeto.

- **_author_**: insira seu nome, apelido…

- **_license_**: nome da licença que dá direito a cópia, reprodução, melhorias etc… Pode colocar MIT.