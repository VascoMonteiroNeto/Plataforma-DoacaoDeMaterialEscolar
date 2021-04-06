// const escolaList = document.querySelector('#escola-list');
// escolaList.textContent = localStorage.getItem('escola');
// escolaList.style["font-size"] = "150%";



function renderPerfil(doc){
    var nome = document.getElementById('nomeDoAluno');
    var responsavel = document.getElementById('responsavel');
    var escolaridade = document.getElementById('escolaridade');    
    console.log(doc.data().escolaridade);
    
    console.log(doc.data().lista);

    nome.textContent = 'Nome do Aluno: ' + doc.data().nome;
    responsavel.textContent ='Responsável: ' + doc.data().responsavel;
    escolaridade.textContent = 'Escolaridade: ' + doc.data().escolaridade;

    let div1 = document.createElement('li');
    var l = doc.data().lista;
    // var elementos = [['apontador',l.apontador], 
    //                 ['borracha',l.borracha],
    //                 ['caderno10materias', l.caderno10materias],
    //                 ['caderno1materia',l.caderno1materia],
    //                 ['canetas',l.canetas],
    //                 ['cola',l.cola],
    //                 ['lapis',l.lapis],
    //                 ['lapisDeCor',l.lapisDeCor],
    //                 ['mochila',l.mochila],
    //                 ['tesoura',l.tesoura]];
    
    const elementos = {Apontador : l.apontador,
        'Borracha' : l.borracha,
        'Caderno 1 matéria - 80 folhas' : l.caderno10materias,
        'Caderno 10 matérias - 200 folhas' : l.caderno1materia,
        'Kit de canetas hidrográficas(5 unidades)' : l.canetas,
        'Cola branca' : l.cola,
        'Kit de lápis de escrever(5 unidades)' : l.lapis,
        'Caixa de lápis de cor' : l.lapisDeCor,
        'Mochila' : l.mochila,
        'Tesoura sem ponta' : l.tesoura };
 var lista = document.getElementById("lista");
    for (const prop in elementos) {
        console.log(elementos[prop]);
        if (elementos[prop] == true){
            let div2 = document.createElement('li');
            div2.textContent = prop;
            lista.appendChild(div2);
        };
      }
    
    console.log(elementos[1]);
    
    
}

search1=localStorage.getItem('estado');
search2=localStorage.getItem('escola');
nomeAluno=localStorage.getItem('aluno');
console.log(nomeAluno);

db.collection('dadosEscola').doc(search1).collection('escolas').doc(search2).collection('Alunos').where("nome", "==", nomeAluno).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        renderPerfil(doc);
    });
})
