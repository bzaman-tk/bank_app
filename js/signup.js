const signBtn = document.getElementById('sign_btn');
const loginBtn = document.getElementById('login_btn');
const email = document.getElementById('userEmail');
const email2 = document.getElementById('userEmail2');
const userPass = document.getElementById('userPass');
const userPass2 = document.getElementById('userPass2');

//
// Sign Up Step
// 
signBtn.addEventListener('click', function(e){
    if (email.value === "" || email2.value === "" || userPass.value === "" || userPass2.value === "") {
        alert('All Field are requred!!');
        return;
    }
    if (email.value !== email2.value) {
        alert('Enter Same Email ID');
        email.value = "";
        email2.value = "";
        return;
    }
    if (userPass.value !== userPass2.value) {
        alert('Enter Same Password');
        userPass.value = "";
        userPass2.value = "";
        return;
    }

    window.localStorage.setItem(email.value, userPass.value);
    window.location.href = "/index.html";
});