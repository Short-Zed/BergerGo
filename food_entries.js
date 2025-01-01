const food_container = document.getElementById("food_container");
const food_page = document.getElementById("food_page");
const payment_page = document.getElementById("payment_page");

const payment_back_page = document.querySelector("#payment_page #back_arrow");


// payment 
const order_price = document.getElementById("order_price");
const order_taxes_price = document.getElementById("order_taxes_price");
const order_delivery_fees = document.getElementById("order_delivery_fees");

const total_price = document.getElementById("total_price");
const final_price = document.querySelector(".pay_now_container span .price");



const foodPage = (dataFoodId, data) => {
  food_page.style.left = "0%";

  data.forEach((val) => {
    if (dataFoodId == val.product_sku) {
      foodPageContent(val);
    }
  });
};




// window load
window.addEventListener("load", () => {
  entries();
  
});




// fetch function
const entries = () => {
  fetch("./src/json/food_entries.json")
    .then((response) => response.json())
    .then((data) => {
      showFood(data.food_entries);
    })
    .catch((error) => {
      console.log(error);
    });
};



// showFood function
const showFood = (data) => {
  let container = "";
  data.forEach((val) => {
    container += `
            <div class="food_card" data-food-id="${val.product_sku}">
              <img src="${val.image}" alt="food" />
              <span class="food_content">
                <p class="food_name">${val.title}</p>
                <p class="food_des">${val.title_info}</p>
                <span class="food_ratings">
                  <span class="rating">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E6920C" />
                    </svg>
                    <p class="rating_number">${val.rating}</p>
                  </span>
                  <span class="heart">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.075 13.9125L9 13.9875L8.9175 13.9125C5.355 10.68 3 8.5425 3 6.375C3 4.875 4.125 3.75 5.625 3.75C6.78 3.75 7.905 4.5 8.3025 5.52H9.6975C10.095 4.5 11.22 3.75 12.375 3.75C13.875 3.75 15 4.875 15 6.375C15 8.5425 12.645 10.68 9.075 13.9125ZM12.375 2.25C11.07 2.25 9.8175 2.8575 9 3.81C8.1825 2.8575 6.93 2.25 5.625 2.25C3.315 2.25 1.5 4.0575 1.5 6.375C1.5 9.2025 4.05 11.52 7.9125 15.0225L9 16.0125L10.0875 15.0225C13.95 11.52 16.5 9.2025 16.5 6.375C16.5 4.0575 14.685 2.25 12.375 2.25Z" fill="black" />
                    </svg>
                  </span>
                </span>
              </span>
            </div>
        `;
  });

  food_container.innerHTML = container;

  // Add click event listeners to the dynamically created elements
  const foodCards = document.querySelectorAll(".food_card");
  foodCards.forEach((card) => {
    let dataFoodId = card.getAttribute("data-food-id");
    card.addEventListener("click", () => foodPage(dataFoodId, data));
  });
};



