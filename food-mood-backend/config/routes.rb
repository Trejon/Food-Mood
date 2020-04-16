Rails.application.routes.draw do
  resources :users
  resources :users do
    resources :lists
  end
  resources :restaurants do
    resources :reviews
  end
namespace :api do 
  namespace :v1 do 
    resources :lists
    resources :restaurants
  end 
end 
 
  root to: "home#index"

  post "/api/v1/login", to: "api/v1/sessions#create"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"

end
