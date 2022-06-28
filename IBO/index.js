const listOfProducts = [
    {
      productName: "TV",
      quantity: 10,
      description: "television",
    },
    {
      productName: "AC",
      quantity: 5,
      description: "air conditioner",
    },
    {
      productName: "TV",
      quantity: 10,
      description: "television",
    },
    {
      productName: "AC",
      quantity: 5,
      description: "air conditioner",
    },
    {
      productName: "FAN",
      quantity: 10,
      description: "Ceiling Fan",
    },
  ];
  
  function getUniqueProductCount(listOfProcuts) {
    let obj = {};
    for (let i = 0; i < listOfProcuts.length; i++) {
      if (listOfProcuts[i].productName in obj) {
        obj[listOfProcuts[i].productName]++;
      } else {
        obj[listOfProcuts[i].productName] = 1;
      }
    }
    // console.log(obj)
    return obj;
  }
  
  console.log(getUniqueProductCount(listOfProducts));
  
  function check(arr, list) {
    //Check is list item already present or not
    if (arr.length === 0) {
      return true;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].productName === list.productName) {
          return false;
        }
      }
      return true;
    }
  }
  
  function getUniquePrducts(listOfProducts) {
    let arr = [];
    for (let i = 0; i < listOfProducts.length; i++) {
      // if not present then push into arr
      if (check(arr, listOfProducts[i])) {
        arr.push(listOfProducts[i]);
      } else {
        for (let j = 0; j < arr.length; j++) {
          if (listOfProducts[i].productName === arr[j].productName) {
            arr[j].quantity += listOfProducts[i].quantity;
          }
        }
      }
    }
    // console.log(arr)
    return arr;
  }
  console.log(getUniquePrducts(listOfProducts));