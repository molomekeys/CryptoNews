import './App.css';
import React, { useState, useEffect } from 'react';
import CryptoCard from './component/CryptoCard';
import Navbar from './component/Navbar';
function App() {
  const [isData, setIsData] = useState([]);
  useEffect(() => {
    fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=USD').then((res) => res.json()).then((data) => {

      setIsData(data.coins);
    })
  }, [])
  const allElement = isData?.slice(0, 4).map((e) => {
    return <CryptoCard key={e.id} name={e.name}
      price={e.price} icon={e.icon}
    />
  })
  console.log(allElement);
  console.log(isData);
  return (
    <div className='App'>
      <Navbar />
      <div className='cryptoCardContainer'>

        {allElement}
      </div >
    </div>
  );
}

export default App;
