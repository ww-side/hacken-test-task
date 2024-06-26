import { TableProps, Image } from 'antd';
import type { CoinsTableType } from '@/types/coins-table.ts';
import st from './coins-table.module.scss';

export const getColumns = (
  currency: string,
): TableProps<CoinsTableType>['columns'] => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: CoinsTableType) => (
      <div className={st.column}>
        <Image src={record.image} preview={false} width={30} />
        <p className={st.columnText}>{text}</p>
      </div>
    ),
  },
  {
    title: 'Current Price',
    dataIndex: 'current_price',
    key: 'current_price',
    render: (text: string) => (
      <div className={st.column}>
        <p className={st.columnText}>
          {text} {currency}
        </p>
      </div>
    ),
  },
  {
    title: 'Circulating Supply',
    dataIndex: 'circulating_supply',
    key: 'circulating_supply',
  },
];
