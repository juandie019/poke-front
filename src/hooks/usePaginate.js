import { useState } from "react";

export const usePagination = (page = 0) => {
  const [pagintation, setPagination] = useState({
    page: 0,
    next: false,
    previous: false,
  });

  const [changePage, setChangePage] = useState(page);

  return {
    pagintation,
    changePage,
    setChangePage,
    setPagination,
  };
};
