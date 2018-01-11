class Song < ApplicationRecord

  validates :song_title, :track_number, :song_file, presence: true

  before_save :extract_metadata
  serialize :metadata

  has_attached_file :song_file
  validates_attachment_content_type :song_file,
    :content_type => [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]

  belongs_to :album
  belongs_to :artist

  def extract_metadata
    path = song_file.queued_for_write[:original].path
    open_opts = { :encoding => 'utf-8' }
    Mp3Info.open(path, open_opts) do |mp3info|
      self.metadata = mp3info.length
    end
  end

end
