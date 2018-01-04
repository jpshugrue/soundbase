export const selectArtist = ({ artists }, id) => {
   const artist = artists[id] || {};
   return artist;
};
