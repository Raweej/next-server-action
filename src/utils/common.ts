import { PaginationQuery } from "@/types/common";

export const getQueryPagination = (
  searchParams: URLSearchParams
): PaginationQuery => {
  // set default values for page and limit
  const PAGINATE = {
    PAGE_DEFAULT: 1,
    LIMIT_DEFAULT: 20,
  };
  const entries = Array.from(searchParams.entries());

  // set default values for page and limit
  const filter: PaginationQuery = {
    page: PAGINATE.PAGE_DEFAULT,
    limit: PAGINATE.LIMIT_DEFAULT,
  };

  for (const [key, value] of entries) {
    filter[key] = value;
  }
  return filter;
};
