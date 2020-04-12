# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all

trejon = User.create(name: 'Trejon', email: 'Trejon@stallsworth.com', password: 'password', location: 'Denver, CO')

melting_pot = Restaurant.create(name: 'Melting Pot', image_url: 'https://picsum.photos/200/300', url: 'https://www.meltingpot.com/', phone: '720-234-3454', category: 'Fondue', rating: 9.9, location: 'Denver CO', price: '$$$$', latitude: 37.774929, longitude: -122.419416)
red_robin = Restaurant.create(name: 'Red Robin', image_url: 'https://picsum.photos/200/300', url: 'https://www.redrobin.com/', phone: '720-236-4554', category: 'American', rating: 7.8, location: 'Aurora CO', price: '$$', latitude: 32.774929, longitude: -12.419416)


melting_pot_rating = Review.create(rating: 9.7, date: Time.now, content: "Really good restaurant.", user: trejon, restaurant: melting_pot)
red_robin_rating = Review.create(rating: 9.1, date: Time.now, content: "Really good restaurant, I loved the food.", user: trejon, restaurant: red_robin)
