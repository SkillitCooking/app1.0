import {IngredientType} from '../../../../common/models/ingredient-type';

export var TEST_RECIPES = {
  "alaCarte": [
    {
      "ingredientName": "Test",
      "items":[
        {
          "title": "Test Carte",
          "pictureURL": "http://blog.room34.com/wp-content/uploads/underdog/logo.thumbnail.png",
          "prepTime": 10,
          "totalTime": 30,
          "checked": false
        }
      ]
    }
  ],
  "fullRecipe": [],
  "buildYourOwn": []
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