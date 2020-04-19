class Api::V1::MealsController < ApplicationController
  before_action :set_meal, only: [:show, :update, :destroy]

  # GET /meals
  def index
    @meals = Meal.all

    render json: MealSerializer.new(@meals)
  end

  # GET /meals/1
  def show
    render json: MealSerializer.new(@meal)
  end

  # POST /meals
  def create
    @meal = Meal.new(meal_params)

    if @meal.save
      render json: @meal
    else
      render json: { error: 'Error creating new meal' }
    end 
  end

  # PATCH/PUT /meals/1
  def update
    if @meal.update(meal_params)
      render json: @meal
    else
      render json: @meal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /meals/1
  def destroy
    @meal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meal
      @meal = Meal.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def meal_params
      params.require(:meal).permit(:meal_type, :kind, :description, :url, :meal_date)
    end
end