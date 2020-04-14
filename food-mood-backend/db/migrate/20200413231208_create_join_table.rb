class CreateJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :lists, :restaurants do |t|
       t.index [:list_id, :restaurant_id], unique: true
      # t.index [:_id, :_id]
    end
  end
end
