const menus = {
    entrees: {
      hamburger: {
        name: "Hamburger",
        price: "3.00"
      },
      "hot dog": {
        name: "Hot Dog",
        price: "2.00"
      },
      pizza: {
        name: "Pizza",
        price: "2.50"
      }
    },
  sides: {
      fries: {
        name: "Fries",
        price: "1.00"
      },
      "cheese fries": {
        name: "Cheese Fries",
        price: "2.00"
      },
      chips: {
        name: "Chips",
        price: ".75"
      }
    }
  }
  let bill = 0
  function menuDisplay(menu) {
    Object.values(menu).forEach(menuItem => console.log(`${menuItem.name} => ${menuItem.price}`))
  }
  function menuChoice(menu, question) {
    const userChoice = prompt(question)
  Object.values(menu).forEach(menuItem => {
      if (userChoice.toLowerCase() === menuItem.name.toLowerCase()) {
        console.log(`Great! That will be ${menuItem.price}`)
        bill += parseFloat(menuItem.price)
      }
    })
  }
  menuDisplay(menus.entrees)
  menuChoice(menus.entrees, "What entree would you like today?")
  menuDisplay(menus.sides)
  menuChoice(menus.sides, "What first side would you like today?")
  menuChoice(menus.sides, "What second side would you like today?")
  console.log(`Your bill today is $${bill.toFixed(2)}. Thank you for coming in!`)