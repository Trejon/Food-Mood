class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :restaurants
  belongs_to :user, serializer: UserSerializer
  
  attribute :restaurants do |list|
    list.restaurants.map do |rest|
      {
        name: rest.name,
        image_url: rest.image_url,
        url: rest.url, 
        phone: rest.phone, 
        rating: rest.rating, 
        location: rest.location,
        price: rest.price
      }
    end 
  end 


  # has_many :restaurants, serializer: RestaurantSerializer 
end
