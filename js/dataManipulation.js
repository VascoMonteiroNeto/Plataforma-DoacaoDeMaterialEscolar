const form = document.querySelector('#cadastro-aluno-form');

//FUNÇÕES QUE MUDAM AUTOMATICAMENTE O MUNICIPIO/ESCOLA DE ACORDO COM O ESTADO/MUNICIPIO SELECIONADO

function populateMun(est, mun){
    var est = document.getElementById(est);
    var mun = document.getElementById(mun);

    mun.innerHTML="  ";

    if(est.value =='MG'){
        var optionArray = ["|","Uberaba|Uberaba"];
    } else
    if(est.value=='GO'){
        var optionArray = ["Selecione o município|Selecione o município", "Pirenópolis|Pirenópolis"];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		mun.options.add(newOption);
    }
    
}

function escolasSelector(doc, esc){

    var newOption = document.createElement("option");
	newOption.value = doc.id;
	newOption.innerHTML = doc.id;
    esc.options.add(newOption);
}

function populateEscola(mun, esc){

    console.log('aaaaa');
    var esc = document.getElementById(esc);
    var mun = document.getElementById(mun);

    esc.innerHTML="  ";

    if(mun.value =='Pirenópolis'){
        db.collection('dadosEscola').doc('GO').collection('escolas').get().then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                escolasSelector(doc, esc);
            })
        })
    } else
    if(mun.value=='Uberaba'){
        db.collection('dadosEscola').doc('MG').collection('escolas').get().then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                escolasSelector(doc, esc);
            })
        })
    }
}


//Função que adiciona itens na lista e atualiza no banco remoto

var estadoDoALuno=document.getElementById('slcEstado');
var municipioDoALuno=document.getElementById('slcMunicipio');
var escolaDoAluno=document.getElementById('slcEscola');

form.addEventListener('submit',() => {
    alert('Pronto! A sua lista foi cadastrada com sucesso!');
    console.log(form.mochila.checked);
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

