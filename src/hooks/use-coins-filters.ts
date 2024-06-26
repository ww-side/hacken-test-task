import { useState } from 'react';
import { MenuProps } from 'antd';
import { currencies, orders } from '@/data/coins-table.ts';

export function useCoinsFilters() {
  const [currency, setCurrency] = useState<string>('usd');
  const [order, setOrder] = useState<string>('market_cap_desc');

  const handleCurrencyClick: MenuProps['onClick'] = ({ key }) => {
    setCurrency(key);
  };

  const handleOrderClick: MenuProps['onClick'] = ({ key }) => {
    setOrder(key);
  };

  const selectedCurrencyValue = currencies.find(
    item => item.key === currency,
  )?.label;
  const selectedOrderValue = orders.find(item => item.key === order)?.label;

  return {
    currency,
    order,
    handleCurrencyClick,
    handleOrderClick,
    selectedCurrencyValue,
    selectedOrderValue,
  };
}
