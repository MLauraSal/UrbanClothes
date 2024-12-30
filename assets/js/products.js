
// Seleccionar elementos del DOM

const productGrid = document.querySelector('#productGrid');





let productos = [
    {
      id: 1,
      categoria: "jacket",
      titulo: "Mens Winter Leathers Jackets",
      precio: 48.00,
      precioOriginal: 75.00,
      imagenDefault: "../assets/img/products/jacket-3.jpg",
      imagenHover: "../assets/img/products/jacket-4.jpg",
    },
    {
      id: 2,
      categoria: "shirt",
      titulo: "Pure Garment Dyed Cotton Shirt",
      precio: 45.00,
      precioOriginal: 56.00,
      imagenDefault: "../assets/img/products/shirt-1.jpg",
      imagenHover: "../assets/img/products/shirt-2.jpg",
    },
    {
      id: 3,
      categoria: "jacket",
      titulo: "MEN Yarn Fleece Full-Zip Jacket",
      precio: 58.00,
      precioOriginal: 65.00,
      imagenDefault: "../assets/img/products/jacket-5.jpg",
      imagenHover: "../assets/img/products/jacket-6.jpg",
    },
    {
      id: 4,
      categoria: "skirt",
      titulo: "Black Floral Wrap Midi Skirt",
      precio: 25.00,
      precioOriginal: 35.00,
      imagenDefault: "../assets/img/products/clothes-3.jpg",
      imagenHover: "../assets/img/products/clothes-4.jpg",
    },
    {
      id: 5,
      categoria: "casual",
      titulo: "Casual Men's Brown shoes",
      precio: 99.00,
      precioOriginal: 105.00,
      imagenDefault: "../assets/img/products/shoe-2.jpg",
      imagenHover: "../assets/img/products/shoe-2_1.jpg",
    },
    {
      id: 6,
      categoria: "watches",
      titulo: "Pocket Watch Leather Pouch",
      precio: 150.00,
      precioOriginal: 170.00,
      imagenDefault: "../assets/img/products/watch-3.jpg",
      imagenHover: "../assets/img/products/watch-4.jpg",
    },
    {
      id: 7,
      categoria: "watches",
      titulo: "Smart watche Vital Plus",
      precio: 100.00,
      precioOriginal: 120.00,
      imagenDefault: "../assets/img/products/watch-1.jpg",
      imagenHover: "../assets/img/products/watch-2.jpg",
    },
    {
      id: 8,
      categoria: "party wear",
      titulo: "Womens Party Wear Shoes",
      precio: 25.00,
      precioOriginal: 30.00,
      imagenDefault: "../assets/img/products/party-wear-1.jpg",
      imagenHover: "../assets/img/products/party-wear-2.jpg",
    },
    {
      id: 9,
      categoria: "jacket",
      titulo: "Mens Winter Leathers Jackets",
      precio: 32.00,
      precioOriginal: 45.00,
      imagenDefault: "../assets/img/products/jacket-1.jpg",
      imagenHover: "../assets/img/products/jacket-2.jpg",
    },
    {
      id: 10,
      categoria: "sports",
      titulo: "Trekking & Running Shoes - black",
      precio: 58.00,
      precioOriginal: 64.00,
      imagenDefault: "../assets/img/products/sports-2.jpg",
      imagenHover: "../assets/img/products/sports-4.jpg",
    },
    {
      id: 11,
      categoria: "formal",
      titulo: "Men's Leather Formal Wear shoes",
      precio: 50.00,
      precioOriginal: 65.00,
      imagenDefault: "../assets/img/products/shoe-1.jpg",
      imagenHover: "../assets/img/products/shoe-1_1.jpg",
    },
    {
      id: 12,
      categoria: "shorts",
      titulo: "Better Basics French Terry Sweatshorts",
      precio: 78.00,
      precioOriginal: 85.00,
      imagenDefault: "../assets/img/products/shorts-1.jpg",
      imagenHover: "../assets/img/products/shorts-2.jpg",
    },
  ];
  

  



// Función para inicializar la aplicación

function initApp(){

     // Crear elementos HTML para cada producto y mostrarlos en la lista

    productos.forEach((value, key) =>{
        const newDiv = document.createElement('div');
        newDiv.classList.add('showcase');
        newDiv.innerHTML = `

            <div class="showcase-banner">

                <img src="${value.imagenDefault}" alt="${value.titulo}" width="300" class="product-img default">
                <img src="${value.imagenHover}" alt="${value.titulo}" width="300" class="product-img hover">

                <p class="showcase-badge">15%</p>

                <div class="showcase-actions">

                    <button class="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                  

                </div>

            </div>

            <div class="showcase-content">

                <a href="#" class="showcase-category">${value.categoria}</a>

                <a href="#">
                    <h3 class="showcase-title">${value.titulo}</h3>
                </a>

                <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                </div>

                <div class="price-box">
                     <p class="price">$${value.precio.toFixed(2)}</p>
                    <del>$${value.precioOriginal.toFixed(2)}</del>

                </div>   
                


                     <button class="btn-cart" onclick="addToCard(${key}) >Shop Now</button>
               
                
            </div>
           `;
        productGrid.appendChild(newDiv);
    })
}

// Llamar a la función de inicialización al cargar la página
initApp();



