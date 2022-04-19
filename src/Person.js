import React, { useState } from "react";
import { AiFillForward } from "react-icons/ai";
import "./Person.css";

const Person = (props) => {
  const { name, cargo, date, phrases } = props.data;

  return (
    <section className="container">
      <div className="lines">
        <h1>{cargo}</h1>
        <h2 class="string-name">{name}</h2>
        <h3>{date}</h3>
        {phrases.map((phrase) => {
          return (
            <div class="phrase">
              <h1>{<AiFillForward />}</h1>
              <p>{phrase}</p>
            </div>
          );
        })}
        <button type="button" className="btn">
          <h2>More Info</h2>
        </button>
      </div>
    </section>
  );
};

export default Person;
