class ReviewsController < ApplicationController
  before_action :authenticate_user!

     def index
         reviews = current_user.reviews
         render json: reviews, include: [:restaurant, :user]
     end

     def show
         review = current_user.reviews.find(params[:id])
         authorize_user_resource(review)
         render_resource(review, with: [:restaurant, :user])
     end

     def create
         review = Rating.new(review_params)
         review.user = current_user
         review.save
         render_resource(review)
     end

     def update
         review = Rating.find(params[:id])
         authorize_user_resource(review)
         review.update(review_params)
         render_resource(review)
     end

     def destroy
         review = Rating.find(params[:id])
         authorize_user_resource(review)
         review.destroy
         render_resource(review)
     end

   private

     def review_params
         params.require(:review).permit(:review, :rating, :date, :content, :restaurant_id, :user_id)
     end
 end
