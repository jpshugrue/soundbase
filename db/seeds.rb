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

academicAccount = Artist.create(username: "academic",
  password: "demopass",
  display_name: "Academ!c",
  background_color: "#ffffff",
  body_color: "#000000",
  text_color: "#ffff00",
  link_color: "#ff0000",
  profile_pic: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File28.jpg"),
  cover_image: File.new("#{Rails.root}/app/assets/images/cover_image_seeds/File61.jpg")
)

cohortAccount = Artist.create(username: "wintercohort",
  password: "demopass",
  display_name: "Winter Cohort",
  background_color: "#666666",
  body_color: "#ffffff",
  text_color: "#f50601",
  link_color: "#069b01",
  profile_pic: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File63.jpg"),
  cover_image: File.new("#{Rails.root}/app/assets/images/cover_image_seeds/File204.jpg")
)

Album.destroy_all

demoAlbum1 = Album.create(
  album_title: "Self Titled Debut Album",
  release_date: "1999-01-08",
  album_credits: "All songs written and performed by The Demonstrators",
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
  album_title: "Greatest Hits Vol. 1",
  release_date: "2004-11-05",
  album_credits: "All tracks remixed from tape masters. Special thanks to Ampex",
  artist_id: demoAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File87.jpg")
)

academicAlbum1 = Album.create(
  album_title: "Untitled",
  release_date: "2014-08-01",
  album_credits: "Recorded at The Record Plant NYC",
  artist_id: academicAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File96.jpg")
)

academicAlbum2 = Album.create(
  album_title: "Hits To Hum To",
  release_date: "2016-02-10",
  album_credits: "Drums: Roland TR-808",
  artist_id: academicAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File5.jpg")
)

cohortAlbum1 = Album.create(
  album_title: "Debug This",
  release_date: "2017-11-06",
  album_credits: "Special thanks to the TA's",
  artist_id: cohortAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File102.png")
)

cohortAlbum2 = Album.create(
  album_title: "App Jams Vol. I - Syntax Error",
  release_date: "2017-11-20",
  album_credits: "Credit where credit is due",
  artist_id: cohortAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File16.jpg")
)

cohortAlbum3 = Album.create(
  album_title: "App Jams Vol. II - Infinite Loop",
  release_date: "2018-01-01",
  album_credits: "Powered by MealPal",
  artist_id: cohortAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File59.jpg")
)

Song.destroy_all

selftitlesong1 = Song.create(
  song_title: "Self Titled Debut Song",
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
  song_file: File.new("#{Rails.root}/app/assets/songs/file5.mp3")
)

selftitlesong3 = Song.create(
  song_title: "Intro",
  track_number: "3",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file10.mp3")
)

selftitlesong4 = Song.create(
  song_title: "Atichaur",
  track_number: "4",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file15.mp3")
)

selftitlesong5 = Song.create(
  song_title: "Gladness",
  track_number: "5",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file20.mp3")
)

selftitlesong6 = Song.create(
  song_title: "The Sky's Process",
  track_number: "6",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file25.mp3")
)

meetthesong1 = Song.create(
  song_title: "Relationship",
  track_number: "1",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file2.mp3")
)

meetthesong2 = Song.create(
  song_title: "The Echoing Moon",
  track_number: "2",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file7.mp3")
)

meetthesong3 = Song.create(
  song_title: "Soundwaves of Apartment",
  track_number: "3",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file16.mp3")
)

meetthesong4 = Song.create(
  song_title: "Composing Diffidence",
  track_number: "4",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file22.mp3")
)

meetthesong5 = Song.create(
  song_title: "Suit Behind the Emotions",
  track_number: "5",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file35.mp3")
)

greatesthitssong1 = Song.create(
  song_title: "Voice of Verisimilitude",
  track_number: "1",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file34.mp3")
)

greatesthitssong2 = Song.create(
  song_title: "The Happy Beginning",
  track_number: "2",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file23.mp3")
)

greatesthitssong3 = Song.create(
  song_title: "Vandals",
  track_number: "3",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file6.mp3")
)

untitledsong1 = Song.create(
  song_title: "All Suspicion",
  track_number: "1",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file3.mp3")
)

untitledsong2 = Song.create(
  song_title: "Feverish Reader",
  track_number: "2",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file30.mp3")
)

untitledsong3 = Song.create(
  song_title: "Natural Danger",
  track_number: "3",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file19.mp3")
)

untitledsong4 = Song.create(
  song_title: "Disruptive Colloborator",
  track_number: "4",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file9.mp3")
)

humsong1 = Song.create(
  song_title: "Mad Healing",
  track_number: "1",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file18.mp3")
)

humsong2 = Song.create(
  song_title: "Rain",
  track_number: "2",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file29.mp3")
)

humsong3 = Song.create(
  song_title: "Telephone",
  track_number: "3",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file13.mp3")
)

humsong4 = Song.create(
  song_title: "Exploding Fire",
  track_number: "4",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file39.mp3")
)

humsong5 = Song.create(
  song_title: "Growth Through Thoughts",
  track_number: "5",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file11.mp3")
)

debugsong1 = Song.create(
  song_title: "Check In",
  track_number: "1",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file4.mp3")
)

debugsong2 = Song.create(
  song_title: "What'd you get for MealPal",
  track_number: "2",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file12.mp3")
)

debugsong3 = Song.create(
  song_title: "Ten Strike Blues",
  track_number: "3",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file26.mp3")
)

debugsong4 = Song.create(
  song_title: "There are 9 questions ahead of yours in Brooklyn",
  track_number: "4",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file38.mp3")
)

debugsong5 = Song.create(
  song_title: "(Don't Fear The) Debugger",
  track_number: "5",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file17.mp3")
)

debugsong6 = Song.create(
  song_title: "Fully Stacked",
  track_number: "6",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file31.mp3")
)

debugsong7 = Song.create(
  song_title: "Six Cups of Coffee (And Counting)",
  track_number: "7",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file8.mp3")
)

vol1song1 = Song.create(
  song_title: "The storage control blocks were destroyed",
  track_number: "1",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file27.mp3")
)

vol1song2 = Song.create(
  song_title: "The system cannot find the device specified",
  track_number: "2",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file37.mp3")
)

vol1song3 = Song.create(
  song_title: "The printer queue is full",
  track_number: "3",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file32.mp3")
)

vol1song4 = Song.create(
  song_title: "The exclusive semaphore is owned by another process",
  track_number: "4",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file21.mp3")
)

vol2song1 = Song.create(
  song_title: "The specified procedure could not be found",
  track_number: "1",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum3.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file14.mp3")
)

vol2song2 = Song.create(
  song_title: "The address for the thread ID is not correct",
  track_number: "2",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum3.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file33.mp3")
)

vol2song3 = Song.create(
  song_title: "The operating system cannot run %1",
  track_number: "3",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum3.id,
  song_file: File.new("#{Rails.root}/app/assets/songs/file36.mp3")
)
