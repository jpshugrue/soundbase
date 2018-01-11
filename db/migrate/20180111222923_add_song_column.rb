class AddSongColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :metadata, :text
  end
end
