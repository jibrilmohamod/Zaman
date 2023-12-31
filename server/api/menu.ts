export default defineEventHandler((event) => {
 return {
  menu: {
   name: "Zaman Restaurant",
   image: "restaurant_image_url.jpg",
   BreakfastMenu: {
    name: "Breakfast Menu",
    image: "v1694095332/2O0A2492_xhfbyj.webp",
    slug: "BreakfastMenu",
    categories: [
     {
      BreakfastCombos: {
       name: "Breakfast Combos",
       image: "v1694095332/2O0A2492_xhfbyj.webp",
       items: [
        {
         name: "Healthy Breakfast",
         ingredients:
          "Parsley potatoes,poached egg, creamed spinach, avocado, grilled tomato",
         image: "/v1695331622/2O0A2474_kgz8u8.webp",
         price: 700,
        },
        {
         name: "Spinach & Mushroom Omelette",
         ingredients: "Spinach, mushroom, cheese, tomato, onion",
         image: "v1695331626/2O0A2434_gs2nn6.webp",
         price: 700,
        },
        {
         name: "Spanish Omelette",
         ingredients: "Potatoes, onion, tomato, cheese",
         image: "v1695331622/2O0A2430_lr9u2v.webp",
         price: 700,
        },
        {
         name: "Cheese Omelette",
         ingredients: "Cheese, tomato, onion",
         image: "v1695331625/2O0A2426_qp51qm.webp",
         price: 700,
        },
        {
         name: "Plain Omelette",
         ingredients: "Eggs, salt, pepper",
         image: "v1695331625/2O0A2426_qp51qm.webp",
         price: 700,
        },
        {
         name: "Chicken Avocado & Cheese Sandwich",
         ingredients: "Chicken, avocado, cheese, tomato, onion",
         image: "v1694095330/2O0A2540_gat18j.webp",
         price: 700,
        },
        {
         name: "Grilled Vegetable Sandwich",
         ingredients: "Zucchini, eggplant, bell pepper, onion, tomato, cheese",
         image: "v1694095367/2O0A2629_o6c0sg.webp",
         price: 700,
        },
        {
         name: "Chicken & Waffles",
         ingredients: "Chicken, waffles, maple syrup",
         image: "v1695331622/2O0A2412_gsekn5.webp",
         price: 700,
        },
        {
         name: "Pancakes",
         ingredients: "Pancakes, maple syrup",
         image: "v1695331628/2O0A2465_ip4hug.webp",
         price: 500,
        },
        {
         name: "English Breakfast",
         ingredients:
          "2 eggs cooked to your liking, beef or chicken sausage, beef bacon,baked beans, grilled tomato, toast or pancake",
         image: "v1695491832/english-breakfast_wwt0pf.webp",
         price: 700,
        },
        {
         name: "Speedy Breakfast",
         ingredients:
          "2 eggs cooked to your liking, beef or chicken sausage, beef macon, baked beans, grilled tomato, toast or pancake",
         image:
          "v1695491825/english-breakfast-fried-eggs-sausages-zucchini-sweet-peppers_tvikkh.webp",
         price: 700,
        },
        {
         name: "Continental Breakfast",
         ingredients:
          "2 eggs cooked to your liking, beef or chicken sausage, beef macon, baked beans, grilled tomato, toast or pancake",
         image:
          "v1695491825/english-breakfast-fried-eggs-bacon-sausages-toasted-rye-bread_i6xwtl.webp",
         price: 700,
        },
        {
         name: "Chapati Breakfast",
         ingredients:
          "Omelette, spinach, 2 beef sausages, grilled tomato, chapati",
         image: "v1694095366/2O0A2619_zwoukc.webp",
         price: 700,
        },
        {
         name: "Chapati Saldato",
         ingredients:
          "2 chapatis served with a choice of liver or boiled chunks of goat meat (ESBESSO)",
         image: "v1694095366/2O0A2619_zwoukc.webp",
         price: 700,
        },
        {
         name: "Caramelized Beef Sandwich",
         ingredients: "Caramelized beef, cheese, tomato, onion",
         image: "v1694095330/2O0A2540_gat18j.webp",
         price: 700,
        },
        {
         name: "Gourmet Oatmeal Porridge",
         ingredients: "Oatmeal, milk, honey, banana, peanut butter",
         image:
          "v1695491823/bowl-with-oat-flakes-fruits-bear-shape_n3avut.webp",
         price: 450,
        },
        {
         name: "Somali Breakfast",
         ingredients:
          "3 crepes served with a choice of liver or boiled chunks of goat meat (ESBESSO)",
         image: "v1695448798/2O0A8596_z9prey.webp",
         price: 700,
        },
        {
         name: "BBQ Chicken & Cheese Sandwich",
         ingredients: "BBQ chicken, cheese, tomato, onion",
         image: "v1694095330/2O0A2540_gat18j.webp",
         price: 700,
        },
        {
         name: "Crepes",
         ingredients: "Crepes, maple syrup",
         image:
          "v1695491836/pancakes-with-strawberries-jam-chocolate-cream_ifohyj.webp",
         price: 450,
        },
        {
         name: "Fruit Salad with Ice Cream",
         ingredients: "Assorted fresh fruits, ice cream",
         image: "v1695331641/2O0A2722_vovhz3.webp",
         price: 500,
        },
        {
         name: "Garden Salad",
         ingredients: "Lettuce, tomato, cucumber, onion, bell pepper, olives",
         image: "v1695448808/2O0A2448_vsxpk8.webp",
         price: 500,
        },
       ],
      },
     },
    ],
   },
   MainMenu: {
    name: "Main Menu",
    image: "v1694295166/2O0A2819_bmuugk.webp",
    slug: "MainMenu",
    categories: [
     {
      SaladsandSoups: {
       name: "Salads and Soups",
       image: "v1695448808/2O0A2448_vsxpk8.webp",
       items: [
        {
         name: "Garden Salad",
         ingredients: "Lettuce, tomato, cucumber, onion, bell pepper, olives",
         image: "v1695448808/2O0A2448_vsxpk8.webp",
         price: 500,
        },
        {
         name: "Caesar Salad",
         ingredients:
          "Lettuce, croutons, parmesan cheese, served with caesar dressing and grilled chicken",
         image: "v1695448808/2O0A2470_dlx010.webp",
         price: 500,
        },
        {
         name: "Greek Salad",
         ingredients:
          "Lettuce, tomato, cucumber, onion, bell pepper, olives, feta cheese",
         image: "v1695448807/2O0A2450_jjdgiv.webp",
         price: 500,
        },
        {
         name: "Ginger Butternut Soup",
         ingredients: "Butternut, ginger, cream , served with garlic bread",
         image: "v1695448810/2O0A2506_qbrmrb.webp",
         price: 350,
        },
        {
         name: "Cream of Broccoli Capuccino",
         ingredients: "Broccoli, cream, served with garlic bread",
         image: "v1695448788/2O0A2735_pu6ovp.webp",
         price: 350,
        },
       ],
      },
      Noodles: {
       name: "Noodles",
       image: "v1695331640/2O0A2705_gyditq.webp",
       items: [
        {
         name: "Stir Fried Chicken Noodles",
         ingredients:
          "Chicken, noodles, vegetables topped with parmesan cheese",
         image: "v1695331640/2O0A2705_gyditq.webp",
         price: 950,
        },
        {
         name: "Stir Fried Beef Noodles",
         ingredients: "Beef, noodles, vegetables topped with parmesan cheese",
         image: "v1695331640/2O0A2705_gyditq.webp",
         price: 950,
        },
       ],
      },
      MainCourse: {
       name: "Main Course",
       image: "v1694095334/2O0A2544_ii161e.webp",
       items: [
        {
         name: "BBQ Beef Short Ribs",
         ingredients:
          "Cooked succulent juicy beef ribs with stoney, ginger and finished with BBQ sauce",
         image:
          "v1695491831/hot-grilled-spare-ribs-with-barbecue-sauce-isolated-white-background-ai-generative_bp8qru.webp",
         price: 950,
        },
        {
         name: "Grilled Tilapia Fillet",
         ingredients: "Grilled tilapia fillet served with lemon butter sauce",
         image: "v1695491835/salmon-steak_xxuofm.webp",
         price: 1000,
        },
        {
         name: "Poached Norwegian Salmon",
         ingredients:
          "Salmon fillet poached in Orange juice and topped with tropical salsa & butternut puree",
         image: "v1695493254/salmon-steak-white-plate_qeyqwf.webp",
         price: 2000,
        },
        {
         name: "Chicken Curry",
         ingredients:
          "Chicken fillet cooked in coconut curry sauce, served with your choice of side",
         image: "v1695448790/2O0A2625_dqhjfc.webp",
         price: 1000,
        },
        {
         name: "Seared Jamaican Jerk Chicken",
         ingredients:
          "Marinated with carribean spices, grilled just right, served with any side of your choosing",
         image: "v1695331636/2O0A2601_dgsmxz.webp",
         price: 1100,
        },
        {
         name: "Seared Herb Marinated Chicken",
         ingredients:
          "Marinated with herbs, grilled just right, served with any side of your choosing",
         image: "v1695448791/2O0A2589_lvfvit.webp",
         price: 1100,
        },
        {
         name: "Fish Curry",
         ingredients:
          "Fish fillet cooked in coconut curry sauce, served with your choice of side",
         image: "v1695448790/2O0A2625_dqhjfc.webp",
         price: 1000,
        },
       ],
      },
      SomaliDishes: {
       name: "Somali Dishes",
       image: "v1695448803/2O0A8602_swk17r.webp",
       items: [
        {
         name: "Goat Haneed",
         ingredients:
          "Goat meat cooked in a tomato based sauce, served with rice",
         image: "v1695448805/2O0A8606_itview.webp",
         price: 1800,
        },
        {
         name: "Suqaar",
         ingredients: "Fried Camel meat",
         image: "v1695448800/2O0A8599_hkqhs6.webp",
         price: 1200,
        },
        {
         name: "Dailo",
         ingredients: "Fried Camel meat",
         image: "v1695448805/2O0A8606_itview.webp",
         price: 1200,
        },
        {
         name: "Kostato",
         ingredients: "Fried Camel meat",
         image: "v1695448805/2O0A8623_vubv7h.webp",
         price: 1200,
        },
        {
         name: "Alesso",
         ingredients: "Boiled Goat meat",
         image: "v1695331642/2O0A2755_jexm2v.webp",
         price: 1200,
        },
        {
         name: "Arosto",
         ingredients: "Fried Goat meat",
         image: "v1694295166/2O0A2761_ultmgm.webp",
         price: 1200,
        },
        {
         name: "Chicken Mandi",
         ingredients:
          "Chicken cooked in a tomato based sauce, served with rice",
         image: "v1695331653/2O0A8584_vtxtca.webp",
         price: 1600,
        },
        {
         name: "Goat Mandi",
         ingredients:
          "Goat meat cooked in a tomato based sauce, served with rice",
         image: "v1695448804/2O0A8609_sblsfs.webp",
         price: 1600,
        },
        {
         name: "Chicken Haneed",
         ingredients:
          "Chicken cooked in a tomato based sauce, served with rice",
         image: "v1694095370/2O0A8581_hixct3.webp",
         price: 1600,
        },
       ],
      },
      MeatLovers: {
       name: "Meat Lovers",
       image: "v1694095371/2O0A2802_tu18u8.webp",
       items: [
        {
         name: "Beef Fillet Hunter Style",
         ingredients:
          "Marinated beef fillet cooked to your liking, served with your choice of side",
         image: "v1694095371/2O0A2802_tu18u8.webp",
         price: 1200,
        },
        {
         name: "Beef Fillet Minute Steak",
         ingredients:
          "Marinated beef fillet cooked to your liking, topped with onions & mushrooms, served with your choice of side",
         image: "v1694295166/2O0A2819_bmuugk.webp",
         price: 1200,
        },
        {
         name: "Beef Fillet Cafe de Paris",
         ingredients:
          "Marinated beef fillet cooked to your liking, topped with cafe de paris sauce, served with your choice of side",
         image: "v1694295166/2O0A2821_rnik6k.webp",
         price: 1200,
        },
       ],
      },
      LightSnacks: {
       name: "Light Snacks",
       image: "v1694095334/2O0A2544_ii161e.webp",
       items: [
        {
         name: "BBQ Chicken Wings",
         ingredients:
          "Chicken wings marinated in BBQ sauce, served with your choice of side",
         image: "v1694095333/2O0A2557_ui2lpn.webp",
         price: 950,
        },
        {
         name: "Meat Samosa (3pcs)",
         ingredients: "Fried pastry filled with minced meat",
         image: "v1694095338/2O0A2598_arorru.webp",
         price: 400,
        },
        {
         name: "Vegetable Samosa (3pcs)",
         ingredients: "Fried pastry filled with vegetables",
         image: "v1694095338/2O0A2598_arorru.webp",
         price: 300,
        },
        {
         name: "Fish Fingers",
         ingredients:
          "Goujons of lake fish coated with breadcrumbs Served with garlic aioli",
         image: "v1694095334/2O0A2544_ii161e.webp",
         price: 900,
        },
       ],
      },
      Burgers: {
       name: "Burgers",
       image: "v1694095363/2O0A2616_lj6pmh.webp",
       items: [
        {
         name: "Cheese Burger",
         ingredients:
          "Beef patty, cheese, tomato, onion, lettuce, served with fries",
         image: "v1694095363/2O0A2616_lj6pmh.webp",
         price: 800,
        },
        {
         name: "Chicken Cheese Burger",
         ingredients:
          "Chicken patty, cheese, tomato, onion, lettuce, served with fries",
         image: "v1694095363/2O0A2616_lj6pmh.webp",
         price: 800,
        },
        {
         name: "Beef & Avocado Burger",
         ingredients:
          "Beef patty, avocado, tomato, onion, lettuce, served with fries",
         image: "v1694095363/2O0A2616_lj6pmh.webp",
         price: 800,
        },
        {
         name: "Chef's Signature Burger",
         ingredients:
          "Beef partie topped with cheese, caramelized onions & mushroom sauce",
         image: "v1694095363/2O0A2616_lj6pmh.webp",
         price: 800,
        },
        {
         name: "Vegetable Burger",
         ingredients:
          "Vegetable patty, tomato, onion, lettuce, served with fries",
         image: "v1694095363/2O0A2616_lj6pmh.webp",
         price: 800,
        },
       ],
      },
      Pasta: {
       name: "Pasta",
       image: "v1695331640/2O0A2705_gyditq.webp",
       items: [
        {
         name: "Spaghetti Bolognese",
         ingredients: "Spaghetti, minced beef, tomato sauce, parmesan cheese",
         image: "v1695448797/2O0A2869_xng41n.webp",
         price: 900,
        },
        {
         name: "Chicken Alfredo",
         ingredients:
          "Fettuccine, chicken, cream, parmesan cheese , penni pasta",
         image: "v1695448788/2O0A2732_zp91hi.webp",
         price: 950,
        },
        {
         name: "Penne Napolitana",
         ingredients: "Penne pasta, tomato sauce, parmesan cheese",
         image: "v1695491819/carbonara_vdjlcy.webp",
         price: 950,
        },
       ],
      },
      Sandwiches: {
       name: "Sandwiches",
       image: "v1694095367/2O0A2629_o6c0sg.webp",
       items: [
        {
         name: "Tomato Avocado & Cheese Sandwich",
         ingredients:
          "Fresh tomatoes, avocado, basil mozzarella on toasted breads",
         image: "v1694095330/2O0A2540_gat18j.webp",
         price: 700,
        },
        {
         name: "Chicken & Cheese & Mayo Sandwich",
         ingredients:
          "Chicken, tomato, lettuce, white or brown toast and cheese",
         image: "v1694095330/2O0A2540_gat18j.webp",
         price: 900,
        },
        {
         name: "Beef Sandwich",
         ingredients: "Beef, tomato, lettuce, white or brown toast and cheese",
         image: "v1694095367/2O0A2629_o6c0sg.webp",
         price: 900,
        },
        {
         name: "Grilled Vegetable Sandwich",
         ingredients: "Zucchini, eggplant, bell pepper, onion, tomato, cheese",
         image: "v1694095367/2O0A2629_o6c0sg.webp",
         price: 700,
        },
       ],
      },
      Pizza: {
       name: "Pizza",
       image: "v1695491823/2O0A2718_egtad0.webp",
       items: [
        {
         name: "Margherita",
         ingredients: "Tomato sauce, mozzarella cheese, basil",
         image: "v1695491823/2O0A2718_egtad0.webp",
         price: "S: 500, M: 800, L: 1000",
        },
        {
         name: "Chicken Hawaiian",
         ingredients: "Tomato sauce, mozzarella cheese, chicken, pineapple",
         image: "v1695491823/2O0A2718_egtad0.webp",
         price: "S: 500, M: 800, L: 1000",
        },
        {
         name: "Chicken Peri Peri",
         ingredients:
          "Tomato sauce, mozzarella cheese, chicken, peri peri sauce",
         image: "v1695491823/2O0A2718_egtad0.webp",
         price: "S: 500, M: 800, L: 1000",
        },
        {
         name: "Chicken BBQ",
         ingredients: "Tomato sauce, mozzarella cheese, chicken, BBQ sauce",
         image: "v1695491823/2O0A2718_egtad0.webp",
         price: "S: 500, M: 800, L: 1000",
        },
       ],
      },
      Desserts: {
       name: "Desserts",
       image: "v1694095371/2O0A8572_smagwh.webp",
       items: [
        {
         name: "Chocolate Cake",
         ingredients:
          "Chocolate cake with chocolate ganache served with vanilla ice cream",
         price: 550,
         image: "v1695331647/2O0A2840_pjzcmi.webp",
        },
        {
         name: "Lemon Cake",
         ingredients:
          "Lemon cake with lemon curd served with vanilla ice cream",
         price: 550,
         image: "v1694295166/2O0A2585_unrpoo.webp",
        },
        {
         name: "Fruit salad",
         ingredients: "Fruit salad topped with yoghurt & nuts",
         price: 500,
         image: "v1695331641/2O0A2722_vovhz3.webp",
        },
        {
         name: "White Forest Cake",
         ingredients: "White Forest Cake",
         price: 450,
         image: "v1695331627/2O0A2561_r3znlj.webp",
        },
        {
         name: "Black Forest Cake",
         ingredients: "Black Forest Cake",
         price: 450,
         image: "v1695491825/black-forest-cakes_xkrsbx.webp",
        },
        {
         name: "Red Velvet Cake",
         ingredients: "Red Velvet Cake",
         price: 450,
         image:
          "v1695491837/front-view-red-cake-slice-fruit-cake-piece-inside-plate-with-fresh-strawberries-grey_x4idfv.webp",
        },
        {
         name: "Banana Split Sundae",
         ingredients: "Banana Split Sundae",
         price: 600,
         image: "v1694095371/2O0A8572_smagwh.webp",
        },
        {
         name: "Assorted Ice Cream",
         ingredients: "3 scoops of vanilla, strawberry, chocolate",
         price: 390,
         image:
          "v1695491818/delicious-ice-cream-flavours-arrangement_rjkrr1.webp",
        },
        {
         name: "Danish Pastry",
         ingredients: "Danish Pastry",
         price: 300,
         image: "v1695331654/2O0A2868_rszlsc.webp",
        },
        {
         name: "Chocolate Croissant",
         ingredients: "Chocolate Croissant",
         price: 280,
         image: "v1695331648/2O0A2859_tegrej.webp",
        },
        {
         name: "Plain Croissant",
         ingredients: "Plain Croissant",
         price: 240,
         image: "v1695331648/2O0A2859_tegrej.webp",
        },
        {
         name: "Glazed Donuts",
         ingredients: "Glazed Donuts",
         price: 250,
         image: "v1695331644/2O0A2772_xsudw1.webp",
        },
        {
         name: "Muffins",
         ingredients: "Available Flavours: Chocolate chip, Chocolate & Vanilla",
         price: 240,
         image: "v1695448812/2O0A2570_u1mi9x.webp",
        },
       ],
      },
     },
    ],
   },
   Beverages: {
    name: "Beverages",
    image: "v1695223477/2O0A2680_t8cqwg.webp",
    slug: "Beverages",
    categories: [
     {
      HotBeverages: {
       name: "Hot Beverages",
       image:
        "v1695394560/side-view-two-cups-coffee-cookies-cinnamon-limes-old-newspaper-dark-surface_gdcwvf.webp",
       items: [
        {
         name: "Cafe Mocha",
         ingredients: "Coffee beans, water",
         image: "v1695448792/2O0A2649_u77blp.webp",
         price: 300,
        },
        {
         name: "Cappuccino",
         ingredients: "Coffee beans, water",
         image: "v1695448792/2O0A2649_u77blp.webp",
         price: 250,
        },
        {
         name: "Espresso",
         ingredients: "Coffee beans, water",
         image: "v1695448792/2O0A2649_u77blp.webp",
         price: 150,
        },
        {
         name: "Hot Chocolate",
         ingredients: "Chocolate, milk",
         image: "v1695494882/coffee-cream_fi4b4f.webp",
         price: 250,
        },
        {
         name: "African Tea",
         ingredients: "Tea leaves, milk",
         image: "v1695491837/2O0A2642_mjasmg.webp",
         price: 200,
        },
        {
         name: "Masala Tea",
         ingredients: "Tea leaves, milk",
         image: "v1695491837/2O0A2642_mjasmg.webp",
         price: 200,
        },
        {
         name: "Classic Dawa",
         ingredients: "Lemon, honey, ginger",
         image: "v1695495203/glass-tea-with-flower_wlonrk.webp",
         price: 250,
        },
        {
         name: "Cafe Latte",
         ingredients: "Coffee beans, water",
         image: "v1695448792/2O0A2649_u77blp.webp",
         price: 250,
        },
        {
         name: "Cafe Americano",
         ingredients: "Coffee beans, water",
         image: "v1695448792/2O0A2649_u77blp.webp",
         price: 200,
        },
        {
         name: "Chai Latte",
         ingredients: "Tea leaves, milk",
         image: "v1695491837/2O0A2642_mjasmg.webp",
         price: 250,
        },
        {
         name: "English Breakfast Tea",
         ingredients: "Tea leaves, milk",
         image: "v1695491837/2O0A2642_mjasmg.webp",
         price: 200,
        },
        {
         name: "Camel Tea",
         ingredients: "Tea leaves, milk",
         image: "v1695491837/2O0A2642_mjasmg.webp",
         price: 200,
        },
        {
         name: "Lemon Tea",
         ingredients: "Tea leaves, milk",
         image: "v1695495203/glass-tea-with-flower_wlonrk.webp",
         price: 150,
        },
        {
         name: "Brew Coffee",
         ingredients: "Coffee beans, water",
         image: "v1695448792/2O0A2649_u77blp.webp",
         price: 200,
        },
        {
         name: "Black Tea",
         ingredients: "Tea leaves, water",
         image: "v1695495203/glass-tea-with-flower_wlonrk.webp",
         price: 150,
        },
       ],
      },
      IcedDrinks: {
       name: "Iced Drinks",
       image: "v1695223477/2O0A2680_t8cqwg.webp",
       items: [
        {
         name: "Iced Latte",
         ingredients: "Coffee beans, water",
         image: "v1695574535/various-kinds-iced-coffee_128282-695_dclekk.webp",
         price: 300,
        },
        {
         name: "Iced Mocha",
         ingredients: "Coffee beans, water",
         image: "v1695574535/various-kinds-iced-coffee_128282-695_dclekk.webp",
         price: 300,
        },
        {
         name: "Iced Cappuccino",
         ingredients: "Coffee beans, water",
         image: "v1695574535/various-kinds-iced-coffee_128282-695_dclekk.webp",
         price: 300,
        },
        {
         name: "Iced Tea",
         ingredients: "Tea leaves, milk",
         image: "v1695574535/various-kinds-iced-coffee_128282-695_dclekk.webp",
         price: 300,
        },
        {
         name: "Iced Vanilla Tea",
         ingredients: "Tea leaves, milk",
         image: "v1695574535/various-kinds-iced-coffee_128282-695_dclekk.webp",
         price: 300,
        },
       ],
      },
      Lemonades: {
       name: "Lemonades",
       image: "v1695394554/glass-fresh-lemonade-wooden-table_c2tg42.webp",
       items: [
        {
         name: "Kiwi",
         ingredients: "Kiwi, water",
         image: "v1695223477/2O0A2680_t8cqwg.webp",
         price: 450,
        },
        {
         name: "Strawberry",
         ingredients: "Strawberry, water",
         image: "v1695223477/2O0A2680_t8cqwg.webp",
         price: 450,
        },
        {
         name: "Blueberry",
         ingredients: "Blueberry, water",
         image: "v1695223477/2O0A2680_t8cqwg.webp",
         price: 450,
        },
        {
         name: "Lagoon",
         ingredients: "Lagoon, water",
         image: "v1695223477/2O0A2680_t8cqwg.webp",
         price: 450,
        },
        {
         name: "Classic",
         ingredients: "Lemon, water",
         image: "v1695223477/2O0A2680_t8cqwg.webp",
         price: 450,
        },
       ],
      },
      Milkshakes: {
       name: "Milkshakes",
       image: "v1695394559/thee-delicious-ice-cream-with-straw_1_ohkdua.webp",
       items: [
        {
         name: "Chocolate",
         ingredients: "Chocolate, milk",
         image:
          "v1695574535/stock-photo-strawberry-chocolate-and-vanilla-milkshake-with-whipped-cream-isolated-on-white-background-1026002200_salrdl.webp",
         price: 400,
        },
        {
         name: "Strawberry",
         ingredients: "Strawberry, milk",
         image:
          "v1695574535/stock-photo-strawberry-chocolate-and-vanilla-milkshake-with-whipped-cream-isolated-on-white-background-1026002200_salrdl.webp",
         price: 400,
        },
        {
         name: "Vanilla",
         ingredients: "Vanilla, milk",
         image:
          "v1695574535/stock-photo-strawberry-chocolate-and-vanilla-milkshake-with-whipped-cream-isolated-on-white-background-1026002200_salrdl.webp",
         price: 400,
        },
        {
         name: "Mango",
         ingredients: "Mango, milk",
         image:
          "v1695574535/stock-photo-strawberry-chocolate-and-vanilla-milkshake-with-whipped-cream-isolated-on-white-background-1026002200_salrdl.webp",
         price: 400,
        },
        {
         name: "Coconut",
         ingredients: "Coconut, milk",
         image:
          "v1695574535/stock-photo-strawberry-chocolate-and-vanilla-milkshake-with-whipped-cream-isolated-on-white-background-1026002200_salrdl.webp",
         price: 400,
        },
       ],
      },
      Smoothies: {
       name: "Smoothies",
       image:
        "v1695394553/refreshing-tropical-cocktail-atop-wooden-table-generated-by-ai_rb4rxr.webp",
       items: [
        {
         name: "Mango",
         ingredients: "Mango, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Strawberry",
         ingredients: "Strawberry, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Blueberry",
         ingredients: "Blueberry, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Banana Ginger",
         ingredients: "Banana, ginger, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Tropical",
         ingredients: "Mango, pineapple, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
       ],
      },
      Coladas: {
       name: "Coladas",
       image:
        "v1695394561/bright-umbrella-decorated-cocktails-lime-coconut-milk-with-straw_t1ashp.webp",
       items: [
        {
         name: "Strawberry",
         ingredients: "Strawberry, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Passion",
         ingredients: "Passion, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Pina Colada",
         ingredients: "Pineapple, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
       ],
      },
      Palma: {
       name: "Palma",
       image: "v1695394554/glasses-with-lemonade-table_st4cyt.webp",
       items: [
        {
         name: "Almond Palma",
         ingredients: "Almond, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 300,
        },
        {
         name: "Raspberry Palma",
         ingredients: "Raspberry milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 300,
        },
        {
         name: "Hibiscus Palma",
         ingredients: "Hibiscus, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 300,
        },
       ],
      },
      ClassicMilkshakes: {
       name: "Classic Milkshakes",
       image: "v1695394559/thee-delicious-ice-cream-with-straw_1_ohkdua.webp",
       items: [
        {
         name: "Red Velvet Shake",
         ingredients: "Red velvet, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Oreo Shake",
         ingredients: "Oreo, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Kit Kat Shake",
         ingredients: "Kit Kat, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Malteser Shake",
         ingredients: "Malteser, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "M&M Shake",
         ingredients: "M&M, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Hydrabad Shake",
         ingredients: "Hydrabad, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Espresso Shake",
         ingredients: "Espresso, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Caramel Shake",
         ingredients: "Caramel, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Pistachio Shake",
         ingredients: "Pistachio, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Mint Cool Shake",
         ingredients: "Mint, milk",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 450,
        },
        {
         name: "Tropical Shake",
         ingredients: "Tropical, milk",
         price: 450,
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
        },
       ],
      },
      FreshJuices: {
       name: "Fresh Juices",
       image:
        "v1695399491/front-view-fresh-fruit-cocktails-with-fresh-fruit-slices-ice-cooling-blue-drink-juice-cocktail-fruit-color_j25pnr.webp",
       items: [
        {
         name: "Orange",
         ingredients: "Orange, water",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 400,
        },
        {
         name: "Mango",
         ingredients: "Mango, water",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 330,
        },
        {
         name: "Pineapple & Mint",
         ingredients: "Pineapple, mint, water",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 330,
        },
        {
         name: "Watermelon",
         ingredients: "Watermelon, water",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 330,
        },
        {
         name: "Carrot",
         ingredients: "Carrot, water",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 330,
        },
        {
         name: "Cocktail",
         ingredients: "Orange, mango, pineapple, water",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 350,
        },
        {
         name: "Signature Mango & Passion",
         ingredients: "Mango, passion, water",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 330,
        },
        {
         name: "Signature Orange & Carrot",
         ingredients: "Orange, carrot, water",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 330,
        },
       ],
      },
      SignatureDrinks: {
       name: "Signature Drinks",
       image:
        "v1695399491/front-view-fresh-fruit-cocktails-with-fresh-fruit-slices-ice-cooling-blue-drink-juice-cocktail-fruit-color_j25pnr.webp",
       items: [
        {
         name: "Zaman Special",
         ingredients: "Milk, oats, mix berries, peanut, honey",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 500,
        },
        {
         name: "Avo Spin",
         ingredients: "Avocado, spinach, milk, banana",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 400,
        },
        {
         name: "Green Delight",
         ingredients:
          "Spinach, banana,pineapple, Kale,ginger, cucumber, lemon,chia seeds, lime",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 400,
        },
        {
         name: "Carrot & Pawpaw",
         ingredients: "Carrot, pawpaw, ginger, lemon, honey",
         image:
          "/v1695574535/variety-fruit-juices-fruit-smoothies_434193-3549_hkd3i4.webp",
         price: 400,
        },
        {
         name: "Carribean Breeze",
         ingredients:
          "lime juice, strawberry puree, fresh strawberry , passion puree , mango juice , blueberry",
         image: "v1695331640/2O0A2713_f6iora.webp",
         price: 400,
        },
       ],
      },
     },
    ],
   },
  },
 }
})
