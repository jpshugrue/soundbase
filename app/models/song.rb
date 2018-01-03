class Song < ApplicationRecord

  validates :song_title, :track_number, presence: true

  belongs_to :album
  belongs_to :artist

end
