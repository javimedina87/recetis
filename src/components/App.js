import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ListItems from "./ListItems";
import SmartButton from "./SmartButton";
import "../App.css";

const backendApiIdeasUrl = "https://recetis-backend.herokuapp.com/api/ideas";

function App() {
  const [ideas, setIdeas] = useState([]);

  const addNewIdea = (e) => {
    e.preventDefault(); // TODO check this

    const url = backendApiIdeasUrl;
    const data = { name: document.getElementById("newIdeaText").value };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error: ", error))
      .then((response) => console.log("Success: ", response));
  };

  useEffect(() => {
    fetch(backendApiIdeasUrl).then((response) =>
      response.json().then((ideas) => {
        console.log("ideas_holaa: ", ideas);

        setIdeas(ideas);
      })
    );
  }, []);

  return (
    <div>
      <Banner imageName="egg.png" text="Recetis para tod@s" />

      {/*Container (all app content except banner)*/}
      <div className="container">
        <span>Lista de ideas (Componente ListItems.js)</span>

        <ListItems items={ideas} />
      </div>

      <input id="newIdeaText" type="text" />
      <SmartButton handleClick={addNewIdea} visualName="+" />
    </div>
  );
}

export default App;
