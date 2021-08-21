//declare function
function samePrice(nameOfCost) {
  const sameCost = document.getElementById(nameOfCost + "-cost");
  sameCost.innerText = parseFloat(0);

  //total
  const totalPriceInput = document.getElementById("total-price");
  const totalpriceValue = total();
  totalPriceInput.innerText = totalpriceValue;

  const totalDiscountInput = document.getElementById("discount-total");
  const totalDiscountValue = total();
  totalDiscountInput.innerText = totalDiscountValue;
}
function priceUpdate(slection, price) {
  const updateCost = document.getElementById(slection + "-cost");
  updateCost.innerText = parseFloat(price);

  const totalPriceInput = document.getElementById("total-price");
  const totalpriceValue = total();
  totalPriceInput.innerText = totalpriceValue;

  const totalDiscountInput = document.getElementById("discount-total");
  const totalDiscountValue = total();
  totalDiscountInput.innerText = totalDiscountValue;
}
let bestPrice = document.getElementById("best-price");
let MemoryPrice = document.getElementById("memory-cost");
let storagePrice = document.getElementById("storage-cost");
let deliveryPrice = document.getElementById("delivery-cost");
let discount = document.getElementById("discount-total");
//function calling
function total() {
  let totalprice =
    parseFloat(bestPrice.innerText) +
    parseFloat(MemoryPrice.innerText) +
    parseFloat(storagePrice.innerText) +
    parseFloat(deliveryPrice.innerText);

  return totalprice;
}
// memory cost
document
  .getElementById("memory-price-same")
  .addEventListener("click", function () {
    samePrice("memory");
  });

document
  .getElementById("memory-price-increase")
  .addEventListener("click", function () {
    priceUpdate("memory", 188);
  });

//storage option
document
  .getElementById("storage-price-same")
  .addEventListener("click", function () {
    samePrice("storage");
  });
document
  .getElementById("storage-price-increase")
  .addEventListener("click", function () {
    priceUpdate("storage", 88);
  });
document
  .getElementById("storage-price-increase1")
  .addEventListener("click", function () {
    priceUpdate("storage", 180);
  });

//delivery option

document
  .getElementById("delivery-price-same")
  .addEventListener("click", function () {
    samePrice("delivery");
  });
document
  .getElementById("delivery-price-increase")
  .addEventListener("click", function () {
    priceUpdate("delivery", 20);
  });

//promocode
document.getElementById("discount").addEventListener("click", function () {
  const promoCode = document.getElementById("input");
  if (promoCode.value == "stevekaku") {
    let totalPrice = parseFloat(discount.innerText);
    let discountedPrice = totalPrice - totalPrice * 0.2;
    discount.innerText = discountedPrice;
  }
  promoCode.value = "";
});
