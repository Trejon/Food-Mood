class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email
  has_many :lists
  has_many :restaurants
end
