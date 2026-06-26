
let renderHTML = ``;

products.forEach( (product) => {

    // Adds the string to the products HTML called renderHTML
    renderHTML += `
        <div class="product-container">
          
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id=${product.id}>
          <!-- 
            ################ 
            Make code interactive:
            by using the DOM (docment object listener 
            to add an event listener on this button "Add to Cart"
            via class js-add-to-cart-button class on the button in the js script

            - DECLARE data attribute kamel-case + data at start
              <element data-product-id=${product.id}> </element>

            - then when GETting data, use camalCase
              element.productId
              =
              document.querySelectorAll('.js-add-to-cart-button').forEach((buttonElement) => {
                // For each button do this
                // 1. add event listener for click
                // 2. If click:
                //      - search for current item added in cart
                //      - if it is in cart, then add quantity
                //      - if not in cart, add it to cart with quantity specified
                
              });
            ################
          -->
            Add to Cart
          </button>
        </div>
        `;

}
);

// console.log(renderHTML);

document.querySelector('.js-products-grid').innerHTML = renderHTML;


// ############## MAKING PAGE INTERACTIVE ##################


document.querySelectorAll('.js-add-to-cart-button') // - loads all elements (the buttons) with that class
  .forEach( (buttonElement) => { // For each button, do this function

  // element.addEventListener can only be used for indidual elements (notice the document.querySelectorAll elements use for loop to get each element) (and notice the document.querySelector element has an addEventListener method right away) (because 1 element, not more than 1, can have an event listener)


  // For each button do this
  // 1. add event listener for click
  // 2. If click:
  //      - search for current item added in cart
  //      - if it is in cart, then add quantity
  //      - if not in cart, add it to cart with quantity specified
  buttonElement.addEventListener('click', () => 
    {
      // This function runs when the button element is clicked
      console.log('added product') // Test interactivtiy in js (web browser only) console

      // 1 check if it is in cart
      let inCartElement; // declaration deafults to falsey value (js)
      for (const product of cart) {
      // if i have an array of objects, where i dont wnt to change the the object, 
      // but instead i want to change the items in the object, i can do for (const product of array)
      // Notice: const product is the best thing to do, not let product
      // Result: then i can change project properties by doing product. The pointer to element (product) in cart is safe (no change).
        if (product.productId === buttonElement.dataset.productId)
          inCartElement = product; 
          // we found the product in cart
          // save its pointer to change quantity in "inCartElement"

          // Break for loop since we found item
          break;
      }

      if (inCartElement) { // if product found in cart,
        // we added product pointer to cart,
        // so inCart has something, then truthy value
        // so enter this if statment
        inCartElement.productQuantity += 1; // add 1 for now

      } else { // product was not in cart,
               // so add it to cart, with the sleected quantity (1 for now)
        cart.push( // pushes an object with: 
        // property 1) the elemnts data attribute data-product-id
        // propertly 2) a productQuantiy property with value 1
          {
            productId: buttonElement.dataset.productId, // short hand method productId: productId -> "productId" if we set it to the buttonElement.dataset.productId
            productQuantity: 1
          }
        );
      }

      // Draft add to cart button:
      //  Test if product and quantity 1 was added to cart properly
      console.log(cart) 
    }
    );``

  }
  );
