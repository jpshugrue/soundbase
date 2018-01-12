![alt text](https://github.com/jpshugrue/soundbase/blob/master/app/assets/images/home_page_logo.png "Soundbase Logo")

[Soundbase Live](https://aa-soundbase.herokuapp.com/#/)

Soundbase is a full-stack web application base on the music sharing website Bandcamp. It enables musicians to share their music with fans. It is built using Ruby on Rails, a PostgreSQL databse and React with Redux.

# Features

## Search

Soundbase features a live updating drop down search bar which displays artists, albums and song names which contain the text of the search query. This was implemented by making AJAX requests to the respective database tables and receiving the search entry information as JSON to be render. Each item in the search list is a link that takes the user to the respective artist page or album page.

## Artist Pages

Each user on Soundbase is also an artist with their own artist page which they can customize using a cover image, profile picture and display name. The user is able to modify the color scheme of their artist and album pages through the edit profile dropdown link. They have individual color control for the background, body of the page, normal text color and link text color. These values are included in the artist information that is pulled from the database and are set using inline CSS when the respective component renders. On the backend, each artist in the artist table is joined to their respective albums in the albums table on a unique album_id. The artist page displays links to their respective albums with the album name and artwork. The artist page also features a link to add a new album when the current artist that is logged in is the same as the artist displayed.

## Album Pages

The album page features a list of associated songs, the song player and the album cover, title, release date and credits of the album. Each album in the album table is joined to entries in the song table by a song_id. Each song has a title, track number and an associated audio file. Track lengths for each song are extracted from the mp3 file metadata using the mp3info Ruby gem.

## Song Player

The song player makes use of a hidden HTML audio embed element and is controlled using a play button and range input slider with custom CSS applied. The song player has a list of all songs featured on the album and a user can use the forward and backward links to move sequentially through the album. Each song in the list has an associated download link that is displayed when the user hovers over the song name.

# What's next for Soundbase?

The features I intend to implement in the future include:

## Purchasing Songs and Albums
Add the ability for artists to list their songs and albums with prices and to restrict song streaming if desired. Users will be able to purchase music through credit card or an external payment service such as Paypal.

## Follows and Likes
Enable users to follow specific artists and have their latest releases appear in a specific feed on the home page

## Expanded Search
