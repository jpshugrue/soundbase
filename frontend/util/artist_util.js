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

export const updateArtist = ({formData, artistId}) => {
  return $.ajax({
    url: `/api/artists/${artistId}`,
    method: 'PATCH',
    processData: false,
    contentType: false,
    data: formData
  });
};
