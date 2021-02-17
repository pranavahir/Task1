//Array of 20 Grocery Items
const grocery = [
    {
        itemname:'Oreo Chocolate',
        itemcategory:'Biscuit',
        itemprices:10,
        itemavailable:true,
        brand:'Oreo',
        homeappliance:false
    },
    {
        itemname:'Balaji Wafers',
        itemcategory:'Wafer',
        itemprices:10,
        itemavailable:true,
        brand:'Balaji',
        homeappliance:false    
    },
    {
        itemname:'Eclairs',
        itemcategory:'Chocolate',
        itemprices:1,
        itemavailable:false,
        brand:'DairyMilk',
        homeappliance:false    
    },
    {
        itemname:'Amul Milk',
        itemcategory:'Milk',
        itemprices:22,
        itemavailable:true,
        brand:'Amul',
        homeappliance:false
    },
    {
        itemname:'Maggie',
        itemcategory:'Noodles',
        itemprices:10,
        itemavailable:true,
        brand:'Nestle',
        homeappliance:false
    },
    {
        itemname:'Limca',
        itemcategory:'Colddrinks',
        itemprices:40,
        itemavailable:true,
        brand:'Pepsi',
        homeappliance:false
    },
    {
        itemname:'Lotte Chocopie',
        itemcategory:'muffins',
        itemprices:20,
        itemavailable:false,
        brand:'Lotte',
        homeappliance:false
      },
      {
        itemname:'Top Almond',
        itemcategory:'Almond',
        itemprices:1100,
        itemavailable:true,
        brand:'Britania',
        homeappliance:false
    },
     {
        itemname:'Candyman Toffee',
        itemcategory:'Candy',
        itemprices:1,
        itemavailable:true,
        brand:'Candyman',
        homeappliance:false
    },
    {
        itemname:'A1 Cashew',
        itemcategory:'Cashew',
        itemprices:1000,
        itemavailable:true,
        brand:'A1',
        homeappliance:false
    },
    {
        itemname:'IndiaGate Rice',
        itemcategory:'Rice',
        itemprices:50,
        itemavailable:true,
        brand:'IndiaGate',
        homeappliance:false
    },
    {
        itemname:'Aashirwad Jawar',
        itemcategory:'Jawar',
        itemprices:45,
        itemavailable:false,
        brand:'Aashirwad',
        homeappliance:false
    },
    {
        itemname:'Gateway Sugar',
        itemcategory:'Sugar',
        itemprices:40,
        itemavailable:true,
        brand:'Gateway',
        homeappliance:false
    },
    {
        itemname:'Redlabel Tea',
        itemcategory:'Tea',
        itemprices:320,
        itemavailable:true,
        brand:'Redlabel',
        homeappliance:false
    },
    {
        itemname:'Nescafe Coffee',
        itemcategory:'Coffee',
        itemprices:500,
        itemavailable:false,
        brand:'Gateway',
        homeappliance:false
    },
    {
        itemname:'Monster EnergyDrink',
        itemcategory:'EnergyDrink',
        itemprices:99,
        itemavailable:true,
        brand:'Monster',
        homeappliance:false
    },
    {
        itemname:'Saffola Oil',
        itemcategory:'Oil',
        itemprices:240,
        itemavailable:false,
        brand:'Saffola',
        homeappliance:false
    },
    {
        itemname:'Patanjali Ghee',
        itemcategory:'Ghee',
        itemprices:250,
        itemavailable:true,
        brand:'Patanjali',
        homeappliance:false
    },
    {
        itemname:'Delicious Butter',
        itemcategory:'Butter',
        itemprices:100,
        itemavailable:true,
        brand:'Delicious',
        homeappliance:false
    },
    {
        itemname:'Lijjat Papad',
        itemcategory:'Papad',
        itemprices:80,
        itemavailable:false,
        brand:'lijjat',
        homeappliance:false
    },
    {
       itemname:'LG TV',
       itemcategory:'TV',
       itemprices:23000,
       itemavailable:true,
       brand:'LG',
       homeappliance:true
    },
    {
        itemname:'Voltas AC',
        itemcategory:'AC',
        itemprices:30000,
        itemavailable:true,
        brand:'Voltas',
        homeappliance:true 
    },
    {
       itemname:'Samsung Refridgerator',
       itemcategory:'Refridgerator',
       itemprices:35000,
       itemavailable:false,
       brand:'Samsung',
       homeappliance:true
    },
    {
       itemname:'Bosch Washing Machine',
       itemcategory:'Washing Machine',
       itemprices:37000,
       itemavailable:true,
       brand:'Bosch',
       homeappliance:true
    }
]
//Find Brandname using find function
/*
let finder = (brand) => {
    return grocery.find(function(value){
          return value.brand === brand;
    });
}
console.log(finder('Oreo'));
*/


//Find Product >150
/*
let filtered = () => {
   return grocery.filter(function(value){
       return value.itemprices > 150;
   })
}
console.log(filtered());
*/


//Find Product > 200 and available
/*
let avail = () => {
    return grocery.filter(function(val) {
        return val.itemprices > 200 && val.itemavailable === true;
    });
};
console.log(avail());
*/


//Find Product <=500 and Not Available
/*
let notavail = () => {
    return grocery.filter(function(val) {
        return val.itemprices <= 500 && val.itemavailable === false;
    });
};

console.log(notavail());
*/


//Get all the Product in the Stock

/*const instock = () => {
    return grocery.filter(function(val) {
        return val.itemavailable = true;
    });
};
console.log(instock());
*/


//Get all the Product in a list
/*
const list = [];
return grocery.forEach(function(obj) {
    list.push(obj.itemcategory);
    console.log(list);
})
*/


//Get All The Produtcs of Home Appliances

const appl = () => {
    return grocery.filter(function(val) {
        return val.homeappliance === true;
    })
}
console.log(appl());






