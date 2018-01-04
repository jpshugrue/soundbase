class Artist < ApplicationRecord

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true

  has_many :albums
  has_many :songs

  has_attached_file :profile_pic, default_url: "default_profile_pic.png"
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/

  has_attached_file :cover_image, default_url: "default_cover_image.png"
  validates_attachment_content_type :cover_image, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  after_initialize :ensure_session_token

  before_create :set_defaults

  def self.find_by_credentials(username, password)
    artist = Artist.find_by(username: username)
    return nil unless artist
    artist.is_password?(password) ? artist : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  private

  def set_defaults
    self.display_name = self.username unless self.display_name
    self.background_color = "#e4e4e7" unless self.background_color
    self.body_color = "#ffffff" unless self.body_color
    self.text_color = "#000000" unless self.text_color
    self.link_color = "#0000ff" unless self.link_color
  end

end
