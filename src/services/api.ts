import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
});

export const fetchCryptoPrice = async (crypto: string): Promise<string> => {
  try {
    const response = await api.get('/simple/price', {
      params: { ids: crypto, vs_currencies: 'usd' },
    });
    return response.data[crypto]?.usd.toString() || 'N/A';
  } catch (error: unknown) {
    console.error('Error fetching price:', error instanceof Error ? error.message : String(error));
    return 'Error fetching price.';
  }
};
