import express from 'express';
import sqlite from 'better-sqlite3';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MENU_ITEMS = [
  {
    id: "mi-1",
    slug: "classic-mac-and-cheese",
    name: "Classic Mac & Cheese",
    price: "8.99",
    description: "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
    image: "images/mac-and-cheese.jpg",
    type: "appetizer"
  },
  {
    id: "mi-2",
    slug: "margherita-pizza",
    name: "Margherita Pizza",
    price: "12.99",
    description: "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
    image: "images/margherita-pizza.jpg",
    type: "entree"
  },
  {
    id: "mi-3",
    slug: "caesar-salad",
    name: "Caesar Salad",
    price: "7.99",
    description: "Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.",
    image: "images/caesar-salad.jpg",
    type: "appetizer"
  },
  {
    id: "mi-4",
    slug: "spaghetti-carbonara",
    name: "Spaghetti Carbonara",
    price: "10.99",
    description: "Al dente spaghetti with a creamy sauce made from egg yolk, pecorino cheese, pancetta, and pepper.",
    image: "images/spaghetti-carbonara.jpg",
    type: "entree"
  },
  {
    id: "mi-5",
    slug: "black-bean-veggie-burger",
    name: "Black Bean Veggie Burger",
    price: "9.99",
    description: "A juicy veggie patty served on a whole grain bun with lettuce, tomato, and a tangy sauce.",
    image: "images/veggie-burger.jpg",
    type: "entree"
  },
  {
    id: "mi-6",
    slug: "grilled-chicken-sandwich",
    name: "Grilled Chicken Sandwich",
    price: "10.99",
    description: "Tender grilled chicken breast with avocado, bacon, lettuce, and honey mustard on a toasted bun.",
    image: "images/grilled-chicken-sandwich.jpg",
    type: "entree"
  },
  {
    id: "mi-7",
    slug: "steak-frites",
    name: "Steak Frites",
    price: "17.99",
    description: "Succulent steak cooked to your preference, served with crispy golden fries and herb butter.",
    image: "images/steak-frites.jpg",
    type: "entree"
  },
  {
    id: "mi-8",
    slug: "sushi-roll-platter",
    name: "Sushi Roll Platter",
    price: "15.99",
    description: "An assortment of fresh sushi rolls including California, Spicy Tuna, and Eel Avocado.",
    image: "images/sushi-roll-platter.jpg",
    type: "entree"
  },
  {
    id: "mi-9",
    slug: "spicy-chicken-curry",
    name: "Spicy Chicken Curry",
    price: "13.99",
    description: "Tender pieces of chicken simmered in a rich and aromatic curry sauce, served with basmati rice.",
    image: "images/chicken-curry.jpg",
    type: "entree"
  },
  {
    id: "m-10",
    slug: "vegan-buddha-bowl",
    name: "Vegan Buddha Bowl",
    price: "11.99",
    description: "A hearty bowl filled with quinoa, roasted veggies, avocado, and a tahini dressing.",
    image: "images/vegan-buddha-bowl.jpg",
    type: "entree"
  },
  {
    id: "mi-11",
    slug: "seafood-paella",
    name: "Seafood Paella",
    price: "19.99",
    description: "A Spanish delicacy filled with saffron-infused rice, shrimp, mussels, and chorizo.",
    image: "images/seafood-paella.jpg",
    type: "entree"
  },
  {
    id: "mi-12",
    slug: "fluffy-flapjack-pancakes",
    name: "Fluffy Flapjack Pancakes",
    price: "8.99",
    description: "Fluffy pancakes stacked high, drizzled with maple syrup and topped with fresh berries.",
    image: "images/pancake-stack.jpg",
    type: "entree"
  },
  {
    id: "mi-13",
    slug: "miso-ramen",
    name: "Miso Ramen",
    price: "12.99",
    description: "A warming bowl of ramen with miso broth, tender pork, soft-boiled egg, and green onions.",
    image: "images/miso-ramen.jpg",
    type: "entree"
  },
  {
    id: "mi-14",
    slug: "beef-tacos",
    name: "Beef Tacos",
    price: "9.99",
    description: "Three soft tortillas filled with seasoned beef, fresh salsa, cheese, and sour cream.",
    image: "images/beef-tacos.jpg",
    type: "entree"
  },
  {
    id: "mi-15",
    slug: "chocolate-fudge-brownie",
    name: "Chocolate Fudge Brownie",
    price: "5.99",
    description: "A rich and fudgy brownie, topped with a scoop of vanilla ice cream and chocolate sauce.",
    image: "images/chocolate-brownie.jpg",
    type: "dessert"
  },
  {
    id: "mi-16",
    slug: "creamy-lobster-bisque",
    name: "Creamy Lobster Bisque",
    price: "14.99",
    description: "A creamy soup made from lobster stock, aromatic vegetables, and a touch of brandy.",
    image: "images/lobster-bisque.jpg",
    type: "appetizer"
  },
  {
    id: "mi-17",
    slug: "mushroom-risotto",
    name: "Mushroom Risotto",
    price: "13.99",
    description: "Creamy Arborio rice cooked with a medley of wild mushrooms and finished with parmesan.",
    image: "images/mushroom-risotto.jpg",
    type: "entree"
  },
  {
    id: "mi-18",
    slug: "eggplant-parmesan",
    name: "Eggplant Parmesan",
    price: "11.99",
    description: "Layers of breaded eggplant, marinara sauce, and melted mozzarella and parmesan cheeses.",
    image: "images/eggplant-parmesan.jpg",
    type: "entree"
  },
  {
    id: "mi-19",
    slug: "lemon-cheesecake",
    name: "Lemon Cheesecake",
    price: "6.99",
    description: "A creamy cheesecake with a tangy lemon flavor, served on a crumbly biscuit base.",
    image: "images/lemon-cheesecake.jpg",
    type: "dessert"
  },
  {
    id: "mi-20",
    slug: "falafel-gyro-with-feta-tzatziki",
    name: "Falafel Gyro with Feta Tzatziki",
    price: "8.99",
    description: "Crispy falafels wrapped in a warm pita with lettuce, tomatoes, and a feta tzatziki sauce.",
    image: "images/falafel-wrap.jpg",
    type: "entree"
  },
];

const db = sqlite('data.db');

function initDb() {
  db.prepare(
    'CREATE TABLE IF NOT EXISTS menu_items (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, name TEXT, price TEXT, description TEXT, image TEXT, type TEXT)'
  ).run();

  const { count } = db.prepare('SELECT COUNT(*) as count FROM menu_items').get();

  if (count === 0) {
    const insert = db.prepare(
      'INSERT INTO menu_items (slug, name, price, description, image, type) VALUES (?, ?, ?, ?, ?, ?)'
    );

    MENU_ITEMS.forEach((item) => {
      insert.run(item.slug, item.name, item.price, item.description, item.image, item.type);
    });
  }
}

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())

app.get('/menu-items', (req, res) => {
  const items = db.prepare('SELECT * FROM menu_items').all();
  res.json(items);
});

initDb();

app.listen(8080);
