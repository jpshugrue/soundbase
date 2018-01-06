import React from 'react';
import { Link } from 'react-router-dom';

const ArtistCover = ({ artist }) => (
  <Link to={`/artists/${artist.id}`}>
    <img className="artistCoverImage" src={artist.cover_image}></img>
  </Link>
);

export default ArtistCover;
