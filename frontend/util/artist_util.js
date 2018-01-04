export const fetchArtists = () => {
  return $.ajax({
    url: '/api/artists',
    method: 'GET'
  });
};

export const fetchArtist = (id) => {
  return $.ajax({
    url: `/api/artists/${id}`,
    method: 'GET'
  });
};

export const updateArtist = (artist) => {
  return $.ajax({
    url: `/api/artists/${artist.id}`,
    method: 'PATCH',
    data: { artist }
  });
};
