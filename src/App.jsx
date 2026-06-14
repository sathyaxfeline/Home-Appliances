import { useState } from "react";
import product1 from "./assets/product1.webp";
import product2 from "./assets/product2.jpeg";
import product3 from "./assets/product3.jpeg";
import product4 from "./assets/product4.jpeg";
import product5 from "./assets/product5.jpeg";
import product6 from "./assets/product6.jpeg";
import product7 from "./assets/product7.jpeg";
import product8 from "./assets/product8.jpeg";
import product9 from "./assets/product9.jpeg";
import product10 from "./assets/product10.webp";
import product11 from "./assets/product11.jpeg";
import product12 from "./assets/product12.jpeg";
import product13 from "./assets/product13.webp";
import product14 from "./assets/product14.jpg";
import product15 from "./assets/product15.jpg";
import product16 from "./assets/product16.jpg";
import product17 from "./assets/product17.jpg";
import product18 from "./assets/product18.jpeg";
import product19 from "./assets/product19.jpg";
import product20 from "./assets/product20.jpg";
import product21 from "./assets/product21.jpg";
import product22 from "./assets/product22.webp";
import product23 from "./assets/product23.jpg";
import product24 from "./assets/product24.png";
import product25 from "./assets/product25.webp";
import product26 from "./assets/product26.jpeg";
import product27 from "./assets/product27.jpeg";
import product28 from "./assets/product28.jpeg";
import product29 from "./assets/product29.jpeg";
import product30 from "./assets/product30.jpeg";
import product31 from "./assets/product31.jpeg";
import product32 from "./assets/product32.jpeg";
import product33 from "./assets/product33.jpeg";
import product34 from "./assets/product34.jpeg";
import product35 from "./assets/product35.jpeg";
import product36 from "./assets/product36.jpeg";
import product37 from "./assets/product37.jpeg";
import product38 from "./assets/product38.jpeg";
import product39 from "./assets/product39.jpeg";
import product40 from "./assets/product40.jpeg";
import product41 from "./assets/product41.jpeg";
import product42 from "./assets/product42.jpeg";
import product43 from "./assets/product43.jpeg";
import product44 from "./assets/product44.jpeg";
import product45 from "./assets/product45.jpeg";
import product46 from "./assets/product46.jpeg";
import product47 from "./assets/product47.jpeg";
import product48 from "./assets/product48.jpeg";
import product49 from "./assets/product49.jpeg";
import product50 from "./assets/product50.jpeg";
import sathya from "./assets/sathya.jpeg";
import maha from "./assets/maha.jpeg";
import keerthi from "./assets/keerthi.jpeg";

