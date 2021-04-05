//Função que adiciona itens na lista e atualiza no banco remoto

var estadoDoALuno=document.getElementById('slcEstado');
var municipioDoALuno=document.getElementById('slcMunicipio');
var escolaDoAluno=document.getElementById('slcEscola');

form.addEventListener('submit',() => {

    alert('Pronto! A sua lista foi cadastrada com sucesso!');
    
    db.collection('dadosEscola').doc(estadoDoALuno.value).collection('escolas').doc(escolaDoAluno.value).collection('Alunos').add({
            nome: form.nome.value,
            responsavel: form.responsavel.value,
            nascimento: form.nascimento.value,
            matricula: form.matricula.value,
            escolaridade: form.tipoDeEnsino.value,
            lista : {
                caderno1materia: form.caderno1materia.checked,
                caderno10materias: form.caderno10materias.checked,
                canetas: form.canetas.checked,
                lapis: form.lapis.checked,
                lapisDeCor: form.lapisDeCor.checked,
                tesoura: form.tesoura.checked,
                apontador: form.apontador.checked,
                borracha: form.borracha.checked,
                cola: form.cola.checked,
                mochila: form.mochila.checked
            }
    })
    // .then((docRef) => {
    //     docRef.collection('Lista').add({
    //         if (form.mochila.checked==true) {
    //             mochila: form.mochila.checked
    //         }
            
    //     });
    // })
});