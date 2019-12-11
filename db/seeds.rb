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
  },
  {
    name: "Strength"
  }
])

verses = Verse.create([
{
  quote: "Fear not.  For I am with you.",
  location: "Isaiah 41:10",
  topic_id: 3,
},
{
  quote: "My love never fails.  My mercy is new every morning.",
  location: "Lamentations 3:22-23",
  topic_id: 1,
},
{
  quote: "I can do all things through Christ who gives me strength.",
  location: "Pilippians 4:13",
  topic_id: 5,
},
{
  quote: "Pray persistently.",
  location: "1 Thessalonians 5:17",
  topic_id: 2,
}
])

gifts = Gift.create([
    #----------------------------------------- FEAR NOT
  {
    name: "Fear Not Sticker",
    image: "https://i.etsystatic.com/5182617/r/il/2c78b5/1959520744/il_fullxfull.1959520744_k8ma.jpg",
    price: 4,
    product_link: "https://www.etsy.com/listing/725282707/fear-not-sticker?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=fear+not&ref=sc_gallery-1-1&plkey=ee56a1f3f8f08dc76f72e57e47a7dbaf9c4e2739%3A725282707&frs=1",
    topic_id: 3,
    user_id: 1
  },
  {
    name: "Faith Over Fear Shirt",
    image: "https://i.etsystatic.com/20684627/r/il/f8d7fe/2034858201/il_fullxfull.2034858201_ffgy.jpg",
    price: 4,
    product_link: "https://www.etsy.com/listing/717840476/faith-over-fear-shirt-christian-tee-for?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=fear+not&ref=sr_gallery-1-8&organic_search_click=1&bes=1&col=1",
    topic_id: 3,
    user_id: 1
  },
  {
    name: "Let Fear Not Rule Enamel Pin",
    image: "https://i.etsystatic.com/6731893/r/il/4cb0b6/1401341953/il_fullxfull.1401341953_fpbe.jpg",
    price: 10,
    product_link: "https://www.etsy.com/listing/572736973/let-fear-not-rule-fearless-statement?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=fearless+statement+pin&ref=sr_gallery-1-2&organic_search_click=1",
    topic_id: 3,
    user_id: 1
  },
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
  },
  {
    name: "Fear Not Wall Art",
    image: "https://i.etsystatic.com/17381007/r/il/cd26da/2092249953/il_fullxfull.2092249953_29xm.jpg",
    price: 15,
    product_link: "https://www.etsy.com/listing/730765612/our-deepest-fear-marianne-williamson?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=fear+not+wall+art&ref=sc_gallery-1-3&plkey=dc8ebab7c0957348f38f35a3b5ecb2c1487ec42b%3A730765612&frs=1",
    topic_id: 3,
    user_id: 1
  },
  #----------------------------------------- LOVE
  {
      name: "Love Never Fails Pillow",
      image: "https://i.etsystatic.com/7243684/r/il/34c921/1905744857/il_fullxfull.1905744857_om89.jpg",
      price: 8.40,
      product_link: "https://www.etsy.com/listing/207935585/tote-bag-love-never-fails-present?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=my+love+never+fails&ref=sc_gallery-1-2&plkey=08042c1d6d50db3fb3552329353e49956d0f20a5%3A207935585&pro=1&col=1",
      topic_id: 1,
      user_id: 1
    },
    {
      name: "Love Never Fails Wood Cut Wall Art",
      image: "https://i.etsystatic.com/5878511/r/il/486a72/2010441502/il_fullxfull.2010441502_p8rk.jpg",
      price: 80,
      product_link: "https://www.etsy.com/listing/634854140/large-love-never-fails-boho-bohemian?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=my+love+never+fails&ref=sr_gallery-1-1&organic_search_click=1&frs=1",
      topic_id: 1,
      user_id: 1
    },
    {
      name: "Love Never Fails Convention Soft Enamel Pin",
      image: "https://i.etsystatic.com/9900870/r/il/7a7884/2005623440/il_1588xN.2005623440_lvpn.jpg",
      price: 5,
      product_link: "https://www.etsy.com/listing/697521800/see-you-in-paradise-polaroid-love-never?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=love+never+fails&ref=sr_gallery-1-18&organic_search_click=1&bes=1",
      topic_id: 1,
      user_id: 1
    },
    {
      name: "Love Never Fails Shoulder Tote",
      image: "https://i.etsystatic.com/5840927/r/il/e72940/1841638768/il_fullxfull.1841638768_4cl4.jpg",
      price: 20,
      product_link: "https://www.etsy.com/listing/683894608/customizable-love-never-fails?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=love+never+fails&ref=sr_gallery-1-20&organic_search_click=1",
      topic_id: 1,
      user_id: 1
    },
    {
      name: "Love Never Fails Convention Button Pins",
      image: "https://i.etsystatic.com/9900870/r/il/aaa7e1/1912127595/il_fullxfull.1912127595_q6a6.jpg",
      price: 5,
      product_link: "https://www.etsy.com/listing/689400382/buenos-aires-argentina-love-never-fails?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=love+never+fails&ref=sr_gallery-1-32&organic_search_click=1&bes=1",
      topic_id: 1,
      user_id: 1
    },

  #----------------------------------------- STRENGTH
  {
    name: "Strength Necklace",
    image: "https://i.etsystatic.com/18130326/r/il/a545ad/2002882989/il_fullxfull.2002882989_d1km.jpg",
    price: 34,
    product_link: "https://www.etsy.com/listing/724318535/strength-necklace-tree-necklace-healing?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=strength&ref=sc_gallery-1-1&plkey=d39218640c3ad8795dca11b7769fb2dfc6416abc%3A724318535&frs=1&bes=1",
    topic_id: 5,
    user_id: 1
  },
  {
    name: "Strength Bracelet",
    image: "https://i.etsystatic.com/12630635/r/il/519764/1507269333/il_fullxfull.1507269333_8ai5.jpg",
    price: 24,
    product_link: "https://www.etsy.com/listing/583288430/strength-bracelet-o-strong-morse-code?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=strength&ref=sr_gallery-1-4&organic_search_click=1&bes=1&col=1",
    topic_id: 5,
    user_id: 1
  },
  {
    name: "Strength Pendant Necklace",
    image: "https://i.etsystatic.com/6163833/r/il/8624ad/1367586191/il_fullxfull.1367586191_6v0k.jpg",
    price: 29,
    product_link: "https://www.etsy.com/listing/503964576/strength-necklace-inspirational-jewelry?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=strength&ref=sr_gallery-1-6&organic_search_click=1&frs=1",
    topic_id: 5,
    user_id: 1
  },
  {
    name: "Stay Strong Card",
    image: "https://i.etsystatic.com/16896803/r/il/e2965c/1842714534/il_fullxfull.1842714534_e0k4.jpg",
    price: 3,
    product_link: "https://www.etsy.com/listing/583902744/stay-strong-and-believe-friendship-card?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=strength&ref=sr_gallery-1-35&organic_search_click=1&pro=1&frs=1&col=1",
    topic_id: 5,
    user_id: 1
  },
  {
    name: "She is clothed with strength and dignity",
    image: "https://i.etsystatic.com/21355301/r/il/4a08d1/2151245821/il_794xN.2151245821_8icd.jpg",
    price: 14,
    product_link: "https://www.etsy.com/listing/757566895/she-is-clothed-with-strength-and-dignity?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=strength&ref=sr_gallery-1-42&organic_search_click=1&pro=1",
    topic_id: 5,
    user_id: 1
  },
  #---------------------------------------------------- PRAY
  {
    name: "Pray Bracelet",
    image: "https://i.etsystatic.com/18130326/r/il/a545ad/2002882989/il_fullxfull.2002882989_d1km.jpg",
    price: 15,
    product_link: "https://www.etsy.com/listing/675692443/prayer-bracelet-pray-always-trust-in-god?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=pray&ref=sr_gallery-1-2&organic_search_click=1&bes=1&col=1",
    topic_id: 2,
    user_id: 1
  },
  {
    name: "Prayer Warrior Tee",
    image: "https://i.etsystatic.com/17200887/r/il/8c733c/2012660433/il_fullxfull.2012660433_bo75.jpg",
    price: 22,
    product_link: "https://www.etsy.com/listing/726537721/prayer-warrior-gift-prayer-warrior-jesus?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=pray&ref=sr_gallery-1-3&organic_search_click=1&pro=1&frs=1&col=1",
    topic_id: 2,
    user_id: 1
  },
  {
    name: "Pray More Worry Less Christian Bracelet",
    image: "https://i.etsystatic.com/5327996/r/il/e4bb57/1251836599/il_fullxfull.1251836599_omzm.jpg",
    price: 24,
    product_link: "https://www.etsy.com/listing/532183267/pray-more-worry-less-christian-bracelet?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=pray&ref=sc_gallery-1-8&plkey=b1e08858c18a0af397ec5859ab4c3a1dc45ceec4%3A532183267&frs=1&col=1",
    topic_id: 2,
    user_id: 1
  },
  {
    name: "Wake Pray Slay Mug",
    image: "https://i.etsystatic.com/14543211/r/il/beb6f7/1698041806/il_fullxfull.1698041806_3cuv.jpg",
    price: 15,
    product_link: "https://www.etsy.com/listing/543434986/wake-pray-slay-mug?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=pray&ref=sr_gallery-1-12&organic_search_click=1",
    topic_id: 2,
    user_id: 1
  },
  {
    name: "Pray Well With Others Mug",
    image: "https://i.etsystatic.com/19518974/r/il/7f7de2/1798887674/il_fullxfull.1798887674_gbs6.jpg",
    price: 20,
    product_link: "https://www.etsy.com/listing/673617026/prays-well-with-others-white-ceramic-mug?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=pray&ref=sr_gallery-2-2&organic_search_click=1&frs=1",
    topic_id: 2,
    user_id: 1
  }
])
