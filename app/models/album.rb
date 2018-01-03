class Album < ApplicationRecord

  validates :album_title, :release_date, :album_credits, presence: true

  belongs_to :artist
  has_many :songs

end
