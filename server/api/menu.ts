export default defineEventHandler((event) => {
 return {
  menu: {
   starters: {
    name: "Starters",
    image: "starter_image_url.jpg",
    items: [
     {
      name: "Caesar Salad",
      ingredients:
       "Romaine lettuce, croutons, parmesan cheese, Caesar dressing",
      price: 8.99,
     },
     {
      name: "Garlic Bread",
      ingredients: "French bread, garlic, butter, parsley",
      price: 4.99,
     },
     {
      name: "Caprese Salad",
      ingredients: "Tomatoes, mozzarella cheese, basil, balsamic glaze",
      price: 7.99,
     },
    ],
   },
   mainDishes: {
    name: "Main Dishes",
    image: "main_dishes_image_url.jpg",
    items: [
     {
      name: "Spaghetti Bolognese",
      ingredients: "Spaghetti, beef, tomato sauce, onions, garlic, herbs",
      price: 12.99,
     },
     {
      name: "Grilled Salmon",
      ingredients: "Salmon fillet, lemon, olive oil, dill, garlic",
      price: 15.99,
     },
     {
      name: "Vegetable Stir-Fry",
      ingredients: "Assorted vegetables, tofu, soy sauce, ginger, garlic",
      price: 11.99,
     },
    ],
   },
   desserts: {
    name: "Desserts",
    image: "desserts_image_url.jpg",
    items: [
     {
      name: "Chocolate Cake",
      ingredients: "Chocolate, sugar, eggs, flour, butter, cocoa",
      price: 6.99,
     },
     {
      name: "Tiramisu",
      ingredients: "Ladyfingers, mascarpone cheese, coffee, cocoa, eggs",
      price: 7.99,
     },
     {
      name: "Fruit Salad",
      ingredients: "Assorted fresh fruits, honey, mint",
      price: 5.99,
     },
    ],
   },
   beverages: {
    name: "Beverages",
    image: "beverages_image_url.jpg",
    items: [
     {
      name: "Soda",
      ingredients: "Assorted soft drinks (Coke, Pepsi, Sprite, etc.)",
      price: 2.49,
     },
     {
      name: "Iced Tea",
      ingredients: "Freshly brewed tea, ice, lemon",
      price: 2.99,
     },
     {
      name: "Orange Juice",
      ingredients: "Freshly squeezed orange juice",
      price: 3.99,
     },
    ],
   },
  },
 }
})
