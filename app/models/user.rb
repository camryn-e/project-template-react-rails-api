class User < ApplicationRecord
    belongs_to :team
    # validates :username, presence: true
    # validates :name, presence: true
end
