import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Index(props) {
  // can't use hooks or state
  // can't use event listeners in the same way
  return (
    <DefaultLayout>
      <div className="d-flex flex-wrap justify-content-around">
        <div className="flex-column justify-content-center align-items-center">
          <h1>Pokemon</h1>
          <div className="d-flex">
            <a href="/pokemons/new">
              <button type="button" class="btn btn-outline-primary">
                Add...
              </button>
            </a>
            <form action="/pokemons/seed" method="POST">
              <button class="btn btn-outline-warning mx-5">SEED</button>
            </form>
            <form action="/pokemons/clear?_method=DELETE" method="POST">
              <button class="btn btn-outline-danger">CLEAR</button>
            </form>
          </div>
        </div>

        <ul
          className="d-flex flex-wrap justify-content-around my-3"
          style={{ listStyle: "none" }}
        >
          {props.pokemons.map((pokemon, index) => (
            <div className="pokemon-item shadow d-flex flex-wrap justify-content-around my-3 align-items-center">
              <li className="pokemon-item shadow d-flex flex-wrap justify-content-around my-3 align-items-center" key={index}>
                <a href={`/pokemons/${pokemon._id}`}>
                  <strong>{pokemon.name}</strong>
                  <div></div>
                  <img src={`${pokemon.img}.jpg`} alt={pokemon.name} />
                </a>
              </li>
            </div>
          ))}
        </ul>

        <div className="d-flex">
          <a href="/pokemons/new">
            <button type="button" class="btn btn-outline-primary">
              Add...
            </button>
          </a>
          <form action="/pokemons/seed" method="POST">
            <button class="btn btn-outline-warning mx-5">SEED</button>
          </form>
          <form action="/pokemons/clear?_method=DELETE" method="POST">
            <button class="btn btn-outline-danger">CLEAR</button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Index;
