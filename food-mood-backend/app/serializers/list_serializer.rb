class ListSerializer
  include FastJsonapi::ObjectSerializer
  # attributes :name, :description, :restaurants
  attributes :name, :description, :id
  belongs_to :user, serializer: UserSerializer
  has_many :meals, serializer: MealSerializer
  
  attribute :meals do |list|
    list.meals.map do |m|
      {
        id: m.id,
        name: m.name, 
        meal_type: m.meal_type,
        kind: m.kind,
        description: m.description, 
        url: m.url, 
        date: m.meal_date, 
        list_id: m.list_id
      }
    end 
  end 


  # has_many :restaurants, serializer: RestaurantSerializer 
end
