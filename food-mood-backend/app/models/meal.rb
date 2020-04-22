class Meal < ApplicationRecord
  belongs_to :user
  belongs_to :list

  # before_validation :downcase_type_fields, :downcase_kind_fields, :strip_whitespace

  # validates :meal_type, inclusion: { in: %w(breakfast brunch lunch snack dinner dessert),
  #   message: "%{value} is not a valid meal type" }

  #   def downcase_type_fields
  #     self.meal_type = self.meal_type.downcase! unless self.meal_type.nil?
  #   end 

  #   validates :kind, inclusion: { in: %w(restaurant recipe),
  #     message: "%{value} is not a valid meal kind" }

  #   def downcase_kind_fields
  #     self.kind = self.kind.downcase! unless self.kind.nil?
  #   end 

  #   def strip_whitespace
  #     self.name = self.name.strip unless self.name.nil?
  #     self.kind = self.kind.strip unless self.kind.nil?
  #     self.meal_type = self.meal_type.strip unless self.meal_type.nil?
  #     self.description = self.description.strip unless self.description.nil?
  #     self.url = self.url.strip unless self.url.nil?
  #   end

end
