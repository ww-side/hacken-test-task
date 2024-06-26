import axios from 'axios';

export default async function getCoinsData(
  page: number,
  currency: string,
  order: string,
  pageSize: number,
) {
  return await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${order}&per_page=${pageSize}&page=${page}&sparkline=false`,
  );
}
