class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :url, :phone, :rating, :location, :price, :lists
  # has_many :lists, serializer: ListSerializer

  attribute :list do |restaurant|
    list.restaurants.map do |list|
      {
        name: list.name,
        description: list.description,
        list_user: list.user, 
      }
    end 
  end 
end
