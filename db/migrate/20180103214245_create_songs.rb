class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :song_title, null: false
      t.integer :track_number, null: false
      t.integer :artist_id, null: false
      t.integer :album_id, null: false
    end
    add_index :songs, :artist_id, unique: true
    add_index :songs, :album_id, unique: true
  end
end
