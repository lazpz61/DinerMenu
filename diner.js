const mainMenu = {
    sirloinSteakTips: 13.39,     
    butterMilkCrispyChicken: 11.99,
    grilledTalapia: 12.99,  
  };
  
  const mainMenuComment = {
      "Sirloin Steak Tips": "Incredible choice you've made there",    
      "Butter Milk Crispy Chicken": "Your going to really like this plate",
      "Grilled Talapia": "Excellent choice, you have good taste",
  }
  
  
  const sideMenu = {
      hashBrowns: 3.39,
      crispyBreakfastPotatoes: 3.39,
      crispyPotatoPancake: 3.79,
  };
  
  const sideMenuComment = {
      "Hash Browns": "the combination with this is awesome",
      "Crispy Breakfast Potatoes": "good choice there",
      "crispy Potato Pancakes": "these are such a delicacy here",
  };
  
  
  alert("Welcome to Laz's Diner, take a look at our Menu\n")
  
  function welcomeToLazDiner(food){
  for (const [key,value] of Object.entries(food)) {
      result = `${key} are $${value}`;
      console.log(result)
   }
  }
  
  console.log(welcomeToLazDiner(sideMenu));
  console.log(welcomeToLazDiner(mainMenu));
  
  alert("\nWhat will you be having today?")
  
  // function with prompts and conditionals
  
  