function App() {
  // Products are added directly in code. No Add Product form/card is shown.
  const [products] = useState([
    {
      id: 1,
      name: "Air Conditioner",
      price: 34999,
      category: "Cooling Appliances",
      image : product1
    },
    {
      id: 2,
      name: "Vacuum Cleaner",
      price: 7999,
      category: "Cleaning Appliances",
      image: product2
    },
    {
      id: 3,
      name: "Water Purifier",
      price: 12999,
      category: "Kitchen Appliances",
      image: product3
    },
    {
      id: 4,
      name: "Smart TV",
      price: 45999,
      category: "Entertainment Appliances",
      image: product4
    },
    {
      id: 5,
      name: "Dish Washer",
      price: 28999,
      category: "Kitchen Appliances",
      image: product5
    },
    {
      id: 6,
      name: "Air Cooler",
      price: 8999,
      category: "Cooling Appliances",
      image: product6
    },
    {
      id: 7,
      name: "Iron Box",
      price: 1499,
      category: "Home Essentials",
      image: product7
    },
    {
      id: 8,
      name: "Microwave Oven",
      price: 11999,
      category: "Kitchen Appliances",
      image: product8
    },
    {
      id: 9,
      name: "Room Heater",
      price: 4999,
      category: "Heating Appliances",
      image: product9
    },
    {
      id: 10,
      name: "Refrigerator",
      price: 32999,
      category: "Kitchen Appliances",
      image: product10
    },
    {
      id: 11,
      name: "Home Theatre",
      price: 15999,
      category: "Entertainment Appliances",
      image: product11
    },
    {
      id: 12,
      name: "Washing Machine",
      price: 24999,
      category: "Cleaning Appliances",
      image: product12
    },
    {
      id: 13,
      name: "Ceiling Fan",
      price: 2499,
      category: "Cooling Appliances",
      image: product13
    },
    {
      id: 14,
      name: "Mixer Grinder",
      price: 3499,
      category: "Kitchen Appliances",
      image: product14
    },
    {
      id: 15,
      name: "Electric Kettle",
      price: 1499,
      category: "Kitchen Appliances",
      image: product15
    },
    {
      id: 16,
      name: "Rice Cooker",
      price: 2999,
      category: "Kitchen Appliances",
      image: product16
    },
    {
      id: 17,
      name: "Toaster",
      price: 1299,
      category: "Kitchen Appliances",
      image: product17
    },
    {
      id: 18,
      name: "Coffee Maker",
      price: 4499,
      category: "Kitchen Appliances",
      image: product18
    },
    {
      id: 19,
      name: "Air Purifier",
      price: 8999,
      category: "Home Essentials",
      image: product19
    },
    {
      id: 20,
      name: "Water Heater",
      price: 7499,
      category: "Heating Appliances",
      image: product20
    },
    {
      id: 21,
      name: "Smart Door Lock",
      price: 12999,
      category: "Smart Home Devices",
      image: product21
    },
    {
      id: 22,
      name: "Induction Cooktop",
      price: 2999,
      category: "Kitchen Appliances",
      image: product22
    },
    {
      id: 23,
      name: "Kitchen Chimney",
      price: 10999,
      category: "Kitchen Appliances",
      image: product23
    },
    {
      id: 24,
      name: "Emergency Light",
      price: 999,
      category: "Home Essentials",
      image: product24
    },
    {
      id: 25,
      name: "Air Fryer",
      price: 5999,
      category: "Kitchen Appliances",
      image: product25
    },
    {
  id: 26,
  name: "Food Processor",
  price: 5499,
  category: "Kitchen Appliances",
  image: product26
},
{
  id: 27,
  name: "Electric Grill",
  price: 3999,
  category: "Kitchen Appliances",
  image: product27
},
{
  id: 28,
  name: "Trimmer",
  price: 1499,
  category: "Personal Care Appliances",
  image: product28
},
{
  id: 29,
  name: "Clothes Dryer",
  price: 18999,
  category: "Cleaning Appliances",
  image: product29
},
{
  id: 30,
  name: "Juicer",
  price: 2499,
  category: "Kitchen Appliances",
  image: product30
},
{
  id: 31,
  name: "Gas Stove",
  price: 5999,
  category: "Kitchen Appliances",
  image: product31
},
{
  id: 32,
  name: "Hair Dryer",
  price: 1299,
  category: "Personal Care Appliances",
  image: product32
},
{
  id: 33,
  name: "Egg Boiler",
  price: 999,
  category: "Kitchen Appliances",
  image: product33
},
{
  id: 34,
  name: "Humidifier",
  price: 2999,
  category: "Home Essentials",
  image: product34
},
{
  id: 35,
  name: "Sandwich Maker",
  price: 1499,
  category: "Kitchen Appliances",
  image: product35
},
{
  id: 36,
  name: "Popcorn Maker",
  price: 1799,
  category: "Kitchen Appliances",
  image: product36
},
{
  id: 37,
  name: "Sewing Machine",
  price: 8999,
  category: "Home Essentials",
  image: product37
},
{
  id: 38,
  name: "Hand Blender",
  price: 1199,
  category: "Kitchen Appliances",
  image: product38
},
{
  id: 39,
  name: "Inverter",
  price: 15999,
  category: "Home Essentials",
  image: product39
},
{
  id: 40,
  name: "Pressure Cooker",
  price: 2499,
  category: "Kitchen Appliances",
  image: product40
},
{
  id: 41,
  name: "Table Fan",
  price: 1999,
  category: "Cooling Appliances",
  image: product41
},
{
  id: 42,
  name: "Exhaust Fan",
  price: 1499,
  category: "Cooling Appliances",
  image: product42
},
{
  id: 43,
  name: "Wet and Dry Vacuum Cleaner",
  price: 6999,
  category: "Cleaning Appliances",
  image: product43
},
{
  id: 44,
  name: "Steam Iron",
  price: 2499,
  category: "Home Essentials",
  image: product44
},
{
  id: 45,
  name: "OTG Oven",
  price: 6999,
  category: "Kitchen Appliances",
  image: product45
},
{
  id: 46,
  name: "Water Dispenser",
  price: 7999,
  category: "Home Essentials",
  image: product46
},
{
  id: 47,
  name: "Roti Maker",
  price: 2999,
  category: "Kitchen Appliances",
  image: product47
},
{
  id: 48,
  name: "Mosquito Killer Lamp",
  price: 1499,
  category: "Home Essentials",
  image: product48
},
{
  id: 49,
  name: "Tower Fan",
  price: 4999,
  category: "Cooling Appliances",
  image: product49
},
{
  id: 50,
  name: "Robot Vacuum Cleaner",
  price: 14999,
  category: "Cleaning Appliances",
  image: product50
}

]);

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
    const categoryMatch = category === "All" || product.category === category;
    return searchMatch && categoryMatch;
  });

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <h1>Moon Home Appliances</h1>
        <a href="#cart-section" className="cart-btn">
          Cart: {cart.length}
        </a>
      </nav>

      <section className="hero">
  <h2>Home Appliances</h2>
  <p>
    Discover premium home appliances for comfort, convenience,
    and modern living.
  </p>
