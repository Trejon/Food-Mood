Rails.application.routes.draw do
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
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"



  devise_for :users,
            path: '',
            path_names: {
              sign_in: 'login',
              sign_out: 'logout',
              registration: 'signup'
            },
            controllers: {
              sessions: 'sessions',
              registrations: 'registrations'
            }
end
