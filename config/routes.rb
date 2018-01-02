Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :artist, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end

end
