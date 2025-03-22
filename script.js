const allrestaurants = [
  {
    name: "Pasta Paradise",
    rating: 4.8,
    deliveryTime: "25-35 min",
    cuisine: ["Italian", "Pasta"],
    deliveryFee: "Free Delivery",
    distance: "1.2 miles away",
    imageUrl: "https://www.zomato.com/mumbai/pasta-paradise-mira-road/photos",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Pizza Palace",
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: ["Italian", "Pizza"],
    deliveryFee: "$2.99",
    distance: "2.5 miles away",
    imageUrl:
      "https://www.alamy.com/stock-photo/pizza-palace.html?pseudoid=199E7E48D22A437888FD37DCD01FE3B0",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Burger Barn",
    rating: 4.6,
    deliveryTime: "15-25 min",
    cuisine: ["American", "Burgers"],
    deliveryFee: "Free Delivery",
    distance: "0.8 miles away",
    imageUrl: "https://example.com/images/burger_barn.jpg",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Sushi Spot",
    rating: 4.9,
    deliveryTime: "30-40 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$3.49",
    distance: "1.5 miles away",
    imageUrl:
      "https://www.sirved.com/restaurant/imperial-california-usa/sushi-spot/829204/menus",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Taco Town",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Mexican", "Tacos"],
    deliveryFee: "Free Delivery",
    distance: "1.1 miles away",
    imageUrl: "https://example.com/images/taco_town.jpg",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Curry Castle",
    rating: 4.8,
    deliveryTime: "25-35 min",
    cuisine: ["Indian", "Curry"],
    deliveryFee: "$1.99",
    distance: "2.0 miles away",
    imageUrl:
      "https://www.tripadvisor.co.uk/Restaurant_Review-g187337-d13753460-Reviews-Indian_Curry_Castle-Frankfurt_Hesse.html",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Vegan Valley",
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: ["Vegan", "Healthy"],
    deliveryFee: "Free Delivery",
    distance: "0.5 miles away",
    imageUrl: "https://veganvalley.in/",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "BBQ Bliss",
    rating: 4.6,
    deliveryTime: "30-40 min",
    cuisine: ["BBQ", "American"],
    deliveryFee: "$2.49",
    distance: "1.8 miles away",
    imageUrl:
      "https://eatingmywaythroughoc.blogspot.com/2014/03/barbecue-bliss-in-downtown-fullerton.html",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Wok Wonders",
    rating: 4.4,
    deliveryTime: "25-35 min",
    cuisine: ["Chinese", "Noodles"],
    deliveryFee: "Free Delivery",
    distance: "1.3 miles away",
    imageUrl: "https://example.com/images/wok_wonders.jpg",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Mediterranean Munch",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Mediterranean", "Salads"],
    deliveryFee: "$1.49",
    distance: "1.6 miles away",
    imageUrl:
      "https://restaurantguru.com/Munch-Med-Mediterranean-Homestyle-Restaurant-Ko-Pha-ngan",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Dessert Delight",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Desserts", "Bakery"],
    deliveryFee: "Free Delivery",
    distance: "0.7 miles away",
    imageUrl: "https://www.iloilotoday.com/contis-sweet-delights/",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Smoothie Shack",
    rating: 4.3,
    deliveryTime: "10-15 min",
    cuisine: ["Healthy", "Smoothies"],
    deliveryFee: "$1.29",
    distance: "0.9 miles away",
    imageUrl: "https://example.com/images/smoothie_shack.jpg",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Mediterranean Munch",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Mediterranean", "Salads"],
    deliveryFee: "$1.49",
    distance: "1.6 miles away",
    imageUrl:
      "https://restaurantguru.com/Munch-Med-Mediterranean-Homestyle-Restaurant-Ko-Pha-ngan",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Margherita",
    rating: 4.8,
    deliveryTime: "15-25 min",
    cuisine: ["Italian", "Pizza"],
    deliveryFee: "Free",
    distance: "1.2 miles away",
    imageUrl: "images/margherita.jpg",
    menuUrl: "https://example.com/margherita",
  },
  {
    name: "Pepperoni",
    rating: 4.6,
    deliveryTime: "20-30 min",
    cuisine: ["Italian", "Pizza"],
    deliveryFee: "$1.99",
    distance: "1.5 miles away",
    imageUrl: "images/pepperoni.jpg",
    menuUrl: "https://example.com/pepperoni",
  },
  {
    name: "BBQ Chicken",
    rating: 4.5,
    deliveryTime: "25-35 min",
    cuisine: ["BBQ", "Pizza"],
    deliveryFee: "$2.49",
    distance: "2 miles away",
    imageUrl: "images/bbq_chicken.jpg",
    menuUrl: "https://example.com/bbqchicken",
  },
  {
    name: "Veggie Supreme",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Vegetarian", "Pizza"],
    deliveryFee: "$1.49",
    distance: "1.8 miles away",
    imageUrl: "images/veggie_supreme.jpg",
    menuUrl: "https://example.com/veggiesupreme",
  },
  {
    name: "Four Cheese",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Cheese", "Pizza"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/four_cheese.jpg",
    menuUrl: "https://example.com/fourcheese",
  },

  {
    name: "Classic Cheeseburger",
    rating: 4.8,
    deliveryTime: "15-25 min",
    cuisine: ["American", "Burger"],
    deliveryFee: "$1.49",
    distance: "1.2 miles away",
    imageUrl: "images/classic_cheeseburger.jpg",
    menuUrl: "https://example.com/classiccheeseburger",
  },
  {
    name: "Bacon Burger",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["American", "Burger"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/bacon_burger.jpg",
    menuUrl: "https://example.com/baconburger",
  },
  {
    name: "BBQ Burger",
    rating: 4.6,
    deliveryTime: "25-35 min",
    cuisine: ["BBQ", "Burger"],
    deliveryFee: "$1.99",
    distance: "1.5 miles away",
    imageUrl: "images/bbq_burger.jpg",
    menuUrl: "https://example.com/bbqburger",
  },
  {
    name: "Mushroom Swiss Burger",
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: ["Swiss", "Burger"],
    deliveryFee: "$2.49",
    distance: "2 miles away",
    imageUrl: "images/mushroom_swiss.jpg",
    menuUrl: "https://example.com/mushroomswiss",
  },
  {
    name: "Veggie Burger",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Vegetarian", "Burger"],
    deliveryFee: "$1.49",
    distance: "1.8 miles away",
    imageUrl: "images/veggie_burger.jpg",
    menuUrl: "https://example.com/veggieburger",
  },
  {
    name: "Spicy Jalapeno Burger",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Spicy", "Burger"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/spicy_jalapeno.jpg",
    menuUrl: "https://example.com/spicyjalapeno",
  },
  {
    name: "California Roll",
    rating: 4.8,
    deliveryTime: "15-25 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$1.49",
    distance: "1.2 miles away",
    imageUrl: "images/california_roll.jpg",
    menuUrl: "https://example.com/californiaroll",
  },
  {
    name: "Spicy Tuna Roll",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/spicy_tuna_roll.jpg",
    menuUrl: "https://example.com/spicytuna",
  },
  {
    name: "Dragon Roll",
    rating: 4.6,
    deliveryTime: "25-35 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$1.99",
    distance: "1.5 miles away",
    imageUrl: "images/dragon_roll.jpg",
    menuUrl: "https://example.com/dragonroll",
  },
  {
    name: "Salmon Nigiri",
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$2.49",
    distance: "2 miles away",
    imageUrl: "images/salmon_nigiri.jpg",
    menuUrl: "https://example.com/salmonnigiri",
  },
  {
    name: "Eel Avocado Roll",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$1.49",
    distance: "1.8 miles away",
    imageUrl: "images/eel_avocado_roll.jpg",
    menuUrl: "https://example.com/eelavocado",
  },
  {
    name: "Rainbow Roll",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/rainbow_roll.jpg",
    menuUrl: "https://example.com/rainbowroll",
  },
  {
    name: "Margherita Pizza",
    rating: 4.8,
    deliveryTime: "15-25 min",
    cuisine: ["Italian", "Pizza"],
    deliveryFee: "$1.49",
    distance: "1.2 miles away",
    imageUrl: "images/margherita_pizza.jpg",
    menuUrl: "https://example.com/margheritapizza",
  },
  {
    name: "Lasagna Bolognese",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Italian", "Pasta"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/lasagna_bolognese.jpg",
    menuUrl: "https://example.com/lasagnabolognese",
  },
  {
    name: "Penne Arrabbiata",
    rating: 4.6,
    deliveryTime: "25-35 min",
    cuisine: ["Italian", "Pasta"],
    deliveryFee: "$1.99",
    distance: "1.5 miles away",
    imageUrl: "images/penne_arrabbiata.jpg",
    menuUrl: "https://example.com/pennearrabbiata",
  },
  {
    name: "Fettuccine Alfredo",
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: ["Italian", "Pasta"],
    deliveryFee: "$2.49",
    distance: "2 miles away",
    imageUrl: "images/fettuccine_alfredo.jpg",
    menuUrl: "https://example.com/fettuccinealfredo",
  },
  {
    name: "Spaghetti Carbonara",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Italian", "Pasta"],
    deliveryFee: "$1.49",
    distance: "1.8 miles away",
    imageUrl: "images/spaghetti_carbonara.jpg",
    menuUrl: "https://example.com/spaghetticarbonara",
  },
  {
    name: "Tiramisu",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Italian", "Dessert"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/tiramisu.jpg",
    menuUrl: "https://example.com/tiramisu",
  },
  {
    name: "Kung Pao Chicken",
    rating: 4.8,
    deliveryTime: "20-30 min",
    cuisine: ["Chinese", "Chicken"],
    deliveryFee: "$1.99",
    distance: "1.2 miles away",
    imageUrl: "images/kung_pao_chicken.jpg",
    menuUrl: "https://example.com/kungpaochicken",
  },
  {
    name: "Sweet and Sour Pork",
    rating: 4.7,
    deliveryTime: "25-35 min",
    cuisine: ["Chinese", "Pork"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/sweet_sour_pork.jpg",
    menuUrl: "https://example.com/sweetsourpork",
  },
  {
    name: "Spring Rolls",
    rating: 4.6,
    deliveryTime: "15-25 min",
    cuisine: ["Chinese", "Appetizer"],
    deliveryFee: "$1.49",
    distance: "1.5 miles away",
    imageUrl: "images/spring_rolls.jpg",
    menuUrl: "https://example.com/springrolls",
  },
  {
    name: "Beef and Broccoli",
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: ["Chinese", "Beef"],
    deliveryFee: "$2.49",
    distance: "2 miles away",
    imageUrl: "images/beef_broccoli.jpg",
    menuUrl: "https://example.com/beefbroccoli",
  },
  {
    name: "Mapo Tofu",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Chinese", "Vegetarian"],
    deliveryFee: "$1.49",
    distance: "1.8 miles away",
    imageUrl: "images/mapo_tofu.jpg",
    menuUrl: "https://example.com/mapotofu",
  },
  {
    name: "Fried Rice",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Chinese", "Rice"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/fried_rice.jpg",
    menuUrl: "https://example.com/friedrice",
  },
];

const pizzas = [
  {
    name: "Mediterranean Munch",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Mediterranean", "Salads"],
    deliveryFee: "$1.49",
    distance: "1.6 miles away",
    imageUrl:
      "https://restaurantguru.com/Munch-Med-Mediterranean-Homestyle-Restaurant-Ko-Pha-ngan",
    menuUrl: "https://example.com/menu",
  },
  {
    name: "Margherita",
    rating: 4.8,
    deliveryTime: "15-25 min",
    cuisine: ["Italian", "Pizza"],
    deliveryFee: "Free",
    distance: "1.2 miles away",
    imageUrl: "images/margherita.jpg",
    menuUrl: "https://example.com/margherita",
  },
  {
    name: "Pepperoni",
    rating: 4.6,
    deliveryTime: "20-30 min",
    cuisine: ["Italian", "Pizza"],
    deliveryFee: "$1.99",
    distance: "1.5 miles away",
    imageUrl: "images/pepperoni.jpg",
    menuUrl: "https://example.com/pepperoni",
  },
  {
    name: "BBQ Chicken",
    rating: 4.5,
    deliveryTime: "25-35 min",
    cuisine: ["BBQ", "Pizza"],
    deliveryFee: "$2.49",
    distance: "2 miles away",
    imageUrl: "images/bbq_chicken.jpg",
    menuUrl: "https://example.com/bbqchicken",
  },
  {
    name: "Veggie Supreme",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Vegetarian", "Pizza"],
    deliveryFee: "$1.49",
    distance: "1.8 miles away",
    imageUrl: "images/veggie_supreme.jpg",
    menuUrl: "https://example.com/veggiesupreme",
  },
  {
    name: "Four Cheese",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Cheese", "Pizza"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/four_cheese.jpg",
    menuUrl: "https://example.com/fourcheese",
  },
];

const burgers = [
  {
    name: "Classic Cheeseburger",
    rating: 4.8,
    deliveryTime: "15-25 min",
    cuisine: ["American", "Burger"],
    deliveryFee: "$1.49",
    distance: "1.2 miles away",
    imageUrl: "images/classic_cheeseburger.jpg",
    menuUrl: "https://example.com/classiccheeseburger",
  },
  {
    name: "Bacon Burger",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["American", "Burger"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/bacon_burger.jpg",
    menuUrl: "https://example.com/baconburger",
  },
  {
    name: "BBQ Burger",
    rating: 4.6,
    deliveryTime: "25-35 min",
    cuisine: ["BBQ", "Burger"],
    deliveryFee: "$1.99",
    distance: "1.5 miles away",
    imageUrl: "images/bbq_burger.jpg",
    menuUrl: "https://example.com/bbqburger",
  },
  {
    name: "Mushroom Swiss Burger",
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: ["Swiss", "Burger"],
    deliveryFee: "$2.49",
    distance: "2 miles away",
    imageUrl: "images/mushroom_swiss.jpg",
    menuUrl: "https://example.com/mushroomswiss",
  },
  {
    name: "Veggie Burger",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Vegetarian", "Burger"],
    deliveryFee: "$1.49",
    distance: "1.8 miles away",
    imageUrl: "images/veggie_burger.jpg",
    menuUrl: "https://example.com/veggieburger",
  },
  {
    name: "Spicy Jalapeno Burger",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Spicy", "Burger"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/spicy_jalapeno.jpg",
    menuUrl: "https://example.com/spicyjalapeno",
  },
];

const sushi = [
  {
    name: "California Roll",
    rating: 4.8,
    deliveryTime: "15-25 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$1.49",
    distance: "1.2 miles away",
    imageUrl: "images/california_roll.jpg",
    menuUrl: "https://example.com/californiaroll",
  },
  {
    name: "Spicy Tuna Roll",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/spicy_tuna_roll.jpg",
    menuUrl: "https://example.com/spicytuna",
  },
  {
    name: "Dragon Roll",
    rating: 4.6,
    deliveryTime: "25-35 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$1.99",
    distance: "1.5 miles away",
    imageUrl: "images/dragon_roll.jpg",
    menuUrl: "https://example.com/dragonroll",
  },
  {
    name: "Salmon Nigiri",
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$2.49",
    distance: "2 miles away",
    imageUrl: "images/salmon_nigiri.jpg",
    menuUrl: "https://example.com/salmonnigiri",
  },
  {
    name: "Eel Avocado Roll",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$1.49",
    distance: "1.8 miles away",
    imageUrl: "images/eel_avocado_roll.jpg",
    menuUrl: "https://example.com/eelavocado",
  },
  {
    name: "Rainbow Roll",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Japanese", "Sushi"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/rainbow_roll.jpg",
    menuUrl: "https://example.com/rainbowroll",
  },
];

const italian = [
  {
    name: "Margherita Pizza",
    rating: 4.8,
    deliveryTime: "15-25 min",
    cuisine: ["Italian", "Pizza"],
    deliveryFee: "$1.49",
    distance: "1.2 miles away",
    imageUrl: "images/margherita_pizza.jpg",
    menuUrl: "https://example.com/margheritapizza",
  },
  {
    name: "Lasagna Bolognese",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Italian", "Pasta"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/lasagna_bolognese.jpg",
    menuUrl: "https://example.com/lasagnabolognese",
  },
  {
    name: "Penne Arrabbiata",
    rating: 4.6,
    deliveryTime: "25-35 min",
    cuisine: ["Italian", "Pasta"],
    deliveryFee: "$1.99",
    distance: "1.5 miles away",
    imageUrl: "images/penne_arrabbiata.jpg",
    menuUrl: "https://example.com/pennearrabbiata",
  },
  {
    name: "Fettuccine Alfredo",
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: ["Italian", "Pasta"],
    deliveryFee: "$2.49",
    distance: "2 miles away",
    imageUrl: "images/fettuccine_alfredo.jpg",
    menuUrl: "https://example.com/fettuccinealfredo",
  },
  {
    name: "Spaghetti Carbonara",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Italian", "Pasta"],
    deliveryFee: "$1.49",
    distance: "1.8 miles away",
    imageUrl: "images/spaghetti_carbonara.jpg",
    menuUrl: "https://example.com/spaghetticarbonara",
  },
  {
    name: "Tiramisu",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Italian", "Dessert"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/tiramisu.jpg",
    menuUrl: "https://example.com/tiramisu",
  },
];

const chinese = [
  {
    name: "Kung Pao Chicken",
    rating: 4.8,
    deliveryTime: "20-30 min",
    cuisine: ["Chinese", "Chicken"],
    deliveryFee: "$1.99",
    distance: "1.2 miles away",
    imageUrl: "images/kung_pao_chicken.jpg",
    menuUrl: "https://example.com/kungpaochicken",
  },
  {
    name: "Sweet and Sour Pork",
    rating: 4.7,
    deliveryTime: "25-35 min",
    cuisine: ["Chinese", "Pork"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/sweet_sour_pork.jpg",
    menuUrl: "https://example.com/sweetsourpork",
  },
  {
    name: "Spring Rolls",
    rating: 4.6,
    deliveryTime: "15-25 min",
    cuisine: ["Chinese", "Appetizer"],
    deliveryFee: "$1.49",
    distance: "1.5 miles away",
    imageUrl: "images/spring_rolls.jpg",
    menuUrl: "https://example.com/springrolls",
  },
  {
    name: "Beef and Broccoli",
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: ["Chinese", "Beef"],
    deliveryFee: "$2.49",
    distance: "2 miles away",
    imageUrl: "images/beef_broccoli.jpg",
    menuUrl: "https://example.com/beefbroccoli",
  },
  {
    name: "Mapo Tofu",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Chinese", "Vegetarian"],
    deliveryFee: "$1.49",
    distance: "1.8 miles away",
    imageUrl: "images/mapo_tofu.jpg",
    menuUrl: "https://example.com/mapotofu",
  },
  {
    name: "Fried Rice",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Chinese", "Rice"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/fried_rice.jpg",
    menuUrl: "https://example.com/friedrice",
  },
];

const mexican = [
  {
    name: "Tacos al Pastor",
    rating: 4.8,
    deliveryTime: "20-30 min",
    cuisine: ["Mexican", "Tacos"],
    deliveryFee: "$1.99",
    distance: "1.2 miles away",
    imageUrl: "images/tacos_al_pastor.jpg",
    menuUrl: "https://example.com/tacosalpastor",
  },
  {
    name: "Burrito Supreme",
    rating: 4.7,
    deliveryTime: "25-35 min",
    cuisine: ["Mexican", "Burrito"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/burrito_supreme.jpg",
    menuUrl: "https://example.com/burritosupreme",
  },
  {
    name: "Quesadilla",
    rating: 4.6,
    deliveryTime: "15-25 min",
    cuisine: ["Mexican", "Cheese"],
    deliveryFee: "$1.49",
    distance: "1.5 miles away",
    imageUrl: "images/quesadilla.jpg",
    menuUrl: "https://example.com/quesadilla",
  },
  {
    name: "Enchiladas",
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: ["Mexican", "Spicy"],
    deliveryFee: "$2.49",
    distance: "2 miles away",
    imageUrl: "images/enchiladas.jpg",
    menuUrl: "https://example.com/enchiladas",
  },
  {
    name: "Churros",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisine: ["Mexican", "Dessert"],
    deliveryFee: "$1.49",
    distance: "1.8 miles away",
    imageUrl: "images/churros.jpg",
    menuUrl: "https://example.com/churros",
  },
  {
    name: "Guacamole and Chips",
    rating: 4.9,
    deliveryTime: "15-20 min",
    cuisine: ["Mexican", "Snack"],
    deliveryFee: "$2.00",
    distance: "1.4 miles away",
    imageUrl: "images/guacamole_chips.jpg",
    menuUrl: "https://example.com/guacamolechips",
  },
];

const restaurantList = document.getElementById("restaurant-list");
const restaurantDetails = document.getElementById("restaurant-details");

function displayRestaurants(restaurants) {
  restaurants.forEach((restaurant, index) => {
    const restaurantItem = document.createElement("div");
    restaurantItem.className = "restaurant-item";
    restaurantItem.innerHTML = `
           <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <div class="relative">
    <img
      src="${restaurant.imageUrl}"
      alt="${restaurant.name}"
      class="w-full object-cover"
      onerror="this.onerror=null; this.src='https://placehold.co/400x200'"
      width="400"
      height="200"
      style="height: 300px"
    />
    <div class="absolute top-4 left-4 bg-white px-2 py-1 rounded-lg text-sm font-semibold text-gray-800">
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-yellow-400 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <span>${restaurant.rating}</span>
      </div>
    </div>
    <div class="absolute top-4 right-4 bg-[#2EC4B6] px-2 py-1 rounded-lg text-sm font-semibold text-white">
      ${restaurant.deliveryTime}
    </div>
  </div>
  <div class="p-5">
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-xl font-bold text-gray-800">${restaurant.name}</h3>
      <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
        ${restaurant.deliveryFee}
      </span>
    </div>
    <div class="flex items-center text-gray-600 text-sm mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        ></path>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
      <span>${restaurant.distance}</span>
      <span class="mx-2">•</span>
      <span>${restaurant.cuisine}</span>
    </div>
    <button class="w-full bg-[#FF6B35] text-white py-2 rounded-lg hover:bg-[#e55a2a] transition-colors">
      View Menu
    </button>
  </div>
</div>;

        `;
    restaurantList.appendChild(restaurantItem);
  });
}

function disaplyAllRestaurants() {
  // Clear the restaurant list first
  restaurantList.innerHTML = "";

  // Define the number of restaurants to load initially and in each chunk
  const initialLoad = 6;
  const chunkSize = 6;
  let currentlyDisplayed = 0;

  // Function to display a chunk of restaurants
  function displayRestaurantChunk(restaurants, start, count) {
    const end = Math.min(start + count, restaurants.length);
    const chunk = restaurants.slice(start, end);
    console.log(chunk);

    displayRestaurants(chunk);
    currentlyDisplayed = end;

    // Show or hide the load more button based on whether there are more restaurants
    const loadMoreButton = document.getElementById("load-more-button");
    if (loadMoreButton) {
      loadMoreButton.style.display =
        currentlyDisplayed >= restaurants.length ? "none" : "inline-block";
    }
  }

  // Display initial set of restaurants
  displayRestaurantChunk(allrestaurants, 0, initialLoad);

  // Create a "Load More" button if it doesn't exist
  let loadMoreButton = document.getElementById("load-more-button");

  loadMoreButton.style.display =
    currentlyDisplayed >= allrestaurants.length ? "none" : "inline-block";
}
disaplyAllRestaurants();

function showTab(index) {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");
  console.log(index);

  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
  });

  if (contents.length > 0) {
    contents.forEach((content, i) => {
      content.classList.toggle("active", i === index);
    });
  }

  restaurantList.innerHTML = "";
  displayRestaurants(
    index === 0
      ? allrestaurants
      : index === 1
      ? pizzas
      : index === 2
      ? burgers
      : index === 3
      ? sushi
      : index === 4
      ? italian
      : index === 5
      ? chinese
      : mexican
  );
}
