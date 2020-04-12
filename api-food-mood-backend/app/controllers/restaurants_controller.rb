class RestaurantsController < ApplicationController
  before_action :authenticate_user!

      def index
          restaurants = current_user.restaurants
          render json: restaurants.to_json(include: [:reviews, :users] )
      end

      def show
          restaurant = current_user.restaurants.find(params[:id])
          authorize_user_resource(restaurant)
          render_resource(restaurant, with: [:reviews, :user])
      end

      def create
          restaurant = Restaurant.new(restaurant_params)
          restaurant.users.push(current_user)
          restaurant.save
          render_resource(restaurant)
      end

      def update
          restaurant = Restaurant.find(params[:id])
          authorize_user_resource(restaurant)
          restaurant.update(restaurant_params)
          render_resource(restaurant)
      end

      def destroy
          restaurant = Restaurant.find(params[:id])
          authorize_user_resource(restaurant)
          restaurant.destroy
          render_resource(restaurant)
      end

    private

      def restaurant_params
          params.require(:restaurant).permit(:name, :image_url, :url, :phone, :category, :rating, :location, :price, :latitude, :longitude, :reviews, :user)
      end
  end
