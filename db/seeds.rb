# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all

demoAccount = Artist.create(username: "demonstrator",
  password: "demopass",
  display_name: "The Demonstrators",
  background_color: "#cccccc",
  body_color: "#ffffff",
  text_color: "#000000",
  link_color: "#3333ff",
  profile_pic: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File1.jpg"),
  cover_image: File.new("#{Rails.root}/app/assets/images/cover_image_seeds/File205.jpg")
)

academicAccount = Artist.create(username: "Academic",
  password: "demopass",
  display_name: "Academ!c",
  background_color: "#ffffff",
  body_color: "#000000",
  text_color: "#ffff00",
  link_color: "#ff0000",
  profile_pic: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File28.jpg"),
  cover_image: File.new("#{Rails.root}/app/assets/images/cover_image_seeds/File61.jpg")
)

Album.destroy_all

demoAlbum1 = Album.create(
  album_title: "Self Titled Debut Album",
  release_date: "1999-01-08",
  album_credits: "All songs written and perfomed by The Demonstrators",
  artist_id: demoAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File100.jpg")
)

demoAlbum2 = Album.create(
  album_title: "Meet The Demonstrators",
  release_date: "2002-03-20",
  album_credits: "Produced by Steve Albini",
  artist_id: demoAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File88.jpg")
)

demoAlbum3 = Album.create(
  album_title: "The Demonstrators Greatest Hits Vol. 1",
  release_date: "2004-11-05",
  album_credits: "All tracks remixed from tape masters. Special thanks to Ampex",
  artist_id: demoAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File87.jpg")
)

demoAlbum4 = Album.create(
  album_title: "Untitled",
  release_date: "2014-08-01",
  album_credits: "Recorded at The Record Plant NYC",
  artist_id: demoAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File96.jpg")
)

demoAlbum5 = Album.create(
  album_title: "Hits To Hum To",
  release_date: "2016-02-10",
  album_credits: "Guitar and Vocals: Jimmy Demonstrator, Bass: Terry Demonstrator, Drums: Roland TR-808",
  artist_id: demoAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File5.jpg")
)

academicAlbum1 = Album.create(
  album_title: "App Jams Vol. I - Syntax Error",
  release_date: "2017-11-20",
  album_credits: "Credit where credit is due",
  artist_id: academicAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File16.jpg")
)

academicAlbum2 = Album.create(
  album_title: "App Jams Vol. II - Infinite Loop",
  release_date: "2018-01-01",
  album_credits: "Powered by MealPal",
  artist_id: academicAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File59.jpg")
)

Song.destroy_all

selftitlesong1 = Song.create(
  song_title: "Self Title Debut Song",
  track_number: "1",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file1.mp3")
)

selftitlesong2 = Song.create(
  song_title: "Second Helping",
  track_number: "2",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file2.mp3")
)

selftitlesong3 = Song.create(
  song_title: "What's A Telephone Bill?",
  track_number: "3",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file3.mp3")
)

selftitlesong4 = Song.create(
  song_title: "Intro",
  track_number: "4",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file4.mp3")
)

selftitlesong5 = Song.create(
  song_title: "Five O'Clock World",
  track_number: "5",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file5.mp3")
)

selftitlesong6 = Song.create(
  song_title: "Miami Calling",
  track_number: "6",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file6.mp3")
)
