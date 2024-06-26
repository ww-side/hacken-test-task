import { Flex, Typography } from 'antd';
import AppCodeWidget from '@/components/common/app-code-widget/';
import CoinsTable from '@/components/common/coins-table';
import Dropdown from '@/components/ui/dropdown';
import { useCoinsFilters } from '@/hooks/use-coins-filters.ts';
import { currencies, orders } from '@/data/coins-table.ts';

export default function App() {
  const {
    handleCurrencyClick,
    handleOrderClick,
    selectedOrderValue,
    selectedCurrencyValue,
  } = useCoinsFilters();

  return (
    <main>
      <Typography.Title level={3}>Coins & Markets</Typography.Title>
      <Flex gap={20}>
        <Dropdown
          placeholder="Currency"
          items={currencies}
          initialValue={selectedCurrencyValue}
          onClick={handleCurrencyClick}
        />
        <Dropdown
          placeholder="Order"
          items={orders}
          initialValue={selectedOrderValue}
          onClick={handleOrderClick}
        />
      </Flex>
      <CoinsTable />
      <AppCodeWidget />
    </main>
  );
}
