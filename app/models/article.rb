class Article < ApplicationRecord
  belongs_to :story

  validates :name, presence: true

  enum kind: %w[blog_post facebook_post tweet]
end
