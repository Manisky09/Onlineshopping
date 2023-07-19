var cartItems =[]
var isTotalHidden = true;

var shinguard={
  name:"shin guard"
  price: 10
}

var jersey{
  name:"jersey"
  price:100
}

function addToCart(item){
  cartItems.push(item);
  document.getElementById("itemCounter").innerHTML = cartItems.length;
  showTotal();
}

function clickCart(){
  isTotalHidden = !isTotalHidden;
  showTotal();
}

function.showTotal(){
  var orderTotal = document.getElementById("orderTotal");
  var shippingTotal = document.getElementById("shippingTotal");

  orderTotal.innerHTML =""
  shippingTotal.innerHTML = ""

  if(isTotalhidden === false){
    var total = 0;
    for(var i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price;
    }
    var shipping = calculateShipping(total);
    orderTotal.innerHTML += "Total: $" + total;
    shippingTotal.innerHtml +="shipping: $" + shipping
  }
}

function calculateShipping(total){
  var shipping;
  if (total >= 700){
    shipping = 30
  }else{
    shippinh = 50
  }
  return shipping
  }
