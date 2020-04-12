Fabricator(:user) do
  name { Faker::Name.name }
  email { Faker::Internet.email }
  password { Faker::Games::Pokemon.name }
  location { Faker::Address.full_address }
end
