import "./Download.scss"
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/searchbar/SearchBar";
import { useEffect, useState } from "react";

const MODS = [
  "RRC",
  "TLW",
  "RC",
  "Gaurdian",
  "Anarchy",
  "Expedition Mod"
]


export default function Download() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
        <Navbar tabOpen="Download"/>
        <div className="mod-section">
          <h1>Public Mods</h1>
          <SearchBar value={searchValue} onValueChanged={setSearchValue} />
          <div className="mods-container">
            {
              MODS.filter((e) => {
                return e.toLowerCase().indexOf(searchValue.toLowerCase()) != -1;
              }).sort((a, b) => {
                let aIndex = a.toLowerCase().indexOf(searchValue.toLowerCase());
                let bIndex = b.toLowerCase().indexOf(searchValue.toLowerCase());
                return aIndex - bIndex;
              }).map((e) => (
                e.toLowerCase().includes(searchValue.toLowerCase()) && 
                <div className="mod-container" key={e}>
                  <div className="image-circle">
                    <img src="assets/Logo.png" alt={"image for mod " + e} />
                  </div>
                  <h1>{e}</h1>
                  <div className="seemore-container">
                    <span>See More...</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}
