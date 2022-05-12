import { useEffect, useState } from "react"
import "./SearchBar.scss"

export default function SearchBar({ value, onValueChanged }) {
    // A text input field that on update gives a value to the creator.
    // should be underlined and identifiable as a searchbar.

  return (
    <div className="searchbar-container">
        <input
            type="text"
            id="searchbar"
            placeholder="Search Here..."
            name="search"
            onChange={(e) => onValueChanged(e.target.value)}
        />
    </div>
  )
}
