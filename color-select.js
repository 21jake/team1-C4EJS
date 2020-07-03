//Lấy ảnh sản phẩm chính
var mainImg = document.getElementById('main-image');

//Lấy link gốc sản phẩm chính, sau đó dùng split để xử lý lấy text của link sản phẩm, sau đó thêm các định dạng để đổi màu (cần phải đặt tên theo định dạng)
var mainSource = mainImg.getAttribute('src');

let splitMainSource = mainSource.split(".")

//Nối link gốc với các màu sắc đặt tên ảnh
document.getElementById('blue-color').addEventListener('click', function() {
    mainImg.setAttribute('src', splitMainSource[0]+"-blue.jpg")
});
document.getElementById('grey-color').addEventListener('click', function() {
    mainImg.setAttribute('src', mainSource)
});
document.getElementById('green-color').addEventListener('click', function() {
    mainImg.setAttribute('src',splitMainSource[0]+"-green.jpg")
});
document.getElementById('red-color').addEventListener('click', function() {
    mainImg.setAttribute('src',splitMainSource[0]+"-red.jpg")
});
document.getElementById('yellow-color').addEventListener('click', function() {
    mainImg.setAttribute('src',splitMainSource[0]+"-yellow.jpg")
});
document.getElementById('blue-color-2').addEventListener('click', function() {
    mainImg.setAttribute('src',splitMainSource[0]+"-blue2.jpg")
});

// Đặt title theo tên sản phẩm
let productName = document.getElementById("product-name").innerHTML;
let productTitle = document.getElementById("product-page-title");
productTitle.innerHTML = productName;