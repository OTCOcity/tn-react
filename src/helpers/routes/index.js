export const postPath = (id = ':id') => `/posts/${id}`;
export const pagePath = (page = ':page') => page ? `?page=${page}` : '/';
export const postEditPath = (id = ':id') => `/posts/${id}/edit`;