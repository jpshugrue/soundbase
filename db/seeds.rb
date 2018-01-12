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
  background_color: "#8EADF1",
  body_color: "#FF9A2B",
  text_color: "#2F2022",
  link_color: "#F3F3F4",
  profile_pic: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File1.jpg"),
  cover_image: File.new("#{Rails.root}/app/assets/images/cover_image_seeds/File206.jpg")
)

academicAccount = Artist.create(username: "academic",
  password: "demopass",
  display_name: "Academ!c",
  background_color: "#FF7FB6",
  body_color: "#3D3F3A",
  text_color: "#EDEDE8",
  link_color: "#FF7FB6",
  profile_pic: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File28.jpg"),
  cover_image: File.new("#{Rails.root}/app/assets/images/cover_image_seeds/File61.jpg")
)

djAccount = Artist.create(username: "djbuilder",
  password: "demopass",
  display_name: "DJ Builder and MC Sass",
  background_color: "#ffffff",
  body_color: "#6B6B6B",
  text_color: "#000000",
  link_color: "#00c5cd",
  profile_pic: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File26.jpg"),
  cover_image: File.new("#{Rails.root}/app/assets/images/cover_image_seeds/File209.jpg")
)

cohortAccount = Artist.create(username: "wintercohort",
  password: "demopass",
  display_name: "Winter Cohort",
  background_color: "#231E2A",
  body_color: "#E39500",
  text_color: "#3C5CD6",
  link_color: "#1E181F",
  profile_pic: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File63.jpg"),
  cover_image: File.new("#{Rails.root}/app/assets/images/cover_image_seeds/File204.jpg")
)

Album.destroy_all

demoAlbum1 = Album.create(
  album_title: "Self Titled Debut Album",
  release_date: "1999-01-08",
  album_credits: 'All songs written and performed by The Demonstrators
  Jim Abbiss - Engineer, Mixing, Producer
  Luke Gifford - Engineer, Mixing
  Clive Goddard - Engineer, Mixing
  Nellee Hooper - Editing, Mixing
  Leslie Howe - Composer
  Liam Howe -Composer 
  Line of Flight - Arranger, Engineer, Mixing, Producer
  Oggy - Engineer',
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
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File1.mp3")
)

selftitlesong2 = Song.create(
  song_title: "Second Helping",
  track_number: "2",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File5.mp3")
)

selftitlesong3 = Song.create(
  song_title: "Intro",
  track_number: "3",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File10.mp3")
)

selftitlesong4 = Song.create(
  song_title: "Atichaur",
  track_number: "4",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File15.mp3")
)

selftitlesong5 = Song.create(
  song_title: "Gladness",
  track_number: "5",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File20.mp3")
)

selftitlesong6 = Song.create(
  song_title: "The Sky's Process",
  track_number: "6",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File25.mp3")
)

meetthesong1 = Song.create(
  song_title: "Relationship",
  track_number: "1",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File2.mp3")
)

meetthesong2 = Song.create(
  song_title: "The Echoing Moon",
  track_number: "2",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File7.mp3")
)

meetthesong3 = Song.create(
  song_title: "Soundwaves of Apartment",
  track_number: "3",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File16.mp3")
)

meetthesong4 = Song.create(
  song_title: "Composing Diffidence",
  track_number: "4",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File22.mp3")
)

meetthesong5 = Song.create(
  song_title: "Suit Behind the Emotions",
  track_number: "5",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File35.mp3")
)

greatesthitssong1 = Song.create(
  song_title: "Voice of Verisimilitude",
  track_number: "1",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File34.mp3")
)

greatesthitssong2 = Song.create(
  song_title: "The Happy Beginning",
  track_number: "2",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File23.mp3")
)

greatesthitssong3 = Song.create(
  song_title: "Vandals",
  track_number: "3",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File6.mp3")
)

untitledsong1 = Song.create(
  song_title: "All Suspicion",
  track_number: "1",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File3.mp3")
)

untitledsong2 = Song.create(
  song_title: "Feverish Reader",
  track_number: "2",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File30.mp3")
)

untitledsong3 = Song.create(
  song_title: "Natural Danger",
  track_number: "3",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File19.mp3")
)

untitledsong4 = Song.create(
  song_title: "Disruptive Colloborator",
  track_number: "4",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File9.mp3")
)

humsong1 = Song.create(
  song_title: "Mad Healing",
  track_number: "1",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File18.mp3")
)

humsong2 = Song.create(
  song_title: "Rain",
  track_number: "2",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File29.mp3")
)

humsong3 = Song.create(
  song_title: "Telephone",
  track_number: "3",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File13.mp3")
)

humsong4 = Song.create(
  song_title: "Exploding Fire",
  track_number: "4",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File39.mp3")
)

humsong5 = Song.create(
  song_title: "Growth Through Thoughts",
  track_number: "5",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File11.mp3")
)

debugsong1 = Song.create(
  song_title: "Check In",
  track_number: "1",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File4.mp3")
)

debugsong2 = Song.create(
  song_title: "What'd you get for MealPal",
  track_number: "2",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File12.mp3")
)

debugsong3 = Song.create(
  song_title: "Ten Strike Blues",
  track_number: "3",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File26.mp3")
)

debugsong4 = Song.create(
  song_title: "There are 9 questions ahead of yours",
  track_number: "4",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File38.mp3")
)

debugsong5 = Song.create(
  song_title: "(Don't Fear The) Debugger",
  track_number: "5",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File7.mp3")
)

debugsong6 = Song.create(
  song_title: "Fully Stacked",
  track_number: "6",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File31.mp3")
)

debugsong7 = Song.create(
  song_title: "Six Cups of Coffee (And Counting)",
  track_number: "7",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File8.mp3")
)

vol1song1 = Song.create(
  song_title: "The storage control blocks were destroyed",
  track_number: "1",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File27.mp3")
)

vol1song2 = Song.create(
  song_title: "The system cannot find the device specified",
  track_number: "2",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File37.mp3")
)

vol1song3 = Song.create(
  song_title: "The printer queue is full",
  track_number: "3",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File32.mp3")
)

vol1song4 = Song.create(
  song_title: "The exclusive semaphore is owned by another process",
  track_number: "4",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File21.mp3")
)

vol2song1 = Song.create(
  song_title: "The specified procedure could not be found",
  track_number: "1",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File14.mp3")
)

vol2song2 = Song.create(
  song_title: "The address for the thread ID is not correct",
  track_number: "2",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File33.mp3")
)

vol2song3 = Song.create(
  song_title: "The operating system cannot run %1",
  track_number: "3",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File36.mp3")
)
