export type Post = {
  id: string;
  title: string;
  description: string;
  created_at: string;
};

type BasePaginateQuery = {
  page?: number;
  limit?: number;
  search?: string;
};

export type PaginationQuery = Record<string, string | number> &
  BasePaginateQuery;
