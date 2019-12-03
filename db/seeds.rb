# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create({
  username: 'Admin',
  email: 'admin@admin.com',
  password: 'password'
})

topics = Topic.create([
  {
  name: "Love"
  },
  {
    name: "Faith"
  },
  {
    name: "Courage"
  },
  {
    name: "Hope"
  }
])

verses = Verse.create([
  {
  quote: "Fear Not.  For I am with you.",
  location: "- Isaiah 41:10 -",
  topic_id: 3
  },
  {
    quote: "My love never fails.  My mercy is new every morning.",
    location: "- Lamentations 3:22-23 -",
    topic_id: 1
    }
])

gifts = Gift.create([
  {
  name: "Do Not Fear Bracelet",
  image: "https://i.etsystatic.com/5152054/r/il/69f66e/1390915017/il_1588xN.1390915017_mdc5.jpg",
  price: 33.60,
  product_link: "https://www.etsy.com/listing/469256898/so-do-not-fear-for-i-am-with-you?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=fear+not+for+i+am+with+you&ref=sc_gallery-1-1&plkey=6ffcbd47bf2bdc98d2aed9d1a37092d7a37a0f48%3A469256898&pro=1&frs=1",
  topic_id: 3,
  user_id: 1
  },
  
  {
  name: "Fear Not Mug",
  image: "https://i.etsystatic.com/11766670/r/il/6a81dc/1387446039/il_1588xN.1387446039_f3yk.jpg",
  price: 12.95,
  product_link: "https://www.etsy.com/listing/294448189/bible-verse-mug-christian-gift-christian?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=fear+not+for+i+am+with+you&ref=sr_gallery-1-5&organic_search_click=1&col=1",
  topic_id: 3,
  user_id: 1
  }
])
