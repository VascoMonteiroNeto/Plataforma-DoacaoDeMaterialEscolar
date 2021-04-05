const escolaList = document.querySelector('.contentResBusca');

function renderEscolas(doc){
    let div1 = document.createElement('div');
    // div1.className = "contentResBusca";
    let div2 = document.createElement('div');
    div2.className = "boxImage";
    let img = document.createElement('img');
    img.src = "imgs/escolaIcon.png";
    img.className = 'escolaImg';
    let div3 = document.createElement('div');
    div3.className = "textoInfo";
    let escola = document.createElement('span');
    let endereco = document.createElement('span');
    escola.className='textoInfo';

    // ul.setAttribute('data-id', doc.id);
    escola.textContent = doc.data().escola;
    endereco.textContent = doc.data().endereco;

    console.log(escola.textContent)
    div2.appendChild(img);
    div3.appendChild(escola);
    div3.appendChild(endereco);
    
    escolaList.appendChild(div2);
    div2.appendChild(div3);
    
    

}

search='MG'
db.collection('dadosEscola').doc(search).collection('escolas').get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            renderEscolas(doc);
        })
    })