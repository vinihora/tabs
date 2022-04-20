import "./App.css";
import data from "./data";
import Person from "./Person";
import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState(0);

  const getUser = (Id) => {
    setUser(Id);
  };

  return (
    <section className="page">
      <section className="header">
        <h1>Experience</h1>
      </section>
      <section className="content">
        <div className="nav">
          {data.map((person) => {
            return (
              <button class="btn-user" onClick={() => getUser(person.id - 1)}>
                <h3>{person.name}</h3>
              </button>
            );
          })}
        </div>
        <div className="info">
          <Person key={data[user].id} data={data[user]} />
        </div>
      </section>
    </section>
  );
};

export default App;
