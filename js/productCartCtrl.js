const minusBtn = document.querySelector('#minusBtn')
const plusBtn = document.querySelector('#plusBtn')
const pdQuantity = document.querySelector('#productQuantity')

minusBtn.addEventListener('click', () => {
    let quantity = parseInt(pdQuantity.innerHTML);
    if( quantity === 1){
        pdQuantity.innerHTML = 1;
    }else{
        pdQuantity.innerHTML = quantity - 1;
    }
})

plusBtn.addEventListener('click', () => {
    let quantity = parseInt(pdQuantity.innerHTML);
    if( quantity >= 1){
        pdQuantity.innerHTML = quantity + 1;
    }else{
        pdQuantity.innerHTML = 1;
    }
})
