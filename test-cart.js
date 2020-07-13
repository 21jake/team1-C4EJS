//Thêm sản phẩm vào HTML từ LocalStorage
id = 0;
productList = document.getElementById("product-list");
productArray = JSON.parse(localStorage.getItem("productList"));
mainLength = productArray.length;
for (i = 0; i < productArray.length; i++) {
    title = productArray[i].productTitle
    image = productArray[i].productImg
    price = productArray[i].productPrice
    productData = `<div id=${id}> 
        <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src=${image}  style="width: 100; height: 100;">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <form>
            <select id="sizeSelect" class="mr-3">
                <option value="1">S</option>
                <option value="2">M</option>
                <option value="3">L</option>
                <option value="4">XL</option>
            </select>
        </form>
            <button class="btn btn-danger" onclick="remove(${id})">Delete</button>
        </div>
        </div>`
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

