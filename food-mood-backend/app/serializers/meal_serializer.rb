class MealSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :kind, :meal_type, :description, :url, :meal_date, :list_id, :user, :list
end