// food page function
const foodPageContent = (data) => {

  food_page.innerHTML = `
              <div class="page_back">
            <span class="back_arrow">
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.24023 11.5547C5.93086 11.6883 5.57227 11.625 5.32617 11.3929L0.263672 6.6117C0.0949219 6.45349 0 6.23201 0 5.99998C0 5.76795 0.0949219 5.54646 0.263672 5.38826L5.32617 0.607009C5.57227 0.374977 5.93086 0.311696 6.24023 0.44529C6.54961 0.578884 6.75 0.884743 6.75 1.21873V3.74998H16.875C17.4973 3.74998 18 4.25271 18 4.87498V7.12498C18 7.74724 17.4973 8.24998 16.875 8.24998H6.75V10.7812C6.75 11.1187 6.54961 11.4211 6.24023 11.5547Z"
                  fill="#757575"
                />
              </svg>
            </span>

            <span class="search_icon">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1658 10.6846H11.3969L11.1244 10.4223C12.1113 9.28012 12.6536 7.82181 12.6524 6.31362C12.6524 5.06491 12.2814 3.84423 11.5863 2.80596C10.8912 1.76769 9.90313 0.958462 8.74717 0.480599C7.5912 0.00273559 6.31921 -0.122295 5.09204 0.121317C3.86487 0.36493 2.73765 0.966244 1.85291 1.84922C0.968172 2.73219 0.365658 3.85717 0.121559 5.0819C-0.122539 6.30662 0.00274105 7.57608 0.481558 8.72974C0.960375 9.8834 1.77122 10.8695 2.81157 11.5632C3.85191 12.257 5.07502 12.6272 6.32623 12.6272C7.89318 12.6272 9.33362 12.0542 10.4431 11.1023L10.7059 11.3742V12.1416L15.5722 16.9885L17.0224 15.5412L12.1658 10.6846ZM6.32623 10.6846C3.9028 10.6846 1.94653 8.73223 1.94653 6.31362C1.94653 3.89502 3.9028 1.94266 6.32623 1.94266C8.74966 1.94266 10.7059 3.89502 10.7059 6.31362C10.7059 8.73223 8.74966 10.6846 6.32623 10.6846Z"
                  fill="#757575"
                />
              </svg>
            </span>
          </div>

          <img src="${data.image}" alt="Burger" class="main_image"/>

          <div class="content_container">
            <p class="name">${data.title}</p>

            <span class="rating">
              <p class="rating_number">
                <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                  fill="#E6920C"
                />
              </svg> 
                ${data.rating}</p>
              <p class="rating_time">${data.timing}</p>
            </span>

            <p class="description">
              ${data.content}
            </p>

            <span class="quantity_container">
              <span class="spicy_wrapper">
                <p class="spicy">Spicy</p>
                <input type="range" min="0" max="10" value="6" />
                <span>
                  <p class="mild">Mild</p>
                  <p class="hot">Hot</p>
                </span>
              </span>

              <span class="quantity_box">
                <span class="minus">
                  <svg
                    width="17"
                    height="4"
                    viewBox="0 0 17 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.4834 2H14.5167"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <input type="number" value="1" class="quantity_number" />
                <span class="plus">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.9999 13.3333H18.6666V8C18.6666 7.29275 18.3856 6.61448 17.8855 6.11438C17.3854 5.61428 16.7072 5.33333 15.9999 5.33333C15.2927 5.33333 14.6144 5.61428 14.1143 6.11438C13.6142 6.61448 13.3333 7.29275 13.3333 8L13.4279 13.3333H7.99992C7.29267 13.3333 6.6144 13.6143 6.1143 14.1144C5.6142 14.6145 5.33325 15.2928 5.33325 16C5.33325 16.7072 5.6142 17.3855 6.1143 17.8856C6.6144 18.3857 7.29267 18.6667 7.99992 18.6667L13.4279 18.572L13.3333 24C13.3333 24.7072 13.6142 25.3855 14.1143 25.8856C14.6144 26.3857 15.2927 26.6667 15.9999 26.6667C16.7072 26.6667 17.3854 26.3857 17.8855 25.8856C18.3856 25.3855 18.6666 24.7072 18.6666 24V18.572L23.9999 18.6667C24.7072 18.6667 25.3854 18.3857 25.8855 17.8856C26.3856 17.3855 26.6666 16.7072 26.6666 16C26.6666 15.2928 26.3856 14.6145 25.8855 14.1144C25.3854 13.6143 24.7072 13.3333 23.9999 13.3333Z"
                      fill="#FAF5F5"
                    />
                  </svg>
                </span>
              </span>
            </span>
          </div>

          <div class="order_now_container">
            <p class="price">&#8377; ${data.price}</p>

            <button class="order_now">Order Now</button>
          </div>
    `;


    const food_plus = document.querySelector(".quantity_container .quantity_box .plus");
    food_plus.addEventListener('click', () => foodPlus(data));

    const food_minus = document.querySelector(".quantity_container .quantity_box .minus");
    food_minus.addEventListener('click', () => foodMinus(data));

    const back_arrow = document.querySelector(".back_arrow");
    back_arrow.addEventListener('click', () => backArrow(data));

    const order_now = document.querySelector(".order_now");
    order_now.addEventListener('click', () => order(data));
};



let totalPrice = 0;
let totalQuntity = 0;

let finalPrice = 0;
let finalQuntity = 0;

// burger plus 

const foodPlus = (data) =>{

    let price = document.querySelector('.price');
    let quantity_number = document.querySelector('.quantity_number');

    totalPrice += data.price;
    finalPrice += data.price;

    totalQuntity += 1;

    price.innerHTML = `&#8377; ${totalPrice}`;
    quantity_number.value = totalQuntity;
}


// burger minus

const foodMinus = (data) =>{

    let price = document.querySelector('.price');
    let quantity_number = document.querySelector('.quantity_number');

    totalPrice -= data.price;
    totalQuntity -= 1;

    finalPrice -= data.price;
    

    if(totalPrice <= 0){
        totalPrice = 0;
    }

    if(finalPrice <= 0){
        finalPrice = 0;
    }

    if(totalQuntity <= 0){
        totalQuntity = 0;
    }


    price.innerHTML = `&#8377; ${totalPrice}`;
    quantity_number.value = totalQuntity;
}



// back_arrow
const backArrow = (data) =>{

    food_page.style.left = '100%';

    totalPrice = 0;
    totalQuntity = 0;

    finalPrice = 0;
    finalQuntity = 0;

}

let delivery_fees = 30;
let taxes = 0.50;
payment_back_page.addEventListener("click",()=>{
    
    payment_page.style.left = '100%';

})


// order button

const order = (data) =>{
    
    payment_page.style.left = '0%';

    order_price.innerHTML = `&#8377; ${finalPrice}`;
    order_taxes_price.innerHTML = `&#8377; ${taxes}`;
    order_delivery_fees.innerHTML = `&#8377; ${delivery_fees}`;

    total_price.innerHTML = `<b>&#8377; ${finalPrice + taxes + delivery_fees}</b>`;
    final_price.innerHTML = `&#8377; ${finalPrice + taxes + delivery_fees}`;

    
}


