class AddAlbumsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :album_title, null: false
      t.date :release_date, null: false
      t.string :album_credits, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end
    add_index :albums, :artist_id, unique: true
  end
end
