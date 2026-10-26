export function getPaginationRange(currentPage, totalPages) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

  const start = currentPage <= 4 ? 1 : currentPage >= totalPages - 3 ? totalPages - 4 : currentPage - 1;
  const end = currentPage <= 4 ? 5 : currentPage >= totalPages - 3 ? totalPages : currentPage + 1;
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  return [
    ...(start > 1 ? [1, "..."] : []),
    ...pages,
    ...(end < totalPages ? ["...", totalPages] : []),
  ];
}
