class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email
  has_many :lists, serializer: ListSerializer
  # has_many :restaurants, serializer: RestaurantSerializer
end
