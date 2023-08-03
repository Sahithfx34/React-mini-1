import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App(){
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header(){
  return( <header className="header">
    <h1>Fast React Pizza Co.</h1>
    </header>);
}
function Menu(){
  const pizzas = pizzaData;
  const numpizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numpizzas > 0 && 
      <>
        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
        <ul className="pizzas">
          {pizzaData.map(pizza => <Pizza pizzaobj ={pizza} key = {pizza.name}/>)}
        </ul>
      </>
}
      
    </main>);
}
function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen);
  return(
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      ):(<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>)}
    </footer>
  );
}
function Pizza({pizzaobj}){
  return (
    <div className= {`pizza ${pizzaobj.soldOut ? "sold-out" : "" }`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name}></img>
      <li>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price+3}</span>
      </li>
    </div>);
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode><App /></React.StrictMode>)
