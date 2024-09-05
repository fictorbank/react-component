export type PaginationWithCursor = {
  count: number;
  limit: number;
  currentCursor: string;
  nextCursor: string;
};
