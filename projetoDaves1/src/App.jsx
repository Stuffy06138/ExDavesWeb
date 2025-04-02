import { useState } from 'react'
import './App.css'
import RandomNumber from './components/RandomNumber/randomNumber'
import ProductTable from './components/Table/table'

function App() {
  const products = [
    { id: 1, name: "Caneta", price: "R$ 2,99" },
    { id: 2, name: "Lapis", price: "R$ 1,99" },
    { id: 3, name: "iPad", price: "R$ 5899,99" },
    { id: 4, name: "Samsung S20 Ultra", price: "R$ 6599,99" },
    { id: 5, name: "Notebook", price: "R$ 3409,99" },
    { id: 6, name: "Caderno", price: "R$ 19,99" },
    { id: 7, name: "Borracha", price: "R$ 4,99" },
    { id: 8, name: "Impressora", price: "R$ 889,99" },
    { id: 9, name: "Monitor 27", price: "R$ 799,99" },
    { id: 10, name: "Cadeira", price: "R$ 1239,99" },
  ];

  return (
    <div className="app-container">
      <RandomNumber min={1} max={60} />
      <ProductTable products={products} />
    </div>
  );
}

export default App
