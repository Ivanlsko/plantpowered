const recipes = [
  {
    id: 1,
    name: 'Quinoa Salad with Roasted Vegetables',
    description_short: 'A healthy and colorful salad featuring quinoa and assorted roasted vegetables.',
    tutorial:
      '1. Cook quinoa according to package instructions. \n2. Toss chopped vegetables with olive oil, salt, and pepper. Roast in the oven until tender. \n3. Mix quinoa and roasted vegetables. \n4. Drizzle with balsamic glaze and serve chilled.',
    image_link: 'https://example.com/quinoa_salad.jpg',
    main_ingredient: 'Quinoa',
    ingredients: ['Quinoa', 'Assorted vegetables (bell peppers, zucchini, cherry tomatoes)', 'Olive oil', 'Balsamic glaze', 'Salt', 'Pepper'],
    difficulty: 'Easy',
    time: '30 minutes',
  },
  {
    id: 2,
    name: 'Vegetarian Chili',
    description_short: 'Hearty and flavorful chili made with beans, tomatoes, and spices.',
    tutorial:
      '1. Heat olive oil in a pot. Add chopped onions, garlic, and bell peppers. Cook until softened. \n2. Stir in canned tomatoes, beans, vegetable broth, chili powder, cumin, and paprika. \n3. Simmer for 20-30 minutes. \n4. Serve hot with optional toppings like avocado, cilantro, and sour cream.',
    image_link: 'https://example.com/vegetarian_chili.jpg',
    main_ingredient: 'Beans',
    ingredients: ['Beans (kidney beans, black beans)', 'Canned tomatoes', 'Onion', 'Garlic', 'Bell peppers', 'Vegetable broth', 'Chili powder', 'Cumin', 'Paprika', 'Salt', 'Pepper'],
    difficulty: 'Moderate',
    time: '45 minutes',
  },
  {
    id: 3,
    name: 'Spinach and Feta Stuffed Portobello Mushrooms',
    description_short: 'Juicy portobello mushrooms stuffed with spinach, feta cheese, and breadcrumbs.',
    tutorial:
      '1. Preheat oven to 375°F (190°C). \n2. Remove stems from portobello mushrooms and scrape out the gills. \n3. In a bowl, mix chopped spinach, crumbled feta cheese, breadcrumbs, garlic, and olive oil. \n4. Stuff the mushroom caps with the mixture. \n5. Bake for 20-25 minutes until mushrooms are tender and filling is golden brown.',
    image_link: 'https://example.com/stuffed_mushrooms.jpg',
    main_ingredient: 'Portobello mushrooms',
    ingredients: ['Portobello mushrooms', 'Spinach', 'Feta cheese', 'Breadcrumbs', 'Garlic', 'Olive oil', 'Salt', 'Pepper'],
    difficulty: 'Intermediate',
    time: '35 minutes',
  },
  {
    id: 4,
    name: 'Vegetable Stir-Fry with Tofu',
    description_short: 'Quick and easy stir-fry loaded with colorful vegetables and crispy tofu.',
    tutorial:
      '1. Press tofu to remove excess moisture, then cut into cubes. \n2. Heat oil in a pan and fry tofu until golden brown. Remove and set aside. \n3. In the same pan, stir-fry chopped vegetables like bell peppers, broccoli, carrots, and snow peas. \n4. Add tofu back to the pan, along with soy sauce, garlic, ginger, and a sprinkle of sesame seeds. \n5. Serve hot over rice or noodles.',
    image_link: 'https://example.com/vegetable_stir_fry.jpg',
    main_ingredient: 'Tofu',
    ingredients: ['Firm tofu', 'Assorted vegetables (bell peppers, broccoli, carrots, snow peas)', 'Soy sauce', 'Garlic', 'Ginger', 'Sesame seeds', 'Oil', 'Salt', 'Pepper'],
    difficulty: 'Easy',
    time: '25 minutes',
  },
  {
    id: 5,
    name: 'Caprese Stuffed Avocado',
    description_short: 'Creamy avocados filled with juicy tomatoes, fresh mozzarella, and basil.',
    tutorial:
      '1. Slice avocados in half and remove the pit. \n2. Scoop out some flesh to create space for the filling. \n3. Dice tomatoes and mozzarella. Chop fresh basil leaves. \n4. Mix tomatoes, mozzarella, and basil with olive oil, balsamic vinegar, salt, and pepper. \n5. Fill avocado halves with the mixture. \n6. Serve immediately as a light appetizer or side dish.',
    image_link: 'https://example.com/caprese_avocado.jpg',
    main_ingredient: 'Avocado',
    ingredients: ['Avocado', 'Tomatoes', 'Fresh mozzarella', 'Fresh basil', 'Olive oil', 'Balsamic vinegar', 'Salt', 'Pepper'],
    difficulty: 'Easy',
    time: '15 minutes',
  },
  {
    id: 6,
    name: 'Butternut Squash Soup',
    description_short: 'Velvety smooth soup made with roasted butternut squash, onions, and warming spices.',
    tutorial:
      '1. Preheat oven to 400°F (200°C). \n2. Peel and chop butternut squash and onions. Toss with olive oil, salt, and pepper. Roast until tender. \n3. Transfer roasted vegetables to a blender. Add vegetable broth, nutmeg, and cinnamon. Blend until smooth. \n4. Pour mixture into a pot and simmer for a few minutes. Adjust seasoning if needed. \n5. Serve hot with a dollop of Greek yogurt and a sprinkle of chopped parsley.',
    image_link: 'https://example.com/butternut_soup.jpg',
    main_ingredient: 'Butternut squash',
    ingredients: ['Butternut squash', 'Onion', 'Vegetable broth', 'Nutmeg', 'Cinnamon', 'Olive oil', 'Greek yogurt', 'Parsley', 'Salt', 'Pepper'],
    difficulty: 'Moderate',
    time: '50 minutes',
  },
  {
    id: 7,
    name: 'Mushroom Risotto',
    description_short: 'Creamy risotto packed with earthy mushrooms and flavored with white wine and Parmesan cheese.',
    tutorial:
      '1. Heat olive oil in a large pan. Add chopped onions and garlic, cook until translucent. \n2. Add Arborio rice and cook for a few minutes until lightly toasted. \n3. Deglaze the pan with white wine, stirring until absorbed. \n4. Gradually add vegetable broth, stirring constantly until rice is creamy and tender. \n5. Stir in sautéed mushrooms, Parmesan cheese, and butter. \n6. Serve hot with a sprinkle of fresh parsley.',
    image_link: 'https://example.com/mushroom_risotto.jpg',
    main_ingredient: 'Arborio rice',
    ingredients: ['Arborio rice', 'Mushrooms', 'Onion', 'Garlic', 'Vegetable broth', 'White wine', 'Parmesan cheese', 'Butter', 'Olive oil', 'Parsley', 'Salt', 'Pepper'],
    difficulty: 'Intermediate',
    time: '40 minutes',
  },
  {
    id: 8,
    name: 'Vegetable Lasagna',
    description_short: 'Layered pasta dish filled with a medley of colorful vegetables and creamy béchamel sauce.',
    tutorial:
      '1. Cook lasagna noodles according to package instructions. \n2. Sauté chopped vegetables like bell peppers, zucchini, and spinach with garlic and olive oil. \n3. Prepare béchamel sauce by melting butter, adding flour, then gradually whisking in milk until thickened. \n4. Assemble the lasagna by layering noodles, vegetables, marinara sauce, and béchamel sauce. Repeat. \n5. Top with shredded mozzarella cheese. \n6. Bake in the oven until bubbly and golden brown. \n7. Let it cool for a few minutes before serving.',
    image_link: 'https://example.com/vegetable_lasagna.jpg',
    main_ingredient: 'Lasagna noodles',
    ingredients: ['Lasagna noodles', 'Assorted vegetables (bell peppers, zucchini, spinach)', 'Garlic', 'Olive oil', 'Marinara sauce', 'Mozzarella cheese', 'Butter', 'Flour', 'Milk', 'Salt', 'Pepper'],
    difficulty: 'Intermediate',
    time: '60 minutes',
  },
  {
    id: 9,
    name: 'Chickpea and Sweet Potato Buddha Bowl',
    description_short: 'Nourishing bowl filled with roasted sweet potatoes, seasoned chickpeas, and fresh greens.',
    tutorial:
      '1. Preheat oven to 425°F (220°C). \n2. Toss diced sweet potatoes with olive oil, cumin, and paprika. Roast until tender. \n3. Drain and rinse chickpeas, then toss with olive oil, garlic powder, and chili powder. Roast until crispy. \n4. Assemble bowls with cooked quinoa, roasted sweet potatoes, seasoned chickpeas, avocado slices, and mixed greens. \n5. Drizzle with tahini dressing and sprinkle with sesame seeds. \n6. Serve immediately.',
    image_link: 'https://example.com/buddha_bowl.jpg',
    main_ingredient: 'Chickpeas',
    ingredients: ['Sweet potatoes', 'Chickpeas', 'Quinoa', 'Avocado', 'Mixed greens', 'Olive oil', 'Cumin', 'Paprika', 'Garlic powder', 'Chili powder', 'Tahini', 'Sesame seeds', 'Salt', 'Pepper'],
    difficulty: 'Easy',
    time: '40 minutes',
  },
  {
    id: 10,
    name: 'Eggplant Parmesan',
    description_short: 'Classic Italian dish featuring breaded and baked eggplant slices topped with marinara sauce and melted cheese.',
    tutorial:
      '1. Preheat oven to 375°F (190°C). \n2. Slice eggplant into rounds and salt generously. Let sit for 30 minutes, then rinse and pat dry. \n3. Dip eggplant slices in beaten egg, then coat with breadcrumbs mixed with Parmesan cheese and Italian seasoning. \n4. Arrange breaded eggplant slices on a baking sheet and bake until golden brown and crispy. \n5. Spread marinara sauce on top of each slice, then sprinkle with mozzarella cheese. \n6. Bake until cheese is melted and bubbly. \n7. Garnish with fresh basil before serving.',
    image_link: 'https://example.com/eggplant_parmesan.jpg',
    main_ingredient: 'Eggplant',
    ingredients: ['Eggplant', 'Breadcrumbs', 'Parmesan cheese', 'Eggs', 'Marinara sauce', 'Mozzarella cheese', 'Italian seasoning', 'Fresh basil', 'Salt', 'Pepper'],
    difficulty: 'Intermediate',
    time: '50 minutes',
  },
];

export default recipes;
