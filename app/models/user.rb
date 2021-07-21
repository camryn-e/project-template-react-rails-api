class User < ApplicationRecord
    has_many :scorecards
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
