class Story < ApplicationRecord
  has_many :articles

  validates :name, presence: true
end
