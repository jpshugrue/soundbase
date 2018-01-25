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
  text_color: "#1E181F",
  link_color: "#2844d1",
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
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File54.jpg")
)

demoAlbum3 = Album.create(
  album_title: "Greatest Hits Vol. 1",
  release_date: "2004-11-05",
  album_credits: "All tracks remixed from tape masters. Special thanks to Ampex
  Reviews: 'Although I resisted at first, I've grown to love every minute of this arty little collection of static (i.e., non-swinging) synthesizer pieces (with vocals, percussion, and guitar). Think of it as the aural equivalent of a park on the moon--oneness with nature under conditions of artificial gravity. Played in the background, all thirteen pieces merge into a pattern that tends to calm any lurking Luddite impulses; perceived individually, each takes on an organic shape of its own. Industrialism yes.'",
  artist_id: demoAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File87.jpg")
)

academicAlbum1 = Album.create(
  album_title: "Untitled",
  release_date: "2014-08-01",
  album_credits: "Recorded at The Record Plant NYC
  Oswald Beaujean - Liner Notes
  Mischa Elman - Arranger
  Ute Fesquet - Executive Producer
  Bernhard Güttler - Engineer, Mastering, Mixing, Producer
  Jascha Heifetz - Arranger
  Malene Hill - Project Coordinator
  Harald Hoffmann - Photography",
  artist_id: academicAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File96.jpg")
)

cohortAlbum2 = Album.create(
  album_title: "App Jams Vol. I - Syntax Error",
  release_date: "2017-11-20",
  album_credits: "C.J. Anderson - Composer
  C. Portugal - Composer
  Thes One - Executive Producer, Producer
  M. Turner - Composer
  D. Walker - Composer
  Zoo Dog - Mastering",
  artist_id: cohortAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File16.jpg")
)

demoAlbum2 = Album.create(
  album_title: "Meet The Demonstrators",
  release_date: "2002-03-20",
  album_credits: "Produced by Steve Albini,
  Joe Sample - Clavinet, Guest Artist, Keyboards, Piano (Electric)
  Elliot Scheiner - Engineer
  Timothy B. Schmit - Bass, Vocals, Vocals (Background)
  Al Schmitt - Engineer
  Bill Schnee - Engineer
  Tom Scott - Conductor, Flute, Guest Artist, Horn Arrangements, Horn Conductor, Lyricon, Sax (Tenor), Saxophone
  Wayne Shorter - Flute, Guest Artist, Sax (Tenor), Saxophone
  Beth Stempel - Reissue Coordination
  Linda Tyler - Assistant Engineer
  Vartan - Reissue Art Director
  Geoff Westen - Design",
  artist_id: demoAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File88.jpg")
)

djAlbum2 = Album.create(
  album_title: "1989",
  release_date: "2017-11-06",
  album_credits: "Frank Black - Composer, Guitar, Vocals
  Kim Deal - Bass, Composer, Guitar (Bass), Slide Guitar
  Arthur Fiacco - Cello
  Steve Haigler - Mixing
  Karen Karlsrud - Violin
  Matt Lane - Assistant Engineer",
  artist_id: djAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File82.jpg")
)

djAlbum1 = Album.create(
  album_title: "The Wiener Dog Paradox",
  release_date: "1984-08-01",
  album_credits: "Lesley Duncan - Vocals (Background)
  David Gilmour - Composer, Guitar, VCS 3 Synthesizer, Vocals
  James Guthrie - Mastering
  George Hardie - Artwork, Graphics
  Peter James - Assistant
  Peter James - Assistant
  Nick Mason - Composer, Percussion, Tape Effects",
  artist_id: djAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File45.jpg")
)

academicAlbum2 = Album.create(
  album_title: "Hits To Hum To",
  release_date: "2016-02-10",
  album_credits: "Drums: Roland TR-808
  Ash Avildsen - A&R
  Will Beasley - Engineer
  Bingx - Featured Artist, Vocals
  Steven Contreras - Photography
  Ryan Daminson - Engineer
  Jonathan Davis - Producer
  Matt Good - Producer",
  artist_id: academicAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File5.jpg")
)

