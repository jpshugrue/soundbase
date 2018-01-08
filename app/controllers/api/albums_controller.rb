class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all
    render "api/albums/index"
  end

  def show
    @album = Album.find_by(id: params[:id])
    if @album
      render "api/albums/show"
    else
      render json: "Album not found", status: 404
    end
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      render "api/albums/show"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def update
    @album = Album.find_by(id: params[:id])
    if @album
      if @album.update(album_params)
        render "api/albums/show"
      else
        rebder json: @album.errors.full_messages
      end
    else
      render json: "Album not found", status: 404
    end
  end

  def destroy
    @album = Album.find_by(id: params[:id])
    if @album && @album.destroy
      render "api/albums/show"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def album_params
    params.require(:album).permit(:album_title, :release_date, :album_credits, :artist_id,
      :album_cover)
  end

end
