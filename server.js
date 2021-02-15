//Array of 20 Grocery Items
const array = [
    {
        itemname:'Oreo Chocolate',
        itemcategory:'Biscuit',
        itemprices:10,
        itemavailable:true,
        brand:'Oreo'
    },
    {
        itemname:'Balaji Wafers',
        itemcategory:'Wafer',
        itemprices:10,
        itemavailable:true,
        brand:'Balaji'    
    },
    {
        itemname:'Eclairs',
        itemcategory:'Chocolate',
        itemprices:1,
        itemavailable:false,
        brand:'DairyMilk'    
    },
    {
        itemname:'Amul Milk',
        itemcategory:'Milk',
        itemprices:22,
        itemavailable:true,
        brand:'Amul'
    },
    {
        itemname:'Maggie',
        itemcategory:'Noodles',
        itemprices:10,
        itemavailable:true,
        brand:'Nestle'
    },
    {
        itemname:'Limca',
        itemcategory:'Colddrinks',
        itemprices:40,
        itemavailable:true,
        brand:'Pepsi'
    },
    {
        itemname:'Lotte Chocopie',
        itemcategory:'muffins',
        itemprices:20,
        itemavailable:false,
        brand:'Lotte'
      },
      {
        itemname:'Masala Toast',
        itemcategory:'Toast',
        itemprices:50,
        itemavailable:true,
        brand:'Britania'
    },
     {
        itemname:'Candyman Toffee',
        itemcategory:'Candy',
        itemprices:1,
        itemavailable:true,
        brand:'Candyman'
    },
    {
        itemname:'Alpelibe Lollypop',
        itemcategory:'Lollypop',
        itemprices:2,
        itemavailable:false,
        brand:'Alpelibe'
    },
    {
        itemname:'IndiaGate Rice',
        itemcategory:'Rice',
        itemprices:50,
        itemavailable:true,
        brand:'IndiaGate'
    },
    {
        itemname:'Aashirwad Jawar',
        itemcategory:'Jawar',
        itemprices:45,
        itemavailable:false,
        brand:'Aashirwad'
    },
    {
        itemname:'Gateway Sugar',
        itemcategory:'Sugar',
        itemprices:40,
        itemavailable:true,
        brand:'Gateway'

    },
    {
        itemname:'Redlabel Tea',
        itemcategory:'Tea',
        itemprices:320,
        itemavailable:true,
        brand:'Redlabel'

    },
    {
        itemname:'Nescafe Coffee',
        itemcategory:'Coffee',
        itemprices:40,
        itemavailable:false,
        brand:'Gateway'

    },
    {
        itemname:'Monster EnergyDrink',
        itemcategory:'EnergyDrink',
        itemprices:99,
        itemavailable:true,
        brand:'Monster'

    },
    {
        itemname:'Saffola Oil',
        itemcategory:'Oil',
        itemprices:200,
        itemavailable:false,
        brand:'Saffola'

    },
    {
        itemname:'Patanjali Ghee',
        itemcategory:'Ghee',
        itemprices:250,
        itemavailable:true,
        brand:'Patanjali'

    },
    {
        itemname:'Delicious Butter',
        itemcategory:'Butter',
        itemprices:100,
        itemavailable:true,
        brand:'Delicious'

    },
    {
        itemname:'Lijjat Papad',
        itemcategory:'Papad',
        itemprices:80,
        itemavailable:false,
        brand:'lijjat'

    }
]
//Find Brandname using find function
/*
let finder = (brand) => {
    return array.find(function(value){
          return value.brand === brand;
    });
}
console.log(finder('Oreo'));
*/

//Find Product >150

let filtered = (itemprices) => {
    return array.filter(function(value) {
        return value.itemprices === 150 && value.itemprices > 150; 

    });
};
console.log(filtered());///No Output
