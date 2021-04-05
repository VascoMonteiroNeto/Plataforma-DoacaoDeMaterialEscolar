const escolaList = document.querySelector('#escola-list');
escolaList.textContent = localStorage.getItem('escola');
escolaList.style["font-size"] = "150%";

function renderAlunos(doc){
    
    // console.log(doc.data().escolaridade);
    
    // // let div1 = document.createElement('div');
    // // div1.className = "contentResBusca";
    // let div2 = document.createElement('div');
    // div2.className = "cardPerfilAluno";
    // let img = document.createElement('img');
    // img.src = "imgs/alunoIcon.png";
    // img.setAttribute("id", "alunoImg");
    // let div3 = document.createElement('div');
    // div3.className = "textoInfo";
    // let escola = document.createElement('span');
    // let endereco = document.createElement('span');
    // escola.className='textoInfo';

    // escola.textContent = doc.data().nome;
    // endereco.textContent = doc.data().escolaridade;

    // div2.appendChild(img);
    // div3.appendChild(escola);
    // div3.appendChild(endereco);
    
    // escolaList.appendChild(div2);
    // div2.appendChild(div3);

    // div2.onclick = function () {
    //     localStorage.setItem('aluno' , escola.textContent);
    //     console.log(escola.textContent);
    //     window.location.href = 'resultadoDaBuscaPerfilAluno.html';
    // };
    
}

search1=localStorage.getItem('estado');
console.log(search1);
search2=localStorage.getItem('escola');
console.log(search2);


db.collection('dadosEscola').doc(search1).collection('escolas').doc(search2).collection('Alunos').get().then((snapshot) => {
    console.log("aqui");
        snapshot.docs.forEach((doc) => {
            renderAlunos(doc);
        })
    })