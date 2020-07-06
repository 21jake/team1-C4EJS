let listProduct = [
  {
      name: 'Vans 1970s Immortal Treasure',
      price: 140,
      image: 'img/newarrivals/na1.jpg'
  },
  { 
  name: 'Low Achiles Classic Red',
  price: 135,
  image: 'img/newarrivals/na2.jpg'
},
{
  name: 'Air Jordan Chicago OG',
  price: 200,
  image: 'img/newarrivals/na3.jpg'
},
{
  name: 'Adidas x Supreme On Tour',
  price: 180,
  image: 'img/newarrivals/na4.jpg'
},
{
  name: 'Converse 1970s Sneakerz Freaks',
  price: 120,
  image: 'img/newarrivals/na5.jpg'
},
{
  name: 'Adidas Allstar Heels Heaven',
  price: 125,
  image: 'img/newarrivals/na6.jpg'
},
{
  name: 'Vans OldSchool Comfy Walk',
  price: 220,
  image: 'img/newarrivals/na7.jpg'
},
{
  name: 'Classic Timberland Urban Design',
  price: 160,
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
html.innerHTML += `<div class="col-md-4 col-lg-3">
<div class="card padding">
    <a href="#"><img  src="${listProduct[d].image}"" class="w-100 img"  ></a>
    <div class="card-body">
        <a href="#">
            <h4 class="card-title name">${listProduct[d].name}</h4>
        </a>
        Price:<span class="card-text lead price"  >${listProduct[d].price}$</span>
        <div href="#"><button type="button" class="btn btn-primary btn-cart" >Add to cart</button></div>
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
  </div>
</div>
</div>`
}
}