cohortAlbum3 = Album.create(
  album_title: "App Jams Vol. II - Infinite Loop",
  release_date: "2018-01-01",
  album_credits: "Paul Hardiman - Engineer, Producer
  Camelle Hinds - Bass
  Jools Holland - Guest Artist
  Matt Johnson - Composer, Guitar, Keyboards, Percussion, Producer, Vocals
  Thomas Leer - Guest Artist
  Paul Mardiman - Producer
  J.G. Thirlwell - Guest Artist",
  artist_id: cohortAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File59.jpg")
)

cohortAlbum1 = Album.create(
  album_title: "Debug This",
  release_date: "2017-11-06",
  album_credits: "Stephen Malkmus - Composer, Guitar (Electric), Vocals
  Rich Costey - Mixing
  Doug Easley - Audio Engineer, Engineer, Pedal Steel
  Sibel Firat - Cello
  Bryce Goggin - Mixing
  Mark Ibold - Bass, Member of Attributed Artist
  Scott Kannberg - Composer
  Davis McCain - Audio Engineer, Engineer
  Bob Nastanovich - Member of Attributed Artist, Percussion",
  artist_id: cohortAccount.id,
  album_cover: File.new("#{Rails.root}/app/assets/images/square_image_seeds/File100.jpg")
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
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File10.mp3")
)

selftitlesong3 = Song.create(
  song_title: "Intro",
  track_number: "3",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File20.mp3")
)

selftitlesong4 = Song.create(
  song_title: "Atichaur",
  track_number: "4",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File30.mp3")
)

selftitlesong5 = Song.create(
  song_title: "Gladness",
  track_number: "5",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File40.mp3")
)

selftitlesong6 = Song.create(
  song_title: "The Sky's Process",
  track_number: "6",
  artist_id: demoAccount.id,
  album_id: demoAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File50.mp3")
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
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File61.mp3")
)

meetthesong3 = Song.create(
  song_title: "Soundwaves of Apartment",
  track_number: "3",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File21.mp3")
)

meetthesong4 = Song.create(
  song_title: "Composing Diffidence",
  track_number: "4",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File31.mp3")
)

meetthesong5 = Song.create(
  song_title: "Suit Behind the Emotions",
  track_number: "5",
  artist_id: demoAccount.id,
  album_id: demoAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File41.mp3")
)

greatesthitssong1 = Song.create(
  song_title: "Voice of Verisimilitude",
  track_number: "1",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File3.mp3")
)

greatesthitssong2 = Song.create(
  song_title: "The Happy Beginning",
  track_number: "2",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File12.mp3")
)

greatesthitssong3 = Song.create(
  song_title: "Vandals",
  track_number: "3",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File22.mp3")
)

greatesthitssong4 = Song.create(
  song_title: "Misfortune Closes Behind An Azimuth",
  track_number: "4",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File32.mp3")
)

greatesthitssong5 = Song.create(
  song_title: "Technique After Dreams",
  track_number: "5",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File42.mp3")
)

greatesthitssong6 = Song.create(
  song_title: "The Last Hallucinations",
  track_number: "6",
  artist_id: demoAccount.id,
  album_id: demoAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File52.mp3")
)

untitledsong1 = Song.create(
  song_title: "All Suspicion",
  track_number: "1",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File4.mp3")
)

untitledsong2 = Song.create(
  song_title: "Feverish Reader",
  track_number: "2",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File13.mp3")
)

untitledsong3 = Song.create(
  song_title: "Natural Danger",
  track_number: "3",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File23.mp3")
)

untitledsong4 = Song.create(
  song_title: "Disruptive Colloborator",
  track_number: "4",
  artist_id: academicAccount.id,
  album_id: academicAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File33.mp3")
)

humsong1 = Song.create(
  song_title: "Mad Healing",
  track_number: "1",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File5.mp3")
)

humsong2 = Song.create(
  song_title: "Rain",
  track_number: "2",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File14.mp3")
)

humsong3 = Song.create(
  song_title: "Telephone",
  track_number: "3",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File24.mp3")
)

