class MealSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :kind, :meal_type, :description, :url, :meal_date, :user, :list

  # attribute :list do |meal|
  #   list.meals.map do |list|
  #     {
  #       name: list.name,
  #       description: list.description,
  #       list_user: list.user 
  #     }
  #   end 
  # end 
end
