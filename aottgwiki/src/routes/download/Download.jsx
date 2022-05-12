import "./Download.scss"
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/searchbar/SearchBar";
import { useEffect, useState } from "react";

const MODS = [
  "RRC",
  "TLW",
  "RC",
  "Anarchy",
  "Gaurdian",
  "Exploration Mod",
  "idfk",
  "idfk2",
  "idfk3",
  "idfk4",
  "idfk5"
]


export default function Download() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
        <Navbar tabOpen="Download"/>
        <div className="mod-section">
          <h1>Public Mods</h1>
          <SearchBar value={searchValue} onValueChanged={setSearchValue} />
          <h2>Searched for: {searchValue}</h2>
          <div className="mods-container">
            {
              MODS.map((e) => (
                e.toLowerCase().includes(searchValue.toLowerCase()) && 
                <div className="mod-container">
                  <img src="assets/Logo.png" alt={"image for mod " + e} />
                  <h1>{e}</h1>
                  <span>See More...</span>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}
