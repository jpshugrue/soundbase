class Album < ApplicationRecord

  validates :album_title, :release_date, :album_credits, presence: true

  belongs_to :artist
  has_many :songs

  has_attached_file :album_cover, default_url: "default_album_cover.png"
  validates_attachment_content_type :album_cover, content_type: /\Aimage\/.*\Z/

end
