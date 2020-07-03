//Sign Up - Lưu thông tin vào SessionStorage trên Chrome
function signUp() {
    let newUsername = document.getElementById('newUsername').value;
    let newPassword = document.getElementById('newPassword').value;

    let newUser = {
        name: newUsername,
        password: newPassword
    }

    if (sessionStorage.userList) {
        userJS = JSON.parse(sessionStorage.getItem('userList'));
    } else {
        userJS = [];
    }

    userJS.push(newUser);
    sessionStorage.setItem("userList", JSON.stringify(userJS));
    userArray = sessionStorage.getItem("userList")
    console.log("userArray: ", (userArray));

    document.getElementById('signUpMess').innerHTML = "Successfully Registered! <br>"
    document.getElementById("signUpMess2").style.color = "grey"
    document.getElementById("signUpMess2").style.display = "block"

    setTimeout(function () {
        window.location.href = "login.html";
    }, 5000);
}
//Login - Kiểm tra thông tin nhận vào Input có giống với thông tin trong SessionStorage
let check = 0;
function logIn() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    userArray = JSON.parse(sessionStorage.getItem("userList"));
    console.log(userArray)


    for (i = 0; i < userArray.length; i++) {
        if (username == userArray[i].name && password == userArray[i].password) {
            check = 1;
            document.getElementById('alert').style.display = "block"
            document.getElementById('alert').innerHTML = "You will be redirected to the homepage"
            logedUsername = userArray[i].name;
            sessionStorage.setItem('logedUsername', logedUsername);

        }
        else {
            document.getElementById('alert').style.display = "block";
            check = 0;
            sessionStorage.setItem("check", check);
        }
        if (check == 1) {
            setTimeout(function () {
                window.location.href = "index.html";
            }, 3000);
            sessionStorage.setItem("check", check);
        }
    }


    //Lưu các trạng thái đăng nhập (Đã đăng nhập -> hiện tên người dùng -> Xóa nút Login) vào SessionStorage để dữ liệu không bị thay đổi trên các trang HTML
}
let displayLogin = JSON.parse(sessionStorage.getItem("check"));
let displayUser = (sessionStorage.getItem("logedUsername"));
console.log(displayLogin)
let userIdenity = document.getElementById('userIdentity');
let cartIcon = document.getElementById('cart-icon');
let logOutIcon = document.getElementById("logOutIcon");
if (displayLogin == 1) {
    cartIcon.style.display = "none";
    userIdenity.innerHTML = displayUser;
} else {
    logOutIcon.style.display = "none";
    cartIcon.style.display = "inline";

}
//Đăng xuất - Xóa các trạng thái đăng nhập trên SessionStorage (Hiển thị lại Nút Login, Xóa nút LogOut)
function logOut() {
    console.log(displayLogin)
    displayLogin = 0
    sessionStorage.setItem("check", displayLogin);
    sessionStorage.removeItem("logedUsername");
    window.location.href = "index.html";
}
