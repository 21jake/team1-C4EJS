let listProduct = [
  {
      name: 'Nike Air Zoom Pegasus',
      price: 240,
      image: 'img/newarrivals/na1.jpg'
  },
  { 
  name: 'Nike Joyride Dual Run',
  price: 300,
  image: 'img/newarrivals/na2.jpg'
},
{
  name: 'ADDIDAS ULTRABOOST 20',
  price: 355,
  image: 'img/newarrivals/na3.jpg'
},
{
  name: 'BALENCIAGA SPEED CLEAR SOLE',
  price: 440,
  image: 'img/newarrivals/na4.jpg'
},
{
  name: 'DAYMASTER SNEAKERS IN STRETCH',
  price: 340,
  image: 'img/newarrivals/na5.jpg'
},
{
  name: 'NS1 SNEAKERS IN MIXED MATERIALS',
  price: 400,
  image: 'img/newarrivals/na6.jpg'
},
{
  name: 'MIAMI SNEAKERS IN CALFSKIN NAPPA',
  price: 410,
  image: 'img/newarrivals/na7.jpg'
},
{
  name: 'MULTI-COLORED SUPER KING SNEAKERS',
  price: 490,
  image: 'img/newarrivals/na8.jpg'
}

]
function sortAscen(){
  
    for(let i = 0; i < listProduct.length - 1; i++){
      for(let j = listProduct.length - 1; j > i; j--){
        if(listProduct[j].price < listProduct[j-1].price){
          let t = listProduct[j];
          listProduct[j] = listProduct[j - 1];
          listProduct[j - 1] = t;
        }
      }
   }
    
   let html = document.getElementById('list')
    while (html.firstChild) {
    html.removeChild(html.firstChild);
 }
    for (var d = 0; d <listProduct.length; d++)  {
       console.log(listProduct)
 html.innerHTML += ` <div class="col-md-4 col-lg-3">
 <div class="card padding">
     <a href="new arrival 1 - detail.html" class="product-link"><img class="product-image w-100" src="${listProduct[d].image}" alt="" class="w-100"></a>
     <div class="card-body">
         <a href="new arrival 1 - detail.html" class="product-link2">
             <h4 class="card-title product-name">${listProduct[d].name}</h4>
             </h4>
         </a>
         <p class="card-text lead">Price: $<span class="price-tag">${listProduct[d].price}</span></p>
         <a href="#"><button type="button" class="btn btn-primary">Add to cart</button></a>
     </div>
 </div>
</div>`
 }
}

function sortDescen(){
  
  for(let i = 0; i < listProduct.length - 1; i++){
    for(let j = listProduct.length - 1; j > i; j--){
      if(listProduct[j].price > listProduct[j-1].price){
        let t = listProduct[j];
       listProduct[j] = listProduct[j - 1];
        listProduct[j - 1] = t;
      }
    }
  }
  
  let html = document.getElementById('list')
 while (html.firstChild) {
  html.removeChild(html.firstChild);
}
  for (var d = 0; d <listProduct.length; d++)  {
   console.log(listProduct)
 html.innerHTML += `<div class="col-md-4 col-lg-3">
<div class="card padding">
   <a href="#"><img  src="${listProduct[d].image}"" class="w-100 img"  ></a>
  <div class="card-body">
      <a href="#">
         <h4 class="card-title name">${listProduct[d].name}</h4>
      </a>
      Price:<span class="card-text lead price"  >${listProduct[d].price}$</span>
      <div href="#"><button type="button" class="btn btn-primary btn-cart" >Add to cart</button></div>
  </div> </div>
</div>`
 }
 }

