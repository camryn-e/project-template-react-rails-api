class User < ApplicationRecord
    has_many :scorecards
    has_secure_password
    validates :username, presence: true, uniqueness: true

    def self.most_scorecards
        Scorecard.group(:user_id).count.max_by{|k, v| v}
    end

end
