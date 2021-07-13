# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_12_194934) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "scorecards", force: :cascade do |t|
    t.string "tournament_name"
    t.integer "round_1"
    t.integer "round_2"
    t.integer "round_3"
    t.integer "round_4"
    t.integer "round_5"
    t.integer "round_6"
    t.integer "round_7"
    t.integer "round_8"
    t.integer "round_9"
    t.integer "round_10"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "name"
    t.string "password_digest"
    t.string "home_alley"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
