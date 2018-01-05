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

  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find_by(id: params[:id])
    if @artist
      render "api/artists/show"
    else
      render json: "Artist not found", status: 404
    end
  end

  def update
    @artist = Artist.find_by(id: params[:id])
    if @artist
      if @artist.update(artist_params)
        render "api/artists/show"
      else
        render json: @artist.errors.full_messages
      end
    else
      render json: "Artist not found", status: 404
    end
  end

  def artist_params
    params.require(:artist).permit(:username, :password, :display_name,
      :background_color, :body_color, :text_color, :link_color, :profile_pic, :cover_image)
  end

end
