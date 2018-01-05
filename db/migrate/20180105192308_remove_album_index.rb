class RemoveAlbumIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :albums, :artist_id
    remove_index :songs, :album_id
    remove_index :songs, :artist_id
  end
end
