//Thêm sản phẩm vào HTML từ LocalStorage
id = 0;
productList = document.getElementById("product-list");
productArray = JSON.parse(localStorage.getItem("productList"));
mainLength = productArray.length;
for (i = 0; i < productArray.length; i++) {
    title = productArray[i].productTitle
    image = productArray[i].productImg
    price = productArray[i].productPrice

    productData = `<li id=${id}>
        <span>${id}</span>
        <img src=${image}  style="width: 150px; height: 100px;">
            <span>${title}</span>
            <span>${price}</span>
            <button onclick="remove(${id})">Delete</button>
            
        </li>`
    productList.innerHTML += productData;
    id++;
}
//Arrray này cố định để lưu tên sản phẩm
//Cần một Array cố định vì Array sản phẩm sẽ thay đổi liên tục mỗi khi remove sản phẩm
productNameArray = [];
for (i=0;i<mainLength;i++) {
    productName = productArray[i].productTitle;
    productNameArray.push(productName);
}
//Xóa sản phẩm trên HTML và cả LocalStorage
function remove(id) {
    document.getElementById(id).remove();
    delName = productNameArray[id].productTitle;
    let delIndex;
    for (i = 0; i <mainLength; i++) {
        if (productNameArray[i] == delName) {
            delIndex = productArray.indexOf(productArray[i])
        }
    }
    productArray.splice(delIndex,1);    
    localStorage.setItem('productList', JSON.stringify(productArray))
}

