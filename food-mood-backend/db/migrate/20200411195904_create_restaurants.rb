class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :image_url
      t.string :url
      t.string :phone
      t.float :rating
      t.string :location
      t.string :price

      t.timestamps
    end
  end
end
