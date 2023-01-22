const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const buttonSave = document.querySelector('#button-save');
const buttonCancel = document.querySelector('#button-cancel');
const productList = document.querySelector('#productList')
const totalPrice = document.querySelector('#total')
let total = 0;

const createNewProduct = (name, price) => {
     const ioncard = document.createElement('ion-card');
    const newProductitem = document.createElement('ion-card-content');
    newProductitem.textContent = name + `: $` + price;
    ioncard.appendChild(newProductitem);
    productList.appendChild(ioncard);
};

const  clearlinput = () => {
    productName.vale = '';
    productList.value = '';
}

const presentAlert = () => {
    const alert = document.createElement('ion-alert');
    alert.header = 'invalid Data';
    alert.subHeader = 'plase verify yuors inputs';
    alert.message = 'inconrrect Name or price';
    alert.buttons = ['ok'];

    document.body.appendChild(alert);
    return alert.present();
}

const isEmpty = str => !str.trim().length;

buttonSave.addEventListener('click', () => {
    const name = productName.value;
    const price = productPrice.value;

    if ( isEmpty(price) || price <= 0 || isEmpty(price )) {
        presentAlert();
        return;
    }

    createNewProduct(name, price);
     total +=  +price;
     totalPrice.textContent = total;
    clearlinput();
})

buttonCancel.addEventListener('click', clearlinput);