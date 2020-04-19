class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :lists, :meals
  has_many :lists, serializer: ListSerializer
  has_many :meals, serializer: MealSerializer
end
