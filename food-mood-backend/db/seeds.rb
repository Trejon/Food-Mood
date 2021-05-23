User.destroy_all

trejon =
  User.create!(
    email: 'tre@stallsworth.com',
    name: 'Tre',
    password: 'password',
    password_confirmation: 'password'
  )

favs =
  List.create!(
    name: 'All time favorites',
    description: 'A list of my favorite restaurants and recipes.',
    user: trejon
  )
must_try =
  List.create!(
    name: 'Must try meals',
    description: 'A list of restaurants and recipes I really want to try.',
    user: trejon
  )

red_lobster =
  Meal.create!(
    name: 'Red Lobster',
    kind: 'Restaurant',
    meal_type: 'Dinner',
    description: 'Birthday celebration',
    url: 'https://www.redlobster.com/',
    meal_date: Date.new(2019, 2, 3),
    user: trejon,
    list: favs
  )
pulled_pork =
  Meal.create!(
    name: 'Pulled Pork Sandwiches',
    kind: 'Recipe',
    meal_type: 'Dinner',
    description: 'Normal dinner',
    url:
      'https://www.allrecipes.com/recipe/235566/chef-johns-pulled-pork-bbq/?internalSource=rotd&referringId=83&referringContentType=Recipe%20Hub',
    meal_date: Date.new(2019, 10, 21),
    user: trejon,
    list: must_try
  )
fuddruckers =
  Meal.create!(
    name: 'Fuddruckers',
    kind: 'Restaurant',
    meal_type: 'Dinner',
    description: 'Family in Town',
    url: 'https://www.fuddruckers.com/',
    meal_date: Date.new(2019, 6, 21),
    user: trejon,
    list: must_try
  )
bdubs =
  Meal.create!(
    name: 'Buffalo Wild Wings',
    kind: 'Restaurant',
    meal_type: 'Lunch',
    description: 'Gameday',
    url: 'https://www.buffalowildwings.com/',
    meal_date: Date.new(2019, 6, 21),
    user: trejon,
    list: favs
  )
peanut_butter_cookies =
  Meal.create!(
    name: 'Peanut Butter Cookies',
    kind: 'Recipe',
    meal_type: 'Dessert',
    description: 'Sweet snack',
    url:
      'https://www.allrecipes.com/gallery/best-peanut-butter-cookies/?internalSource=streams&referringId=362&referringContentType=Recipe%20Hub&clickId=st_trending_b',
    meal_date: Date.new(2020, 7, 15),
    user: trejon,
    list: favs
  )
