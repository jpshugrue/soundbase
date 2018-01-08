json.extract! artist, :id, :username, :display_name,
                      :background_color, :body_color,
                      :text_color, :link_color
json.profile_pic asset_path(artist.profile_pic(:original))
json.cover_image asset_path(artist.cover_image(:original))
json.album_ids do
  (json.array! (artist.albums.collect { |album| album.id }))
end
