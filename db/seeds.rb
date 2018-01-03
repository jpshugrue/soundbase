# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all

Artist.create(username: "demonstrator",
              password: "demopass",
              display_name: "The Demonstrators",
              background_color: "#1ECAC8",
              body_color: "#DAF7A6",
              text_color: "#000000",
              link_color: "#D70EF4"
              )
