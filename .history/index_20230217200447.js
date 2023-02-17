const home = document.getElementById("home");
const gallery = document.getElementById("gallery");
const logIn = document.getElementById("login");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const message = document.getElementById("message");
const upload = document.getElementById("uploadButton");
const register = document.getElementById('register')
const registerButton = document.getElementById('registerBtn');



logoutButton.style.display = "none";
home.addEventListener("click", displayBlockHome);
function displayBlockHome() {
  home.style.display = "block";
  gallery.style.display = "none";
  logIn.style.display = "none";
}

gallery.addEventListener("click", displayBlockGallery);
function displayBlockGallery() {
  gallery.style.display = "block";
  home.style.display = "none";
  logIn.style.display = "none";
}

logIn.addEventListener("click", displayBlockLogin);
function displayBlockLogin() {
  logIn.style.display = "block";
  home.style.display = "none";
  gallery.style.display = "none";
}

function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  logoutButton.style.display = "block";
  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    localStorage.setItem("role", "admin");
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    logIn.style.display = "none";
    gallery.style.display = "none";
    home.style.display = "block";
  } else {
    alert("masukan username sebagai admin dan password sebagai admin 123");
    logoutButton.style.display = "none";
    logIn.style.display = "block";
    gallery.style.display = "none";
    home.style.display = "none";
  }
}
if (localStorage.getItem("role") == "admin") {
  home.style.display = "block";
  logIn.style.display = "none";
} else {
  logIn.style.display = "block";
}

function onLogout() {
  localStorage.clear();
  location.reload();
}
var input = document.getElementById("myFile");
var uploadButton = document.getElementById("uploadButton");
uploadButton.addEventListener("click", function () {
  for (var i = 0; i < input.files.length; i++) {
    var file = input.files[i];
    var reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem(file.name, e.target.result);
    };
    reader.readAsDataURL(file);
  }
});
uploadButton.addEventListener("click", uploadImgae);
function uploadImgae() {
  message.innerText = "foto berhasil di upload, silahkan refresh halaman"
}

var imageContainer = document.getElementById("imageContainer");

for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);

  if (key.endsWith(".jpg") || key.endsWith(".png") || key.endsWith(".gif")) {
    var img = document.createElement("img");
    img.src = localStorage.getItem(key);
    img.style.width = "600px";
    img.style.height = "auto";
    img.style.padding = "0 1rem";
    img.style.borderRadius = "5px";

    imageContainer.appendChild(img);
  }
}


register.style.display = "none"

function registerPage(){
  registerButton.style.display
}