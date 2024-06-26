import { useState } from 'react';
import type { CoinsTableType } from '@/types/coins-table.ts';

export function useCoinsTable() {
  const [tableData, setTableData] = useState<CoinsTableType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleChangePageSize = (
    currentSize: number,
    size: number | undefined,
  ) => {
    setCurrentPage(1);
    setPageSize(size || currentSize);
  };

  return {
    tableData,
    isLoading,
    currentPage,
    pageSize,
    handleChangePage,
    handleChangePageSize,
    setTableData,
    setIsLoading,
  };
}
