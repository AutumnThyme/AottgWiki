import "./Download.scss"
import CustomNavbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/searchbar/SearchBar";
import { useState } from "react";
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <CustomNavbar tabOpen="Download"/>
        <div className="mod-section">
          <Container>
            <h1>Public Mods</h1>
            <SearchBar value={searchValue} onValueChanged={setSearchValue} />
            <Container>
              {
                MODS.filter((e) => {
                  return e.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
                }).sort((a, b) => {
                  let aIndex = a.toLowerCase().indexOf(searchValue.toLowerCase());
                  let bIndex = b.toLowerCase().indexOf(searchValue.toLowerCase());
                  return aIndex - bIndex;
                }).map((e) => (
                  e.toLowerCase().includes(searchValue.toLowerCase()) &&
                  <div className="card mb-3 custom-card" key={e}>
                    <div className="row g-0">
                      <div className="col-md-4">
                          <img className="img-fluid custom-circle" src="assets/Logo.png" alt={"image for mod " + e} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h1 className="card-title w-75 p-3">{e}</h1>
                          <div className="bottom-align">
                            <p>See More...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Container>
          </Container>
        </div>
    </div>
  )
}
