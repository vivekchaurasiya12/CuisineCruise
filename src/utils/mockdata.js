// this is LIST IS ARRAY in which multiple object are present and each object are used dynamically


let resList = [
  {
    "info": {
      "id": "24207",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/a72181e9-05f0-45a2-ab6f-4ec70e4d3e17_24207.jpg",
      "areaName": "Connaught Place",
      "promoted": true,
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
     
      "sla": {
        "deliveryTime": 25,
       
      },
      "groupCards":[
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Recommended",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "146118511",
                    "name": "Cheese Volcano Peppy Paneer",
                    "category": "Cheese Volcano",
                    "description": "Centre loaded with Molten Cheese & topped with peppy Paneer, Capsicum & Red Paprika\n*Contains non-edible container under the Pizza",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/4/3ab84285-8164-4447-b534-f371913491c6_f91a0f02-a155-4a2a-8567-ae9d56ec5b2b.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 25900,
                    "finalPrice": 24900,
                    },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "146118515",
                    "name": "Cheese Volcano Farmhouse",
                    "category": "Cheese Volcano",
                    "description": "Centre loaded with Molten Cheese & topped with Onion, Capsicum, Tomato & Grilled Mushroom\n*Contains non-edible container under the Pizza",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/4/4e30b1ff-dbe8-41d3-b083-d46b9d742ffc_636d161e-7f34-4371-b63c-bf9e3d091a0f.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 25900,
                    "finalPrice": 24900,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "146118523",
                    "name": "Cheese Volcano Veg Paradise",
                    "category": "Cheese Volcano",
                    "description": "Centre loaded with Molten Cheese & topped with Golden Corn, Black Olives, Capsicum & Red Paprika\n*Contains non-edible container under the Pizza",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/4/3e08f33d-98b7-41d2-acca-182da98e80f4_dd0b2e67-2a47-4a5e-b906-63e1277e7fa2.jpg",
                    "inStock": 1,
                    "isVeg": 1,"price": 39700,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "146118513",
                    "name": "Corn & Cheese Volcano",
                    "category": "Cheese Volcano",
                    "description": "Centre loaded with Molten Cheese & topped with juicy Golden Corn\n*Contains non-edible container under the Pizza",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/4/375ae4df-de00-4235-97c5-3de32ebd969c_c7ea4a4e-86a9-467b-a42d-13e058670d28.jpg",
                    "inStock": 1,
                    "isVeg": 1,"price": 39700,
            },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "146118521",
                    "name": "Cheese Volcano BBQ Chicken",
                    "category": "Cheese Volcano",
                    "description": "Centre loaded with Molten Cheese & topped with Pepper BBQ Chicken\n*Contains non-edible container under the Pizza",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/4/bb8bf7b5-d084-4690-893e-ea5af460ad5d_fd69db19-9923-4ab7-936c-e2b1300a9b25.jpg",
                    "inStock": 1,
                    "price": 25900,
                    "finalPrice": 24900,
                
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "146118516",
                    "name": "Cheese Volcano Chicken Delight",
                    "category": "Cheese Volcano",
                    "description": "Centre loaded with Molten Cheese & topped with Pepper BBQ Chicken & Golden Corn\n*Contains non-edible container under the Pizza",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/4/ec91a814-b0f9-4911-b972-3c2a3583c684_d8de24fd-5109-4870-bf74-66f9ebb4ace5.jpg",
                    "inStock": 1,
                    "price": 39700,
                 },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "146118520",
                    "name": "Cheese Volcano Double Chicken",
                    "category": "Cheese Volcano",
                    "description": "Centre loaded with Molten Cheese & topped with Pepper BBQ Chicken & Peri Peri Chicken.\n*Contains non-edible container under the Pizza",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/4/a842381d-5d56-4a1e-99b8-4594170ae2c1_6d79c2a4-5aec-4067-acea-0afdfd875830.jpg",
                    "inStock": 1,
                    "price": 39700,
                    },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "146118518",
                    "name": "Cheese Volcano Blazing Chicken",
                    "category": "Cheese Volcano",
                    "description": "Centre loaded with Molten Cheese & topped with Chicken Keema & Red Paprika with our spicy Peri Peri Sauce\n*Contains non-edible container under the Pizza",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/4/e0d6d213-d5ac-45a7-b53f-d6c836d53659_33957602-94cc-4a32-9a21-6b65d35815fc.jpg",
                    "inStock": 1,
                    "price": 39700,
                      },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "113680104",
                    "name": "Special Party for 4 (Veg) @Rs. 180 off",
                    "category": "Party Combo",
                    "description": "Medium Peppy Paneer + Medium Farmhouse + Garlic Bread + 2 Pepsi",
                    "imageId": "4dfd02271e979bdcbed7737473d930c5",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 99900,
              },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "119166835",
                    "name": "Pizza Party for 4 (Veg) @Rs. 180 Off",
                    "category": "Party Combo",
                    "description": "Meal for 4: Regular Veg Extravaganza + Regular Indi Tandoori Paneer + Regular Farmhouse + Regular Veggie Paradise",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/31/99380be1-e010-42b9-ac5f-18eca2c4df13_8817bc9d-8a29-4e7e-ab1f-2be79a8a3441.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 99900,
                        },
                              "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "119166834",
                    "name": "Party for 4 (Veg) @Rs. 130 off",
                    "category": "Party Combo",
                    "description": "Meal for 4: Medium Margherita + Medium Farmhouse with Garlic Bread & 2 Pepsi",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/31/1d4d5779-0945-4804-8156-1346d4cc708d_0df4edfa-f7da-4a74-87e8-69b66a894b79.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 82900,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "113680102",
                    "name": "Extravaganza Party for 2 (Veg) @Rs. 110 off",
                    "category": "Party Combo",
                    "description": "Regular Veg Extravaganza + Regular Indi Tandoori Paneer + Garlic Bread + Pepsi",
                    "imageId": "0cbd92945fdc750f47e0b6c38ad7108b",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 69900,
                      },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "125889565",
                    "name": "Special Party for 2 (Veg) @Rs. 105 off",
                    "category": "Party Combo",
                    "description": "Regular Farmhouse + Regular Peppy Paneer + Garlic Bread + Pepsi",
                    "imageId": "fbdef2d7dcfc5374f48cce734867aa30",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 59900,
                        },
                              "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "131413844",
                    "name": "Match Day Veg Combo @Rs. 110 off",
                    "category": "Party Combo",
                    "description": "Meal for 2: Regular Veg Extravaganza + Regular Indi Tandoori Paneer with Chocolava Cake & Pepsi",
                    "imageId": "80c0a378d5a09f45ca7881518ab276dd",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 69900,
                      },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "119166832",
                    "name": "Special Party for 2 (Non-Veg) @Rs. 115 off",
                    "category": "Party Combo",
                    "description": "Meal for 2: Regular Pepper BBQ Chicken + Regular Chicken Dominator with Garlic Bread & Pepsi",
                    "imageId": "c314a5711c2c1d6cfa607e452abb9719",
                    "inStock": 1,
                    "price": 67900,
                     },
                  "hideRestaurantDetails": true
                }
              },
             
            ],
            "type": "CATEGORY_TYPE_RECOMMENDED"
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Love Loaded Pizzas",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "133342970",
                    "name": "Loaded Chicken Pepperoni",
                    "category": "Love Loaded Pizzas",
                    "description": "Valentine’s Special: Thin Crust Cheese Burst pizza topped with Chicken Pepperoni & extra Cheese",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/4/91a61fda-46da-40ca-aca8-13bedcfb6e83_0be67f27-9056-4d95-bbfc-693fcade58de.jpg",
                    "inStock": 1, },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "133342969",
                    "name": "Loaded Peppy Paneer",
                    "category": "Love Loaded Pizzas",
                    "description": "Valentine’s Special: Thin Crust Cheese Burst pizza loaded with Juicy Paneer, Crisp Capsicum & Spicy Red Paprika",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/4/14119aa7-6ea8-4824-8307-a336ddb9726a_c028e1b0-a5f8-4b34-9cb8-d1e0bc5e9750.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 40900,
                  
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "133342974",
                    "name": "Loaded Chicken Dominator",
                    "category": "Love Loaded Pizzas",
                    "description": "Valentine’s Special: Thin Crust Cheese Burst pizza loaded with loads of Chicken",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/4/19925c11-6031-48da-b4ad-62d666352b13_8297e0c9-bacc-4928-a2ff-7f88c700a407.jpg",
                    "inStock": 1,
                  
                 
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "133342971",
                    "name": "Loaded Veggie Paradise",
                    "category": "Love Loaded Pizzas",
                    "description": "Valentine’s Special: Thin Crust Cheese Burst pizza loaded with Golden Corn, Black Olives, Capsicum & Red Paprika",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/4/5ca0435e-29ae-42be-a625-8ead6d6de633_d3192c66-881a-4788-b38b-5850c295be7d.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 38900,
                  
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "133342973",
                    "name": "Loaded Pepper BBQ Chicken",
                    "category": "Love Loaded Pizzas",
                    "description": "Valentine’s Special: Thin Crust Cheese Burst pizza with Pepper BBQ Chicken for that extra zing",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/4/36a076dc-0f7c-42ee-8fc8-c614ea27740a_7fa3a6a3-d24f-4658-8922-b2d7a0f471a3.jpg",
                    "inStock": 1,
                   },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "133342975",
                    "name": "Loaded Farmhouse",
                    "category": "Love Loaded Pizzas",
                    "description": "Valentine’s Special: Thin Crust Cheese Burst pizza loaded with Onion, Capsicum, Tomato & Grilled Mushroom",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/4/078d1c15-b08a-4dbe-b349-fd99cddf1386_a9413d98-525d-40d6-b7ba-847b398b9206.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                 
                 
                 
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              }
            ],
            "subtitleSuffix": {
              
            },
            "image": "FOOD_CATALOG/IMAGES/CMS/2025/2/4/91a61fda-46da-40ca-aca8-13bedcfb6e83_0be67f27-9056-4d95-bbfc-693fcade58de.jpg",
            "categoryId": "58395071"
          }
        }
      ],
    }
 
  },
  {
    "info": {
      "id": "753312",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
      "areaName": "Connaught Circus",
      "promoted": false,
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.7,
      "veg": true,
      "sla": {
        "deliveryTime": 30, 
      }, 
      "groupCards":[ 
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Recommended",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122917994",
                    "name": "Mini Treats",
                    "category": "Offers & Value Deals",
                    "description": "Treat your tribe! Save Rs. 67 flat & enjoy Mini Waffle pack of 4 (assorted) + Mini Waffle pack of 4 (chocolate).",
                    "imageId": "c09a7c9a2104893edc7c800a1f38d858",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 59944,
                    },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122917989",
                    "name": "Happiness in mini version + 1 FREE Delight",
                    "category": "Offers & Value Deals",
                    "description": "Buy Chocolate Mini Waffle Combo pack of 6 and select 1 FREE waffle or pancake from our top picks.",
                    "imageId": "68e17b6856045111d70d4e8d2b105ed2",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 51119,
               },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122917993",
                    "name": "Best Of The Best",
                    "category": "Offers & Value Deals",
                    "description": "Share our besties with your besties! Choose any 5 best-selling Waffle from below list for a flat price! (Naked Nutella or Triple Chocolate or Belgian Chocolate Milk or Belgian Chocolate Dark or KitKat Waffle or Red Velvet).",
                    "imageId": "fc529e8c5a543ceb729d7786d1b01858",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 66000,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122917990",
                    "name": "Keep Cake & Celebrate + 1 FREE Delight",
                    "category": "Offers & Value Deals",
                    "description": "Choose any one double layer waffle cake- Death by chocolate Waffle Cake (Double Layer)/ Red velvet waffle Cake (Double Layer)/ Kiki and Oreo Cream waffle cake (Double Layer) and select 1 FREE waffle or pancake from our top picks.",
                    "imageId": "31ce167dc68121669c2f4a7f7ca469c0",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 58052,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122917992",
                    "name": "The Belgian Club + 1 Free Delight (Dark)",
                    "category": "Offers & Value Deals",
                    "description": "Buy 3 Belgian Chocolate waffle (Dark) and get a free delight (Free Delight: kiki and oreo cream pancake or triple chocolate pancake or belgian chocolate waffle or maple butter waffle)",
                    "imageId": "84d1b25b2937208843debf5e27449c8d",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 46713,
                   
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122917998",
                    "name": "Treats For Two",
                    "category": "Offers & Value Deals",
                    "description": "1 for you, 1 for me & 1 for us. Save Rs. 52 flat & enjoy Belgian Chocolate Milk Waffle + Red Velvet Waffle + Signature Cold Coffee.",
                    "imageId": "8fb65da221d2a8ca558109ebfb896ddb",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 40910,
              },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122917995",
                    "name": "The WaffShake Duo",
                    "category": "Offers & Value Deals",
                    "description": "Triple Chocolate Waffle + Belgian Chocolate Shake.",
                    "imageId": "18c3d1aa70f3f6e4fcb4a0a8ed99774b",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 34667,
                    },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "143815810",
                    "name": "Any Beverage + Belgian Chocolate Waffle @ flat Rs 249 (Milk)",
                    "category": "Offers & Value Deals",
                    "description": "Save upto 25% with our Belgian Special combo. Enjoy the most loved Belgian Chocolate Waff-wich (Milk) with any beverage of your choice.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/20/4fe4bf45-da0b-43a5-89c7-c0837a9f9992_d7b7368f-b78a-42be-b03e-9f6d621ea4c3.png",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 24900,
                       },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "143815811",
                    "name": "Buy Any 2 Beverages @299",
                    "category": "Offers & Value Deals",
                    "description": "Save upto 40%! Enjoy any two of our freshly blended beverages for just Rs 299.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/20/52b956a1-85bf-4161-bc73-1dcca2d5925d_84672733-1392-4540-a59b-7e1d07e91886.png",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 29900,
                },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122917991",
                    "name": "The Belgian Club + 1 Free Delight (Milk)",
                    "category": "Offers & Value Deals",
                    "description": "Buy Belgian chocolate [Milk] waffle and select 1 FREE waffle or pancake from our top picks.",
                    "imageId": "c8d290dc8bc090cc9e4e70a5f5f039fd",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 46713,
                      },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122917996",
                    "name": "Make At Home @ Rs.349",
                    "category": "Offers & Value Deals",
                    "description": "Save Rs. 78. Make our delicious waffles or pancakes in the comfort \nof your home with our Original Pancake & Waffle Mix !",
                    "imageId": "7d176da88367df0bbdcc1f8829231d29",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 34900,
                     },
                        "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122917997",
                    "name": "Make At Home @ Rs.375",
                    "category": "Offers & Value Deals",
                    "description": "Save Rs. 72. Make our delicious waffles or pancakes in the comfort\nof your home with our Chocolate Oats Pancake & Waffle Mix !",
                    "imageId": "b335b375069d6afd70920379a397a587",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 37500,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122918011",
                    "name": "Mini Waffle Box of 4 - Chocolate",
                    "category": "Mini Waffle Combos",
                    "description": "Can’t Pick One? Try A Carefully Curated Assortment of our Bestselling Chocolate Favorites. Includes Naked Nutella, Belgian Chocolate (Milk), Chocolate Overload (Dark) And Dark & White Fantasy Mini Waffles In An All-In-One Combo Pack.",
                    "imageId": "hs4fcgudajhidwcn3xpy",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 33452,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122918012",
                    "name": "Mini Waffle Box of 6 - Chocolate",
                    "category": "Mini Waffle Combos",
                    "description": "Can’t Pick One? Try A Carefully Curated Assortment of our Bestselling Chocolate Favorites. Includes Naked Nutella, Belgian Chocolate (Dark), Belgian Chocolate (Milk), Kit kat, Chocolate Overload (Milk) And Dark & White Fantasy Mini Waffles In An All-In-One Combo Pack.",
                    "imageId": "d7kc3dqkztnvfmbq5tjc",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 51119,
                },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122918013",
                    "name": "Mini Waffle Box of 4 - Assorted",
                    "category": "Mini Waffle Combos",
                    "description": "In The Mood For Variety? Try A Carefully Curated Assortment Of Some Of Our Fan Favorites. Includes Belgian Chocolate (Milk), Almond Cocoa Butter, Red Velvet And Berry Red Velvet Mini Waffles In An All-In-One Combo Pack.",
                    "imageId": "hiqwcprb2zpypkhgxoce",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 33190,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122918014",
                    "name": "Mini Waffle Box of 6 - Assorted",
                    "category": "Mini Waffle Combos",
                    "description": "In The Mood For Even More Variety? Try A Carefully Curated Assortment of Some of our Fan Favorites. Includes Naked Nutella, Belgian Chocolate (Milk), Chocolate Overload (Milk), Dark & White Fantasy, Red Velvet And Berry Red Velvet Mini Waffles In An All-In-One Combo Pack.",
                    "imageId": "nqtcnakfpwk4dhaum1uq",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 49005,
                    },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122917999",
                    "name": "Death by Chocolate Waffle Cake (Single Layer)",
                    "category": "Waffle Cakes",
                    "description": "Signature dark chocolate single layer waffle cake layered with creamy White, Milk and Dark melted Belgian Chocolate. Triple the chocolate, triple the fun! (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
                    "imageId": "tvvdhhxv1ucm0xnhbdfx",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 36048,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122918000",
                    "name": "Berry Red Velvet Waffle Cake (Single Layer)",
                    "category": "Waffle Cakes",
                    "description": "\"Original Red Velvet Single Layer Waffle Cake With Strawberry Compote + Creamy Cheesecake* filling And Melted White Chocolate Topped With Red Velvet Crumbs. A True Original - Enhanced!\n*Cheesecake flavour filling, contains spray dried cheese powder\n (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)\"",
                    "imageId": "f0wxd5msxfmrwlbmto1v",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 36048,
                       },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122918002",
                    "name": "Almond Brownie Waffle Cake (Single Layer)",
                    "category": "Waffle Cakes",
                    "description": "The Best Of Two Worlds In A Single Layer Cake - A Waffle And A Brownie. With Deliciously Rich Melted Chocolate and Almonds. Your Doorway To Heaven! (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
                    "imageId": "034cb07146e0fcca254a1334f71d2f9c",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 38050,
              },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "122918001",
                    "name": "Kiki & Oreo Waffle Cake (Single Layer)",
                    "category": "Waffle Cakes",
                    "description": "Signature black velvet single layer waffle cake layered thick with Kiki spread and topped with Crushed Oreos. A universal favorite! (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
                    "imageId": "bk95q53yhvqiqob2b4o9",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 38048,
                      },
                  "hideRestaurantDetails": true
                }
              }
            ],
            "type": "CATEGORY_TYPE_RECOMMENDED"
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Chocolatey Waffle",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135616568",
                "name": "Naked Nutella Waffle",
                "category": "Waffles",
                "description": "Classic Crispy Waffle + Premium European Chocolate Hazelnut Spread (Add Banana If You Like). A Universal Favourite!",
                "imageId": "qtirovgc75c7a0dedfrt",
                "inStock": 1,
                "isVeg": 1,
                "price": 19500,
               },
              
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135616564",
                "name": "Belgian Chocomelt Milk Waffle",
                "category": "Waffles",
                "description": "Your Favourite Belgian Chocolate Milk Waffle gets a new name! Classic Crispy Waffle + Melted Belgian Milk Choco. Simplicity At Its Best!",
                "imageId": "uepao2q7bc4prdmqw6rx",
                "inStock": 1,
                "isVeg": 1,
                "price": 16500,
            
                "badgesV2": {
                  
                },
                "isBestseller": true,
                "ratings": {
                  "aggregatedRating": {
                    "rating": "4.6",
                    "ratingCount": "61 ratings",
                    "ratingCountV2": "61"
                  }
                }
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135616565",
                "name": "Belgian Chocomelt Dark Waffle",
                "category": "Waffles",
                "description": "Your Favourite Belgian Chocolate Dark Waffle gets a new name! Classic Crispy Waffle + Melted Belgian Dark Choco. Darker Simplicity!",
                "imageId": "hlrrukbpjasmhczocwb6",
                "inStock": 1,
                "isVeg": 1,
                "price": 16500,
              
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135616569",
                "name": "Kitkat Waffle",
                "category": "Waffles",
                "description": "Classic Crispy Waffle + Melted Belgian White Chocolate And KitKat Bits. For KitKat Lovers!",
                "imageId": "eozerfua7ygpxho5wkao",
                "inStock": 1,
                "isVeg": 1,
                "price": 18500,
             
               
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135616566",
                "name": "Butterscotch Crunch Waffle",
                "category": "Waffles",
                "description": "Classic Crispy Waffle + Crunchy Butterscotch Fudge. Go On Indulge!",
                "imageId": "j7i5ie6zete7ez4oprvh",
                "inStock": 1,
                "isVeg": 1,
                "price": 14500,
          
               
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135616567",
                "name": "Coffee Mocha Waffle",
                "category": "Waffles",
                "description": "Classic Crispy Waffle + Melted Chocolate Infused With Coffee Crumbs. For Coffee Lovers!",
                "imageId": "ii9usixjbv7djr6g8xui",
                "inStock": 1,
                "isVeg": 1,
                "price": 15500,
              
               
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          }
        ],
        "subtitleSuffix": {
          
        },
        "categoryId": "46173600"
      },
    },
      {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
         "title": "Double Chocolatey Waffle",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135616584",
                "name": "Triple Chocomelt Waffle",
                "category": "Waffles",
                "description": "Your Favourite Triple Chocolate Waffle gets a new name! Signature Dark Choco Waffle + 3 Layers Of Melted White Choco, Belgian Milk Choco and Belgian Dark Choco. The most indulgent Choco Waffle Ever!",
                "imageId": "onq8rhxujd0sx8kubaew",
                "inStock": 1,
                "isVeg": 1,
                "price": 18500,
               
               
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135616585",
                "name": "Almond Brownie Waffle",
                "category": "Waffles",
                "description": "The Best Of Two Worlds In A Single Bite - A Waffle And A Brownie. With Deliciously Rich Melted Chocolate and Almonds. Your Doorway To Heaven!",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/12/3e06d222-1987-4927-a6ef-a2d008d3c5ee_405f8986-db76-4be6-b2db-af8abf938043.png_compressed",
                "inStock": 1,
                "isVeg": 1,
                "price": 19500,
               
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135616582",
                "name": "Chocobite Overload Dark Waffle",
                "category": "Waffles",
                "description": "Your Favourite Chocolate Overload dark gets a new name! Signature Dark Choco Waffle + Melted Belgian Dark Choco. Double the chocolicious!",
                "imageId": "ggnwmgrznp4jjzwwyhjx",
                "inStock": 1,
                "isVeg": 1,
                "price": 17500,
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135616581",
                "name": "Chocobite Overload Milk Waffle",
                "category": "Waffles",
                "description": "Your Favourite Chocolate Overload milk gets a new name! Signature Dark Choco Waffle + Melted Belgian Milk Choco. Double the chocolicious!",
                "imageId": "uoqt4nodzskmp1xldjbw",
                "inStock": 1,
                "isVeg": 1,
                "price": 17500,
          
               
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135616583",
                "name": "Dark & White Fantasy Waffle",
                "category": "Waffles",
                "description": "Signature Dark Chocolate Waffle + Fondant Of Melted Belgian White Chocolate. A Match Made In Heaven!",
                "imageId": "mtexxlclhen7gkljsems",
                "inStock": 1,
                "isVeg": 1,
                "price": 17500,
         
            
              },
            
            }
          }
        ],
        "subtitleSuffix": {
          
        },
        "categoryId": "46173601"
      },
    }
     ],
     
 
    }
  },
  {
    "info": {
      "id": "16418",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/97b012b7-23b7-4c25-8899-678f8051d8c9_16418.jpg",
  
      "areaName": "Connaught Place",
      "promoted": true,
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      
      "sla": {
        "deliveryTime": 34,
      },
      "groupCards":[
        {
          
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        "title": "Recommended",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "131209989",
                "name": "Bombay Grill Sandwich + Side + Coke",
                "category": "SUPER SAVER COMBOS - SAVE UPTO 46%",
                "description": "Enjoy your favourite Grills sandwich with a choice of drink and a cookie or veg kebabs.",
                "imageId": "6f6f6cdda05e7a857f18bd8459f231ce",
                "inStock": 1,
                "isVeg": 1,
                "price": 28900,
              },
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "131209996",
                "name": "Roast Chicken Melt Sandwich + Side + Coke",
                "category": "SUPER SAVER COMBOS - SAVE UPTO 46%",
                "description": "Enjoy your favourite Grills sandwich with a choice of drink and a cookie.",
                "imageId": "66f7dfa9d7f0e3b1ad27ced7e673544e",
                "inStock": 1,
                "price": 33900,
              },
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "131209998",
                "name": "3 Cheese Melt Sandwich + Side + Coke",
                "category": "SUPER SAVER COMBOS - SAVE UPTO 46%",
                "description": "Enjoy your favourite Grills sandwich with a choice of drink and any choice of side.",
                "imageId": "c3f54b48c8a70db042cbd09accbe0931",
                "inStock": 1,
                "isVeg": 1,
                "price": 37900,
              },
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "131209992",
                "name": "Chicken Keema Sandwich + Side + Coke",
                "category": "SUPER SAVER COMBOS - SAVE UPTO 46%",
                "description": "Enjoy your favourite Grills sandwich with a choice of drink and a cookie.",
                "imageId": "40730c1ec1c9294fe8a537c0fb2a061f",
                "inStock": 1,
                "price": 29900,
              },
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "131209993",
                "name": "Delhi Tikki Sandwich + Side + Coke",
                "category": "SUPER SAVER COMBOS - SAVE UPTO 46%",
                "description": "Enjoy your favourite Grills sandwich with a choice of drink and a cookie or veg kebabs.",
                "imageId": "3b1bb2e4ab7a6f145d675e811b4ee0a3",
                "inStock": 1,
                "isVeg": 1,
                "price": 27900,
              },
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "119176203",
                "name": "Paneer Achari Sandwich + Side + Coke",
                "category": "SUPER SAVER COMBOS - SAVE UPTO 46%",
                "description": "Enjoy your favourite Hotseller sub with a choice of cookie and a choice of drink.",
                "imageId": "b9016987d7c9a36ccae5c21b9772c265",
                "inStock": 1,
                "isVeg": 1,
                "price": 35900,
              },
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "119176200",
                "name": "Great American BBQ Sandwich + Side + Coke",
                "category": "SUPER SAVER COMBOS - SAVE UPTO 46%",
                "description": "Enjoy your favourite Hotseller sub with a choice of cookie and a choice of drink.",
                "imageId": "b4e32b37ea2c71cfc7b28f885aa668fe",
                "inStock": 1,
                "price": 39900,
              },
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "121849046",
                "name": "Pepper Chicken Sandwich + Side + Coke",
                "category": "SUPER SAVER COMBOS - SAVE UPTO 46%",
                "description": "Enjoy your favourite Hotseller sub with a choice of cookie and a choice of drink.",
                "imageId": "0ef152b30a9ba056580b6d1da96e5678",
                "inStock": 1,
                "price": 38900,
              },
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "119176205",
                "name": "Chilli Cheese Sandwich + Side + Coke",
                "category": "SUPER SAVER COMBOS - SAVE UPTO 46%",
                "description": "Enjoy your favourite Hotseller sub with a choice of cookie and a choice of drink.",
                "imageId": "9020a32adc2b5fc28ac6ed497ea14a3a",
                "inStock": 1,
                "isVeg": 1,
                "price": 35900,
              
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "149583329",
                "name": "2 x Classic Veggie Craver",
                "category": "TRY NEW - SUB CRAVERS",
                "description": "Combo of 2 delicious veggie patty made with chickpeas and green peas tossed in garlic and mint mayo, topped with fresh lettuce, tomato, capsicum, onion in each sub. \nServing size - 336 g/584.7 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nuts.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/26/d5b3f1e0-c2f8-445f-9c7c-ee69ecf99819_ec076d99-2787-42ab-8bce-1796783bd97d.png",
                "inStock": 1,
                "isVeg": 1,
                "price": 24900,
            },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "150484931",
                "name": "2 x Tandoori Paneer craver",
                "category": "TRY NEW - SUB CRAVERS",
                "description": "Combo of 2 tandoori paneer patty with tangy mint and smoky tandoori mayo, topped with fresh lettuce, tomato, capsicum, and onion in each sub. \nServing size - 294 g/628.5 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nuts.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/26/0863dd47-5358-4de4-8c44-ae8344bb91bf_f3566a21-6f5c-4147-b563-7ae9d30db3a0.png",
                "inStock": 1,
                "isVeg": 1,
                "price": 29900,
                   },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "150484932",
                "name": "1 Classic Veggie + 1 Tandoori Paneer craver",
                "category": "TRY NEW - SUB CRAVERS",
                "description": "Enjoy combo of a delicious veggie patty with garlic and mint mayo and a crispy paneer patty with mint and smoky tandoori mayo, both topped with fresh veggies. \nServing size - 315 g/607 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nuts.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/26/ced32329-7cdf-40c2-b29a-52efd4e6a2e9_6d59567f-d609-4eb0-9ab7-24b9a29b8166.png",
                "inStock": 1,
                "isVeg": 1,
                "price": 27900,
                  },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "149583323",
                "name": "2 x Chicken Seekh craver",
                "category": "TRY NEW - SUB CRAVERS",
                "description": "Combo of 2 authentic chicken seekh kebab tossed in a tandoori mayo sauce, topped with crunchy onion and lettuce in each sub. Serving size - 222 g/481.6 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nuts.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/26/35557ecc-49f1-43b6-8049-18b87e7b5418_e9bdeb00-5970-4f62-9ca1-6d24e5f63eb5.png",
                "inStock": 1,
                "price": 28900,
            },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "149583328",
                "name": "1 Classic Veggie + 1 Zesty Chicken craver",
                "category": "TRY NEW - SUB CRAVERS",
                "description": "Enjoy combo of a delicious veggie patty with garlic and mint mayo and a Middle Eastern-inspired chicken patty with garlic sauce, both topped with fresh veggies. Serving size - 295 g/543 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nuts.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/26/01d55263-199d-44c8-b1b4-6430ddb2713b_9e847df7-582f-4d11-91da-74c6bdd93a79.png",
                "inStock": 1,
                "price": 28900,
          },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "150484930",
                "name": "1 Tandoori Paneer  + 1 Zesty Chicken craver",
                "category": "TRY NEW - SUB CRAVERS",
                "description": "Enjoy combo of a Middle Eastern-inspired chicken patty with garlic sauce and a crispy paneer patty with tangy mint and smoky tandoori mayo, both topped with fresh veggies. Serving size - 274 g/565 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nuts.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/26/a9feeedb-f0df-4a72-bdc0-570242b822ad_f11f7ebe-bbbc-4fe9-8ce1-c3eeaf39778f.png",
                "inStock": 1,
                "price": 29900,
               },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "149583326",
                "name": "1 Classic Veggie + 1 Chicken Seekh craver",
                "category": "TRY NEW - SUB CRAVERS",
                "description": "Enjoy combo of a delicious veggie patty with garlic and mint mayo and an authentic chicken seekh kebab with tandoori mayo, both topped with fresh veggies. Serving size - 279 g/533 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nuts.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/26/8a211c70-5aaa-4514-b706-f7303062d157_e1fcdff5-07f5-4ecf-b4c7-f9de78a8e634.png",
                "inStock": 1,
                "price": 24900,
              },
             "hideRestaurantDetails": true
            }
          }
        ],
        "type": "CATEGORY_TYPE_RECOMMENDED"
      }
        },
    {
          "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          "title": "Veg Sandwiches",
          "itemCards": [
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586647",
                  "name": "Aloo Patty Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | Aloo patty seasoned with special herbs and spices, paired with your choice of nutritious veggies, on a freshly baked bread. Serving size : 15 cm - 275 g / 459 kcal , 30 cm - 550 g / 918 kcal , Allergens - Contains wheat, rye, barley, oats, milk. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "ttoydnlmxjmsy4bnxptn",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 24900,
               
               
               
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586652",
                  "name": "Paneer Tikka Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | A tangy twist to your favourite cottage cheese cubes marinated in tandoori sauce for a spicy, smoky flavour combined with your choice of veggies and sauces, served on a freshly baked bread. Serving size : 15 cm - 280 g / 540 kcal , 30 cm - 560 g / 1080 kcal. Allergens - Contains wheat, rye, barley, oats, milk, cashew nut. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "ibvtgsayrbcarr4w1lgd",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 25900,
                 
                 
                
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586648",
                  "name": "Veggie Delite Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | Delicious combination of fresh lettuce, tomatoes, green peppers, cucumbers, onions, olives and pickles served on a freshly baked bread. Serving size : 15 cm - 220 g / 368 kcal , 30 cm - 440 g / 736 kcal. Allergens - Contains wheat, rye, barley, oats, milk.",
                  "imageId": "nyijndkvbvxlzytlo5e7",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 22900,
                
                
                  },
               
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586650",
                  "name": "Veg Shammi Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | Experience authentic flavours with kebab made of lentils and enriched with mouth-watering hints of garlic and onion accompanied by nutritious veggies, in your favourite bread. Serving size : 15 cm - 280 g / 473 kcal , 30 cm - 560 g / 946 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "flljroxppxxq8o47uijs",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 25900,
                
                  "itemPriceStrikeOff": true,
                  "isBolt": true,
                  "boltImageId": "bolt/bolt-tag/bolt_menu_tag.png",
                  "imageBadges": [
                    {
                      "imageId": "Purpose%20Built%20Journey/Guiltfree%201_1.png"
                    }
                  ]
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "119197178",
                  "name": "Chilli Bean Patty Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "A refreshing filling of red and black kidney beans patty topped with aromatic seasoning along with your choice of veggies and sauces served on a freshly baked bread. Serving size : 15 cm - 280 g / 555 kcal , 30 cm - 560 g / 1110 kcal. Allergens -Contains wheat, rye, barley, oats, milk. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/26/ee075e78-8e1b-4ac3-8117-bef96b08fcc8_02f0132e-b070-49f6-b6fd-af0bdd776f5f.png",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 25900,
                  "itemPriceStrikeOff": true,
                  
                },
                
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586657",
                  "name": "Corn & Peas Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | A delicious assortment of green peas, golden corn and diced carrots, dressed with a creamy mixture of eggless mayo, and served on your favourite bread. Serving size : 15 cm - 254 g / 382 kcal , 30 cm - 508 g / 764 kcal. Allergens - Contains wheat, rye, barley, oats, milk. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/11/467a10ae-87da-4777-817c-712856f10283_b2a93801-25ad-4832-b485-511690a013d8.png_compressed",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 24900,
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            }
          ],
        } ,
    },
    {
          "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          "title": "Non Veg Sandwiches",
          "itemCards": [
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586661",
                  "name": "Tandoori Chicken Tikka Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | Hearty chicken marinated with flavorful ingredients like yogurt, garlic and ginger, oven cooked with trademark tandoori tikka taste and served with veggies and sauces in your favourite bread. Serving size : 15 cm - 280 g / 521 kcal , 30 cm - 560 g / 1042 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nut. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "zpmz8kmwbbfptd8ahya0",
                  "inStock": 1,
                  "price": 27900,
               
                 
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586660",
                  "name": "Roasted Chicken Strip Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | Classic preparation of succulent strips of smoked chicken served with veggies and sauces in your choice of freshly baked bread. Serving size : 15 cm - 280 g / 444 kcal , 30 cm - 560 g / 888 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "pjs0s2n8fc5fbhb4xjvk",
                  "inStock": 1,
                  "price": 27900,
                
                
                  "itemPriceStrikeOff": true,
                  "isBolt": true,
                  "boltImageId": "bolt/bolt-tag/bolt_menu_tag.png",
                  "imageBadges": [
                    {
                      "imageId": "Purpose%20Built%20Journey/Guiltfree%201_1.png"
                    }
                  ]
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586670",
                  "name": "B.M.T Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | Protein-enriched classic Italian B.M.T. sub with a mix of tasty chicken pepperoni, smoked chicken slice topped with your fav sauce to deliver a flavour burst that is served in your choice of freshly baked bread. Serving size : 15 cm - 301 g / 474 kcal , 30 cm - 602 g / 948 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/11/068d3da5-df84-43f8-9cff-505b3ab924f6_e38c202f-fe77-4703-a593-e15e0b5a8e68.png_compressed",
                  "inStock": 1,
                  "price": 31900,
               
                 
                
                 
                },
               
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586662",
                  "name": "Chicken Teriyaki Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | Chicken strips glazed with teriyaki sauce, combined with your favourite veggies and topped with our signature sweet onion sauce served hot in a freshly baked bread of your choice. Serving size : 15 cm - 280 g / 397 kcal , 30 cm - 560 g / 794 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "iigw3gyqdbteyyo8pzzr",
                  "inStock": 1,
                  "price": 29900,
                
              
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586672",
                  "name": "Peri Peri Chicken Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | Let your tastebuds travel the world with African peri-peri flavoured chicken served with nutritious veggies and packaged in your favourite bread of choice. Serving size : 15 cm - 280 g / 504 kcal , 30 cm - 560 g / 1008 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "m1ycfwqyybzqrwoemqfa",
                  "inStock": 1,
                  "price": 27900,
              
                
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586659",
                  "name": "Tuna Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | Flaked light tuna mixed with eggless mayo and heaped onto your choice of freshly baked bread. You will love every bite of our classic tuna sandwich. Serving size : 15 cm - 275 g / 485 kcal , 30 cm - 550 g / 970 kcal. Allergens - Contains wheat, rye, barley, oats, fish, milk. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "phmsnwsh4igtnsu1zmsu",
                  "inStock": 1,
                  "price": 31900,
               
                 
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586668",
                  "name": "Chicken Meatball Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | Authentic indian meatballs perfectly seasoned and spiced served along with wholesome veggies and packed in your choice of freshly baked bread. Serving size : 15 cm - 280 g / 522 kcal , 30 cm - 560 g / 1044 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "sxljrq8gbaotjhs9dw2j",
                  "inStock": 1,
                  "price": 26900,
              
                
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "130702845",
                  "name": "Spicy Chicken Keema Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Spicy & juicy chicken keema served along with wholesome veggies and packed in your choice of freshly baked bread. Serving size: 15cm -280 g / 510 kcal, 30cm- 560g /1020 kcal. Allergens- Contains wheat, rye, barley, oats, milk, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "992bb1c8ad4fc05c3cc286a25a17216a",
                  "inStock": 1,
                  "price": 26900,
            
                 
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "108586669",
                  "name": "Chicken Slice Sandwich",
                  "category": "Create Your Own Sandwiches",
                  "description": "Serves 1 | Sliced smoked chicken with your choice of nutritious vegetables, served on a freshly baked bread. Serving size : 15 cm - 265 g / 384 kcal , 30 cm - 530 g / 768 kcal. Allergens - Contains wheat, rye, barley, oats, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
                  "imageId": "bcgv9fq4aswuogw7owbt",
                  "inStock": 1,
                  "price": 26900,
              
                
                 
                 
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "153861262",
                  "name": "Italian B.M.T (Lamb)",
                  "category": "Create Your Own Sandwiches",
                  "description": "Protein-enriched classic Italian B.M.T. sub with a mix of lamb pepperoni, smoked chicken slice topped with your fav sauce to deliver a flavour burst that is served in your choice of freshly baked bread. Serving size : 15 cm - 298 g / 482 kcal , 30 cm - 596 g / 964 kcal. Allergens - Contains cereals containing gluten, milk, soy.",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/22/07674213-59d2-4799-a341-d963ca1c2af3_e6de2098-9c77-49a6-ba1c-c7fefa1d1b93.png",
                  "inStock": 1,
                  "price": 31571,
               
                  "ratings": {
                    "aggregatedRating": {
                      
                    }
                  },
                  "itemPriceStrikeOff": true
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "153861263",
                  "name": "Lamb Pepperoni",
                  "category": "Create Your Own Sandwiches",
                  "description": "Indulge in 100% NZ quality lamb pepperoni with real mozz cheese, your choice of nutritious vegetables, served on a freshly baked bread. Serving size : 15 cm - 264 g / 460 kcal , 30 cm - 528 g / 920 kcal. Allergens - Contains cereals containing gluten, milk, soy.",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/22/b5854cd5-4137-43ad-917b-ff606191d51b_c3fec6f5-4d4b-4b34-8619-231346754e8a.png",
                  "inStock": 1,
                  "price": 31571,
               
                
                },
               
              }
            }
          ],
         
        },
   },
      ],

    }
  },
  {
    "info": {
      "id": "8614",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/5628a978-69e8-4ac1-8fad-146c2543ff5d_8614.jpg",
    
      "areaName": "Connaught Place",
      "promoted": false,
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.4,
    
      "sla": {
        "deliveryTime": 29,
 
      },
      "groupCards":[
    { 
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        "title": "Rs 59 Deal of the Day",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "156521978",
                "name": "Crispy Veg Burger.",
                "category": "Rs 59 Deal of the Day",
                "description": "Our best-selling burger with crispy veg patty, fresh onion and our signature sauce",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 7000,
                "finalPrice": 5900,
              
              },
              
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "101196209",
                "name": "Veg Makhani Burst Burger.",
                "category": "Rs 59 Deal of the Day",
                "description": "Enjoy Makhani Flavour With Mix Veg Patty Topped Up With Onion",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/0c8fa5a6-d138-4ea8-aade-f403b504aaee_e7edfd78-ccd7-4448-951d-36d9f6b3ea67.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 8000,
                "finalPrice": 5900,
              },
              
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "156521979",
                "name": "Regular Fries.",
                "category": "Rs 59 Deal of the Day",
                "description": "The perfect crispy partner.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/19/8ec32a30-ec59-4673-bc5e-16f4b1dc0110_de467db3-09c6-4064-8188-620f259d4541.png_compressed",
                "inStock": 1,
                "isVeg": 1,
                "price": 7000,
                "finalPrice": 5900,
             
                
              
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "156521980",
                "name": "BK Chicken Pizza Puff.",
                "category": "Rs 59 Deal of the Day",
                "description": "\"Crispy puff snack filled with juicy diced chicken, tasty mix veg tomato sauce and mozzarella. Caution: Served Hot.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/29/8c7c9a04-bbcf-48d9-9157-db014d92c231_b1fb762a-e96d-4360-bf00-398ab95f8fc3.jpg",
                "inStock": 1,
                "price": 8900,
                "finalPrice": 5900,
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "156521981",
                "name": "BK Veg Pizza Puff.",
                "category": "Rs 59 Deal of the Day",
                "description": "\"Crispy savoury pastry with a filling of tomato sauce with corn, carrots, bell peppers, peas and mozzarella. Caution: Served Hot.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/29/ee5f25e0-5f74-4daf-908a-38f6c8c23f14_35543521-018a-41fc-b967-92858b42c608.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 5900,
             
                 },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "102007443",
                "name": "Veggie Strips - 5 Pcs.",
                "category": "Rs 59 Deal of the Day",
                "description": "Vegetarian's favourite finger food.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/aeac450c-d789-4c00-a593-05e352a5b325_4eab783e-7b7d-4401-b8e4-64b1fba9bbf5.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 5900,    
              },
             
            }
          }
        ],
        "subtitleSuffix": {
          
        },
        "image": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
        "categoryId": "55625952"
      }
    }
  ,{
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      "title": "Rs 99 Deal Of The Day",
      "itemCards": [
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "147999714",
              "name": "Whopper Jr Veg.",
              "category": "Rs 99 Deal Of The Day",
              "description": "Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces \nQty: 194 Gms| Kcal: 456 | Carbs 61.6 Gms| Sugar: 9.2 Gms| Fat: 20 Gms| Saturated fat: 11.9 Gms| Protein: 7.2 Gms| Sodium: 1428.1 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/788d4363-50c2-4b63-b049-f7eb5f6da1b9_9bc014a8-214f-448a-9d3b-e1a8af76b9f5.jpg",
              "inStock": 1,
              "isVeg": 1,
              "price": 14900,
              "finalPrice": 9900,
           
            
             
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "147999715",
              "name": "BK Chicken Burger.",
              "category": "Rs 99 Deal Of The Day",
              "description": "BK Chicken Patty, Lettuce, Tomato(Seasonal) & Our Signature Mayo Sauce. \nQty: 164 Gms| Kcal: 415 | Carbs 39 Gms| Sugar: 7.2 Gms| Fat: 21.2 Gms| Saturated fat: 7.2 Gms| Protein: 17 Gms| Sodium: 283.9 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
              "imageId": "232c7e1b2b74dfc2851556a255e148a2",
              "inStock": 1,
              "price": 14900,
              "finalPrice": 9900,  
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
      
     
       
      ],
      "subtitleSuffix": {
        
      },
      "image": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/788d4363-50c2-4b63-b049-f7eb5f6da1b9_9bc014a8-214f-448a-9d3b-e1a8af76b9f5.jpg",
      "categoryId": "51652137"
    }
    }
 ],
    
  
    }
  },
  {
    "info": {
      "id": "324907",
      "name": "Kwality Walls Ice Cream and More",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/41467115-184e-44a6-a343-15d22cb6cf20_324907.JPG",
     
      "areaName": "Mandi House",
      "promoted": false,
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.4,
      "veg": true,
    
      "sla": {
        "deliveryTime": 32,
       
      },
      "groupCards":[
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Recommended",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "140395076",
                    "name": "Feast Cadbury Crackle 70ml",
                    "category": "Kwality Wall's New Arrivals",
                    "description": "Experience the delight of Cadbury Crackle chocolate in a Kwality Walls Feast. Every bite has the deliciousness of Cadbury crackle Chocolate with signature hard chocolate. For any chocolate lover",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/7ba31cec-da68-4025-a3b3-29c32732ad2a_c89cbdc8-73f6-4e06-846c-f74136d5f679.jpg_compressed",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 6000,
                 },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "149683113",
                    "name": "Strawberry Sundae Cup [90ml X 4pcs]",
                    "category": "Kwality Wall's New Arrivals",
                    "description": "Enjoy a refreshing strawberry sundae topped with crunchy cashews and choco chips Kcal / Serving: 126 (6%)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/31/4563657f-59bd-4ea5-9391-36041666a4ee_e247426e-8fcc-48d4-81d3-0c941cf765af.jpg_compressed",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 14000,
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "149683112",
                    "name": "Butterscotch Cup [90ml X 4pcs]",
                    "category": "Kwality Wall's New Arrivals",
                    "description": "Creamy butterscotch scoop loaded with chunks of caramel coated cashew nuts. Kcal/Serving: 110 (5%)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/31/e9706531-d309-4ce8-ba23-b4e39f8b3fb1_3891737e-24d4-4af0-889f-928830a29699.jpg_compressed",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 12000,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "149683110",
                    "name": "Kesar Pista Cup [90ml X 4pcs]",
                    "category": "Kwality Wall's New Arrivals",
                    "description": "Royal Delight In Every Bite! A Rich and Creamy Scoop with mesmerizing aroma of Kesar and richness of Pistachios. Kcal/Serving: 101 (5%)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/31/62e0e2ef-d825-4440-8b3a-1502b26a8ea6_09665163-3c7d-4bb6-b80a-a59f739c2779.jpg_compressed",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 14000,
                       },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "140395027",
                    "name": "Fruit & Nut (Dry fruit) Tub, 700ml",
                    "category": "Family Tubs",
                    "description": "A dry fruit lover's paradise! Crunchy cashew nuts, almond and delicious raisins in every bite of creamy scoop. Kcal/Serving128",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/3dd2c272-22ea-4372-aad6-31bc500b534e_c8f6bd8d-f18b-4ee0-9fd2-769a86efb698.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 25900,
                 },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "140395048",
                    "name": "Butterscotch Tub, 700ml",
                    "category": "Family Tubs",
                    "description": "Creamy butterscotch tub loaded with chunks of caramel coated cashew nuts. Kcal/Serving126",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/f781d918-f42e-4d88-819c-2d15aef8151e_b7571308-1d58-44e4-9740-acbec50849c7.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 18000,
                      },
                          "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "140395054",
                    "name": "Vanilla Tub, 700ml",
                    "category": "Family Tubs",
                    "description": "Rich creamy vanilla dessert thats more vanilla-tasting than any vanilla you have ever tasted in all of vanillas entirety. Kcal/Serving112",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/49d104c5-df18-42b0-a0e5-e70bf359ee09_13fe7a1c-a51e-4f4c-8077-bb848c27b576.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 15000,
                      },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "140395015",
                    "name": "Tutti Frutti Party Pack, 700ml",
                    "category": " Party Packs",
                    "description": "Rich creamy scoop loaded with tiny bites of tutti fruity. Kcal/Serving96",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/c429247a-6264-44a7-9e2c-9a253daa0952_085cfa22-bb60-4c59-b845-52b9e128fa4e.jpg_compressed",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 15500,
                     },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "140395017",
                    "name": "Creamy Kulfi Party Pack, 700ml",
                    "category": " Party Packs",
                    "description": "Rich & creamy desi kulfi icecream loaded with almonds and a twist of rose sauce. A perfect companion for hosting! Kcal/Serving133",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/82fbd1eb-f450-40d9-9455-c213a57c8b54_64a43d1c-d96d-4452-9c3b-0b5949ece5b8.jpg_compressed",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 18500,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "140395010",
                    "name": "Blushing Strawberry Party Pack 700ml",
                    "category": " Party Packs",
                    "description": "A fruit lover's delight.\nA scoop that tastes like fresh strawberries.  Kcal/Serving112",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/b2bec1ce-0775-47c6-82cc-d3c3a87eeade_e8af665d-daa5-4398-82a6-6410786af9e9.jpg_compressed",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 12500,
                  },
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "121896251",
                    "name": "Butterscotch Party Pack [700ml x 2pcs]",
                    "category": " Party Packs",
                    "description": "Creamy butterscotch Party Pack loaded with chunks of caramel coated cashew nuts. Kcal/Serving252",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/a7769bda-4c5a-4090-84dc-f672ad647fc9_3a4b53bc-b36f-463c-a3c8-463e224b238b.jpg_compressed",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 30000,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "140395012",
                    "name": "Blackcurrant & Raisins Party Pack, 700ml",
                    "category": " Party Packs",
                    "description": "Creamy  blend of black currant berries and raisins. A refreshing summer treat! Kcal/Serving114",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/39ab2e93-b0aa-45ba-831d-a3bca81470fc_aaca35b9-15a7-43ca-9358-af93cbb7af9a.jpg_compressed",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 18500,
                      },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "114120230",
                    "name": "Trixy Cookie Sundae 110ml",
                    "category": "Single Serve Cups",
                    "description": "(110ml) Parlour like fun in a cup. \n3 delicious layers - silky chocolate disc, delicious cookies & cream and crunchy choco cookies. Kcal/Serving235",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/ab4fa7f8-92de-45f5-896f-fdbe08e6aa7c_f464e122-da96-4bd9-a41c-4b17599431fe.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 7000,
                         },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "140395005",
                    "name": "Trixy blueberry Cheesecake, (Sundae) 110ml",
                    "category": "Single Serve Cups",
                    "description": "Parlour like fun in a cup!\n3 delicious layers - blueberry sauce, creamy cheesecake dessert  and crunchy cinnamon cookies. Kcal/Serving340",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/d8479fc8-3daf-4fd6-92b9-5bde022133df_40f7c852-ee32-4319-a1f1-d4adbd95f781.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 7000,
                 },
                  "hideRestaurantDetails": true
                }
              }
            ],
            "type": "CATEGORY_TYPE_RECOMMENDED"
          }
        },
        {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          "title": "Slow ChurnNew Artisanal Fruit Ice Cream",
          "itemCards": [
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "163836243",
                  "name": "Slow Churn Mango Ice Cream 500 ML",
                  "category": "Slow ChurnNew Artisanal Fruit Ice Cream",
                  "description": "An artisanal fruit ice cream made by slowly churning fresh milk cream and handpicked Mangoes. An ice cream for natural fruit lovers. Kcal/Serving133",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/3bbdc493-6ba9-48a6-b68b-7dd285f78562_aff299a3-2fdc-4f53-b8c7-8059fa66d00e.jpg_compressed",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 37500,
               
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "163836245",
                  "name": "Slow Churn Strawberry Ice Cream 500 ML",
                  "category": "Slow ChurnNew Artisanal Fruit Ice Cream",
                  "description": "Handpicked real Strawberry and fresh milk cream, slowly churned to give a gourmet icecream. Best for those who love natural berries in ice creams Kcal/Serving124",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/4f07cd73-f0cb-4e4e-a191-178397767a61_a33ee726-6b9d-4d6c-8f0d-fff4f656b7f5.jpg_compressed",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 37500,
                  },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "163836214",
                  "name": "Slow Churn Pink Guava Ice Cream 500 ML",
                  "category": "Slow ChurnNew Artisanal Fruit Ice Cream",
                  "description": "Indulge in an artisanal  icecream made by slowly churning fresh milk cream and Pink Guavas. Delight natural fruit ice cream lovers. Kcal/Serving129",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/29dc7a86-1e0e-4c26-aeb8-79245d859068_8219e604-74ef-450a-a8d8-3280b573a929.jpg_compressed",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 37500,
                
                
                },
               
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "163836210",
                  "name": "Slow Churn Chikoo Ice Cream 500 ML",
                  "category": "Slow ChurnNew Artisanal Fruit Ice Cream",
                  "description": "Handpicked sweet Chikoos churned slowly with milk cream to give fruit a creamy icecream. Best for those who enjoy chikoo fruit ice cream Kcal/Serving132",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/b39d255e-06f6-437e-8f93-70b143d79821_cd4a9c87-5f08-48b0-bbe6-a50a5af6965e.jpg_compressed",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 37500,
              
               
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "163836235",
                  "name": "Slow Churn Jamun Ice Cream 500 ML",
                  "category": "Slow ChurnNew Artisanal Fruit Ice Cream",
                  "description": "Creamy gourmet premium icecream made by slowly churning real Jamun fruit and fresh milk cream. Best for those who love tropical jamuns chunks in their ice cream",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/051dfc63-4c8e-4d37-88e2-f4e8b3852265_cebee740-303a-4480-a939-e373304b5c80.jpg_compressed",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 37500,
               
                  
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "163836209",
                  "name": "Slow Churn Mulberry Ice Cream 500 ML",
                  "category": "Slow ChurnNew Artisanal Fruit Ice Cream",
                  "description": "An artisanal premium fruit ice cream made by slowly churning fresh milk cream and  Mulberries. A delight any berries lover.  Kcal/Serving132",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/207cd657-5c1b-49f3-96ab-a43df2a2a3da_bed1bfaf-5c9b-45c2-b3d4-c41a66ffa205.jpg_compressed",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 37500,
             
                 
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            }
          ],
          "subtitleSuffix": {
            
          },
          "image": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/3bbdc493-6ba9-48a6-b68b-7dd285f78562_aff299a3-2fdc-4f53-b8c7-8059fa66d00e.jpg_compressed",
          "categoryId": "58525649"
        }
      },
      {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          "title": "Kwality Wall's New Arrivals",
          "itemCards": [
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "163836251",
                  "name": "Choco Brownie Fudge Party Pack 700ml",
                  "category": "Kwality Wall's New Arrivals",
                  "description": "Choco Brownie Fudge is a delectable treat that combines the richness of chocolate with the indulgence of fudgy brownies. This frozen dessert features a velvety chocolate base swirled with generous chunks of fudge brownie pieces throughout Kcal/Serving129",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/da0d254d-766d-42d1-89b5-6b9bf3595542_7bc0ce81-382b-4702-8bee-b339d3d860a7.jpg_compressed",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 18000,
               
                  
                
                  
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "163836239",
                  "name": "American Nuts Party Pack 700ml",
                  "category": "Kwality Wall's New Arrivals",
                  "description": "Dive into a world full of nuts and raisins, Crunchy creamy and delicious! Kcal/Serving130",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/6b2a88cc-e882-4ae5-b9c9-e382dc091f3a_c6836f20-5b84-4e34-aa48-c90b3a7241c2.jpg",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 16000,
                
                 
                  
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "163836222",
                  "name": "Feast Cadbury Crackle 70ml",
                  "category": "Kwality Wall's New Arrivals",
                  "description": "Experience the delight of Cadbury Crackle chocolate in a Kwality Walls Feast. Every bite has the deliciousness of Cadbury crackle Chocolate with signature hard chocolate. For any chocolate lover",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/7ba31cec-da68-4025-a3b3-29c32732ad2a_c89cbdc8-73f6-4e06-846c-f74136d5f679.jpg_compressed",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 6000,
                
                
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
           
        
          ],
          "subtitleSuffix": {
            
          },
          "image": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/da0d254d-766d-42d1-89b5-6b9bf3595542_7bc0ce81-382b-4702-8bee-b339d3d860a7.jpg_compressed",
          "categoryId": "58525645"
        }
      }],
    
   
    }
  },
  {
    "info": {
      "id": "286518",
      "name": "UBQ by Barbeque Nation",
      "cloudinaryImageId": "ru7j7x8qqtvuzfuw7cdh",
     
      "areaName": "Janpath",
      "promoted": true,
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 4.2,
     
      "sla": {
        "deliveryTime": 34,
      
      },
      "groupCards":[
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Recommended",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "100352738",
                    "name": "Premium Veg Thali - Serves 1",
                    "category": "Premium Thalis",
                    "description": "Serves 1 | Veg Dum Biryani + Tandoori Paneer Tikka (3 Pcs) + Butter Paneer Masala + Dal Makhani + Dry Mix Veg + Whole Wheat Paratha (2 Nos) + Small Angoori Gulab Jamun (4 Pcs). A wholesome North-Indian Thali served with Raita & Salad.",
                    "imageId": "6f9802f2dc6532ac94b3eff6564f9385",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 42900,
                    },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "100352736",
                    "name": "Premium Non-Veg Chicken Thali - Serves 1",
                    "category": "Premium Thalis",
                    "description": "Serves 1 | Chicken Dum Biryani  + Chicken Tikka Boneless (3 Pcs) + Butter Chicken Masala + Dal Makhani + Dry Mix Veg + Whole Wheat Paratha (2 Nos) + Small Angoori Gulab Jamun (4 Pcs). A wholesome North-Indian Thali served with Raita & Salad.",
                    "imageId": "35884bffaba12971bd5491cddcb8be35",
                    "inStock": 1,
                    "price": 49900,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "100352737",
                    "name": "Premium Non-Veg Mutton Thali - Serves 1",
                    "category": "Premium Thalis",
                    "description": "Serves 1 | Mutton Dum Biryani + Chicken Tikka Boneless (3 Pcs) + Mutton Rogan Josh + Dal Makhani + Dry Mix Veg + Whole Wheat Paratha (2 Nos) + Small Angoori Gulab Jamun (4 Pcs ). A wholesome North-Indian Thali served with Raita & Salad. Earlier called as Shahi Mutton Biryani Thali.",
                    "imageId": "1bd19d0b97ed99e76bf590573bd43a2e",
                    "inStock": 1,
                    "price": 54900,
                         },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61265296",
                    "name": "Chicken Biryani",
                    "category": "Biryanis, Curries and Roti",
                    "description": "Serves 1 | Chicken marinated in house blend of Indian spices and layered between aromatic rice. Served with Raita.",
                    "imageId": "whgvtme1hhq9uxtpgjsg",
                    "inStock": 1,
                    "price": 33900,
              },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61596288",
                    "name": "Butter Chicken",
                    "category": "Biryanis, Curries and Roti",
                    "description": "Serves 1 | One of the most popular Punjabi style chicken dishes in the world , cooked in tomato puree, cream, butter and a host of masalas. Kcal - 663",
                    "imageId": "ichhu25fx4xuewgyz3yg",
                    "inStock": 1,
                    "price": 39900,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "65791295",
                    "name": "Paneer Tikka Biryani",
                    "category": "Biryanis, Curries and Roti",
                    "description": "Serves 1 | Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor layered with aromatic rice. Served with Raita. Kcal - 803",
                    "imageId": "bbe3d61fbc99dd79132207c85c2d2e65",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 32900,
                },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "115807674",
                    "name": "Boneless Chicken Biryani",
                    "category": "Biryanis, Curries and Roti",
                    "description": "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita.",
                    "imageId": "gilsg4u3pv23avswifdf",
                    "inStock": 1,
                    "price": 38900,
               },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61394292",
                    "name": "Paneer Butter Masala",
                    "category": "Biryanis, Curries and Roti",
                    "description": "Serves 1 | Luscious combination of cottage cheese and exotic tomato gravy made with cashew paste and aromatic spices. Kcal - 694",
                    "imageId": "b6itdmkcsd7twh2dcyoh",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 39900,
                     },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "55732544",
                    "name": "Dal Makhani",
                    "category": "Biryanis, Curries and Roti",
                    "description": "Serves 1 | India's most loved and sought after Dal. lentils slowly simmered in a very aromatic buttery, creamy tomato sauce. Kcal - 429",
                    "imageId": "db9pbvznhewszyap6axq",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 31900,
                    "finalPrice": 19900,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "58988184",
                    "name": "Tandoori Chicken Wings (12 Pcs)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce,  will surely make you crave for more.",
                    "imageId": "bb0ab3038ce9299149ee0c4d0a220883",
                    "inStock": 1,
                    "price": 31900,
                    },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61394290",
                    "name": "Grilled Chilli Garlic Prawns (9Pcs)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
                    "imageId": "31033e97ac5d0e1b3155369a2e11ed94",
                    "inStock": 1,
                    "price": 38900,
                },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61394280",
                    "name": "Tandoori Tangdi (3Pcs)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Chicken Drumstick marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.  Tangdi Kabab for any occasion.",
                    "imageId": "43c91a42d76e180ce9b3a6f9c3c19b91",
                    "inStock": 1,
                    "price": 34900,
                      },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61394267",
                    "name": "Chicken Tikka (Boneless) (8 Pcs)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Boneless Chicken chunks marinated in  authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615",
                    "imageId": "bcirausndatlpylzwk4l",
                    "inStock": 1,
                    "price": 35900,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "144645891",
                    "name": "Barbecue Pineapple (12 Pcs)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Grilled pineapple chunks with a caramelized sweetness, served with refreshing mint chutney.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/10/412cc20c-567b-45b8-afc9-feeb3662b7c3_7f2680d4-bedf-4f98-9763-fd1a682632bc.jpg_compressed",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 19900,
                    "finalPrice": 14900,
                    },
                  "hideRestaurantDetails": true
                }
              }
            ],
            "type": "CATEGORY_TYPE_RECOMMENDED"
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Kebabs Platter and Starters",
            "itemCards": [
           
           
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61374486",
                    "name": "Tandoori Tangdi (3Pcs)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Chicken Drumstick marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.  Tangdi Kabab for any occasion.",
                    "imageId": "43c91a42d76e180ce9b3a6f9c3c19b91",
                    "inStock": 1,
                    "price": 35900,
                  
                 
                    
                  
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "77902529",
                    "name": "Chicken Seekh Kebab",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Succulent kebabs (6Nos) made from tender meat, masalas and seasoning,grilled on skewers till perfection. Served with Mint Chutney &Lacha Onions. Kcal - 583",
                    "imageId": "0ce722ff34632c00e23e3c70a8fb4217",
                    "inStock": 1,
                    "price": 25900,
                 
                 
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61374433",
                    "name": "Tandoori Paneer Tikka (8 Pcs)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney. Kcal - 753",
                    "imageId": "a19b443af1f23cb3317c82648a66f954",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 33900,
                   
                  
                  
                   
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61374461",
                    "name": "Chicken Tikka (Boneless) (8 Pcs)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Boneless Chicken chunks marinated in  authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615",
                    "imageId": "bcirausndatlpylzwk4l",
                    "inStock": 1,
                    "price": 36900,
                  
                  
                    
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "78440312",
                    "name": "Mutton Seekh Kebab",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Scrumptious, full of juices & flavors- These mutton mince kebabs (6Nos) cooked with Indian aromatic spices are perfect as a starter. Kcal - 450",
                    "imageId": "ca10f7eac804d7322f2ad7781acf843e",
                    "inStock": 1,
                    "price": 34900,
                
                  
              
                    
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "144200068",
                    "name": "Steamed Masala Corn (Butter)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Tender corn kernels infused with creamy butter. Topped with a finely chopped onion, fresh coriander, and green chili. Served with Cajun Seasoning.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/29/b7901d42-4b00-4825-8f5a-ae33a6a61788_e7793752-3d24-4799-b8eb-52b97eebbbac.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 20900,
                  
                 
                  },
              
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "33767443",
                    "name": "Tandoori Mushroom",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Button Mushrooms marinated with tandoori spice , grilled to golden brown perfection and brushed with butter. Kcal - 182",
                    "imageId": "gijzyjxsc2dgcrysk2px",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 29900,
                 
                   
                  
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "144200069",
                    "name": "Steamed Masala Corn (Plain)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Tender corn kernels topped with a finely chopped onion, fresh coriander, and green chili. Served with Cajun Seasoning.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/29/cb9bd53a-9628-4075-9abc-931b070e4826_4a63c6a0-37dd-4207-a03a-43b88bd6ebd0.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 18900,
                
                  
                  },
                
                  "hideRestaurantDetails": true
                }
              }
            ],
            "subtitleSuffix": {
              
            },
            "image": "cxnpmaw7shz2w1t9mvkf",
            "categoryId": "12080272"
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Barbeque in a Box (Serves 2-3)",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "101283028",
                    "name": "Barbeque In A Box (Veg) Premium",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | [Six Starters] - Tandoori Paneer Tikka (4 Pcs) + Churrasco Pineapple (6 Pcs) + Veg Kebabs (6 Pcs) + Veg Rolls (6 Pcs) + Cheese Triangle (6 Pcs) + Assorted Grilled Corn & Veg (2 Nos) [Main Course] - Paneer Butter Masala + Mix Veg + Dal Makhani + Veg Dum Biryani + Whole Wheat Paratha (3 Nos) [Three Desserts] Angoori Jamun (8 Pcs) + Moong Dal Halwa + Brownie. Accompanied with Mint Chutney, Salan, Dips & Salad. Barbeque Nation buffet served at home.",
                    "imageId": "ms4gatxolkuncr145vbz",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 101900,
                 
                  
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "101283027",
                    "name": "Barbeque in a Box (Non Veg Overload)",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | [Five Starters] Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (4 Pcs) + Tandoori Tangdi (2 Pcs) + Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + [Main Course] Butter Chicken Masala + Mutton Rogan Josh + Egg Curry + Chicken Dum Biryani + Whole Wheat Paratha (3 Pcs) [Three Desserts] Angoori Gulab Jamun (8 Nos) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Salan, Dips & Salad.",
                    "imageId": "suogu1jyv51m2eg7eirk",
                    "inStock": 1,
                    "price": 131900,
                 
                   
                   
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "72240465",
                    "name": "Barbeque in a Box (Mutton Biryani Overload)",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | Mutton Dum Biryani (3 Portions) + Tandoori Tangdi (2 Pcs) + Chicken Tikka (4 Pcs) + Fish Tikka (6 Pcs) + Chilly Garlic Prawns(6 Pcs) + Chicken Wings (6 Pcs) + Angoori Gulab Jamun (8 Pcs) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Raita, Salan, Dips & Salad. Relish biryani of Succulent mutton pieces marinated in freshly roasted spices and cooked with aromatic long grain Basmati rice in the Dum style. Earlier called as Biryanis and Kebabs Box (Mutton) Premium",
                    "imageId": "40fe28af93d3039bf6acdd47dc5b95ac",
                    "inStock": 1,
                    "price": 131900,
                  
                   
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "100353156",
                    "name": "Barbeque in a Box (Non Veg) Premium (With Prawns and Mutton)",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | [Six Starters]- Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (4 Pcs) + Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + Veg Kebabs (6 Pcs) + Veg Rolls (6 Pcs) [Main Course] - Butter Chicken + Mutton Rogan Josh + Dal Makhani + Chicken Dum Biryani + Whole Wheat Paratha (3 Nos) [Three Desserts] - Angoori Jamun (8 Pcs)+ Moong Dal Halwa + Brownie - Accompanied with Mint Chutney, Salan, Dips & Salad. A premium Barbeque Nation buffet served at home.",
                    "imageId": "e2ewnaxscaxstws68p4o",
                    "inStock": 1,
                    "price": 126900,
                 
                  
                 
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
             
            ],
            "subtitleSuffix": {
              
            },
            "image": "ms4gatxolkuncr145vbz",
            "categoryId": "32262108"
          }
        }

      ],
    
  
    }
  },
  {
    "info": {
      "id": "253718",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/8/50440b7b-5d81-4298-8ce0-5327c74109c6_253718.jpg",
      "locality": "Tolstoy Marg",
      "promoted": false,
      "areaName": "Janpath",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "American"
      ],
      "avgRating": 4.6,
      "sla": {
        "deliveryTime": 25,
      
      },
      "groupCards":[
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Signature Collection",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "150853998",
                    "name": "Grand Cheese Signature Collection",
                    "category": "Signature Collection",
                    "description": "Potato bun, with rich and crusty cheesy corn patty, topped with chunky vegetable-Roasted sauce served with Gherkin slices, Cheddar cheese patty and crisp iceberg lettuce and Red cabbage",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/10/8868310c-67dd-46be-8a2c-32d2735a4920_258f25ed-6618-4b26-b9fc-f89180b595a9.png",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 25900,
                    "finalPrice": 24900,
                     },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "150051364",
                    "name": " EVM Grand Cheese",
                    "category": "Signature Collection",
                    "description": "Chunky juicy whole Muscle chicken patty with fresh and premium ingredients such as Gherkin slices ,Red cabbage and crunchy lettuce, dressed with Veg Mayo.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/19/0f94f78d-dd43-49f8-bea8-950b9e5cd9d1_672069ed-39d0-42f4-b12b-84449c77196b.png",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 39700,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "150051365",
                    "name": "Large EVM Grand Cheese",
                    "category": "Signature Collection",
                    "description": "Potato bun, with rich and crusty cheesy corn patty, topped with chunky vegetable-Roasted sauce served with Gherkin slices, Cheddar cheese patty and crisp iceberg lettuce and Red cabbage",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/19/2744fcd2-2305-4981-b757-9d65b5cf11c6_de56a69e-db93-440d-b37b-84425a28a0f4.png",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 42100,
                      },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "150853999",
                    "name": " Grand Chicken Signature Collection",
                    "category": "Signature Collection",
                    "description": "Chunky juicy whole Muscle chicken patty with fresh and premium ingredients such as Gherkin slices ,Red cabbage and crunchy lettuce, dressed with Veg Mayo.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/10/b5c048d7-f34a-437e-b92f-804952b7ef22_c84450dc-874c-4f80-9997-6b67c0efc19e.png",
                    "inStock": 1,
                    "price": 26300,
                    "finalPrice": 24900,
                 },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "150051367",
                    "name": " EVM Grand Chicken",
                    "category": "Signature Collection",
                    "description": "Potato bun, with rich and crusty cheesy corn patty, topped with chunky vegetable-Roasted sauce served with Gherkin slices, Cheddar cheese patty and crisp iceberg lettuce and Red cabbage",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/19/38212331-b630-4c3e-84b3-d1a21e6521ab_c55fb75b-9a6e-4e4f-8b7c-8d5debdef122.png",
                    "inStock": 1,
                    "price": 40100,
                    },
                      "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "150051368",
                    "name": "Large EVM Grand Chicken",
                    "category": "Signature Collection",
                    "description": "Chunky juicy whole Muscle chicken patty with fresh and premium ingredients such as Gherkin slices ,Red cabbage and crunchy lettuce, dressed with Veg Mayo.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/19/89c7ca09-4572-4d68-a9e8-e213289d7236_269af2e8-5017-4ec0-9ce5-5a93d979a91b.png",
                    "inStock": 1,
                    "price": 42600,
              },
                  "hideRestaurantDetails": true
                }
              }
            ]
          }
        },
        {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          "title": "What’s New",
          "itemCards": [
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "143667697",
                  "name": " McFlurry Choco Caramel*",
                  "category": "What’s New",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/9/3fa87d10-9806-4485-839e-8c4a8126262c_4c14c169-7c89-40e5-a8e1-694f3676bf50.png",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 13700,
              
              
                 
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "143667698",
                  "name": "Small McFlurry Choco Caramel*",
                  "category": "What’s New",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/9/3fa87d10-9806-4485-839e-8c4a8126262c_4c14c169-7c89-40e5-a8e1-694f3676bf50.png",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 10400,
              
                 
                
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "148437286",
                  "name": "Coke ® Zero",
                  "category": "What’s New",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/15/39d41491-2301-4245-a905-a98b6179d3f0_12cc104e-c08c-48bf-b380-8da8e955ea1f.png",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 9100,
                  },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            }
          ],
          "subtitleSuffix": {
            
          },
          "image": "FOOD_CATALOG/IMAGES/CMS/2024/9/9/3fa87d10-9806-4485-839e-8c4a8126262c_4c14c169-7c89-40e5-a8e1-694f3676bf50.png",
          "categoryId": "21036892"
        }
      },
      {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          "title": "Menu Starts @125/-",
          "itemCards": [
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "139766300",
                  "name": "McVeggie Burger+ Small Fries+Small Coke+McPuff",
                  "category": "Menu Starts @125/-",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/11/41a4b8dc-4f0f-4a96-a420-6871f09235c2_67e053a0-e833-4928-95b7-375713df6243.png",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 20200,
                
                 
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "139766301",
                  "name": "McChicken Burger+Small Fries +Small Coke+McPuff",
                  "category": "Menu Starts @125/-",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/11/85976806-e9c4-4212-b3aa-4db4a923a7c3_630a15df-8aa6-4d1e-857c-dfb6a55ade43.png",
                  "inStock": 1,
                  "price": 23700,
              
               
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "132479719",
                  "name": "McAloo Tikki+Small Fries+Small drink+McPuff",
                  "category": "Menu Starts @125/-",
                  "imageId": "befe665d4e3a53a7c0457b86d3639f76",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 14300,
                  },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "132479718",
                  "name": "McAloo Tikki+Small Fries+Small drink+McFlurry",
                  "category": "Menu Starts @125/-",
                  "imageId": "603910c78cafc651f7156a415d64bc9b",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 16600,
               
               
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "132479722",
                  "name": "McAloo Tikki+Small Coke",
                  "category": "Menu Starts @125/-",
                  "imageId": "5a64912a4a299d7f8f84e15b33a0dc44",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 13500,
        
               
                
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
          ],
          "subtitleSuffix": {
            
          },
          "image": "FOOD_CATALOG/IMAGES/CMS/2024/5/11/41a4b8dc-4f0f-4a96-a420-6871f09235c2_67e053a0-e833-4928-95b7-375713df6243.png",
          "categoryId": "57789229"
        }
      }],
    
 
    }
  },
  {
    "info": {
      "id": "526516",
      "name": "Salad Days",
      "cloudinaryImageId": "cfa1123ebf17413dc7d0a80c7361fab3",
      "locality": "Gole Market",
      "promoted": false,
      "areaName": "Gole Market",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Salads"
      ],
      "avgRating": 4.5,
     
      "sla": {
        "deliveryTime": 26,
       
      },
      "groupCards":[ 
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
            "title": "Gourmet Salad Meals",
                "itemCards": [
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "90484560",
                        "name": "Falafel Farmer Salad",
                        "category": "Gourmet Salad Meals",
                        "description": "Village salad with salad greens, falafel, tomato, cucumber, sweet bell peppers, onion, olives, feta, baked pita crisps, house ranch dressing & bread",
                        "imageId": "0d331bf802d48fbd1c4a7e8a380fdd51",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 29900,
                        },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "90484565",
                        "name": "Basil Pesto Pasta Salad",
                        "category": "Gourmet Salad Meals",
                        "description": "Whole-wheat pasta, assorted greens, sweet corn, broccoli, cherry tomatoes, black olives, sweet basil, yogurt-pesto dressing & bread",
                        "imageId": "2b16487394a60e84413a1c6dd1e35545",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 29900,
                      },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "90484566",
                        "name": "Quinoa & Grilled Veggies Salad",
                        "category": "Gourmet Salad Meals",
                        "description": "Golden quinoa, salad greens, mushroom, sweet bell peppers, broccoli, zucchini, carrot, French beans, dates, mint, dijon lemon vinaigrette & bread",
                        "imageId": "347eb58ab38fae3e532526818d71aafa",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 31900,
                     },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "128115033",
                        "name": "Lemongrass Tofu & Soba Noodle Salad",
                        "category": "Gourmet Salad Meals",
                        "description": "Asian vegan salad of Soba noodles, Steamed Moringa Lemongrass Tofu Balls, edamame beans, Napa & purple cabbage, green beans, broccoli, sweet bell peppers, carrot, spring onions, sesame seeds, peanuts, nori sheets & sesame-lime dressing.",
                        "imageId": "c67668601bb0ac2cc09ca63431a710ab",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 37900,
                      },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "90484559",
                        "name": "Exotic Fruit Bowl",
                        "category": "Gourmet Salad Meals",
                        "description": "Kiwi, Californian grapes, Egyptian orange, Washington apple, pineapple, pomegranate/cherry, sun melon, mint, candied walnuts & lemon-honey dressing",
                        "imageId": "f8717b3fb95693dce4ecc365b3dd3204",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 32900,
                      },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "90484556",
                        "name": "Roasted Chicken Salad",
                        "category": "Gourmet Salad Meals",
                        "description": "Tender roasted chicken breast, salad greens, sweet bell peppers, black olives, onions, honey Dijon-roasted peppers dressing & bread",
                        "imageId": "17e4a340c1af40d7b4aba3c4e803d52a",
                        "inStock": 1,
                        "price": 31900,
                       },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "90484547",
                        "name": "Chicken Pesto Pasta Salad",
                        "category": "Gourmet Salad Meals",
                        "description": "Whole-wheat pasta, assorted greens, roasted chicken breast, broccoli, sun-dried tomatoes, black olives, sweet basil, yogurt-pesto dressing & bread",
                        "imageId": "f4a4450c085a0e6933784ea2a5f9fe59",
                        "inStock": 1,
                        "price": 31900,
                         },   }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "90484549",
                        "name": "Chicken Teriyaki Salad",
                        "category": "Gourmet Salad Meals",
                        "description": "Japanese salad of teriyaki chicken, salad greens, sweet bell peppers, broccoli, spring onion, white radish, cherry tomatoes, nori, sesame seeds, ginger-teriyaki dressing & bread",
                        "imageId": "5726fe03eb3acd766828bdd44b301f81",
                        "inStock": 1,
                        "price": 32900,
                          },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "90484545",
                        "name": "Blackened Chicken, Avocado & Orange Salad",
                        "category": "Gourmet Salad Meals",
                        "description": "Exotic salad of salad greens, spiced chicken breast, Hass avocado, Orange, mint, coriander, shallots, red chili, mustard honey vinaigrette & bread",
                        "imageId": "9f17883ced8cd7c3469f8fff13f5fcff",
                        "inStock": 1,
                        "price": 37900,
                       },
                      "hideRestaurantDetails": true
                    }
                  },
                ]
              },
        },  
      {
          "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        "title": "Non Veg Salads",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "81458828",
                "name": "Roasted Chicken Salad",
                "category": "GOURMET SALAD MEALS",
                "description": "Tender roasted chicken breast, salad greens, sweet bell peppers, black olives, onions, honey Dijon-roasted peppers dressing & bread",
                "imageId": "17e4a340c1af40d7b4aba3c4e803d52a",
                "inStock": 1,
                "price": 31900,
                "finalPrice": 30900,
             
             
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "81458814",
                "name": "Chicken Pesto Pasta Salad",
                "category": "GOURMET SALAD MEALS",
                "description": "Whole-wheat pasta, assorted greens, roasted chicken breast, broccoli, sun-dried tomatoes, black olives, sweet basil, yogurt-pesto dressing & bread",
                "imageId": "f4a4450c085a0e6933784ea2a5f9fe59",
                "inStock": 1,
                "price": 31900,
           
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "81458832",
                "name": "Blackened Chicken, Avocado & Orange Salad",
                "category": "GOURMET SALAD MEALS",
                "description": "Exotic salad of salad greens, spiced chicken breast, Hass avocado, Orange, mint, coriander, shallots, red chili, mustard honey vinaigrette & bread",
                "imageId": "9f17883ced8cd7c3469f8fff13f5fcff",
                "inStock": 1,
                "price": 37900,
           
              
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
        
        ],
        "subtitleSuffix": {
          
        },
        "categoryId": "53453671"
      },
    },
   ],
     
         
        
      
    
    }
  },
  {
    "info": {
      "id": "16865",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/f63a6861-4706-4534-8fc4-e95fec2e0ab8_16865.jpg",
      "locality": "Connaught Place",
      "areaName": "Connaught Place",
      "promoted": true,
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.2,
      "parentId": "721",
      "avgRatingString": "4.2",
      "totalRatingsString": "4.8K+",
      "sla": {
        "deliveryTime": 32,
     
      },
      "groupCards":[
        { "card": {
      
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          "title": "Recommended",
          "itemCards": [
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "107430320",
                  "name": "Veggie Supreme",
                  "category": "Veg Pizza",
                  "description": "Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and 100% mozzarella cheese. (PAN Per/Med-254 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                  "imageId": "z0c4xpovma1qtmu4tlls",
                  "inStock": 1,
                  "price": 16900,
                  "isVeg": 1,
               },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "107430137",
                  "name": "Tandoori Paneer",
                  "category": "Veg Pizza",
                  "description": "Serves 1 | It's our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika with delicious tandoori sauce and 100% mozzarella cheese! (PAN Per/Med-335 Kcal/100g | TnC-326 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                  "imageId": "s5ld93rsknx0fhj6xarn",
                  "inStock": 1,
                  "price": 25300,
                  "isVeg": 1,
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "107430382",
                  "name": "Margherita",
                  "category": "Veg Pizza",
                  "description": "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! (PAN Per/Med-292 Kcal/100g | TnC-293 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                  "imageId": "dpventcrozvfni0lqb10",
                  "inStock": 1,
                  "price": 14200,
                  "isVeg": 1,
              },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "107430187",
                  "name": "Veggie Feast",
                  "category": "Veg Pizza",
                  "description": "Serves 1 | Herbed onion and green capsicum, juicy sweet corn & 100% mozzarella cheese with flavourful pan sauce (PAN Per/Med-269 Kcal/100g | TnC-274 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                  "imageId": "cbye9x7wxeopwqvenn7g",
                  "inStock": 1,
                  "price": 22900,
                  "isVeg": 1,
              },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "107430133",
                  "name": "Country Feast",
                  "category": "Veg Pizza",
                  "description": "Serves 1 | Loaded with herbed onion & green capsicum, sweet corn, tomato with signature pan sauce and 100% mozzarella cheese. It's a feast you can't refuse (PAN Per/Med-244 Kcal/100g | TnC-282 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                  "imageId": "c3832837392378cca98e484b89c313ba",
                  "price": 11900,
                  "inStock": 1,
                  "isVeg": 1,
               },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "107430103",
                  "name": "Chicken Supreme",
                  "category": "Non Veg Pizza",
                  "description": "Serves 1 | Loaded with delicious chicken tikka, flavourful herbed chicken, spicy schezwan chicken meatball with flavourful pan sauce and 100% mozzarella cheese. (PAN Per/Med-273 Kcal/100g | TnC-284 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                  "imageId": "dlvdmsn1uotbdn4vzvap",
                  "inStock": 1,
                  "price": 32100,
               },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "107430009",
                  "name": "Triple Chicken Feast",
                  "category": "Non Veg Pizza",
                  "description": "Serves 1 | Spicy schezwan chicken meatball, flavourful herbed chicken, juicy chicken sausage, green capsicum & onion, spicy red paprika with classic pan sauce and 100% mozzarella cheese (PAN Per/Med-262 Kcal/100g | TnC-277 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                  "imageId": "quxirmjttzksp7xlhysc",
                  "price": 31400,
                  "inStock": 1,
                     },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "113731421",
                  "name": "Country Feast - Personal",
                  "category": "Flat Menu @189",
                  "description": "Serves 1 | Loaded with Herbed Onion & Green capsicum, Sweet Corn & Tomato with signature pan sauce and 100% mozzarella cheese. It's a feast you can't refuse. (PAN Per-244Kcal/100g)",
                  "imageId": "c3832837392378cca98e484b89c313ba",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 31900,
                  "finalPrice": 18900,
        },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "129786622",
                  "name": "Classic BreadStix + Classic BreadStix",
                  "category": "Flat Menu @189",
                  "description": "Serves 1 | Freshly baked 2 Classic BreadStix ! The perfect pairing with your delicious pizza or on their own as a snack.",
                  "imageId": "bbb62b706156b341665fea94695fa19e",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 23800,
                  "finalPrice": 18900,
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "114220976",
                  "name": "Spiced Paneer - Personal",
                  "category": "Flat Menu @189",
                  "description": "Serves 1 | Spiced Paneer, crunchy Onion, juicy Tomato & 100% mozzarella cheese, with our classic pan sauce. (PAN Per-276Kcal/100g)",
                  "imageId": "a89yqx09ppwlecyqterp",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 25900,
                  "finalPrice": 18900,
             },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "113731425",
                  "name": "Veggie Feast - Personal",
                  "category": "Flat Menu @189",
                  "description": "Serves 1 | Herbed onion and Green Capsicum, juicy Sweet Corn & 100% mozzarella cheese with flavourful pan sauce. (PAN Per-269Kcal/100g)",
                  "imageId": "cbye9x7wxeopwqvenn7g",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 25900,
                  "finalPrice": 18900,
               },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "113731426",
                  "name": "Chicken Sausage - Personal",
                  "category": "Flat Menu @189",
                  "description": "Serves 1 | Pizza topped with Chicken n Cheese Sausages & crunchy Onions, flavourful pan sauce and 100% mozzarella cheese. (PAN Per-310Kcal/100g)",
                  "imageId": "aylqpxx08pltowbzxhd3",
                  "inStock": 1,
                  "price": 25900,
                  "finalPrice": 18900,
                         },
                "hideRestaurantDetails": true
              }
            },
          
         
        
          ],
          "type": "CATEGORY_TYPE_RECOMMENDED"
        }
      },
  {  
           "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        "title": "Veg Pizza",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "107796625",
                "name": "Margherita Pizza",
                "category": "Veg Pizza",
                "description": "Serves 1 | Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! (292 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "dpventcrozvfni0lqb10",
                "price": 16900,
                }, 
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "107436805",
                "name": "Tandoori Paneer",
                "category": "Veg Pizza",
                "description": "Serves 1 | It's our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika with delicious tandoori sauce and 100% mozzarella cheese! (PAN Per/Med-335 Kcal/100g | TnC-326 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "s5ld93rsknx0fhj6xarn",
                "inStock": 1,
                "isVeg": 1,
               
                "price": 31900,
               
                "type": "ITEM",
                
              
              },
              
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "107436923",
                "name": "Veggie Feast",
                "category": "Veg Pizza",
                "description": "Serves 1 | Herbed onion and green capsicum, juicy sweet corn & 100% mozzarella cheese with flavourful pan sauce (PAN Per/Med-269 Kcal/100g | TnC-274 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "cbye9x7wxeopwqvenn7g",
                "inStock": 1,
                "price": 37900,
                "isVeg": 1,
              
              },
              
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "107436674",
                "name": "Veggie Supreme",
                "category": "Veg Pizza",
                "description": "Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and 100% mozzarella cheese. (PAN Per/Med-254 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "z0c4xpovma1qtmu4tlls",
                "inStock": 1,
                "price": 43200,
                "isVeg": 1,
               
              
               
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "116286350",
                "name": "Ultimate Tandoori Veggie",
                "category": "Veg Pizza",
                "description": "Serves 1 | An ultimate combination of your favourite veggies-onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo (PAN Per/Med-314 Kcal/100g | TnC-395 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "b7d1f56df6414f8b6e49001af95e259a",
                "inStock": 1,
                "price": 54300,
                "isVeg": 1,
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "116286354",
                "name": "Awesome American Cheesy",
                "category": "Veg Pizza",
                "description": "Serves 1 | Our divine peruvian flavoured cheesy sauce, topped with sweet corn, green capsicum, red paprika and 100% mozzarella cheese, finished with a generous drizzle of texas garlic sauce (PAN Per/Med-290 Kcal/100g | TnC-300 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "9bd233c76aaf2d2745c5c07332609a8c",
                "inStock": 1,
                "price": 32900,
                "isVeg": 1,
              
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "116286353",
                "name": "Mazedar Makhni Paneer",
                "category": "Veg Pizza",
                "description": "Serves 1 | A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle (PAN Per/Med-288 Kcal/100g | TnC-290 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "bf62afee565475fb92a204206321a41c",
                "inStock": 1,
                "price": 43700,
                "isVeg": 1,
             
               
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "135321309",
                "name": "Bold BBQ Veggies",
                "category": "Veg Pizza",
                "description": "Serves 1 | Our signature pan sauce, with BBQ Sauce drizzle, topped with mushroom, onion, green capsicum, & red paprika (PAN Per/Med-242 Kcal/100g | TnC-266 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "d4d697a58b3a97a46676fa8712e90ed7",
                "inStock": 1,
                "isVeg": 1,
                "price": 31900,
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "107437053",
                "name": "Margherita",
                "category": "Veg Pizza",
                "description": "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! (PAN Per/Med-292 Kcal/100g | TnC-293 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "dpventcrozvfni0lqb10",
                "inStock": 1,
                "price": 39900,
                "isVeg": 1,
            
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "116286346",
                "name": "Mexican Fiesta",
                "category": "Veg Pizza",
                "description": "Serves 1 | Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella cheese with a signature spice sprinkle & our flavourful pan sauce (PAN Per/Med-266 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "0c4c12819d98a35144e3f08451ae64f3",
                "inStock": 1,
                "price": 38900,
                "isVeg": 1,
               
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "107436715",
                "name": "Country Feast",
                "category": "Veg Pizza",
                "description": "Serves 1 | Loaded with herbed onion & green capsicum, sweet corn, tomato with signature pan sauce and 100% mozzarella cheese. It's a feast you can't refuse (PAN Per/Med-244 Kcal/100g | TnC-282 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "c3832837392378cca98e484b89c313ba",
                "inStock": 1,
                "isVeg": 1,
                "price": 31900,
             
             
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "107436811",
                "name": "Corn & Cheese",
                "category": "Veg Pizza",
                "description": "Serves 1 | A combination of juicy sweet corn & 100% mozzarella cheese with flavourful signature pan sauce (PAN Per/Med-320 Kcal/100g | TnC-304 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "ckbnw98n6tffy50wvuzm",
                "inStock": 1,
                "price": 21900,
                "isVeg": 1,
             
              
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "107436973",
                "name": "Spiced Paneer",
                "category": "Veg Pizza",
                "description": "Serves 1 | Spiced paneer, crunchy onion, juicy tomato & 100% mozzarella cheese, with our classic pan sauce (PAN Per/Med-276 Kcal/100g | TnC-283 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "a89yqx09ppwlecyqterp",
                "inStock": 1,
                "isVeg": 1,
                "price": 38900,
               
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "116286344",
                "name": "Schezwan Margherita",
                "category": "Veg Pizza",
                "description": "Serves 2 | Your very own margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese (PAN Per/Med-300 Kcal/100g | TnC-309 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
                "imageId": "0e7df98b7cffdb0b88856464014ad2ff",
                "inStock": 1,
                "price": 54900,
                "isVeg": 1,
               
                
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          }
        ],
        "subtitleSuffix": {
          
        },
        "image": "dpventcrozvfni0lqb10",
        "categoryId": "34311079"
      }
  },
  {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      "title": "Non Veg Pizza",
      "itemCards": [
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "116286356",
              "name": "Sausage & Sweet Corn.",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | Our classic chicken & cheese sausage, juicy sweet corn and 100% mozzarella cheese with flavourful pan sauce (PAN Per/Med-277 Kcal/100g | TnC-282 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "190c84ffc8773254c38b3b993e31ba73",
              "inStock": 1,
              "price": 31800,
            
            
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "107436934",
              "name": "Chicken Pepperoni",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | Yummy chicken pepperoni & 100% mozzarella cheese with signature pan sauce. Its a classic! (PAN Per/Med-301 Kcal/100g | TnC-311 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "gdz44c9hirco09bdafoq",
              "inStock": 1,
              "price": 31800,
             
           
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "116286376",
              "name": "Sizzling Schezwan Chicken",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | Loaded with our signature spicy schezwan sauce, juicy schezwan chicken meatballs & 100% mozzarella cheese (PAN Per/Med-277 Kcal/100g | TnC-286 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "4061af0525c00c89f0d1edbe7216765c",
              "inStock": 1,
              "price": 31900,
            
            
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "107436613",
              "name": "Triple Chicken Feast",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | Spicy schezwan chicken meatball, flavourful herbed chicken, juicy chicken sausage, green capsicum & onion, spicy red paprika with classic pan sauce and 100% mozzarella cheese (PAN Per/Med-262 Kcal/100g | TnC-277 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "quxirmjttzksp7xlhysc",
              "inStock": 1,
              "price": 37900,
           
            },
            
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "107436683",
              "name": "Chicken Supreme",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | Loaded with delicious chicken tikka, flavourful herbed chicken, spicy schezwan chicken meatball with flavourful pan sauce and 100% mozzarella cheese. (PAN Per/Med-273 Kcal/100g | TnC-284 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "dlvdmsn1uotbdn4vzvap",
              "inStock": 1,
              "price": 21900,
           
           
            
              
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "116286375",
              "name": "Dhabe Da Keema",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | Dhaba style chicken keema masala, with green chiili, crunchy onion with flavourful pan sauce, 100 % mozzarella cheese & a generous drizzle of mint mayo (PAN Per/Med-270 Kcal/100g | TnC-290 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "d9eddb1993da4e5dc65ef2ceaa8503f7",
              "inStock": 1,
              "price": 61900,
             
             
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "107436627",
              "name": "Murg Malai Chicken",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | Amazingly flavourful chicken malai tikka, herbed onion & green capsicum, spicy red paprika with flavourful pan sauce and 100% mozzarella cheese (PAN Per/Med-269 Kcal/100g | TnC-299 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "t1stinhga3alitdpr6yt",
              "inStock": 1,
              "price": 38900,
            
            
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "107436617",
              "name": "Chicken Tikka Supreme",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | A divine combination of delicious chicken tikka & malai chicken tikka, onion, spicy red paprika with flavourful pan sauce and 100% mozzarella cheese (PAN Per/Med-267 Kcal/100g |TnC-274 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "d3bnas8nxt9dr13jhipu",
              "inStock": 1,
              "price": 81900,
           
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "116286381",
              "name": "Nawabi Murg Makhni",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | A chicken lovers delight! Combination of chicken malai tikka, flavourful chicken keema masala, crunchy onion, juicy tomato on our new makhni sauce with 100% mozzarella cheese and buttery spice sprinkle (PAN Per/Med-252 Kcal/100g | TnC-269 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "eb7467f9836bde6741eff6cf81b996da",
              "inStock": 1,
              "price": 77900,
             
             
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "116286379",
              "name": "Awesome American Cheesy Chicken",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | Our divine peruvian flavoured cheesy sauce, topped with classic chicken pepperoni, cheese and chicken sausage black olives, spicy jalapeno and 100% mozzarella cheese, finished with a generous drizzle of texas garlic sauce. (PAN Per/Med-297 Kcal/100g | TnC-301 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "f55016931d13f7489c6140de76fa16aa",
              "inStock": 1,
              "price": 31890,
            
            
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "107436623",
              "name": "Chicken Tikka",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | Mouth-watering chicken tikka, crunchy onion & tomato with delicious tandoori sauce and 100% mozzarella cheese (PAN Per/Med-275 Kcal/100g | TnC-283 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "juplqft4tmub5hqocwxk",
              "inStock": 1,
              "price": 31900,
             
            
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "107436836",
              "name": "Chicken Sausage",
              "category": "Non Veg Pizza",
              "description": "Serves 1 | Pizza topped with chicken n cheese sausages & crunchy onions, flavourful pan sauce and 100% mozzarella cheese (PAN Per/Med-310 Kcal/100g | TnC-312 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g | Stuff Crust Chicken Seekh Kebab Add : Per: 256 Kcal/100g | Med: 253 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
              "imageId": "aylqpxx08pltowbzxhd3",
              "inStock": 1,
              "price": 31900,
              
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        }
      ],
      "subtitleSuffix": {
        
      },
      "image": "190c84ffc8773254c38b3b993e31ba73",
      "categoryId": "34311078"
    }

  }
  ],
 
      

    }
  },
  {
    "info": {
      "id": "157768",
      "name": "The Good Bowl",
      "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
      "locality": "Minto Road",
      "promoted": false,
      "areaName": "GANDHI MARKET",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
     
      "sla": {
        "deliveryTime": 34,
       
      },
      "groupCards":[
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Recommended",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "142397875",
                    "name": "Classic Rajma Rice Bowl (Today's Special)",
                    "category": "Bowl Of The Day (Friday)",
                    "description": "Kidney beans a great vegetarian source of protein, slowly-cooked in thick and spicy onion tomato gravy served on a bed of rice and salad. Who can say no to this bowl full of goodness, fiber and protein. Calories (Kcals) 627, Carbs (Gms) 88, Proteins (Gms) 13, Fats (Gms) 25",
                    "imageId": "c4d17cba98eddfabde7c611559385abf",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 19900,
               },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "142397876",
                    "name": "Chicken Kheema Rice Bowl (Today's Special)",
                    "category": "Bowl Of The Day (Friday)",
                    "description": "Let the good times roll with this all-time favourite bowl. Minced chicken kheema with Hyderabadi rice and a side of salad. Must try!",
                    "imageId": "99ef47d1b76c19f5150b08660be6c8d6",
                    "inStock": 1,
                    "price": 34900,
                      },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "145196603",
                    "name": "Dr. Rushabh's Rajma Rice Bowl",
                    "category": "Bowl Star Special",
                    "description": "Kidney beans a great vegetarian source of protein, slowly-cooked in thick and spicy onion tomato gravy served on a bed of rice and salad. Who can say no to this bowl full of goodness, fiber and protein. Calories (Kcals) 627, Carbs (Gms) 88, Proteins (Gms) 13, Fats (Gms) 25",
                    "imageId": "c4d17cba98eddfabde7c611559385abf",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 19900,
                },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "117012479",
                    "name": "Mughlai Grilled Chicken Rice Bowl with Omelette",
                    "category": "Signature Bowls",
                    "description": "Melt-in-mouth reshmi chicken when paired with delicious spicy gravy weaved a food dream like no other. Served with rice, salad and Omelette.",
                    "imageId": "c6a8ade41b9d07e04001a5910d145cd8",
                    "inStock": 1,
                    "price": 34900,
                    "finalPrice": 26900,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "113755859",
                    "name": "Paneer Tikka Rice Bowl",
                    "category": "Signature Bowls",
                    "description": "Drumroll King of the tikkas is here. Soft and spicy paneer tikka in rich spicy gravy served on a bed of rice and salad.",
                    "imageId": "01d8d863b224e9e09bf1f36bf6917058",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 31900,
                    "finalPrice": 26900,
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "117012488",
                    "name": "Creamy Chicken Tikka Rice Bowl",
                    "category": "Signature Bowls",
                    "description": "Your tatsebuds will say gracias with this bowl made of Creamy smoked tandoori chicken in rich gravy. Served with rice and salad.",
                    "imageId": "b80d55503878e1b2080048c617c17c15",
                    "inStock": 1,
                    "price": 34900,
                    "finalPrice": 26900,
                      },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "37795226",
                    "name": "Chicken Tikki Rice Bowl Served With Omelette",
                    "category": "Signature Bowls",
                    "description": "A flavour-packed surprise only for you! Delicious chicken tikki, dipped in spicy gravy accompanied with rice, salad and omelette. Dig in!",
                    "imageId": "7f26cc3c12395958124eb132fe7f7812",
                    "inStock": 1,
                    "price": 34900,
                    "finalPrice": 26900,
                     },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "113755862",
                    "name": "Desi Barbeque Chicken Rice Bowl",
                    "category": "Signature Bowls",
                    "description": "Caution: Not your average bowl. Barbeque chicken in spicy gravy accompanied with rice and salad. A perfect fusion of unique flavors.",
                    "imageId": "478140673057fbfaddd64f17519137c3",
                    "inStock": 1,
                    "price": 34900,
                    "finalPrice": 26900,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "79869635",
                    "name": "Bhuna Chicken Rice Bowl",
                    "category": "Signature Bowls",
                    "description": "Tender chicken cooked in fresh bhuna spices, served with flavoured rice and salad is here to make your day!",
                    "imageId": "78c8d9577387c2e35d5ee193506a5a2f",
                    "inStock": 1,
                    "price": 34900,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "117012534",
                    "name": "Mughlai Falafel Rice Bowl",
                    "category": "Signature Bowls",
                    "description": "No rules. All heart! Crispy falafels dropped in a bubbling gravy is where Middle East meets North India. Served with rice and salad.",
                    "imageId": "fc920468b37050724e282bf7a90c6841",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 31900,
                    "finalPrice": 26900,
                 },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "144887977",
                    "name": "Mughlai Egg Curry Rice Bowl",
                    "category": "Signature Bowls",
                    "description": "Featuring fragrant basmati rice topped with creamy Mughlai gravy and soft boiled eggs, this rice bowl is a hearty and satisfying meal for any time of the day.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/2/17007d3e-265a-4e97-8f8a-7b54bc35fbda_77c51303-710a-45b5-8a8e-826b972640cd.jpeg",
                    "inStock": 1,
                    "price": 29900,
          },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "117012525",
                    "name": "Chicken Kheema Rice Bowl",
                    "category": "Signature Bowls",
                    "description": "Let the good times roll with this all-time favourite bowl. Minced chicken kheema with Hyderabadi rice and a side of salad. Must try!",
                    "imageId": "99ef47d1b76c19f5150b08660be6c8d6",
                    "inStock": 1,
                    "price": 34900,
                    "finalPrice": 26900,
                    },
                  "hideRestaurantDetails": true
                }
              },
            
            ],
            "type": "CATEGORY_TYPE_RECOMMENDED"
          }
        },
         {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          "title": "Signature Bowls",
          "itemCards": [
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "117026398",
                  "name": "Mughlai Grilled Chicken Rice Bowl with Omelette",
                  "category": "Signature Bowls",
                  "description": "(500 gms)\nMelt-in-mouth reshmi chicken when paired with delicious spicy gravy weaved a food dream like no other. Served with rice, salad and Omelette. (Energy: 1046KCal, Carbohydrates: 75gm, Proteins: 29gm, Fats: 68gm, Sodium: 2179mg)",
                  "imageId": "c6a8ade41b9d07e04001a5910d145cd8",
                  "inStock": 1,
                  "price": 35900,
              
              
                },
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "113759697",
                  "name": "Paneer Tikka Rice Bowl",
                  "category": "Signature Bowls",
                  "description": "(500 gms)\nDrumroll King of the tikkas is here. Soft and spicy paneer tikka in rich spicy gravy served on a bed of rice and salad. (Energy: 943KCal, Carbohydrates: 79gm, Proteins: 21gm, Fats: 59gm, Sodium: 1651mg)",
                  "imageId": "01d8d863b224e9e09bf1f36bf6917058",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 32900,
             
                  "itemPriceStrikeOff": true
                },
              
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "117026558",
                  "name": "Mughlai Falafel Rice Bowl",
                  "category": "Signature Bowls",
                  "description": "(500 gms)\nNo rules. All heart! Crispy falafels dropped in a bubbling gravy is where Middle East meets North India. Served with rice and salad. (Energy: 999KCal, Carbohydrates: 99gm, Proteins: 19gm, Fats: 57gm, Sodium: 1911mg)",
                  "imageId": "fc920468b37050724e282bf7a90c6841",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 32900,
              
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "79869733",
                  "name": "Bhuna Chicken Rice Bowl",
                  "category": "Signature Bowls",
                  "description": "(500 gms)\nTender chicken cooked in fresh bhuna spices, served with flavoured rice and salad is here to make your day! (Energy: 921KCal, Carbohydrates: 81gm, Proteins: 27gm, Fats: 53gm, Sodium: 1521mg)",
                  "imageId": "78c8d9577387c2e35d5ee193506a5a2f",
                  "inStock": 1,
                  "price": 35900,
             
                
                  "itemPriceStrikeOff": true
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "117026427",
                  "name": "Creamy Chicken Tikka Rice Bowl",
                  "category": "Signature Bowls",
                  "description": "(500 gms)\nYour tatsebuds will say gracias with this bowl made of Creamy smoked tandoori chicken in rich gravy. Served with rice and salad. (Energy: 911KCal, Carbohydrates: 79gm, Proteins: 21gm, Fats: 55gm, Sodium: 2208mg)",
                  "imageId": "b80d55503878e1b2080048c617c17c15",
                  "inStock": 1,
                  "price": 35900,
               
                
               
                },
            
              }
            },
          ],
          "subtitleSuffix": {
            
          },
          "image": "c6a8ade41b9d07e04001a5910d145cd8",
          "categoryId": "40069597"
        }
      }],

   
   
    }
  },
  {
    "info": {
      "id": "31754",
      "name": "Gulati",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/22/fc6f52b9-9115-4550-8cce-ea463d97884c_31754.jpg",
      "locality": "Pandara Road",
      "promoted": false,
      "areaName": "Pandara Road",
      "costForTwo": "₹1000 for two",
      "cuisines": [
        "North Indian",
        "Mughlai",
        "Biryani",
        "Indian",
        "Desserts",
        "Lucknowi",
        "Beverages",
        "Kebabs"
      ],
      "avgRating": 4.5,
     
      "sla": {
        "deliveryTime": 36,
      
      },
      "groupCards":[
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
            "title": "Recommended",
                 "itemCards": [
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "7326342",
                        "name": "Murgh Makhani [Butter Chicken]",
                        "category": "Non Veg Main Course",
                        "description": "A Universal Favourite, Tender, Roasted Chicken Pieces Simmered In A Satin Smooth Tomato & Creamy Gravy.",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/19/427f8e83-fe7c-4888-8b83-68128ab76a44_669b977f-172f-483e-87bd-75b8233dd5c1.jpg",
                        "inStock": 1,
                        },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "627866",
                        "name": "Chicken Lababdar",
                        "category": "Non Veg Main Course",
                        "description": "Boneless Pieces Of Chicken Cooked In Rich Onion Tomato Gravy To Deliciousness",
                        "imageId": "g0rb0ujwonskjcms6qd3",
                        "inStock": 1,
                        "price": 87500,
                    },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "627866",
                        "name": "Kadhai Murgh Masaledar",
                        "category": "Non Veg Main Course",
                        "description": "[Spicy] Tender Pieces Of Chicken Cooked In An Abundance Of Tomatoes, Capsicum, Fresh Herbs & Spices.",
                        "imageId": "mr55m1sdejick6ot3myl",
                        "inStock": 1,
                        },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "627866",
                        "name": "Rarha Murgh",
                        "category": "Non Veg Main Course",
                        "description": "Rarha Delicacy For Chicken Lovers. Delicate Boneless Chicken Pieces Cooked With Spiced, Minced Chicken.",
                        "imageId": "tja3jr3c2ojsodbnoyve",
                        "inStock": 1,
                        "price": 83500,
                           },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "4661962",
                        "name": "Murgh Gulati Bemisaal",
                        "category": "Non Veg Main Course",
                        "description": "Our Chef'S Exclusive Creation. An Unusual Combination Of Chicken Pieces, Finely Minced Mutton & Egg, Cooked In A Delicious Thick Gravy.",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/19/6bd500e1-c13e-4e9b-bb96-0e9507366d3d_d5756eb1-fa33-45af-bce1-231a7e1167ea.jpg",
                        "inStock": 1,
                        "price": 87500,
                     },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "4661962",
                        "name": "Murgh Kali Mirch",
                        "category": "Non Veg Main Course",
                        "description": "[Spicy] Soft & Tender Boneless Chicken Portions Cooked In A Thick Gravy, Rich In Black Pepper - The King Of Spices.",
                        "imageId": "ubmk8bzqennmdhcqzczb",
                        "inStock": 1,
                        "price": 82500,
                        },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "627867",
                        "name": "Rogan Josh",
                        "category": "Non Veg Main Course",
                        "description": "A Gourmet'S Delight, Spiced Mutton Curry Cooked With Aromatic Herbs.",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/19/c593809e-b22c-4a69-aeda-c398a6a54c25_364dd701-061e-4235-9062-089f2e253ca7.jpg",
                        "inStock": 1,
                        "price": 89900,
                         },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "627867",
                        "name": "Bhuna Gosht",
                        "category": "Non Veg Main Course",
                        "description": "[Spicy]",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/19/bbd735a8-a542-4b98-aa9c-252153af8ae7_997f29ca-46c8-43f2-a920-4f66977172ab.jpg",
                        "inStock": 1,
                        "price": 89900,
                            },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "6027102",
                        "name": "Handi Gosht",
                        "category": "Non Veg Main Course",
                        "description": "Tender Chunky Pcs Of Mutton Cooked In Hyderabadi Spices Served In A Handi. [A Must Try Dish]",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/19/b63cc941-ca6c-43eb-a6a0-33611f4ba9ec_384afe39-be5f-41ff-a09f-0f08d8aa8321.jpg",
                        "inStock": 1,
                        "price": 89900,
                       },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "627867",
                        "name": "Rarha Meat",
                        "category": "Non Veg Main Course",
                        "description": "Succulent Pieces Of Tender Mutton And Finely Minced Mutton Slowly Cooked To Perfection. Our Chef'S Speciality.",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/19/5808db07-b231-4af8-ab0b-5d205a31c8d7_6fc958a2-3965-4da9-b804-a535be6f4d43.jpg",
                        "inStock": 1,
                        "price": 89900,
                          },
                      "hideRestaurantDetails": true
                    }
                  },
                  {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      "info": {
                        "id": "7326342",
                        "name": "Magaz Masala [Brain Masala]",
                        "category": "Non Veg Main Course",
                        "description": "[Spicy] A Gourmet'S Delight. Mutton Brain Cooked With Aromatic Spices.",
                        "imageId": "kpzxayikj15nawig1jb4",
                        "inStock": 1,
                        "price": 84900,
                             },
                      "hideRestaurantDetails": true
                    }
                  },
             
                ]
              
             
            
              }
        },
        { 
          "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          "title": "Rs 59 Deal of the Day",
          "itemCards": [
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "15652197",
                  "name": "Crispy Veg Burger.",
                  "category": "Rs 59 Deal of the Day",
                  "description": "Our best-selling burger with crispy veg patty, fresh onion and our signature sauce",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 7000,
                  "finalPrice": 5900,
                
                },
                
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "10119620",
                  "name": "Veg Makhani Burst Burger.",
                  "category": "Rs 59 Deal of the Day",
                  "description": "Enjoy Makhani Flavour With Mix Veg Patty Topped Up With Onion",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/0c8fa5a6-d138-4ea8-aade-f403b504aaee_e7edfd78-ccd7-4448-951d-36d9f6b3ea67.jpg",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 8000,
                  "finalPrice": 5900,
                },
                
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "15652197",
                  "name": "Regular Fries.",
                  "category": "Rs 59 Deal of the Day",
                  "description": "The perfect crispy partner.",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/19/8ec32a30-ec59-4673-bc5e-16f4b1dc0110_de467db3-09c6-4064-8188-620f259d4541.png_compressed",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 7000,
                  "finalPrice": 5900,
               
                  
                
                
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "15652198",
                  "name": "BK Chicken Pizza Puff.",
                  "category": "Rs 59 Deal of the Day",
                  "description": "\"Crispy puff snack filled with juicy diced chicken, tasty mix veg tomato sauce and mozzarella. Caution: Served Hot.",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/29/8c7c9a04-bbcf-48d9-9157-db014d92c231_b1fb762a-e96d-4360-bf00-398ab95f8fc3.jpg",
                  "inStock": 1,
                  "price": 8900,
                  "finalPrice": 5900,
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "15652198",
                  "name": "BK Veg Pizza Puff.",
                  "category": "Rs 59 Deal of the Day",
                  "description": "\"Crispy savoury pastry with a filling of tomato sauce with corn, carrots, bell peppers, peas and mozzarella. Caution: Served Hot.",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/29/ee5f25e0-5f74-4daf-908a-38f6c8c23f14_35543521-018a-41fc-b967-92858b42c608.jpg",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 5900,
               
                   },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "10200744",
                  "name": "Veggie Strips - 5 Pcs.",
                  "category": "Rs 59 Deal of the Day",
                  "description": "Vegetarian's favourite finger food.",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/aeac450c-d789-4c00-a593-05e352a5b325_4eab783e-7b7d-4401-b8e4-64b1fba9bbf5.jpg",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 5900,    
                },
               
              }
            }
          ],
          "subtitleSuffix": {
            
          },
          "image": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
          "categoryId": "55625952"
        }
     }
       ],
     
 
    }
  },
  {
    "info": {
      "id": "875893",
      "name": "Pret A Manger",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/26/23944cbd-a4db-4e3e-85ce-73b0151c6f59_875893.jpg",
    
      "areaName": "Khan Market",
      "promoted": false,
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Cafe",
        "Snacks",
        "Beverages",
        "Salads",
        "Desserts"
      ],
      "avgRating": 4.5,
   
      "sla": {
        "deliveryTime": 28,
    
      },
      "groupCards":[
        {
          "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        "title": "Recommended",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "139390504",
                "name": "Smoked Salmon Sandwich",
                "category": "Food",
                "description": "A simple but classic combination of smoked salmon with a squeeze of lemon juice, seasoning and a dash of butter. Serve size-  155 gm, Energy (kcal) - 393, Protein Content - 23 gm; Allergen- Fish, Wheat, Barley, Milk",
                "imageId": "9a13995dfe1ead44c1ea1afd1e8d8a03",
                "inStock": 1,
                "price": 64500,
                  },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "145730627",
                "name": "Chicken Pie",
                "category": "Food",
                "description": "Tender chunks of juicy chicken  and garden-fresh vegetables enveloped in a rich, creamy sauce, all encased in a flaky, golden pastry crust - in signature Pret style!  A comforting classic that satisfies with every savory bite. Serve size- 150 gm; Energy (kcal)- 541; Protein Content - 20 gm; Allergen- Milk, wheat, egg",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/19/79d8aee1-68f6-4e70-bda3-5b61bdd6e7fa_f8d36e65-9309-428b-be6c-107fcd028512.png_compressed",
                "inStock": 1,
                "price": 29500,
                "finalPrice": 24900,
                 },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "139390422",
                "name": "Classic Cheese Toastie",
                "category": "Food",
                "description": "Enjoy a medley of delicious Cheddar, Mozzarella, and Italian Cheese, layered between perfectly toasted bread and topped with zesty Mustard Mayo and crisp Spring Onion. A classic comfort food that is sure to satisfy your cravings and leave you feeling warm and content. Serve size- 180GM Energy (kcal)- 585 Allergen- Milk, wheat, barley, rye, oat",
                "imageId": "9294d0b9bdf8bcf4cd47db8dbd554111",
                "inStock": 1,
                "isVeg": 1,
                "price": 36500,
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "139390403",
                "name": "Bombay Toastie",
                "category": "Food",
                "description": "Savour the bold and flavourful taste of our Bombay Sandwich. Enjoy a delicious Bombay Potato filling, paired with juicy Tomato, crisp Onion, and flavourful Beetroot, all layered with savoury Cheddar. A classic Indian sandwich that is perfect for any time of the day and guaranteed to leave your taste buds satisfied. Serve size- 190GM Energy (kcal)- 366 Allergen- wheat, barley, rye, oat, Milk",
                "imageId": "9a8ee8e7dafeb43a6beff589c9f0e855",
                "inStock": 1,
                "isVeg": 1,
                "price": 36500,
                    },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "139390498",
                "name": "Smoked Chicken & Cheddar Toastie",
                "category": "Food",
                "description": "Smoked chicken and Cheddar cheese with a layer of mustard mayo on our multigrain bloomer Serve size - 200 gm, Energy (kcal)- 528, Protein Content - 29 gm; Allergen- Wheat, Barley, Rye, Oat, Milk",
                "imageId": "068d11bbb338f3480359bf90f9523c8d",
                "inStock": 1,
                "price": 38500,
               },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "139390416",
                "name": "Chicken Super Club Toastie",
                "category": "Food",
                "description": "Enjoy succulent Chicken Breast and Smoked Chicken, layered with mouth-watering Cheddar, juicy Tomato, and creamy Mayo, all sandwiched between perfectly toasted bread. A delicious and satisfying meal that is perfect for any time of the day. Serve size- 210GM Energy (kcal)- 593 Allergen- Milk, wheat, barley, rye, oat",
                "imageId": "08d74eaa3ab305de823bf02c96051c24",
                "inStock": 1,
                "price": 38500,
                },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "139390503",
                "name": "Smoked Salmon Protein Box Salad",
                "category": "Food",
                "description": "Smoked salmon with eggs, sliced Has avocado, edamame beans, baby spinach leaves and lemon wedges. Finished with French dressing and a sprinkle of seasoning. Serve size - 330 gm, Energy (kcal) - 747, Protein Content - 31 gm; Allergen- Fish, Soy, Egg",
                "imageId": "dfc216082dff7bb3a9f918186d59c86d",
                "inStock": 1,
                "price": 85500,
                 },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "139390465",
                "name": "Latte",
                "category": "Hot Beverages",
                "description": "All Pret espresso based drinks start with a full shot (The Pret Base as we like to call it). To make our Latte the Barista gently steams the milk to 50 degrees (steaming adds no extra air) this keeps the milk flat but creamy. Serve size - 236 ml, Energy (kcal)- 143, Protein Content - 7 gm; Serve size- 354 ml, Energy (kcal) - 200, Protein Content - 9 gm; Serve size- 473 ml, Energy (kcal) - 235, Protein Content - 11 gm; Allergen- Milk",
                "imageId": "db08896072abd93d6b2c14d0b37f983c",
                "inStock": 1,
                "isVeg": 1,
                "finalPrice": 19900,
               },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "139390406",
                "name": "Cappuccino",
                "category": "Hot Beverages",
                "description": "All Pret espresso based drinks start with a full shot (The Pret Base as we like to call it). The art to making our Cappuccino comes when our Barista heats the milk. The trick is to let some air sneak in during the steaming process, this makes it a little lighter than a Latte. By doing this a Cappuccino is stronger to taste (more air less milk). Serve size - 236 ml, Energy (kcal)- 129; Serve size - 354 ml, Energy (kcal)- 143; Serve size - 473 ml, Energy (kcal)- 179 Allergen - Milk",
                "imageId": "51aca70a12386a85bf1f77c28eb3913a",
                "inStock": 1,
                "isVeg": 1,
                "finalPrice": 19900,
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "139390476",
                "name": "Mocha",
                "category": "Hot Beverages",
                "description": "All Pret espresso based drinks start with a full shot (The Pret Base as we like to call it). All the effort that goes into our Latte also goes into our Mocha, but with a chocolatey twist For all the chocolate lovers in need of a coffee hit this is for you. The Pret Barista adds a generous amount of chocolate to the Pret base, so the flavour mix is just right Serve size - 236 ml, Energy (kcal)- 202; Serve size- 354 ml, Energy (kcal) - 249; Serve size- 473 ml, Energy (kcal) - 346; Allergen- Milk",
                "imageId": "a5c826876644738a47e3ef9b81d6717d",
                "inStock": 1,
                "isVeg": 1,
                "finalPrice": 19900,
               },
              "hideRestaurantDetails": true
            }
          },
        ],
        "type": "CATEGORY_TYPE_RECOMMENDED"
      }
        },
     {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      "title": "Non Veg Salads",
      "itemCards": [
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "8145882",
              "name": "Roasted Chicken Salad",
              "category": "GOURMET SALAD MEALS",
              "description": "Tender roasted chicken breast, salad greens, sweet bell peppers, black olives, onions, honey Dijon-roasted peppers dressing & bread",
              "imageId": "17e4a340c1af40d7b4aba3c4e803d52a",
              "inStock": 1,
              "price": 31900,
              "finalPrice": 30900,
           
           
            
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "8145881",
              "name": "Chicken Pesto Pasta Salad",
              "category": "GOURMET SALAD MEALS",
              "description": "Whole-wheat pasta, assorted greens, roasted chicken breast, broccoli, sun-dried tomatoes, black olives, sweet basil, yogurt-pesto dressing & bread",
              "imageId": "f4a4450c085a0e6933784ea2a5f9fe59",
              "inStock": 1,
              "price": 31900,
         
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            "info": {
              "id": "8145883",
              "name": "Blackened Chicken, Avocado & Orange Salad",
              "category": "GOURMET SALAD MEALS",
              "description": "Exotic salad of salad greens, spiced chicken breast, Hass avocado, Orange, mint, coriander, shallots, red chili, mustard honey vinaigrette & bread",
              "imageId": "9f17883ced8cd7c3469f8fff13f5fcff",
              "inStock": 1,
              "price": 37900,
         
            
            
            },
            "analytics": {
              
            },
            "hideRestaurantDetails": true
          }
        },
      
      ],
      "subtitleSuffix": {
        
      },
      "categoryId": "53453671"
    },
      }
],
      
    
    }
  },
  {
    "info": {
      "id": "55833",
      "name": "Nizam's Kathi Kabab",
      "cloudinaryImageId": "sacbbtypo5gbiu7jolye",
      "areaName": "Connaught Place",
      "promoted": false,
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Mughlai",
        "Kebabs"
      ],
      "avgRating": 4.4,
     
      "sla": {
        "deliveryTime": 34,
       
      },
      "groupCards":[
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Kathi Kabab Rolls",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "95149375",
                    "name": "Single CHK Single Egg Roll",
                    "category": "Kathi Kabab Rolls",
                    "imageId": "86c0b182154693ba33165cdbe6f4b332",
                    "inStock": 1,
                    "price": 21905,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "95149376",
                    "name": "Double CHK Double Egg Roll",
                    "category": "Kathi Kabab Rolls",
                   "imageId": "68ecfbe1516f318ddace4115cc5563f8",
                    "inStock": 1,
                    "price": 27619,
              
                 },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "95038183",
                    "name": "Double CHK Single Egg Roll",
                    "imageId": "eda3bbab8f707d11930269598137f464",
                    "category": "Kathi Kabab Rolls",
                    "inStock": 1,
                    "price": 26667,
               },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "13856994",
                    "name": "Single Mutton Single Egg Roll",
                    "category": "Kathi Kabab Rolls",
                    "description": "A single skewer of soft charcoal grilled mutton tikka and an egg rolled into a luqmi parantha with our signature spicy onions. No one Rolls like we do!",
                    "imageId": "160ab7bdb2fe7e426476d04d8f7267d3",
                    "inStock": 1,
                    "price": 24762,
                    },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "13856998",
                    "name": "Double Mutton Double Egg Roll",
                    "category": "Kathi Kabab Rolls",
                    "imageId": "61945e58accb3241c2278d85df59575b",
                    "inStock": 1,
                    "price": 31429,
                    },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "13856996",
                    "name": "Double Mutton Single Egg Roll",
                    "category": "Kathi Kabab Rolls",
                    "imageId": "dc76c8d59b015bad8e311351257e4223",
                    "inStock": 1,
                    "price": 30476,
                 },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "79227636",
                    "name": "Jus Egg Roll",
                    "category": "Kathi Kabab Rolls",
                    "description": "Our signature shallow fried parantha with a single egg and spicy onions. No one Rolls like we do!",
                    "imageId": "86c0b182154693ba33165cdbe6f4b332",
                    "inStock": 1,
                    "price": 11429,
                    },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "78019751",
                    "name": "Mutton Seekh Kabab Egg Roll",
                    "category": "Kathi Kabab Rolls",
                    "description": "Mutton mince mixed with 8 unique spices & cooked on a iron skewer, basted with butter before rolling into a luqmi parantha with egg & our signature spicy onions. No one Rolls like we do!",
                    "imageId": "68ecfbe1516f318ddace4115cc5563f8",
                    "inStock": 1,
                    "price": 33333,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "13856968",
                    "name": "Paneer Tikka Roll",
                    "category": "Kathi Kabab Rolls",
                    "description": "Cubes of paneer marinated for 4 hours and roasted on an iron skewer over charcoal before rolling into a luqmi parantha with our signature spicy onions. No one rolls like we do!",
                    "imageId": "b790af0c7a91164dfe461079b77d7cb2",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 25714,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "13856987",
                    "name": "Chicken Keema Egg Roll",
                    "category": "Kathi Kabab Rolls",
                    "imageId": "4f2775d2eed5b3dcea64b14a1a3d86c5",
                    "inStock": 1,
                    "price": 29524,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "13857002",
                    "name": "Mutton Keema Egg Roll",
                    "category": "Kathi Kabab Rolls",
                    "description": "Coarse mutton mince cooked with ghee, green chillies & spices before rolling into a parantha with egg & our signature spicy onions. No one Rolls like we do!",
                    "imageId": "a7a672caa2efb88bbdf23a61a548adbb",
                    "inStock": 1,
                    "price": 37143,
                  
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "80614065",
                    "name": "Chicken Seekh Kabab Roll",
                    "category": "Kathi Kabab Rolls",
                    "imageId": "eda3bbab8f707d11930269598137f464",
                    "inStock": 1,
                    "price": 28571,
                   
              },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "95149392",
                    "name": "Kali Mirch CHK Tikka Egg Roll",
                    "category": "Kathi Kabab Rolls",
                    "imageId": "68ecfbe1516f318ddace4115cc5563f8",
                    "inStock": 1,
                    "price": 29524,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "13856964",
                    "name": "Paneer Roll",
                    "category": "Kathi Kabab Rolls",
                    "imageId": "20867cc163a23616ff21a89a3bf2249f",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 24762,
                },
                  "hideRestaurantDetails": true
                }
              },
            
            ]
          }
        },
        {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          "title": "Curries",
          "itemCards": [
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "80614060",
                  "name": "Ambersari Keema Meat",
                  "category": "Curries",
                  "inStock": 1,
                  "price": 57143,
               
                
                },
             
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "80614072",
                  "name": "Mutton Nihari",
                  "category": "Curries",
                  "inStock": 1,
                  "price": 52381,
            
            
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "80614070",
                  "name": "Keema Kaleji Masala",
                  "category": "Curries",
                  "inStock": 1,
                  "price": 47619,
      
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "79227641",
                  "name": "Chicken Rara",
                  "category": "Curries",
                  "inStock": 1,
                  "price": 47619,
             
               
                },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "13857061",
                  "name": "Chicken Keema Egg Masala",
                  "category": "Curries",
                  "inStock": 1,
                  "price": 38095,
                    },
                "analytics": {
                  
                },
                "hideRestaurantDetails": true
              }
            },
         
          ],
          "subtitleSuffix": {
            
          },
          "image": "a54ff4fa66230d1210b402b06b565fd7",
          "categoryId": "33334413"
        }
      }],
        
     
    
    }
  },
  {
    "info": {
      "id": "669014",
      "name": "Bheemeshwara - A South Indian Delicacy",
      "cloudinaryImageId": "f56b00cfac762606f7145d37acff5367",
     
      "areaName": "Connaught Place",
      "promoted": false,
      "costForTwo": "₹350 for two",
      "cuisines": [
        "South Indian",
        "Biryani",
        "Andhra"
      ],
      "avgRating": 4.4,
      "sla": {
        "deliveryTime": 31, 
      },
      "groupCards":[
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Lunch / Dinner Delicacies",
           "itemCards": [
      {
        "card": {
          "info": {
            "id": "109611207",
            "name": "Mutton Fry",
            "description": "Tender mutton pieces fried to perfection with aromatic spices.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "3179d50cade56c78eb3bb20af10eddd2",
            "inStock": 1,
            "price": 40900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611203",
            "name": "Egg Curry",
            "description": "Boiled eggs simmered in a rich, spiced curry sauce.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "cde566745f34a4fb5b32f1b3198f60ba",
            "inStock": 1,
            "price": 12900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "110729727",
            "name": "Chicken Dry Roast",
            "description": "Spicy and flavorful dry-roasted chicken cooked with masala.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/4/0489418d-d0c3-45a9-bc01-71945cbcd235_2875ff6e-f126-428a-89d0-4acbee43c054.jpg",
            "inStock": 1,
            "price": 32900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611206",
            "name": "Mutton Curry",
            "description": "Slow-cooked mutton in a thick, flavorful gravy with Indian spices.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "66c95961652cb3ccc83f13ebb17702f1",
            "inStock": 1,
            "price": 38900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611210",
            "name": "Omelette",
            "description": "Classic fluffy omelette seasoned with herbs and spices.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "dfc944ce1c7356a8d482f22f9a6928d1",
            "inStock": 1,
            "price": 9900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611211",
            "name": "Prawn Fry",
            "description": "Crispy fried prawns coated in a flavorful spice mix.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "9ae7ab4bf38585e663bb67644bd3270c",
            "inStock": 1,
            "price": 36900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611212",
            "name": "Prawns Curry",
            "description": "Juicy prawns cooked in a tangy and spicy coconut-based curry.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "2d53662df1fc02e871b69e0a7eb6686c",
            "inStock": 1,
            "price": 36900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611197",
            "name": "Bheemeshwara Spl Chicken",
            "description": "Signature house special chicken cooked with secret spices.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "83160e235f97108f4b858d84793459df",
            "inStock": 1,
            "price": 36900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611209",
            "name": "Mutton Keema Curry",
            "description": "Minced mutton cooked with aromatic spices in a rich curry.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "3532d70c4f54137b36ea8aba2958b284",
            "inStock": 1,
            "price": 36900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611201",
            "name": "Chicken Kothu Parotta",
            "description": "Shredded parotta stir-fried with spicy chicken and eggs.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "00ad16b986f0e8dafb972225139cac1a",
            "inStock": 1,
            "price": 36900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611214",
            "name": "Tawa Fish (Surmai)",
            "description": "Pan-seared Surmai fish with a crispy, flavorful crust.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "a2b42f8b878606b005aef0f084e10927",
            "inStock": 1,
            "price": 36900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611198",
            "name": "Chicken Curry",
            "description": "Traditional Indian chicken curry with rich and creamy gravy.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "00ad16b986f0e8dafb972225139cac1a",
            "inStock": 1,
            "price": 31900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611205",
            "name": "Fish Fry",
            "description": "Golden-fried fish marinated in a spicy, tangy mix.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "9052fe1fc0c62d3d2825924825ecbfa9",
            "inStock": 1,
            "price": 29900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611213",
            "name": "Rava Fish (Surmai)",
            "description": "Crispy rava-coated Surmai fish shallow-fried to perfection.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "e3f372ea9fbf4f5b49598cc0ae84147e",
            "inStock": 1,
            "price": 36900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611196",
            "name": "Andhra Fish Pulusu",
            "description": "Traditional Andhra-style fish curry with tamarind and spices.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "8f25d02e9398c3a76417e4769508aff4",
            "inStock": 1,
            "price": 29900
          }
        }
      },
      {
        "card": {
          "info": {
            "id": "109611204",
            "name": "Egg Kothu Parotta",
            "description": "Chopped parotta stir-fried with eggs, masala, and onions.",
            "category": "Lunch / Dinner Delicacies",
            "imageId": "9052fe1fc0c62d3d2825924825ecbfa9",
            "inStock": 1,
            "price": 31900
          }
        }
      }
    ]
    
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Karnataka Donne Biryani",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "134420172",
                    "name": "Karnataka Donne Chicken Fry Piece Biryani",
                    "category": "Karnataka Donne Biryani",
                    "imageId": "05d03b0fc96952f1f1800cc024239104",
                    "inStock": 1,
                    "price": 38900,
              
               
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "134420171",
                    "name": "Karnataka Donne Chicken Biryani",
                    "category": "Karnataka Donne Biryani",
                    "imageId": "f54632fd00e31427f8dfdbb122871ecb",
                    "inStock": 1,
                    "price": 34900,
              
               
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "134420175",
                    "name": "Karnataka Donne Bheemeshwara Special  Chicken Boneless Biryani",
                    "category": "Karnataka Donne Biryani",
                    "imageId": "2680f4158ed0198c0cc2ea275b314b1a",
                    "inStock": 1,
                    "price": 41900,
               
                
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "134420173",
                    "name": "Karnataka Donne Mutton Fry Piece Biryani",
                    "category": "Karnataka Donne Biryani",
                    "imageId": "19363e93cc07ef7cb13310076e432e79",
                    "inStock": 1,
                    "price": 44900,
             
               
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "135911444",
                    "name": "Karnataka Donne Kabab Biryani (6 Pcs)",
                    "category": "Karnataka Donne Biryani",
                    "imageId": "b4ea577d7ec12b9ea9144ae44059c948",
                    "inStock": 1,
                    "price": 41900,
               
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "134420174",
                    "name": "Karnataka Donne Chicken Joint Fry Biryani",
                    "category": "Karnataka Donne Biryani",
                    "inStock": 1,
                    "price": 41900,
                
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "135911443",
                    "name": "Karnataka Donne Lollipop Biryani (4 Pcs)",
                    "category": "Karnataka Donne Biryani",
                    "inStock": 1,
                    "price": 41900,
                      },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              }
            ],
            "subtitleSuffix": {
              
            },
            "image": "05d03b0fc96952f1f1800cc024239104",
            "categoryId": "45644644"
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Andhra Biryani",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "134420166",
                    "name": "Andhra Chicken Biryani",
                    "category": "Andhra Biryani",
                    "imageId": "471895857c5cd52e6ee9ffbba5c36c3f",
                    "inStock": 1,
                    "price": 34900,
                     },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "134420168",
                    "name": "Andhra Mutton Fry Piece Biryani",
                    "category": "Andhra Biryani",
                    "imageId": "2146a672933ed488e7d8bd8f7539cdfd",
                    "inStock": 1,
                    "price": 44900,
              
                 
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "134420167",
                    "name": "Andhra Chicken Fry Piece Biryani",
                    "category": "Andhra Biryani",
                    "imageId": "0b88db57a7954cc10f07eee782765acd",
                    "inStock": 1,
                    "price": 38900,
              
                 
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "134420169",
                    "name": "Andhra Biryani Chicken Joint Fry Biryani",
                    "category": "Andhra Biryani",
                    "imageId": "d39731f1d98b326964ff41671f07de59",
                    "inStock": 1,
                    "price": 41900,
                 
                
                  },
                 
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "134420170",
                    "name": "Andhra Bheemeshwara Special Chicken Boneless Biryani",
                    "category": "Andhra Biryani",
                    "imageId": "de1b56232123b19980d56f9f488a9ecc",
                    "inStock": 1,
                    "price": 41900,
              
               
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              }
            ],
            "subtitleSuffix": {
              
            },
            "image": "471895857c5cd52e6ee9ffbba5c36c3f",
            "categoryId": "45644643"
          }
        }
      ],
    
  
    }
  },
  {
    "info": {
      "id": "58217",
      "name": "Theobroma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/e6e85196-5078-454f-9994-0fcfd88015e9_58217.jpg",
    "promoted": false,
      "areaName": "Connaught Place",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.6,
    
      "sla": {
        "deliveryTime": 34,
       
      },
      "groupCards":[
        { "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          "title": "Recommended",
          "itemCards": [
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "135638404",
                  "name": "Sons’ Day Gift Hamper Bag (Premium)",
                  "category": "Sons’ Day Specials",
                  "description": "An assortment of our signature products - Eggless assorted brownies, Chocolate chip cookies (8pc), Butter palmiers (50g), Sweet Sesame crackers (100g) & Cheese crackers (100g)",
                  "imageId": "150f32549957a2aa3e586fd899ea4b08",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 79900,
                  },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "135638405",
                  "name": "Sons’ Day Gift Hamper Bag (Luxury)",
                  "category": "Sons’ Day Specials",
                  "description": "An assortment of our signature products - Eggless assorted brownies, Double choco chip cookies (8pc), Eggless dense loaf (260g), Butter cookies (10pc), Black pepper sourdough crackers (100g) & Orange cookies (12pc)",
                  "imageId": "62752001183a1801168e8dbf414601cd",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 120000,
                   },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "69019429",
                  "name": "Almond Rocks [250g]",
                  "category": "Sons’ Day Specials",
                  "description": "Almonds coated with dark chocolate.",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/25/f8d954ad-7202-4797-961d-6a9c4e4dd5ff_d2fc4fa9-1a5f-447f-a83c-bc41af692313.jpg",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 65000,
                      },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "138012054",
                  "name": "Eggless Rich Chocolate Cake [1/2kg]",
                  "category": "Cakes",
                  "description": "A traditional cake made by layering chocolate sponge with rich and smooth chocolate cream, and decorated with dark chocolate.",
                  "imageId": "f2bd0cb79c209530c0ec4a8d864ed54c",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 62500,
               },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "127410298",
                  "name": "Eggless Dutch Truffle Cake [1/2kg]",
                  "category": "Cakes",
                  "description": "Dark chocolate ganache with chocolate sponge.",
                  "imageId": "01f50ea13d7b168d8ab2810a73e1e314",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 62500,
            },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "69019422",
                  "name": "Eggless Fresh Cream Pineapple Cake [1/2kg]",
                  "category": "Cakes",
                  "description": "Fresh cream cake with home made pineapple compote.",
                  "imageId": "6f46ef359dc4981ae6a0e757f1f6e434",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 65000,
            },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "69019479",
                  "name": "Chocoholic Cake [1/2kg]",
                  "category": "Cakes",
                  "description": "Three layers of chocolate mousse: white, milk and dark chocolate mousse layered in this crowd-favourite cake.",
                  "imageId": "4cfe67bfb168ed03ba5f2effaa341522",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 72500,
                 },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "127410299",
                  "name": "Eggless Dutch Truffle Cake [1kg]",
                  "category": "Cakes",
                  "description": "Dark chocolate ganache with chocolate sponge.",
                  "imageId": "3b08c25da25361732fdc817a6045a85d",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 125000,
               },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "69019491",
                  "name": "Fresh Cream Pineapple Cake [1/2kg]",
                  "category": "Cakes",
                  "description": "Fresh cream cake with home made pineapple compote.",
                  "imageId": "9a16fee90eb0b4079a11a6dd2ff40a43",
                  "inStock": 1,
                  "price": 65000,
                   },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "127410287",
                  "name": "Dutch Truffle Cake [1/2kg]",
                  "category": "Cakes",
                  "description": "Dark chocolate ganache with chocolate sponge.",
                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/27/94c6b25c-035d-4802-849f-db85c851b442_b3b208a8-ff63-4207-be54-7a2e4cad293d.jpg",
                  "inStock": 1,
                  "price": 62500,
           },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "138012055",
                  "name": "Eggless Butterscotch & Milk Chocolate Pastry [1 Piece]",
                  "category": "Pastries",
                  "description": "Moist  butterscotch pastry made with vanilla cream, homemade butterscotch sauce, crunchy butterscotch and glaze with milk chocolate galze.",
                  "imageId": "7190a40e52501f5b5de9b66c5e2488a8",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 12000,
                 },
                "hideRestaurantDetails": true
              }
            },
            {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                  "id": "127410300",
                  "name": "Eggless Dutch Truffle Pastry [1 Piece]",
                  "category": "Pastries",
                  "description": "Dark chocolate ganache with chocolate sponge.",
                  "imageId": "0872a3ab7f5d4d94e16ee81b9fee8b2f",
                  "inStock": 1,
                  "isVeg": 1,
                  "price": 13000,
             },
                "hideRestaurantDetails": true
              }
            },
           
         
          ],
          "type": "CATEGORY_TYPE_RECOMMENDED"
        }
      }  , 
        {
        "card":{
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        "title": "Cakes & Pastries",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "163787695",
                "name": "Valentine's Chocolate & Strawberry Bento Cake (300g)",
                "category": "Valentine's Collection",
                "description": "Layers of creamy chocolate truffle, strawberry filling and moist chocolate sponge, decorated with red and milk chocolate hearts on top.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/6/907d51f8-1dfa-4f6c-9c6c-a32b94c479c5_2d18da56-b4ce-452b-b2a7-53a1780c332c.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 34500,
             
              
              
               
              },
            
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "163787696",
                "name": "Valentine's Blueberry & Cream Cake (450g)",
                "category": "Valentine's Collection",
                "description": "Layers of fresh cream and soft vanilla cake topped with blueberry compote and decorated with a Valentine's special decoration in white chocolate.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/6/fe4b189e-0929-4619-b91a-0606ad33ceca_a5a4d4e2-c2ad-4543-ba84-515d88397b6b.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 47500,
               
               
           
             
              },
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "79443042",
                "name": "Red Velvet Cake (1/2kg)",
                "category": "Valentine's Collection",
                "description": "Red velvet sponge layered with cream cheese frosting enhanced with lime juice.",
                "imageId": "cfab1cfd6fefa5db5bbdd47ff10db686",
                "inStock": 1,
                "price": 67500,
             
             
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "163787701",
                "name": "Strawberry & Fresh Cream Cake",
                "category": "Valentine's Collection",
                "description": "Layers of strawberry jam, diplomat cream and soft vanilla cake covered with flaked almonds and topped with fresh strawberries.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/7/1590fd7d-5127-4b9f-8bbc-92e2ff10adce_a89b0570-4e4c-497d-95c6-8f16ca545f0b.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 72500,
            
             
              },
           
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "163787703",
                "name": "Strawberry Cheesecake 550g.",
                "category": "Valentine's Collection",
                "description": "Cheesecake with a buttery biscuit base, topped with fresh strawberries and fresh cream and a strawberry glaze.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/7/34c21e29-8a86-4c12-a778-cdc733b3a587_5ba7fc55-9520-4db7-bc9b-f0787e12e702.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 87500,
               
            
               
              },
          
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "163787705",
                "name": "Red Velvet Pastry (1 Piece)",
                "category": "Valentine's Collection",
                "description": "Red velvet sponge layered with cream cheese frosting enhanced with lime juice.",
                "imageId": "m6zcb9uitpu4b3rtcl1w",
                "inStock": 1,
                "price": 14000,
            
               
              },
             
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "163787697",
                "name": "Strawberry & Fresh Cream Pastry",
                "category": "Valentine's Collection",
                "description": "Layers of strawberry jam, fresh cream and soft vanilla cake topped with fresh strawberries.",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/7/bdffc826-ddf5-451e-8b85-5c35994489d0_42d3fe5c-1059-480a-8964-21aca61c0bb7.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 17500,
            
              
               
               
                "itemPriceStrikeOff": true
              },
              
            }
          }
        ],
        "subtitleSuffix": {
          
        },
        "categoryId": "58485520"
      },
    }
   ],
     
   
    }
  },
  {
    "info": {
      "id": "378311",
      "name": "Blue Tokai Coffee Roasters",
      "cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
    "promoted": false,
      "areaName": "Connaught Place",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Cafe",
        "Coffee",
        "Beverages"
      ],
      "avgRating": 4.4,
     
      "sla": {
        "deliveryTime": 29,
   
      },
      "groupCards":[ 
        {
          "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        "title": "Recommended",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "146718413",
                "name": "Iced Caramel Latte",
                "category": "Newly Launched",
                "description": "360 ml | Iced latte for those who like their coee with overtones of caramel.  [Energy: 241.6 kcal, Allergen: milk, Protein: 6.4g, Carbohydrates: 33.1g, Fat: 8.7g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/24/a209b274-27da-4082-b570-39b3efadb986_4dcb3d14-7629-4682-9088-ddec4b674537.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 28000,
                },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "99858277",
                "name": "Peri Peri Fries",
                "category": "Newly Launched",
                "description": "300 gram | Meet everyone’s best friend! our peri peri fries are baked and served with labneh, a dip made from yogurt, lemon and garlic.  [Energy: 935 kcal, Protein: 11.86g, Carbohydrates: 116.84g, Fiber: 12g, Fat: 46.69g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/27/58c6973e-4d43-480a-9e3d-4588f59d9b26_9f91cc63-455c-4d7b-b493-2f54107cc3da.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 31000,
               },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "146718405",
                "name": "Caramel Latte",
                "category": "Newly Launched",
                "description": "240 ml | Our classic latte made silky and sweet with caramel.  [Energy: 197.3 kcal, Allergen: milk, Protein: 6.8g, Carbohydrates: 22.6g, Fat: 8.2g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/24/13ca6175-5427-4fb1-8bbe-e96bba338af4_364a9cb8-a81b-40ea-8868-f17902167166.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 26000,
       },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "146718410",
                "name": "Caramel Frappe",
                "category": "Newly Launched",
                "description": "360 ml | Our signature espresso, blended to become creamy, icy goodness with a generous drizzle of caramel.  [Energy: 345.1 kcal, Allergen: milk, Protein: 6g, Carbohydrates: 56.3g, Fat: 10.4g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/24/63c47b24-13cf-415c-b21a-eccb007c3fc2_4390474e-e54c-4634-b08c-fa5549d87f8c.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 31000,
            },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "146718407",
                "name": "Classic Frappe",
                "category": "Newly Launched",
                "description": "360 ml | By popular demand, a glass of creamy, icey goodness prepared with our signature espresso.  [Energy: 257.7 kcal, Allergen: milk, Protein: 5.4g, Carbohydrates: 40.2g, Fat: 8.1g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/24/272814e2-09e9-4618-8bb8-29a25aa9d271_1a3557be-86ba-418c-bf6b-8d2e4ff0b05f.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 29000,
             },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "69681276",
                "name": "Latte",
                "category": "Brewed Coffee",
                "description": "230 ml | Espresso with extra milk and steamed microfoam. (brewed using our finest house blend - silver oak cafe blend - made with some of india's highest scoring coffee beans. ) [Energy: 159 kcal, Protein: 7.32g, Carbohydrates: 13.03g, Fiber: 0g, Fat: 8.77g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/604a68ed-2efa-471b-ba3c-f104455a5620_be2d0783-5321-4bbf-b9aa-680e0dbb7ccb.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 25000,
                  },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "69681452",
                "name": "Iced Latte",
                "category": "Brewed Coffee",
                "description": "315 ml | Espresso poured over cold milk and ice. (brewed using our finest house blend - silver oak cafe blend - made with some of india's highest scoring coffee beans. ) [Energy: 136 kcal, Protein: 6.48g, Carbohydrates: 10.13g, Fiber: 0g, Fat: 7.88g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/68c29dea-baba-4e3d-89b1-982de326e30f_dac3051b-249b-4b77-9636-19b7928e9225.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 26000,
            },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "69681255",
                "name": "Iced Cappuccino",
                "category": "Brewed Coffee",
                "description": "280 ml | Espresso blended with ice, milk and date syrup. (brewed using our finest house blend - silver oak cafe blend - made with some of india's highest scoring coffee beans. ) [Energy: 172 kcal, Protein: 5.26g, Carbohydrates: 24.69g, Fiber: 1g, Fat: 5.91g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/1ed63d57-511c-46f8-b1f5-d867763f9ce0_c395bff6-72e6-4040-9a8d-055054566b49.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 26500,
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "69681617",
                "name": "Smoked Chicken Sandwich",
                "category": "Mains",
                "description": "250 gram | Smoked chicken, creamy goat cheese and caramelised onions.  [Energy: 786 kcal, Protein: 42.71g, Carbohydrates: 63.51g, Fiber: 4.29g, Fat: 40.07g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/707393e9-88eb-4740-b49f-1eba70aac8ca_07c208b4-21d3-495f-a719-b71748ffcd1c.jpg",
                "inStock": 1,
                "price": 39000,
    },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "106423498",
                "name": "Spaghetti Aglio E Olio",
                "category": "Mains",
                "description": "300 gram | Spinach with oven dried tomatoes and parmesan, served over spaghetti tossed in olive oil and garlic.  [Energy: 681 kcal, Protein: 18.59g, Carbohydrates: 72.86g, Fiber: 7.63g, Fat: 36.02g]",
                "imageId": "qayqxiicsn0veorvqmsv",
                "inStock": 1,
                "isVeg": 1,
                "price": 44000,
             },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "99840850",
                "name": "Spaghetti In Mushroom Florentine",
                "category": "Mains",
                "description": "360 gram | Spaghetti tossed in a creamy sauce with mushrooms and spinach, topped with basil and parmesan [Energy: 779 kcal, Protein: 19.95g, Carbohydrates: 64.77g, Fiber: 5.84g, Fat: 49.12g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/d1c86607-35ad-451a-8256-5c24a590ef9b_baf35de6-8fed-4088-95f2-b46c6e00318d.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 45000,
                },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "106423371",
                "name": "100% Whole Wheat Sourdough",
                "category": "Suchali's Artisan Bakehouse",
                "description": "700 gram | Sourdough with no white flour. Only 100 percent whole wheat flour. Storage instructions - refrigerate the bread in an airtight container. Key allergens - gluten [Energy: 1633.73 kcal, Protein: 63.21g, Carbohydrates: 325.22g, Fiber: 0g, Fat: 8.89g]",
                "imageId": "37336973544e8881bb48253b20f68d08",
                "inStock": 1,
                "isVeg": 1,
                "price": 24000,
           },
              "hideRestaurantDetails": true
            }
          }
        ],
        "type": "CATEGORY_TYPE_RECOMMENDED"
      }
        },
   {
    "card": {
         "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
        "title": "Cold Coffee",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "137172739",
                "name": "Iced Americano",
                "category": "Brewed Coffee",
                "description": "220 ml | Espresso with cold water over ice. (brewed using our finest house blend - silver oak cafe blend - made with some of india's highest scoring coffee beans. ) [Energy: 22 kcal, Protein: 1.126g, Carbohydrates: 4.19g, Fiber: 0g, Fat: 0.22g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/8bfc4330-37dd-4681-9711-24a228eff5e8_4631645f-0893-4faa-8901-bc350894dd0c.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 22000,
               
             
               
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "137172737",
                "name": "Iced Espresso",
                "category": "Brewed Coffee",
                "description": "100 ml | Espresso poured over ice. (brewed using our finest house blend - silver oak cafe blend - made with some of india's highest scoring coffee beans. ) [Energy: 20 kcal, Protein: 1.12g, Carbohydrates: 3.72g, Fiber: 0g, Fat: 0.2g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/b4da0536-1121-4d30-a098-f142894effa6_e1eede25-ce21-4721-86bc-84d4e9f0afd4.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 20000,
                "variants": {
                  
                },
                "variantsV2": {
                  
                },
                "addons": [
                  {
                    "groupId": "144888102",
                    "groupName": "Choice  Of Milk",
                    "choices": [
                      {
                        "id": "122145900",
                        "name": "Better Bet - Plant-based Milk ( Vegan)",
                        "price": 1905,
                        "inStock": 1,
                        "isVeg": 1,
                        "isEnabled": 1
                      },
                      {
                        "id": "116255577",
                        "name": "Lactose-free Milk (Amul)",
                        "price": 1905,
                        "inStock": 1,
                        "isVeg": 1,
                        "isEnabled": 1
                      },
                      {
                        "id": "127396735",
                        "name": "Regular Milk",
                        "price": 1905,
                        "inStock": 1,
                        "isVeg": 1,
                        "isEnabled": 1
                      }
                    ],
                    "maxAddons": 1,
                    "maxFreeAddons": -1
                  }
                ],
                "itemAttribute": {
                  "vegClassifier": "VEG",
                  "portionSize": "100 ml"
                },
                "ribbon": {
                  
                },
                "type": "ITEM",
                "itemBadge": {
                  
                },
                "badgesV2": {
                  
                },
                "ratings": {
                  "aggregatedRating": {
                    
                  }
                }
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "137172741",
                "name": "Iced Latte",
                "category": "Brewed Coffee",
                "description": "315 ml | Espresso poured over cold milk and ice. (brewed using our finest house blend - silver oak cafe blend - made with some of india's highest scoring coffee beans. ) [Energy: 136 kcal, Protein: 6.48g, Carbohydrates: 10.13g, Fiber: 0g, Fat: 7.88g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/68c29dea-baba-4e3d-89b1-982de326e30f_dac3051b-249b-4b77-9636-19b7928e9225.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 26000,
             
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "137172744",
                "name": "Cold Brew With Milk",
                "category": "Brewed Coffee",
                "description": "300 ml | For people who like a balance of cold coffee and cold brew, this delicious latte style cold brew has notes of creamy milk chocolate, nuts and caramel.  [Energy: 113 kcal, Protein: 4.59g, Carbohydrates: 15.12g, Fiber: 0g, Fat: 3.84g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/ff95a46f-a520-419f-84aa-c43ec00cd71f_778fb9b1-e7c4-4cf9-94a9-035da2b444f0.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 23000,
                },
              
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "137172740",
                "name": "Vietnamese Style Iced Coffee",
                "category": "Brewed Coffee",
                "description": "300 ml | Our take on the vietnamese classic. Concentrated dark cold brew poured over ice, topped with sweetened condensed milk. (brewed using a specially curated dark roasted dhak blend - made with some of india's highest scoring coffee beans. ) [Energy: 260 kcal, Protein: 8.16g, Carbohydrates: 44.46g, Fiber: 0g, Fat: 5.4g]",
                "imageId": "330ba73551c112d357e5987e144dd009",
                "inStock": 1,
                "isVeg": 1,
                "price": 26000,
              
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "137172742",
                "name": "Iced Cappuccino",
                "category": "Brewed Coffee",
                "description": "280 ml | Espresso blended with ice, milk and date syrup. (brewed using our finest house blend - silver oak cafe blend - made with some of india's highest scoring coffee beans. ) [Energy: 172 kcal, Protein: 5.26g, Carbohydrates: 24.69g, Fiber: 1g, Fat: 5.91g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/1ed63d57-511c-46f8-b1f5-d867763f9ce0_c395bff6-72e6-4040-9a8d-055054566b49.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 26500,
                },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },

         
        ],
        "subtitleSuffix": {
          
        },
        "categoryId": "46899193"
      },
    },
      {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
        "title": "Hot Coffee",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "137172729",
                "name": "Espresso",
                "category": "Brewed Coffee",
                "description": "40 ml | Concentrated dose of coffee brewed under intense pressure. (brewed using our finest house blend - silver oak cafe blend - made with some of india's highest scoring coffee beans. ) [Energy: 20 kcal, Protein: 1.12g, Carbohydrates: 3.72g, Fiber: 0g, Fat: 0.2g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/8a9ed818-6bd6-45a2-9fc4-0ae72aa0805b_b71c8852-171a-4157-b1ed-ac5f6c111880.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 19000, },
              
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "137172734",
                "name": "Americano",
                "category": "Brewed Coffee",
                "description": "200 ml | Espresso with hot water. (brewed using our finest house blend - silver oak cafe blend - made with some of india's highest scoring coffee beans. ) [Energy: 23 kcal, Protein: 1.31g, Carbohydrates: 4.37g, Fiber: 0g, Fat: 0.23g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/a5374598-5e2a-4272-97e4-f33718bce005_c06d8ecc-7d92-413e-89d1-5dc690a447f4.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 21000,
         
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "137172728",
                "name": "Cortado",
                "category": "Brewed Coffee",
                "description": "100 ml | Espresso with 60ml of textured milk. (brewed using our finest house blend - silver oak cafe blend - made with some of india's highest scoring coffee beans. ) [Energy: 63 kcal, Protein: 3.08g, Carbohydrates: 6.68g, Fiber: 0g, Fat: 2.89g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/cea7e364-5d83-4f79-aeb9-5fe057bf2a8c_220b5baa-f80c-4b9d-a3f9-bfa3ca80d980.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 22000,
                },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
      
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "137172736",
                "name": "Cappuccino",
                "category": "Brewed Coffee",
                "description": "230 ml | Espresso with equal parts hot milk and steamed microfoam. (300 ml) (brewed using our finest house blend - silver oak cafe blend - made with some of india's highest scoring coffee beans. ) [Energy: 146 kcal, Protein: 6.92g, Carbohydrates: 10.79g, Fiber: 0g, Fat: 8.52g]",
                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/e48948d1-621e-4ff0-a1fc-51e0acf559ee_57e4753d-cd84-433f-956c-84f6c4469e51.jpg",
                "inStock": 1,
                "isVeg": 1,
                "price": 23000,
              },
              "analytics": {
                
              },
              "hideRestaurantDetails": true
            }
          },
         
        ],
        "subtitleSuffix": {
          
        },
        "categoryId": "46899192"
      }
    },
   ],
      
  
    }
  },
  {
    "info": {
      "id": "302684",
      "name": "Barbeque Nation",
      "cloudinaryImageId": "v4ryntwbvxuogbwfg3kj",
      "promoted": true,
      "areaName": "Connaught Place",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 4.3,
      "sla": {
        "deliveryTime": 36,
      },
      "groupCards":[
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Recommended",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "100347051",
                    "name": "Barbeque in a Box (Non Veg) Premium",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | [Six Starters] Chicken Tikka (4 Pcs) + Reshmi Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + Veg Rolls (6 Pcs) + Veg Kebabs (6 Pcs) + Chicken Seekh Kebab (6 Pcs). [Main Course] - Chicken Butter Masala + Egg Curry + Dal Makhani + Chicken Dum Biryani + Whole Wheat Paratha (3 Pcs) [Three Desserts] -  Angoori Gulab Jamun (8Pcs) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Salan, Dips & Salad. Barbeque Nation Buffet served at Home.",
                    "imageId": "025951ca79adb71f6fdd346c5710b488",
                    "inStock": 1,
                    "price": 104900,
                        },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "100347066",
                    "name": "Barbeque In A Box (Veg) Premium",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | [Six Starters] - Tandoori Paneer Tikka (4 Pcs) + Churrasco Pineapple (6 Pcs) + Veg Kebabs (6 Pcs) + Veg Rolls (6 Pcs) + Cheese Triangle (6 Pcs) + Assorted Grilled Corn & Veg (2 Nos) [Main Couse] - Paneer Butter Masala + Mix Veg + Dal Makhani + Veg Dum Biryani + Whole Wheat Paratha (3 Nos) [Three Desserts] Angoori Jamun (8 Pcs) + Moong Dal Halwa + Brownie. Accompanied with Mint Chutney, Salan, Dips & Salad. Barbeque Nation buffet served at home.",
                    "imageId": "ms4gatxolkuncr145vbz",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 99900,
                      },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "72159924",
                    "name": "Barbeque in a Box (Non Veg Overload)",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | [Five Starters] Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (4 Pcs) + Tandoori Tangdi (2 Pcs) + Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + [Main Course] Butter Chicken Masala + Mutton Rogan Josh + Egg Curry + Chicken Dum Biryani + Whole Wheat Paratha (3 Pcs) [Three Desserts] Angoori Gulab Jamun (8 Nos) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Salan, Dips & Salad.",
                    "imageId": "suogu1jyv51m2eg7eirk",
                    "inStock": 1,
                    "price": 129900,
                },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "100347089",
                    "name": "Barbeque in a Box (Chicken Biryani Overload)",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | Chicken Dum Biryanis (3 Portions) + Tandoori Tangdi (2 Pcs) + Chicken Tikka (4 Pcs) + Fish Tikka (6 Pcs) + Chilly Garlic Prawns (6 Pcs) + Chicken Wings (6 Pcs) + Angoori Gulab Jamun (8 Pcs) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Salan, Dips & Salad. A perfect Biryani & Kebabs Feast. Earlier called as Biryanis and Kebabs Box (Chicken) Premium.",
                    "imageId": "92af8caf8bcc17a562e3e66885513c81",
                    "inStock": 1,
                    "price": 114900,
                     },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "73237272",
                    "name": "Barbeque in a Box - Chicken Overload",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | [Four Starters] - Chicken Wings (12 Pcs) + Chicken Tikka (4 Pcs) + Tandoori Tangdi (2 Pcs) + Chicken Seekh Kebab (6 Pcs) [Main Course] - Butter Chicken + Egg Curry + Dal Makhani + Chicken Dum Biryani + Whole Wheat Paratha (3 Pcs) [Three Desserts] - Angoori Gulab Jamun (8 Pcs) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Salan, Dips & Salad. A special Box curated for chicken lovers.",
                    "imageId": "bf6abe6380e4e127d6ed3fcebb2c35d8",
                    "inStock": 1,
                    "price": 126900,
                       },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "100347047",
                    "name": "Barbeque in a Box (Non Veg) Premium (With Prawns and Mutton)",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | [Six Starters] - Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (4 Pcs) + Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + Veg Kebabs (6 Pcs) + Veg Rolls (6 Pcs) [Main Course] - Butter Chicken + Mutton Rogan Josh + Dal Makhani + Chicken Dum Biryani + Whole Wheat Paratha (3 Nos) [Three Desserts] - Angoori Jamun (8 Pcs) + Moong Dal Halwa + Brownie - Accompanied with Mint Chutney, Salan, Dips & Salad. A premium Barbeque Nation buffet served at home.",
                    "imageId": "708922a3eaae2198dfa7b8654e849015",
                    "inStock": 1,
                    "price": 124900,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "106245812",
                    "name": "Classic Meal Box (Non Veg) Premium",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | Wholesome box of Curries & Biryani from the house of Barbeque Nation contains - Chicken Butter Masala (2 Portions), Egg Curry, Dal Makhani, Chicken Dum Biryani, Steamed Basmati Rice, Whole Wheat Paratha (3 Nos) Angoori Gulab Jamun (8 Nos), Chocolate Brownie, Moong Dal Halwa, Mint Chutney, Raita & Garden Salad. Share with your loved ones.",
                    "imageId": "22592f4be247490b954da74f54d42ab7",
                    "inStock": 1,
                    "price": 92900,
           },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "106245808",
                    "name": "Classic Meal Box (Veg) Premium",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | Scrumptious Box of India’s Favourites - Paneer Butter Masala (2 Portions), Dal Makhani, Mix Veg, Barbecue Veg Dum Biryani, Steamed Basmati Rice, Whole Wheat Paratha (3 Nos) Angoori Gulab Jamun (8 Nos), Chocolate Brownie, Moong Dal Halwa, Mint Chutney, Raita, Garden Salad & Pickle. Share with your loved ones.",
                    "imageId": "22efc036a380e41feddcfa25e0057fd9",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 82900,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "100347097",
                    "name": "Barbeque in a Box (Mutton Biryani Overload)",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | Mutton Dum Biryani (3 Portions) + Tandoori Tangdi (2 Pcs) + Chicken Tikka (4 Pcs) + Fish Tikka (6 Pcs) + Chilly Garlic Prawns(6 Pcs) + Chicken Wings (6 Pcs) + Angoori Gulab Jamun (8 Pcs) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Raita, Salan, Dips & Salad. Relish biryani of Succulent mutton pieces marinated in freshly roasted spices and cooked with aromatic long grain Basmati rice in the Dum style. Earlier called as Biryanis and Kebabs Box (Mutton) Premium",
                    "imageId": "40fe28af93d3039bf6acdd47dc5b95ac",
                    "inStock": 1,
                    "price": 129900,
                    },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "72159923",
                    "name": "Barbeque in a Box (Chicken Biryani) Regular",
                    "category": "Barbeque in a Box (Serves 1-2)",
                    "description": "Serves 2 | Kebabs & Biryani Feast: [Two Starters] - Chicken Tikka (4 Pcs) - Kalmi Fish Tikka (6Pcs) [Chicken Dum Biryani - 2 Portions] [Dessert] - Angoori Gulab Jamun (8 Pcs) - Accompanied with Salan, Dips, Mint Chutney, Raita & Salad].",
                    "imageId": "2d49cf7332f75cfe4770e451b606d704",
                    "inStock": 1,
                    "price": 84900,
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "106245803",
                    "name": "Classic Meal Box (Non-Veg) Regular",
                    "category": "Barbeque in a Box (Serves 1-2)",
                    "description": "Serves 2 | King Size Meal - Chicken Butter Masala, Dal Makhani, Chicken Dum Biryani,  Whole Wheat Paratha (3 Nos) Angoori Gulab Jamun (8 Nos), Raita & Garden Salad. Perfect to share with your bestie.",
                    "imageId": "e45ca2e7322daca5a10c84537a2319fc",
                    "inStock": 1,
                    "price": 72900,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "72159922",
                    "name": "Barbeque in a Box (Veg Biryani) Regular",
                    "category": "Barbeque in a Box (Serves 1-2)",
                    "description": "Serves 2 | Kebabs & Biryani feast: [Two Starters] - Veg Rolls (6 Pcs) + Tandoori Paneer Tikka (4 Pcs) [Veg Dum Biryani- 2 Nos] [Dessert] - Angoori Gulab Jamun (8 Pcs) [Accompanied with Salan, Dips & Salad]. Earlier called as Biryanis and Kebabs Box (Veg) Regular",
                    "imageId": "e346f3d6fe123d732cb99463b8ccd070",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 74900,
                   },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "107184284",
                    "name": "Classic Meal Box (Veg) Regular",
                    "category": "Barbeque in a Box (Serves 1-2)",
                    "description": "Serves 2 | King Size Meal – Paneer Butter Masala, Dal Makhani, Barbecue Veg Dum Biryani, Whole Wheat Paratha (3 Nos) Angoori Gulab Jamun (8 Nos), Raita & Garden Salad. Eat like a King with your favourite.",
                    "imageId": "a249331eb4208e8f7816f72dcd64c2f0",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 62900,
              },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "72159921",
                    "name": "Kebabs in a Box (Non Veg Overload)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 2 | Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (4 Pcs) + Chicken Wings (6 Pcs) + Tandoori Tangadi (2Pcs) + Fish Tikka (6 Pcs) + Angoori Jamun (8 Pcs). Accompanied with Dips & Salad. Non Veg Overload in a Box.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/030e00df-5de4-4e88-bd5d-f0dc5a82d3d4_cc0a9242-24e8-4ecc-a74b-291e219836b8_compressed",
                    "inStock": 1,
                    "price": 92900,
                     },
                  "hideRestaurantDetails": true
                }
              }
            ],
            "type": "CATEGORY_TYPE_RECOMMENDED"
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Kebabs Platter and Starters",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61374486",
                    "name": "Tandoori Tangdi (3Pcs)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Chicken Drumstick marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.  Tangdi Kabab for any occasion.",
                    "imageId": "43c91a42d76e180ce9b3a6f9c3c19b91",
                    "inStock": 1,
                    "price": 35900,
                    },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "77902529",
                    "name": "Chicken Seekh Kebab",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Succulent kebabs (6Nos) made from tender meat, masalas and seasoning,grilled on skewers till perfection. Served with Mint Chutney &Lacha Onions. Kcal - 583",
                    "imageId": "0ce722ff34632c00e23e3c70a8fb4217",
                    "inStock": 1,
                    "price": 25900,
                 
                 
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61374433",
                    "name": "Tandoori Paneer Tikka (8 Pcs)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney. Kcal - 753",
                    "imageId": "a19b443af1f23cb3317c82648a66f954",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 33900,
                     },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "61374461",
                    "name": "Chicken Tikka (Boneless) (8 Pcs)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Boneless Chicken chunks marinated in  authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615",
                    "imageId": "bcirausndatlpylzwk4l",
                    "inStock": 1,
                    "price": 36900,
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "78440312",
                    "name": "Mutton Seekh Kebab",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Scrumptious, full of juices & flavors- These mutton mince kebabs (6Nos) cooked with Indian aromatic spices are perfect as a starter. Kcal - 450",
                    "imageId": "ca10f7eac804d7322f2ad7781acf843e",
                    "inStock": 1,
                    "price": 34900,
                  
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "144200068",
                    "name": "Steamed Masala Corn (Butter)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Tender corn kernels infused with creamy butter. Topped with a finely chopped onion, fresh coriander, and green chili. Served with Cajun Seasoning.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/29/b7901d42-4b00-4825-8f5a-ae33a6a61788_e7793752-3d24-4799-b8eb-52b97eebbbac.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 20900,
                 },
              
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "33767443",
                    "name": "Tandoori Mushroom",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Button Mushrooms marinated with tandoori spice , grilled to golden brown perfection and brushed with butter. Kcal - 182",
                    "imageId": "gijzyjxsc2dgcrysk2px",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 29900,
                  
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "144200069",
                    "name": "Steamed Masala Corn (Plain)",
                    "category": "Kebabs Platter and Starters",
                    "description": "Serves 1 | Tender corn kernels topped with a finely chopped onion, fresh coriander, and green chili. Served with Cajun Seasoning.",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/29/cb9bd53a-9628-4075-9abc-931b070e4826_4a63c6a0-37dd-4207-a03a-43b88bd6ebd0.jpg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 18900,
                 },
                
                  "hideRestaurantDetails": true
                }
              }
            ],
            "subtitleSuffix": {
              
            },
            "image": "cxnpmaw7shz2w1t9mvkf",
            "categoryId": "12080272"
          }
        },
        {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            "title": "Barbeque in a Box (Serves 2-3)",
            "itemCards": [
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "101283028",
                    "name": "Barbeque In A Box (Veg) Premium",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | [Six Starters] - Tandoori Paneer Tikka (4 Pcs) + Churrasco Pineapple (6 Pcs) + Veg Kebabs (6 Pcs) + Veg Rolls (6 Pcs) + Cheese Triangle (6 Pcs) + Assorted Grilled Corn & Veg (2 Nos) [Main Course] - Paneer Butter Masala + Mix Veg + Dal Makhani + Veg Dum Biryani + Whole Wheat Paratha (3 Nos) [Three Desserts] Angoori Jamun (8 Pcs) + Moong Dal Halwa + Brownie. Accompanied with Mint Chutney, Salan, Dips & Salad. Barbeque Nation buffet served at home.",
                    "imageId": "ms4gatxolkuncr145vbz",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 101900,
                 
                  
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "101283027",
                    "name": "Barbeque in a Box (Non Veg Overload)",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | [Five Starters] Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (4 Pcs) + Tandoori Tangdi (2 Pcs) + Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + [Main Course] Butter Chicken Masala + Mutton Rogan Josh + Egg Curry + Chicken Dum Biryani + Whole Wheat Paratha (3 Pcs) [Three Desserts] Angoori Gulab Jamun (8 Nos) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Salan, Dips & Salad.",
                    "imageId": "suogu1jyv51m2eg7eirk",
                    "inStock": 1,
                    "price": 131900,
                 
                   
                   
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "72240465",
                    "name": "Barbeque in a Box (Mutton Biryani Overload)",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | Mutton Dum Biryani (3 Portions) + Tandoori Tangdi (2 Pcs) + Chicken Tikka (4 Pcs) + Fish Tikka (6 Pcs) + Chilly Garlic Prawns(6 Pcs) + Chicken Wings (6 Pcs) + Angoori Gulab Jamun (8 Pcs) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Raita, Salan, Dips & Salad. Relish biryani of Succulent mutton pieces marinated in freshly roasted spices and cooked with aromatic long grain Basmati rice in the Dum style. Earlier called as Biryanis and Kebabs Box (Mutton) Premium",
                    "imageId": "40fe28af93d3039bf6acdd47dc5b95ac",
                    "inStock": 1,
                    "price": 131900,
                  
                   
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
              {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  "info": {
                    "id": "100353156",
                    "name": "Barbeque in a Box (Non Veg) Premium (With Prawns and Mutton)",
                    "category": "Barbeque in a Box (Serves 2-3)",
                    "description": "Serves 3 | [Six Starters]- Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (4 Pcs) + Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + Veg Kebabs (6 Pcs) + Veg Rolls (6 Pcs) [Main Course] - Butter Chicken + Mutton Rogan Josh + Dal Makhani + Chicken Dum Biryani + Whole Wheat Paratha (3 Nos) [Three Desserts] - Angoori Jamun (8 Pcs)+ Moong Dal Halwa + Brownie - Accompanied with Mint Chutney, Salan, Dips & Salad. A premium Barbeque Nation buffet served at home.",
                    "imageId": "e2ewnaxscaxstws68p4o",
                    "inStock": 1,
                    "price": 126900,
                 
                  
                 
                  },
                  "analytics": {
                    
                  },
                  "hideRestaurantDetails": true
                }
              },
             
            ],
            "subtitleSuffix": {
              
            },
            "image": "ms4gatxolkuncr145vbz",
            "categoryId": "32262108"
          }
        }

      ],
    
   
    }
  },
 ]
 export default resList;



