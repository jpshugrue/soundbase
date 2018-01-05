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
  for (const album in albums) {
    if (album.artist_id === artistId) {
      selectAlbums.push(album);
    }
  }
  return selectAlbums;
};
