export const signup = (artist) => {
  return $.ajax({
    url: '/api/artists',
    method: 'POST',
    data: { artist }
  });
};

export const login = (artist) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { artist }
  });
};

export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
