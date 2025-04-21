function solve() {
   let targets = document.querySelectorAll('.product');
   let text = document.querySelector('textarea');
   let checkout = document.querySelector('.checkout');
   let products = [];
   let total = 0;

   for (const target of targets) {
      target.addEventListener ('click', add);
   }

   checkout.addEventListener ("click", all)

   function add (event) {
      let parent = event.target.parentElement.parentElement
      let productName = parent.querySelector('div.product-title').textContent;
      let productPrice = Number (parent.querySelector('div.product-line-price').textContent);
      text.textContent += `Added ${productName} for ${(productPrice).toFixed(2)} to the cart.\n`
      total+= Number (productPrice);
      if (!products.includes(productName)){
         products.push(productName)
      }
   }

   function all (event) {
      text.textContent += `You bought ${products.join(', ')} for ${total.toFixed(2)}.`
      let buttons = Array.from(document.querySelectorAll('button'));
      
      for (const button of buttons) {
         button.disabled = true;
      }
   }
}
   