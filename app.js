
  // Sample data for cards (assume there are at least 20 cards here for demonstration)
  const cardData = [

    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-1.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-2.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-3.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-4.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-5.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-6.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-7.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-8.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-9.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-10.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-11.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-12.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-13.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-12.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-15.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-16.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-17.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-18.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-19.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-20.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-22.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-23.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-24.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-25.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-26.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-27.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-28.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-29.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-30.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-31.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-32.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-33.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-34.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-35.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-36.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-38.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-39.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-40.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-41.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-42.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-43.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-44.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-45.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-46.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-47.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-48.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-49.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-50.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-51.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-52.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-53.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-54.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-55.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-56.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-57.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-58.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-59.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-60.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },
    { title: "Winter Special Combo Pack of 8+1 Free Dress (Random Color)", text: "", image: "./RadhaKrishn_Bastra/img-21.jpg"   },

      

    // Add more card data if needed
  ];

  // Variables to track loaded cards
  let cardsDisplayed = 0;
  const cardsPerLoad = 19;

  // Function to generate cards
  function generateCards() {
    const container = document.querySelector('.card-container');
    const newCards = cardData.slice(cardsDisplayed, cardsDisplayed + cardsPerLoad);

    // Create and append new cards
    newCards.forEach(item => {
      const card = document.createElement("div");
      card.className = "col-6 col-md-3 mb-4"; // Two cards per row on mobile, three on desktop

      card.innerHTML = `
       <div class="card">
    <div class="card-img-container">
        <img src="${item.image}" class="card-img-top" alt="${item.title}">
    </div>
    <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.text}</p>
        <div class="justify-content-center">
            <button class="btn my-2 text-primary bg-primary">Buy Now</button>
        </div>
        <button class="btn my-2 text-primary bg-primary">Add to Cart</button>
    </div>
</div>
      `;

      container.appendChild(card);
    });

    cardsDisplayed += cardsPerLoad;

    // Hide Load More button if all cards are displayed
    if (cardsDisplayed >= cardData.length) {
      document.getElementById("load-more").style.display = "none";
    }
  }

  // Load the initial set of cards
  generateCards();

  // Add event listener to "Load More" button
  document.getElementById("load-more").addEventListener("click", generateCards);

 // Add click event to each card
document.querySelectorAll(".card").forEach((card, index) => {
  card.addEventListener("click", () => {
    // Save the card data in local storage
    const selectedItem = cardData[index];
    localStorage.setItem("selectedCard", JSON.stringify(selectedItem));

    // Redirect to detail page
    window.location.href="./details.html"
  });
});

