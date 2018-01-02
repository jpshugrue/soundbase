class Api::SessionsController < ApplicationController

  def create
    @artist = Artist.find_by_credentials(params[:artist][:username], params[:artist][:password])
    if @artist
      login(@artist)
      render "api/artists/show"
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    @artist = current_artist
    if @artist
      logout
      render "api/artists/show"
    else
      render json: ["Not currently signed in"], status: 404
    end
  end
end
