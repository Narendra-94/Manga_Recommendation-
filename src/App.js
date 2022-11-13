import React from "react";
import "./styles.css";
import { useState } from "react";

const mangaList = {
  SHONEN: [
    { name: "Naruto", rating: "🍎🍎🍎🍎🍎 5/5" },
    { name: "My Hero Academia", rating: "🍎🍎🍎🍎 4/5" },
    { name: "Dragon Ball Volume 1", rating: "v🍎🍎🍎 4/5" }
  ],

  SEINEN: [
    {
      name: "Vagabond",
      rating: "🍎🍎🍎🍎🍎 5/5"
    },
    { name: "Blame!", rating: "🍎🍎🍎 3/5" },
    { name: "Monster", rating: "🍎🍎🍎🍎 4/5" }
  ],
  JOSEI: [
    { name: "Midnight Secretary", rating: "🍎🍎🍎🍎 5/5" },
    { name: "Let's Go Straight Ahead! (2003)", rating: "🍎🍎🍎🍎 4/5" },
    { name: "The Gokusen (2004)", rating: "🍎🍎🍎🍎 4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("SEINEN");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> MANGA 📚📚 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Manga. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(mangaList).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.2rem",
              padding: "1rem 1.5rem",
              border: "1px solid black",
              borderBlockColor: "black",
              margin: "1rem 0.3rem",
              marginBottom: "1.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {mangaList[selectedGenre].map((manga) => (
            <li
              key={manga.name}
              style={{
                textAlign: "left",
                listStyle: "none",
                padding: "1rem 1rem",
                border: "1px solid black",
                color: "solid black",
                width: "70%",
                margin: "1rem 0rem",
                marginBottom: "0.5rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {manga.name} </div>
              <div style={{ fontSize: "smaller" }}> {manga.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
