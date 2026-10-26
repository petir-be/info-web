import Icon from "./Icon";
import { getPaginationRange } from "../utils/paginationRange";

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  isLoading = false,
  hideOnSinglePage = false,
  showPageInfo = true,
  className = "",
}) {
  if (totalPages <= 0 || (totalPages === 1 && hideOnSinglePage)) return null;

  return <nav className={`plant-pagination ${className}`} aria-label="Plant results pages">
    <div className="pagination-controls">
      <button type="button" aria-label="Previous page" disabled={currentPage === 1 || isLoading}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}>
        <Icon name="chevronLeft" size={14} />
      </button>
      {getPaginationRange(currentPage, totalPages).map((page, index) => page === "..." ?
        <span className="pagination-dots" key={`dots-${index}`} aria-hidden="true">…</span> :
        <button type="button" className="pagination-number" key={page} aria-label={`Page ${page}`}
          aria-current={page === currentPage ? "page" : undefined} disabled={isLoading}
          onClick={() => onPageChange(page)}>{page}</button>
      )}
      <button type="button" aria-label="Next page" disabled={currentPage === totalPages || isLoading}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}>
        <Icon name="chevronRight" size={14} />
      </button>
    </div>
    {showPageInfo && <p className="pagination-info">Page {currentPage} of {totalPages}</p>}
  </nav>;
}
