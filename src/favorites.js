import React, { useEffect, useState } from "react";
import CardComp from "./card";

function Favorites() {
  let stringedFavorites = localStorage.getItem("favorites");
  let favorites = JSON.parse(stringedFavorites);
  let [favoritesState, setFavoritesState] = useState(favorites);

  function deleteFavorites(index) {
    let favoritesCopy = [...favorites];
    favoritesCopy.splice(index, 1);

    setFavoritesState(favoritesCopy);

    let storedData = JSON.stringify(favoritesCopy);
    localStorage.setItem("favorites", storedData);
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {favoritesState.length !== 0 ? (
          favoritesState.map(function (item, index) {
            return (
              <>
                <CardComp
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  FavoriteView={false}
                  index={index}
                  handleDelete={() => {
                    deleteFavorites(index);
                  }}
                />
              </>
            );
          })
        ) : (
          <h1>No favorites found!</h1>
        )}
      </div>
    </>
  );
}

export default Favorites;
