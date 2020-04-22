class Api::V1::MealsController < ApplicationController
  before_action :set_meal, only: [:show, :update, :destroy]
  
  # GET /meals
  def index
    if logged_in?
      @meals = current_user.meals
      render json: MealSerializer.new(@meals)
    else 
      render json: {
        error: "You must be logged in to see lists."
      }
    end 
  end

  # GET /meals/1
  def show
    render json: MealSerializer.new(@meal)
  end

  # POST /meals
  def create
    @meal = Meal.new(meal_params)
    byebug
    if @meal.save
      render json: MealSerializer.new(@meal)
    else
      render json: { error: 'Error creating new meal' }
    end 
  end

  # PATCH/PUT /meals/1
  def update
    if @meal.update(meal_params)
      byebug
      render json: MealSerializer.new(@meal)
    else
      render json: @meal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /meals/1
  def destroy
    if @meal.destroy
      render json:  {data: "Meal successfully deleted" }, status: :ok
    else 
      error_resp = {
        error: "Unable to delete meal"
      }
      render json: error_resp, status: :unprocessable_entity
    end 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meal
      @meal = Meal.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def meal_params
      params.require(:meal).permit(:name, :meal_type, :kind, :description, :url, :meal_date, :user_id, :list_id)
    end
end
