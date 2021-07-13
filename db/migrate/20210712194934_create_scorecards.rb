class CreateScorecards < ActiveRecord::Migration[6.1]
  def change
    create_table :scorecards do |t|
      t.string :tournament_name
      t.integer :round_1
      t.integer :round_2
      t.integer :round_3
      t.integer :round_4
      t.integer :round_5
      t.integer :round_6
      t.integer :round_7
      t.integer :round_8
      t.integer :round_9
      t.integer :round_10
      t.integer :user_id

      t.timestamps
    end
  end
end
