Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :artists, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:index, :show, :create, :update, :delete]
    resources :songs, only: [:index, :create, :update, :delete]
  end

end
