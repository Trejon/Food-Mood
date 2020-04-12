Fabricator(:restaurant) do
  name { Faker::Restaurant.name }
  image_url { Faker::Internet.url }
  url { Faker::Internet.url }
  phone { Faker::PhoneNumber.phone_number }
  category { Faker::Restaurant.type }
  rating { Faker::Number.between(from: 1, to: 10) }
  location { Faker::Address.full_address }
  price { Faker::Restaurant.name }
  latitude { Faker::Address.latitude }
  longitude { Faker::Address.longitude }
end
