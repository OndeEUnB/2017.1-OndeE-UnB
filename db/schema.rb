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

ActiveRecord::Schema.define(version: 20170623173320) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", id: :serial, force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "buildings", id: :serial, force: :cascade do |t|
    t.string "acronym"
    t.integer "phone"
    t.text "image_data"
  end

  create_table "locations", id: :serial, force: :cascade do |t|
    t.string "title"
    t.string "latitude"
    t.string "longitude"
    t.string "actable_type"
    t.integer "actable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.json "geo_data"
    t.index ["actable_type", "actable_id"], name: "index_locations_on_actable_type_and_actable_id"
  end

  create_table "plans", id: :serial, force: :cascade do |t|
    t.integer "building_id"
    t.integer "level"
    t.text "geo_data"
    t.text "image_data"
    t.index ["building_id"], name: "index_plans_on_building_id"
  end

  create_table "points", id: :serial, force: :cascade do |t|
    t.integer "type_point"
    t.text "description"
  end

  create_table "rooms", id: :serial, force: :cascade do |t|
    t.string "acronym"
    t.integer "building_id"
    t.integer "room_type"
    t.integer "level"
    t.index ["building_id"], name: "index_rooms_on_building_id"
  end

  create_table "schedules", id: :serial, force: :cascade do |t|
    t.integer "room_id"
    t.string "title"
    t.decimal "code"
    t.string "start_time"
    t.string "end_time"
    t.integer "day_of_week"
    t.string "classroom"
    t.index ["room_id"], name: "index_schedules_on_room_id"
  end

  add_foreign_key "plans", "buildings"
  add_foreign_key "rooms", "buildings"
  add_foreign_key "schedules", "rooms"
end
