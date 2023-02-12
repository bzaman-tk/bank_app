//
if (!sessionStorage.getItem('user')) {
    window.location.href = 'index.html';
}

const balance = document.getElementById('balance');
const dipositeAmmount = document.getElementById('dipositeAmmount');
const withdrawAmmount = document.getElementById('withdrawAmmount');
const dipositeBtn = document.getElementById('dipositebtn');
const withdrawBtn = document.getElementById('withdrawbtn');

dipositeBtn.addEventListener('click', function () {
    if (isNaN(document.getElementById('diposite').value) || document.getElementById('diposite').value == ""){
        alert('only numbers!!');
        document.getElementById('diposite').value = '';
        return;
    } 
    let newBalance = Number.parseFloat(document.getElementById('diposite').value) + Number.parseFloat(balance.innerText);
    balance.innerText = newBalance;
    dipositeAmmount.innerText = Number.parseFloat(dipositeAmmount.innerText) + Number.parseFloat(document.getElementById('diposite').value);
    document.getElementById('diposite').value = "";
});

withdrawBtn.addEventListener('click', function () {
    if (isNaN(document.getElementById('withdraw').value) || document.getElementById('withdraw').value == ""){
        alert('only numbers!!');
        document.getElementById('withdraw').value = '';
        return;
    } 
    let newWithdraw = Number.parseFloat(withdrawAmmount.innerText) + Number.parseFloat(document.getElementById('withdraw').value);
    withdrawAmmount.innerText = newWithdraw;
    balance.innerText = Number.parseFloat(balance.innerText) - Number.parseFloat(document.getElementById('withdraw').value);
    document.getElementById('withdraw').value = "";
});