import axios from 'axios';

export default async function getCoinsData(
  page: number,
  currency: string,
  order: string,
  pageSize: number,
) {
  return await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/coins/markets?vs_currency=${currency}&order=${order}&per_page=${pageSize}&page=${page}&sparkline=false`,
  );
}
