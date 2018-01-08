export const fetchSongs = () => {
  return $.ajax({
    url: '/api/songs',
    method: 'GET'
  });
};

export const fetchSong = (id) => {
  return $.ajax({
    url: `/api/songs/${id}`,
    method: 'GET'
  });
};

export const createSong = (formData) => {
  return $.ajax({
    url: `/api/songs`,
    method: 'POST',
    processData: false,
    contentType: false,
    data: formData
  });
};

export const updateSong = ({formData, songId}) => {
  return $.ajax({
    url: `/api/songs/${songId}`,
    method: 'PATCH',
    processData: false,
    contentType: false,
    data: formData
  });
};

export const deleteSong = (songId) => {
  return $.ajax({
    url: `/api/songs/${songId}`,
    method: 'DELETE'
  });
};
