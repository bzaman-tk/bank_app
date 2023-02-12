// all core js code wil be here
const signBtn = document.getElementById('sign_btn');
const loginBtn = document.getElementById('login_btn');
const email = document.getElementById('userEmail');
const userPass = document.getElementById('userPass');

//
// login step
// 
loginBtn.addEventListener('click', function(e){
    if (email.value === "" || userPass.value === "") {
        alert('All Field are requred!!');
        return;
    }
    const loclUser = localStorage.getItem(email.value);
    if (loclUser !== userPass.value) {
        alert('Enter Valid Email And Password');
        return;
    } else {
        sessionStorage.setItem("user", "true");
        window.location.href = "bank.html";
    }
});