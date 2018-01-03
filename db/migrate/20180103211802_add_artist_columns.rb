class AddArtistColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :artists, :display_name, :string, null: false
    add_column :artists, :background_color, :string, null: false
    add_column :artists, :body_color, :string, null: false
    add_column :artists, :text_color, :string, null: false
    add_column :artists, :link_color, :string, null: false
  end
end
