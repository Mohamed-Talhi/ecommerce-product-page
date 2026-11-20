const courntPrise = document.getElementById('current-price');
const btnminus = document.getElementById('btn-minus');
const btnplus = document.getElementById('btn-plus');
const addtobagbtn = document.getElementById('add-to-bag-btn');
const qtyinput = document.getElementById('qty-input');



    const prixUnitaire = 499.99 ;

function calculerPrix(){
    let qte = parseInt(qtyinput.value);
    let total = (prixUnitaire *qte).toFixed(2);
    courntPrise.innerText = "$" + total ;
}

const qteSauvegardee = localStorage.getItem("rolex_qte");

if(qteSauvegardee !== null){
    qtyinput.value = qteSauvegardee;
    calculerPrix();
}

btnplus.addEventListener('click',() => {

    let qte = parseInt(qtyinput.value);
    qte = qte + 1;
    qtyinput.value = qte ;
    calculerPrix();

});


btnminus.addEventListener('click',() => {
    let qte = parseInt(qtyinput.value);
    if(qte > 1){
        qtyinput.value = qte - 1;
        calculerPrix();
    }


});
addtobagbtn.addEventListener('click', () => {
            let qteFinale = qtyinput.value;
            localStorage.setItem("rolex_qte",qteFinale);
});

