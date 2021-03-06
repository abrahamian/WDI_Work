# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131120210141) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chefs", force: true do |t|
    t.string  "name",                       null: false
    t.integer "episode_id"
    t.boolean "winner?",    default: false
  end

  create_table "chefs_rounds", force: true do |t|
    t.integer "chef_id"
    t.integer "round_id"
  end

  create_table "dishes", force: true do |t|
    t.integer "chef_id"
    t.string  "name",    null: false
  end

  create_table "episodes", force: true do |t|
    t.string "name", null: false
  end

  create_table "episodes_judges", force: true do |t|
    t.integer "episode_id"
    t.integer "judge_id"
  end

  create_table "judges", force: true do |t|
    t.string "name", null: false
  end

  create_table "rounds", force: true do |t|
    t.integer "episode_id"
    t.string  "category"
  end

  create_table "scores", force: true do |t|
    t.integer "dish_id"
    t.integer "judge_id"
    t.integer "ranking",  null: false
  end

end
