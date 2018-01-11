class Album < ApplicationRecord

  validates :album_title, :release_date, :album_credits, :album_cover, presence: true
  validate :release_date_in_past

  belongs_to :artist
  has_many :songs

  has_attached_file :album_cover, default_url: "default_album_cover.png"
  validates_attachment_content_type :album_cover, content_type: /\Aimage\/.*\Z/

  def release_date_in_past
    if self.release_date && self.release_date > Date.today
      errors.add(:release_date, "can't be in the future")
    end
  end

end
