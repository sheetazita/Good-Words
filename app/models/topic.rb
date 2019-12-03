class Topic < ApplicationRecord
  has_many :verses
  has_many :gifts
end
