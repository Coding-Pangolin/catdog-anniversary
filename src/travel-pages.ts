export function travelPageRange(total: number, requestedPage: number, pageSize = 3) {
  const size = Math.max(1, Math.floor(pageSize));
  const totalPages = Math.max(1, Math.ceil(total / size));
  const page = Math.max(0, Math.min(totalPages - 1, Math.floor(requestedPage)));
  return { page, totalPages, start: page * size, end: Math.min(total, (page + 1) * size) };
}
