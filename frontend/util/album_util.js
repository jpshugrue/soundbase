export const fetchAlbums = () => {
  return $.ajax({
    url: '/api/albums',
    method: 'GET'
  });
};

export const fetchAlbum = (id) => {
  return $.ajax({
    url: `/api/albums/${id}`,
    method: 'GET'
  });
};

export const createAlbum = (formData) => {
  return $.ajax({
    url: `/api/albums`,
    method: 'POST',
    processData: false,
    contentType: false,
    data: formData
  });
};

export const updateAlbum = ({formData, albumId}) => {
  return $.ajax({
    url: `/api/albums/${albumId}`,
    method: 'PATCH',
    processData: false,
    contentType: false,
    data: formData
  });
};

export const deleteAlbum = (albumId) => {
  return $.ajax({
    url: `/api/albums/${albumId}`,
    method: 'DELETE'
  });
};
