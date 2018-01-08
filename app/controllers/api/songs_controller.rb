class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
    render "api/songs/index"
  end

  def create
    @song = Song.new(song_params)
    if @song.save
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def update
    song = Song.find_by(id: params[:id])
    if @song
      if @song.update(song_params)
        render "api/songs/show"
      else
        rebder json: @song.errors.full_messages
      end
    else
      render json: "Song not found", status: 404
    end
  end

  def destroy
    @song = Song.find_by(id: params[:id])
    if @song && @song.destroy
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def song_params
    params.require(:song).permit(:song_title, :track_number, :song_file, :artist_id, :album_id)
  end

end
