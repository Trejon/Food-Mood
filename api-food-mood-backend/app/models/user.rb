class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable

has_many :ratings, dependent: :destroy
has_many :restaurants, dependent: :destroy

  devise :database_authenticatable,
          :jwt_authenticatable,
          :registerable,
          jwt_revocation_strategy: JwtBlacklist
end
