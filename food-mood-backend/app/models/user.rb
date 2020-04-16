class User < ApplicationRecord
  has_many :lists, dependent: :destroy
  has_many :restaurants, through: :lists
  has_secure_password

  validates :name, presence: true
  validates :email, presence: true
  validates :password, presence: true
end
