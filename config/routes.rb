Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  # get "/auto_login", to: "authentication#auto_login"
  get '/auth/verify', to: 'authentication#verify'
  # get "/user_is_authed", to: "authentication#user_is_authed"
  get '/verses/random', to: 'verses#random'
  resources :users
  resources :topics do
    resources :verses
    resources :gifts
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
end
