import React, { useState } from 'react';
import { fetchCryptoPrice } from '../services/api';

const PriceDisplay: React.FC = () => {
  const [crypto, setCrypto] = useState('');
  const [price, setPrice] = useState<string | null>(null);

  const handleFetchPrice = async () => {
    const fetchedPrice = await fetchCryptoPrice(crypto.toLowerCase());
    setPrice(fetchedPrice);
  };

  return (
    <div>
      <h2>Check Crypto Prices</h2>
      <input
        type="text"
        placeholder="Enter cryptocurrency (e.g., ethereum)"
        value={crypto}
        onChange={(e) => setCrypto(e.target.value)}
      />
      <button onClick={handleFetchPrice}>Get Price</button>
      {price && <p>The price of {crypto} is: ${price}</p>}
    </div>
  );
};

export default PriceDisplay;
