id = 0;
productList = document.getElementById("product-list");
productArray = JSON.parse(localStorage.getItem("productList"));
for (i = 0; i < productArray.length; i++) {
    title = productArray[i].productTitle
    image = productArray[i].productIMg
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
function remove(id) {
    document.getElementById(id).remove();
    productArray.splice(id,1);
    localStorage.setItem('productList', JSON.stringify(productArray))

}