</section> 

{/* About Section */}
<section className="about-101">
  <div className="about-102">
    <div className="about-103">
      <h2>About Moon Home Appliances</h2>
  

      <p>
        Welcome to Moon Home Appliances, your trusted destination for
        high-quality home appliances designed to make everyday life
        easier, smarter, and more comfortable.
      </p>

      <p>
        Explore our wide range of products including kitchen appliances,
        cooling appliances, cleaning appliances, heating appliances,
        smart home devices, and home essentials.
      </p>

      <button className="about-104">
        Explore Products
      </button>
    </div>
    </div>
    </section>


<section className="filters">
        <input type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Cooling Appliances">Cooling appliances</option>
          <option value="Cleaning Appliances">Cleaning Appliances</option>
          <option value="Kitchen Appliances">Kitchen Appliances</option>
          <option value="Entertainment Appliances">Entertainment Appliances</option>
          <option value="Heating Appliances">Heating Appliances</option>
          <option value="Home Essentials">Home Essentials</option>
          <option value="Personal Care Appliances">Personal Care Appliances</option>
          <option value="Smart Home Devices">Smart Home Devices</option>
        </select>
        </section>

      <main className="main-container">
        <section className="products">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <h4>₹{product.price}</h4>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </section>

        <aside className="cart" id="cart-section">
          <h2>Cart Items</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>

                <div className="quantity-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>Subtotal: ₹{item.price * item.quantity}</p>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
                </div>
            ))
          )}

          <h3>Total: ₹{totalAmount}</h3>
        </aside>
        </main>
  
    <div className="about-105">
      <img src={sathya} alt="sathya" className="about-106" />
      <img src={maha} alt="maha" className="about-107" />
      <img src={keerthi} alt="keerthi" className="about-108" />
    </div>
      <footer className="footer">
  <p>© 2026 Moon Home Appliances | Created by Sathya, Maha Lakshmi and Keerthika</p>
</footer>  
    </div>
  );
}


export default App;