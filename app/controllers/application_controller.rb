class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_artist, :logged_in?

  def current_artist
    @current_artist ||= Artist.find_by(session_token: session[:session_token])
  end

  def login(artist)
    artist.reset_session_token!
    session[:session_token] = artist.session_token
    @current_artist = artist
  end

  def logout
    current_artist.reset_session_token!
    session[:session_token] = nil
    @current_artist = nil
  end

  def logged_in?
    !!current_artist
  end

  def require_logged_in
    unless current_artist
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

end
