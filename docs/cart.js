// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];

var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  let checkoutAmount = document.getElementsByClassName("cart-total-price")[0].innerText;
  console.log(checkoutAmount)
  localStorage.setItem("checkoutAmount", checkoutAmount)

}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
}

// update cart 
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i]
    var price_item = cart_row.getElementsByClassName("cart-price ")[0]
    var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
    var price = parseFloat(price_item.innerText)
    var quantity = quantity_item.value
    total = total + (price * quantity)
  }


  document.getElementsByClassName("cart-total-price")[0].innerText = total;
}

// thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}


// Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement;
    var img = product.parentElement.getElementsByClassName("img")[0].src
    var title = product.getElementsByClassName("name")[0].innerText
    var price = product.getElementsByClassName("price")[0].innerText

    //Thêm sản phẩm vào cart
    addItemToCart(title, price, img)
    updatecart()

    //Thêm sản phẩm vào LocalStorage
    let productObject = {
      productImg: img,
      productTitle: title,
      productPrice: price
    }
    if (localStorage.productList) {
      productlistJS = JSON.parse(localStorage.getItem('productList'));
    } else {
      productlistJS = [];
    }
    productlistJS.push(productObject);
    localStorage.setItem("productList", JSON.stringify(productlistJS));
  })

}



function addItemToCart(title, price, img) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cart_title = cartItems.getElementsByClassName('cart-item-title')

  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }
  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
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
      <button class="btn btn-danger" type="button">Delete</button>
  </div>`








  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}


function refresh() {
  let cartPrices = document.getElementsByClassName("cart-price");
  let cartQuan = document.getElementsByClassName("cart-quantity-input");
  let cartPriceTotal = 0;
  for (i = 0; i < cartPrices.length - 1; i++) {
    price = Number(cartPrices[i + 1].innerHTML)
    quantity = cartQuan[i].value;
    cartPriceTotal = cartPriceTotal + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = cartPriceTotal;
  // console.log(a*b)
  // console.log(b)
}



