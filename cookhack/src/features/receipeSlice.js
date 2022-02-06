import { createSlice } from "@reduxjs/toolkit";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/celery_juice.jpg";
import image4 from "../assets/spinach_pasta.jpg";
import image5 from "../assets/chickenpizza.jpg";
import image6 from "../assets/garlic_bread.jpg";
import image7 from "../assets/tomato_soup.jpg";
import image8 from "../assets/greek_salad.jpg";
import image9 from "../assets/arepas.jpg";
import image10 from "../assets/gulab_jamun.jpg";
import image11 from "../assets/eggplant.jpg";
import image12 from "../assets/macaroni.jpg";

import data from "../App";
import dishModal from "../components/dishModal";
const initialState = {
  receipeDb: [
    {
      name: "Celery Juice",
      image: image3,
      description: "Here’s an easy Celery Juice Recipe that is nourishing, fresh, and delicious, with directions for making it in a juicer or a blender. Fresh celery juice is a nourishing beverage that you can drink in the morning or at any time of day.",
    },
    {
      name: "Spinach Pasta",
      image: image4,
      description: "It’s a winner because while the pasta is cooking, you just need to saute’ the fresh spinach in olive oil and plenty of fragrant garlic. And if the amount of spinach looks overwhelming, I assure you it will quickly wilt in matter of minutes. Then add cream cheese, parmesan and a generous grating of nutmeg, which works so well with both spinach sauce and parmesan. The result is savory, creamy, with hints of nutmeg, and delicious bright spinach. Toss pasta with the sauce, serve with grated parmesan cheese, black pepper and DEVOUR!",
    },
    {
      name: "Chicken Pizza",
      image: image5,
      description: "Here’s an easy Celery Juice Recipe that is nourishing, fresh, and delicious, with directions for making it in a juicer or a blender. Fresh celery juice is a nourishing beverage that you can drink in the morning or at any time of day.",
    },
    {
      name: "Garlic Bread",
      image: image6,
      description: "Garlic Bread",
    },
    {
      name: "Spicy Tomato Soup",
      image: image7,
      description: "Spicy Tomato",
    },
    {
      name: "Greek Salad",
      image: image8,
      description: "Greek Salad",
    },
    {
      name: "Gulabjamun",
      image: image10,
      description: "Spicy Roasted Tomato Sauce",
    },
    {
      name: "Arepas",
      image: image9,
      description: "Arepas",
    },
    {
      name: "Spiced Eggplant Indian Style",
      image: image11,
      description: "Spiced Eggplant Indian Style",
    },
    {
      name: "Indian Style Macoroni",
      image: image12,
      description: "Indian Style Macoroni",
    },
  ],
  menu: [
    {
      name: "Celery Juice",
      image: image3,
    },
    {
      name: "Spinach Pasta",
      image: image4,
    },
    {
      name: "Chicken Pizza",
      image: image5,
    },
    {
      name: "Blueberry Smoothies",
      image: image6,
    },
  ],
  cookingReceipe: {
    name: "Celery Juice",
    image: image3,
    instructions: "1. Wash the celeries with tap water 2. Blend/Grind it in the blender or mixer 3. Strain it 4. Drink it without adding any water",
  },
  inventory: ["Celery", "Water","Strawberries"],
  ingredients: ["Celery","Water","Blueberries","Banana","Milk","Coffee","Sugar","Wheat","Pasta","Spinach"],
  cookingReceipe: { ingredients: ["Celery","Water"], steps: ["1. Wash the celeries with tap water", "2. Blend/Grind it in the blender or mixer", "3. Strain it", "4. Drink it without adding any water"] },
};

const receipeSlice = createSlice({
  name: "receipe",
  initialState,

  reducers: {
    setReceipeDb: (state, action) => {
      state.receipeDb = action.payload;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setCookingReceipe: (state, action) => {
      console.log(action.payload);
      state.cookingReceipe = action.payload;
    },
    setInventory: (state, action) => {
      state.inventory = action.payload;
    },
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    setCookingReceipe: (state, action) => {
      state.cookingReceipe = action.payload;
    },
  },
});

export const { setReceipeDb, setMenu, setCookingReceipe, setInventory, setIngredients } =
  receipeSlice.actions;

export const selectReceipeDb = (state) => state.receipe.receipeDb;
export const selectMenu = (state) => state.receipe.menu;
export const selectCookingReceipe = (state) => state.receipe.cookingReceipe;
export const selectInventory = (state) => state.receipe.inventory;
export const selectIngredients = (state) => state.receipe.ingredients;
export default receipeSlice.reducer;
