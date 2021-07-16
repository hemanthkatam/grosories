import "./styles.css";
import { GrosoryBase } from "./components/GrosoryBase";

var car = [
  {
    manufacturer: "Toyota",
    car: "Fortuner",
    year: 2021
  },
  {
    manufacturer: "Hyundai",
    car: "I10",
    year: 2021
  },
  {
    manufacturer: "Toyota",
    car: "Innova",
    year: 2021
  },
  {
    manufacturer: "Hyundai",
    car: "I20",
    year: 2020
  },
  {
    manufacturer: "Toyota",
    car: "Glanza",
    year: 2020
  }
];

// car.forEach((car) => {
//   if (modifiedObj[car.year]) {
//     console.log("m", modifiedObj[car.year]);
//     const hyndai = modifiedObj[car.year][car.manufacturer];
//     if (hyndai) {
//       hyndai.push(car.car);
//     }
//     // modifiedObj[car.year].[car.manufacturer].push(car.car)
//   } else {
//     modifiedObj[car.year][car.manufacturer] = [];
//     console.log("m", modifiedObj[car.year]);
//   }
//   // modifiedObj[car.year.toString()] = { [car.manufacturer]: [car.car] };
// });

// question 4
// {
//   2021:{
//       Toyota:['Fortuner','Innova'],
//       Hyundai: ['I10']
//   }
//   2020:{
//       Toyota:['Glanza'],
//       Hyundai:['I20']
//   }
// }

let obj = {};
car.forEach((ca) => {
  if (!obj.hasOwnProperty(ca.year)) {
    obj[ca.year] = {};
  }
});

for (let year in obj) {
  const filterData = car.filter((ca) => ca.year.toString() === year);
  filterData.forEach((ca) => {
    if (obj[year].hasOwnProperty(ca.manufacturer)) {
      obj[year][ca.manufacturer].push(ca.car);
    } else {
      obj[year][ca.manufacturer] = [ca.car];
    }
  });
}

console.log(obj);
console.log("filtered code", obj);
export default function App() {
  return (
    <div className="App">
      <GrosoryBase />
    </div>
  );
}
