class Api::V1::YelpController < ApplicationController
  def search
    search_term = params[:term]
    latitude = params[:latitude]
    longitude = params[:longitude]
    headers = {
      'Authorization' => "Bearer #{ENV['YELP_API_KEY']}",
      'Content-Type' => 'application/json'
    }

    response =
      HTTParty.get(
        "https://api.yelp.com/v3/businesses/search?term=#{search_term}&latitude=#{latitude}&longitude=#{longitude}",
        headers: headers
      )
    render json: response
  end

end
