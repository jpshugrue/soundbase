# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180111222923) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "album_title", null: false
    t.date "release_date", null: false
    t.string "album_credits", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "album_cover_file_name"
    t.string "album_cover_content_type"
    t.integer "album_cover_file_size"
    t.datetime "album_cover_updated_at"
  end

  create_table "artists", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "display_name", null: false
    t.string "background_color", null: false
    t.string "body_color", null: false
    t.string "text_color", null: false
    t.string "link_color", null: false
    t.string "profile_pic_file_name"
    t.string "profile_pic_content_type"
    t.integer "profile_pic_file_size"
    t.datetime "profile_pic_updated_at"
    t.string "cover_image_file_name"
    t.string "cover_image_content_type"
    t.integer "cover_image_file_size"
    t.datetime "cover_image_updated_at"
    t.index ["session_token"], name: "index_artists_on_session_token", unique: true
    t.index ["username"], name: "index_artists_on_username", unique: true
  end

  create_table "songs", force: :cascade do |t|
    t.string "song_title", null: false
    t.integer "track_number", null: false
    t.integer "artist_id", null: false
    t.integer "album_id", null: false
    t.string "song_file_file_name"
    t.string "song_file_content_type"
    t.integer "song_file_file_size"
    t.datetime "song_file_updated_at"
    t.text "metadata"
  end

end
