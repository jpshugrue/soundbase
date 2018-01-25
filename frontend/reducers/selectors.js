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

export const selectSongs = ({ songs }, albumId) => {
  let selectedSongs = [];
  for (const songId in songs) {
    if (songs[songId].album_id === albumId) {
      selectedSongs.push(songs[songId]);
    }
  }
  selectedSongs.sort((a,b) => {
    return a.track_number - b.track_number;
  });
  return selectedSongs;
};
