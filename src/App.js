import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import PictureContainer from "./Components/PictureContainer";
import FetchImg from "./Components/FetchImg";

function App() {
  const [img, changeImg] = useState(
    require("./Components/images/Default_Img.jpeg")
  );
  const [imgFilter, changeFilter] = useState("none");
  const [count, handleCount] = useState(0);
  const [inputVal, handleInput] = useState("");
  const [modetext , handleModeText] = useState("Dark Mode")
  const DefaulTheme = {
    backgroundColor: " #f4f4f4",
    backgroundImage:
      "linear-gradient(#ac52ff 0.8px, transparent 0.8px), linear-gradient(to right, #ac52ff 0.8px, #f4f4f4 0.8px)",
    backgroundSize: "16px 16px",
  };
  const darkModeTheme = {
    backgroundColor: "#191A19",
    backgroundImage:
      "linear-gradient(#1E5128 0.9px, transparent 0.9px), linear-gradient(to right, #1E5128 1px, #191A19 1px)",
    backgroundSize: "16px 16px",
  };
  const [backChange, handleBackground] = useState(DefaulTheme);
  const handleFilter = () => {
    const filterArr = [
      "blur",
      "brightness",
      "contrast",
      "grayscale",
      "invert",
      "saturate",
      "sepia",
    ];
    changeFilter(filterArr[count]);
    handleCount(count > filterArr.length - 1 ? 0 : count + 1);
  };

  const takeInput = (e) => {
    handleInput(e.target.value);
  };

  const userDefinedInput = async () => {
    if(inputVal !==""){
      await fetch(inputVal)
        .then((res) => res.blob())
        .then((blobData) => {
          const imgUrl = URL.createObjectURL(blobData);
          changeImg(imgUrl);
        })
        .catch(err=>{

          console.log(err)
        
        })

    }
    else{
      changeImg(require("./Components/images/Default_Img.jpeg"));   
     }

  };

  const toggleTheme = (e) => {
    if( e.target.checked === true){
      handleBackground(darkModeTheme)
      handleModeText("Light Mode")
    }
    else{
          handleBackground(DefaulTheme);
      handleModeText("Dark Mode");

    }

  };

  return (
    <>
      <div
        className="maincontainer w-full h-full flex flex-col items-center"
        style={backChange}
      >
        <Navbar
          LogoName="Filtro"
          toggleBtn={toggleTheme}
          themeModeText={modetext}
        />
        <PictureContainer
          image={img}
          filter={imgFilter}
          BtnName="Add Filter"
          btnClick={handleFilter}
        />
        <FetchImg
          input={inputVal}
          changeVal={takeInput}
          getImg={userDefinedInput}
        />
      </div>
    </>
  );
}

export default App;
