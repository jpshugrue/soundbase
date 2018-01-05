json.extract! album, :id, :album_title, :release_date,
                      :album_credits, :artist_id
json.album_cover asset_path(album.album_cover(:original))
