Rails.application.routes.draw do

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  patch '/change-alley', to: 'users#update'
  delete '/delete-account', to: 'users#destroy'
  get '/scorecards', to: 'scorecards#index'
  post '/scorecards', to: 'scorecards#create'
  get '/scorecards/:id', to:'scorecards#show'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
