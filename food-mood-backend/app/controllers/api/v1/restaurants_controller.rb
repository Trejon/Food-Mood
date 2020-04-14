class Api::V1::RestaurantsController < ApplicationController
    def index 
      @restaurants = Restaurant.all
      render json: @restaurants.to_json(include: [:lists])
    end 
  
    def show 
      @restaurant = Restaurant.find(params[:id])
      render json: @restaurant.to_json(include: [:lists])
    end 
  
    def create 
      @restaurant = Restaurant.new(restaurant_params)
      if @restaurant.save
        render json: @restaurant
      else
        render json: { error: 'Error creating new restaurant' }
      end 
    end 
  
    def destroy 
      @restaurant = Restaurant.find(params[:id])
      @restaurant.destroy
    end 
  
    private 
    
    def restaurant_params 
      params.require(:restaurant).permit(:name, :image_url, :url, :phone, :rating, :location, :price)
    end 
  end
  