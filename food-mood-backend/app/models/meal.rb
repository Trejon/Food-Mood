class Meal < ApplicationRecord
  belongs_to :user
  belongs_to :list

  before_validation :downcase_type_fields, :downcase_kind_fields

  validates :meal_type, inclusion: { in: %w(breakfast brunch lunch snack dinner dessert),
    message: "%{value} is not a valid meal type" }

    validates :kind, inclusion: { in: %w(restaurant recipe),
      message: "%{value} is not a valid meal kind" }

    def downcase_type_fields
      self.meal_type.downcase!
    end 

    def downcase_kind_fields
      self.kind.downcase!
    end 

end
