
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


//Armazena o valor do botão para ser usado na próxima página(renderização dinâmica)

const butSlc = document.getElementById("buttonQuery");
butSlc.addEventListener('click', () => {
    estado = document.getElementById("estadoSelect");
    console.log(estado.value)
    localStorage.setItem('estado', estado.value);
});

