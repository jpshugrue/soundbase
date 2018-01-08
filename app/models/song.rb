class Song < ApplicationRecord

  validates :song_title, :track_number, :song_file, presence: true

  has_attached_file :song_file
  validates_attachment_content_type :song_file,
    :content_type => [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]

  belongs_to :album
  belongs_to :artist

end
