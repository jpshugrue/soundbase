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

// export const updateArtist = (artist) => {
//   return $.ajax({
//     url: `/api/artists/${artist.id}`,
//     method: 'PATCH',
//     data: { artist }
//   });
// };

export const updateArtist = ({formData, artistId}) => {
  return $.ajax({
    url: `/api/artists/${artistId}`,
    method: 'PATCH',
    processData: false,
    contentType: false,
    data: formData
  });
};

// createPost: function(formData) {
//   $.ajax({
//     url: '/api/posts',
//     type: 'POST',
//     processData: false,
//     contentType: false,
//     dataType: 'json',
//     data: formData,
//     success: function(post) {
//       PostActions.receivePost(post);
//     }
//   })
// }
