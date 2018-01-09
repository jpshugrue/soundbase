Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :artists, only: [:create, :show, :index, :update] do
      resources :albums, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:index, :show, :create, :update, :destroy] do
      resources :songs, only: [:index, :create]
    end
    resources :songs, only: [:index, :create, :update, :destroy]
  end

end
