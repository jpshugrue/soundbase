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
