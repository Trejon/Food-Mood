class HomeController < ApplicationController
  # before_action :authenticate_user!

    def index
      render json: { msg: 'Welcome Home!' }
    end

    def profile
      user = current_user
      render_resource(user, with: [:reviews, :restaurants])
    end

    def reviews
      user = current_user
      reviews = user.reviews
      render_resource(reviews, with: [:restaurant])
    end
end
