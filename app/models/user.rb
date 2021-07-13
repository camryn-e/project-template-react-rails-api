class User < ApplicationRecord
    # belongs_to :team
    has_many :scorecards
    has_secure_password
    validates :username, presence: true, uniqueness: true
    # validates :name, presence: true
end
