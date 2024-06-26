import { useEffect } from 'react';
import { message, Spin, Table } from 'antd';
import { getColumns } from '@/components/common/coins-table/columns.tsx';
import { useCoinsTable } from '@/hooks/use-coins-table.ts';
import getCoinsData from '@/api/get-coins-data.ts';
import st from './coins-table.module.scss';
import { useCoinsFilters } from '@/hooks/use-coins-filters.ts';

export default function CoinsTable() {
  const {
    pageSize,
    handleChangePageSize,
    handleChangePage,
    currentPage,
    setTableData,
    tableData,
    setIsLoading,
    isLoading,
  } = useCoinsTable();
  const { currency, order } = useCoinsFilters();
  const columns = getColumns(currency);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await getCoinsData(currentPage, currency, order, pageSize);
        setTableData(res.data);
        console.log(res.data);
      } catch (e) {
        console.error(e);
        message.error('Data was not loading');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, currency, order, pageSize]);

  return (
    <section className={st.tableContainer}>
      {isLoading && (
        <div className={st.loaderWrapper}>
          <Spin />
        </div>
      )}
      <Table
        rowKey="id"
        rootClassName={st.tableWrapper}
        columns={columns}
        dataSource={tableData}
        pagination={{
          current: currentPage,
          total: 10000,
          pageSize: pageSize,
          showQuickJumper: false,
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '20', '50', '100'],
          onChange: handleChangePage,
          onShowSizeChange: (current, size) =>
            handleChangePageSize(current, size),
        }}
      />
    </section>
  );
}
