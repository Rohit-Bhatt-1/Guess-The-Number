import ThemeFormat from "./ThemeFormat";

let theme= new ThemeFormat();
let temp:Object;
const path = "./Theme.json";
const ThemeManager = () => {
  try {
    temp = require(path);
    let actualKeys = Object.keys(temp);
    let expectedKeys = Object.keys(theme);
    actualKeys.forEach((key)=>{
      if(expectedKeys.includes(key))
      {
        theme[key]=temp[key];
      }
    })
  } 
  catch (err)
  {
    console.log("Error while loading theme:",err);
  }
};
ThemeManager();
export default theme;
