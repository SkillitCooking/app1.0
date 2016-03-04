import {IngredientType} from '../../../../common/models/ingredient-type';

export var TEST_RECIPES = {
  "alaCarte": [
    {
      "ingredientName": "Test",
      "items":[
        {
          "_id": "1234",
          "title": "Test Carte",
          "pictureURL": "http://blog.room34.com/wp-content/uploads/underdog/logo.thumbnail.png",
          "prepTime": 10,
          "totalTime": 30,
          "checked": false
        }
      ]
    }
  ],
  "fullRecipe": [
    {
      "_id": "6677",
      "title": "Test Full Recipe",
      "shortDesc": "This, my friends, is a Full Recipe. " +
      "This is for people who like to cook and don't want to get a little " +
      "creative. Literally at all.",
      "prepTime": 15,
      "totalTime": 40,
      "pictureURL": "https://i.ytimg.com/vi/vrq8v9ijPs4/default.jpg"
    }
  ],
  "buildYourOwn": [
    {
      "_id": "4321",
      "title": "Test BYO",
      "shortDesc": "This, my friends, is a Build Your Own Recipe. " + 
      "This is for people who like to cook and want to get a little " +
      "creative. But still with a framework.",
      "prepTime": 15,
      "totalTime": 40,
      "pictureURL": "http://static.tumblr.com/2422f282a6a9ab6eb36eb2f1d5628332/q53bmki/3f7muw49f/tumblr_static_pikachu_12.jpg"
    }
  ]
}

export var TEST_INGREDIENT_TYPES: IngredientType[] = [
  {
    "name": "Produce",
    "minSelected": 2,
    "ingredients": [
      {
        "name": "Apple",
        "checked": false,
        "forms": [
          {
            "checked": true,
            "name": "Sliced"
          },
          {
            "checked": true,
            "name": "Cored"
          }
        ]
      },
      {
        "name": "Lettuce",
        "checked": true,
        "forms": [
            {
              "name": "Frayed"
            },
            {
              "name": "Rotten"
            },
            {
              "checked": true,
              "name": "Bleached"
            }
        ]
      },
      {
        "name": "Strawberries",
        "checked": false,
        "forms": [
            {
                "name": "Red"
            },
            {
                "name": "Blue"
            },
            {
                "name": "Fuzzy"
            }
        ]
      },
      {
        "name": "Avocados",
        "checked": false,
        "forms": [
            {
                "name": "Hard"
            },
            {
                "name": "Soft"
            },
            {
                "name": "Frozen"
            }
        ]
      }
    ],
  },
  {
      "name": "Meats",
      "minSelected": 0,
      "ingredients": [
          {
              "name": "Fish",
              "checked": false,
              "forms": [
                  {
                      "name": "White"
                  },
                  {
                      "name": "Salmon"
                  }
              ]
          },
          {
              "name": "Beef",
              "checked": false,
              "forms": [
                  {
                      "name": "Ground"
                  },
                  {
                      "name": "Frozen"
                  },
                  {
                      "name": "Steak"
                  }
              ]
          },
          {
              "name": "Chicken",
              "checked": false,
              "forms": [
                  {
                      "name": "Fried"
                  },
                  {
                      "name": "Chopped"
                  },
                  {
                      "name": "Mashed"
                  }
              ]
          },
          {
              "name": "Pork",
              "checked": false,
              "forms": [
                  {
                      "name": "Hard"
                  },
                  {
                      "name": "Soft"
                  },
                  {
                      "name": "Frozen"
                  }
              ]
          }
      ],
  },
  {
    "name": "Breads",
    "minSelected": 1,
    "ingredients": [
      {
        "name": "Sweet",
        "checked": false,
        "forms": [
          {
            "name": "Sliced"
          },
          {
            "name": "Cored"
          }
        ]
      },
      {
        "name": "Wheat",
        "checked": false,
        "forms": [
            {
              "name": "Sliced"
            },
            {
              "name": "Crusted"
            },
            {
              "name": "Bleached"
            }
        ]
      },
      {
        "name": "Crocodile",
        "checked": false,
        "forms": [
            {
                "name": "Uralian"
            },
            {
                "name": "Nybithic"
            },
            {
                "name": "Mythulious"
            }
        ]
      },
      {
        "name": "Pita",
        "checked": false,
        "forms": [
            {
                "name": "Leaven"
            },
            {
                "name": "Unleaven"
            },
            {
                "name": "Fermented"
            }
        ]
      }
    ]
  }
];