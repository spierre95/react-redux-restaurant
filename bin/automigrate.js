var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.db;
ds.automigrate("restaurants", function(err) {
  if (err) throw err;

  var restaurants = [
    {
    "name": "Bobs's Steakhouse",
    "description": "Voted Best Steakhouse in Town!",
    "image_url": "https://source.unsplash.com/KveL_hxuY0Q/400x400",
    "menu": [
      {
        "name": "Steak",
        "price": 25,
        "image_url": "https://source.unsplash.com/auIbTAcSH6E/200x200",
        "quantity": 0
      },
      {
        "name": "Fish",
        "price": 20,
        "image_url": "https://source.unsplash.com/awj7sRviVXo/200x200",
        "quantity": 0
      },
      {
        "name": "Chicken",
        "price": 15,
        "image_url": "https://source.unsplash.com/Eb5xs-IhtxQ/200x200",
        "quantity": 0
      },
      {
        "name": "Salad",
        "price": 10,
        "image_url": "https://source.unsplash.com/Ul4sgxQMmHU/200x200",
        "quantity": 0
      }
    ]
  },
  {
    "name": "Hot Ones",
    "description": "Hottest Restaurant in the City",
    "image_url": "https://source.unsplash.com/GXXYkSwndP4/400x400",
    "menu": [
      {
        "name": "Chicken Wings",
        "price": 12.5,
        "image_url": "https://source.unsplash.com/Mspw00-Jlgo/200x200",
        "quantity": 0
      },
      {
        "name": "Ribs",
        "price": 24,
        "image_url": "https://source.unsplash.com/eGPlT_RXzi8/200x200",
        "quantity": 0
      },
      {
        "name": "Poutine",
        "price": 12,
        "image_url": "https://www.seasonsandsuppers.ca/wp-content/uploads/2014/01/new-poutine-1-1170x780.jpg",
        "quantity": 0
      },
      {
        "name": "Pasta",
        "price": 10,
        "image_url": "https://source.unsplash.com/-CK_Fv1RNUo/200x200",
        "quantity": 0
      }
    ]
  },
  {
    "name": "Vegan's Delight",
    "description": "Delicious, Healthy, and Earth Friendly",
    "image_url": "https://source.unsplash.com/qk1hk6R9rIQ/400x400",
    "menu": [
      {
        "name": "Bean Burger",
        "price": 15,
        "image_url": "https://source.unsplash.com/kPLccIMtS8E/200x200",
        "quantity": 0
      },
      {
        "name": "Kale Salad",
        "price": 16,
        "image_url": "https://source.unsplash.com/B-DrrO3tSbo/200x200",
        "quantity": 0
      },
      {
        "name": "Veggie Bowl",
        "price": 18,
        "image_url": "https://source.unsplash.com/IGfIGP5ONV0/200x200",
        "quantity": 0
      },
      {
        "name": "General Tao Tofu",
        "price": 12,
        "image_url": "https://www.vegetariantimes.com/.image/t_share/MTQ3MDE2MTUwNzIxNTA1MjA0/tso_tofu2_2000_1125.jpg",
        "quantity": 0
      }
    ]
  }
  ];
  var count = restaurants.length;
  restaurants.forEach(function(account) {
    app.models.restaurants.create(restaurants, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});
