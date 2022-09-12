const data = [
    {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      name: "Air",
      brand: "Nike",
      price: "120.00 $",
      sizes: ["37", "38", "39"],
    },
    {
      img: "https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      name: "Dunk High Pro",
      brand: "Nike",
      price: "150.00 $",
      sizes: ["37", "38", "39", "40", "42"],
    },
    {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
      name: "Old Skool",
      brand: "Vans",
      price: "50.00 $",
      sizes: ["37"],
    },
    {
      img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
      name: "Summer Party",
      brand: "Nike",
      price: "100.00 $",
      sizes: ["42", "43", "44", "45", "46"],
    },
  {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Retro",
      brand: "Adidas",
      price: "149.00 $",
      sizes: ["39", "40"],
  },
  {
      img: "https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Fancy Doc",
      brand: "Crocs",
      price: "79.00 $",
      sizes: ["37", "38", "39", "40", "41", "42"],
  },
  {
      img: "https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Classic",
      brand: "Reebok",
      price: "99.00 $",
      sizes: ["43", "44", "45", "46"],
  },
  {
      img: "https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Jungle",
      brand: "New Balance",
      price: "110.00 $",
      sizes: ["39", "40", "41", "42"],
  },
  {
      img: "https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Essentials",
      brand: "Errant",
      price: "120.00 $",
      sizes: ["41","42", "43", "44", "45", "46"],
  },
  {
      img: "https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Très chic",
      brand: "Nike",
      price: "150.00 $",
      sizes: ["45", "46"],
  },
  {
      img: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
      name: "Plastic Revolution",
      brand: "Adidas",
      price: "180.00 $",
      sizes: ["37", "38", "39", "40"],
  },
  {
      img: "https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Sporty",
      brand: "Asics",
      price: "90.00 $",
      sizes: ["41","42", "43", "44"],
  }
 ]


 //variable to display in HTML
 const display = document.querySelector('.arrival-content');

 //new items content 
 data.forEach(content => {
    //creating div container around each product
    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';
    display.appendChild(contentContainer);

    //creating image and place it into div container
    const image = document.createElement('img');
    image.className = 'content-image';
    image.setAttribute("src", content.img);
    contentContainer.appendChild(image);

    //creating div for product name and add to card btn
    const nameContainer = document.createElement('div');
    nameContainer.className = 'product-name-container';
    contentContainer.appendChild(nameContainer);

    //creating h4 and place it into div container
    const productName = document.createElement('h4');
    productName.innerText = content.name;
    nameContainer.appendChild(productName);

    //creating button to put item into card
    const addCard = document.createElement('button');
    addCard.className = 'btn-add-card';
    nameContainer.appendChild(addCard);
    
    //creating accordion 
    //creating div for price and accordion btn
    const accordionBtnContainer = document.createElement('div');
    accordionBtnContainer.className = 'btn-container'
    contentContainer.appendChild(accordionBtnContainer);
    //creating price 
    const accordion = document.createElement('p');
    accordion.className = 'price-text';
    accordion.innerText = content.price;
    accordionBtnContainer.appendChild(accordion);

    //creating accordion btn
    const accordionBtn = document.createElement('button');
    accordionBtn.className = 'btn-arrow';
    accordionBtnContainer.appendChild(accordionBtn);

    //accordion div
    const panelContainer = document.createElement('div');
    panelContainer.className = 'accordion-container';
    contentContainer.appendChild(panelContainer);

    //accordion panel brand
    const brand = document.createElement('p');
    brand.innerText = content.brand;
    panelContainer.appendChild(brand);
    
    //accordion panel size div 
    const sizeContainer = document.createElement('div');
    sizeContainer.className = 'size-container';
    panelContainer.appendChild(sizeContainer);

    //accordion panel size 
    content.sizes.forEach(item => {
        const panelItem = document.createElement('a');
        panelItem.href = "#";
        panelItem.innerText = item;
        sizeContainer.appendChild(panelItem);
    })
 })

     //adding functionality to accordion panel

    let accordion = document.getElementsByClassName('btn-container')

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let details = this.nextElementSibling;
            if (details.style.display === "block") {
                details.style.display = "none";
              } else {
                details.style.display = "block";
              }
        })
    }


 //Cookies
const accept = document.querySelector('#accept');
const reject = document.querySelector('#reject');
const modal = document.querySelector('.cookie-card');

//function to remove card from screen 
accept.addEventListener('click', function () {
    document.cookie = "username=user; Max-Age=100000000; path=/";
    modal.style.display = "none";
})

reject.addEventListener('click', function () {
    modal.style.display = "none";
})

//functionality to check for a cookie on page opening
if (document.cookie != "") {
    modal.style.display = "none";
}

//add to cart functionality
let cartCounter = 0;
let cartIcon = document.querySelector('#cart-counter');
let addtoCart = document.getElementsByClassName('btn-add-card');

for (let i = 0; i < addtoCart.length; i++) {
    addtoCart[i].addEventListener("click", function () {
       cartCounter++;
       cartIcon.innerText = cartCounter;
    })
}

//subscribe to functionality
let submitBtn = document.querySelector('#submit');

submitBtn.addEventListener("click", (event => {
    event.preventDefault();
    console.log('klik');

    console.log('klik');
    let newsletterTitle = document.querySelector('#newsletter-title');
    let newsletterInfo = document.querySelector('#newsletter-info');
    let container = document.querySelector('#form');
    let input = document.querySelector('#email');
    let inputValue = document.querySelector('#email').value;
    let inputError = document.querySelector('#newsletter-error');
    
    function validateMail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email); 
    }

    if (validateMail(inputValue) == true) {
        newsletterTitle.innerText ='THANK YOU!';
        newsletterInfo.innerText = 'You will get our response shortly.';
        input.style.display = 'none';
        submitBtn.style.display = 'none';
    } else {
        inputError.innerText += "Please enter a valid email address.";
        submitBtn.style.display = 'none';
        newsletterInfo.style.display = 'none';
        newsletterTitle.style.display = 'none';
    }

}));
