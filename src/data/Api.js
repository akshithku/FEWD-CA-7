/* eslint-disable array-callback-return */
/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from "react";
import "./Api.css";
function App() {
  const [user, setUser] = useState([]);
  const [Value, Setvalue] = useState("");
  const handlechange = (elt) => {
    Setvalue(elt.target.value);
  };

  useEffect(() => {
    fetch("https://reactnd-books-api.udacity.com/books", {
      headers: { Authorization: "whatever-you-want" },
    })
      .then((response) => response.json())
      .then((data) => setUser(data.books))
      .catch((err) => {
        console.log("Status Code: " + err.response.status);
        if (err.response.status === 404) {
          console.log("Website not found");
        } else {
          console.log(err);
        }
      });
  }, []);
  console.log(user);

  const bookData = user.filter((alt) => {
    const searchTerm = Value.toLocaleLowerCase().trim();
    const fullName = alt.title.toLocaleLowerCase();
    return (
      fullName.includes(searchTerm) ||
      (fullName.startsWith(searchTerm) && fullName !== searchTerm)
    );
  });

  return (
    <main className="fullContainer">
      <div className="search-input">
        <input
          type="text"
          className="input-search"
          placeholder="Find your friend..."
          id="search-input"
          onChange={handlechange}
        />
      </div>

      {bookData.length === 0 ? (
        <h1 className="error">Sorry! there is no such book</h1>
      ) : (
        <div className="container">
          {bookData.map((userObj) => {
            if (userObj !== null) {
              return (
                <div key={userObj.id}>
                  <div id="main">
                      <img
                        className="img"
                        src={userObj.imageLinks.smallThumbnail}
                        alt="ghfgh"
                      />
                      <h2 className="title">{userObj.title}</h2>
                      <h3 className="author">{userObj.authors}</h3>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </main>
  );
}

export default App;
