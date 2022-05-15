import { useEffect, useState } from "react"
import "./SearchBar.scss"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function SearchBar({ value, onValueChanged }) {
    // A text input field that on update gives a value to the creator.
    // should be underlined and identifiable as a searchbar.

  return (
    <div className="input-group mb-3 searchbar-container">
        <input
        type="text"
        id="searchbar"
        placeholder="Search Here..."
        name="search"
        onChange={(e) => onValueChanged(e.target.value)}
        className="form-control"
        aria-label="search for mod by name"
        aria-describedby="inputGroup-sizing-default" />
    </div>
  )
}