humsong4 = Song.create(
  song_title: "Exploding Fire",
  track_number: "4",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File34.mp3")
)

humsong5 = Song.create(
  song_title: "Growth Through Thoughts",
  track_number: "5",
  artist_id: academicAccount.id,
  album_id: academicAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File44.mp3")
)

debugsong1 = Song.create(
  song_title: "Check In",
  track_number: "1",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File6.mp3")
)

debugsong2 = Song.create(
  song_title: "Cadenza For Mists",
  track_number: "2",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File15.mp3")
)

debugsong3 = Song.create(
  song_title: "Ten Strike Blues",
  track_number: "3",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File25.mp3")
)

debugsong4 = Song.create(
  song_title: "There Are 9 Questions Ahead Of Yours",
  track_number: "4",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File35.mp3")
)

debugsong5 = Song.create(
  song_title: "(Don't Fear The) Debugger",
  track_number: "5",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File45.mp3")
)

debugsong6 = Song.create(
  song_title: "Happy Hour In Midtown",
  track_number: "6",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File55.mp3")
)

debugsong7 = Song.create(
  song_title: "Six Cups of Coffee (And Counting)",
  track_number: "7",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File65.mp3")
)

debugsong8 = Song.create(
  song_title: "The Distant Nature",
  track_number: "8",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File75.mp3")
)

vol1song1 = Song.create(
  song_title: "Blue Screen of Death",
  track_number: "1",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File7.mp3")
)

vol1song2 = Song.create(
  song_title: "HTTP 404",
  track_number: "2",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File16.mp3")
)

vol1song3 = Song.create(
  song_title: "Kernel panic",
  track_number: "3",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File26.mp3")
)

vol1song4 = Song.create(
  song_title: "Guru Meditation",
  track_number: "4",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File36.mp3")
)

vol2song1 = Song.create(
  song_title: "Not A Typewriter",
  track_number: "1",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File8.mp3")
)

vol2song2 = Song.create(
  song_title: "Out Of Memory",
  track_number: "2",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File17.mp3")
)

vol2song3 = Song.create(
  song_title: "PC LOAD LETTER",
  track_number: "3",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File27.mp3")
)

vol2song4 = Song.create(
  song_title: "Abort, Retry, Fail?",
  track_number: "4",
  artist_id: cohortAccount.id,
  album_id: cohortAlbum3.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File37.mp3")
)

dogsong1 = Song.create(
  song_title: "Captured Communication",
  track_number: "1",
  artist_id: djAccount.id,
  album_id: djAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File45.mp3")
)

dogsong2 = Song.create(
  song_title: "The Burning Subwoofers",
  track_number: "2",
  artist_id: djAccount.id,
  album_id: djAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File45.mp3")
)


dogsong3 = Song.create(
  song_title: "The Party Spell",
  track_number: "3",
  artist_id: djAccount.id,
  album_id: djAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File55.mp3")
)


dogsong4 = Song.create(
  song_title: "Incredible Conversation",
  track_number: "4",
  artist_id: djAccount.id,
  album_id: djAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File65.mp3")
)


dogsong5 = Song.create(
  song_title: "Petals of Memory",
  track_number: "5",
  artist_id: djAccount.id,
  album_id: djAlbum1.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File75.mp3")
)

eightSong1 = Song.create(
  song_title: "From The Broken Illusion",
  track_number: "1",
  artist_id: djAccount.id,
  album_id: djAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File46.mp3")
)

eightSong2 = Song.create(
  song_title: "Bewildering Delusion",
  track_number: "2",
  artist_id: djAccount.id,
  album_id: djAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File56.mp3")
)

eightSong3 = Song.create(
  song_title: "Movement",
  track_number: "3",
  artist_id: djAccount.id,
  album_id: djAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File66.mp3")
)

eightSong4 = Song.create(
  song_title: "Endeavors of DJ",
  track_number: "4",
  artist_id: djAccount.id,
  album_id: djAlbum2.id,
  song_file: open("https://s3.amazonaws.com/soundbase-dev/seedSongs/File76.mp3")
)
