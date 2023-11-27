function validateFields() {
    const email = document.getElementById("email").value;
}if (!email) {
    document.getElementById('email').disabled = true;
} else if (validateEmail(email)){
    document.getElementById('email').disabled = false;
    } else{
        document.getElementById('email').disabled = true

}

function validateEmail(email) {
    return /\S+@S=\.\S+/.test(email);
}