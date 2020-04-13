# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Restaurant.destroy_all

trejon = User.create!(email: 'tre@stallsworth.com', name: 'Tre', location: 'Denver, CO', password: 'password', password_confirmation: 'password')

favs = List.create!(name: 'Favorite Spots', user: trejon)
must_try = List.create!(name: 'Must try restaurants', user: trejon)

red_lobster = Restaurant.create!(name: 'Red Lobster', image_url: 'https://picsum.photos/200/300', url: 'https://www.redlobster.com/', phone: '434-343-2343', rating: 9.34, location: 'Denver, CO', price: '$50')
red_robin = Restaurant.create!(name: 'Red Robin', image_url: 'https://picsum.photos/200/300', url: 'https://www.redrobin.com/', phone: '434-343-2343', rating: 9.54, location: 'Denver, CO', price: '$40')
fuddruckers = Restaurant.create!(name: 'Fuddruckers', image_url: 'https://picsum.photos/200/300', url: 'https://www.fuddruckers.com/', phone: '434-343-2343', rating: 7.34, location: 'Denver, CO', price: '$35')
bdubs = Restaurant.create!(name: 'Buffalo Wild Wings', image_url: 'https://picsum.photos/200/300', url: 'https://www.buffalowildwings.com/', phone: '434-343-2343', rating: 8.45, location: 'Denver, CO', price: '$25')

red_lobster.lists.push(must_try)
red_robin.lists.push(must_try)
bdubs.lists.push(favs)
fuddruckers.lists.push(favs)

