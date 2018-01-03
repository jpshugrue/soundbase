class Api::ArtistsController < ApplicationController

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      login(@artist)
      render "api/artists/show"
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def artist_params
    params.require(:artist).permit(:username, :password)
  end

end
