export const selectArtist = ({ artists }, id) => {
   const artist = artists[id] || {};
   return artist;
};

export const selectAlbum = ({ albums }, id) => {
   const album = albums[id] || {};
   return album;
};

export const selectAlbums = ({ albums }, artistId) => {
  let selectedAlbums = [];
  for (const albumId in albums) {
    if (albums[albumId].artist_id === artistId) {
      selectedAlbums.push(albums[albumId]);
    }
  }
  return selectedAlbums;
};
