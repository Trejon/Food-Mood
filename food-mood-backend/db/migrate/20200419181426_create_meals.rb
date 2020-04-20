class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :meal_type, default: 'lunch'
      t.string :kind
      t.string :description
      t.string :url
      t.date :meal_date
      t.belongs_to :user, null: false, foreign_key: true 
      t.belongs_to :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
