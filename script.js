let name = document.getElementById("name");
let message = document.getElementById("message");
let callButton = document.getElementById("call");
let mailButton = document.getElementById("mail");
let chatButton = document.getElementById("chat");



callButton.addEventListener("click", () => {
    window.location.href = "tel:+910000000000";
});

mailButton.addEventListener("click", () => {
    window.location.href = `mailto:demo30@gmail.com?subject=Hello I'm ${name.value}&body=${message.value}`;
});

chatButton.addEventListener("click", () => {
    window.location.href = `https://wa.me/+910000000000?text=${message.value}`;
});

