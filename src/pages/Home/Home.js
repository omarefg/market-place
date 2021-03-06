import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Loader, ErrorComponent, Card, BuyButton } from "../../components";
import classes from "./Home.module.css";

const portal = document.getElementById("portal");

export function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [ricksAndMorties, setRicksAndMorties] = useState([]);
  const [cart, setCart] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [isLoadingPokemonData, setIsLoadingPokemonData] = useState(false);
  const [isLoadingRickAndMortyData, setIsLoadingRickAndMortyData] = useState(false);
  const [isLoadingBuy, setIsLoadingBuy] = useState(false);

  const [errorInPokemonData, setErrorInPokemonData] = useState(null);
  const [errorInRickAndMortyData, setErrorInRickAndMortyData] = useState(null);
  const [errorInBuy, setErrorInBuy] = useState(null);

  const capitalize = (str) => {
    if (typeof str !== "string") {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getAllPokemons = useCallback(() => {
    setIsLoadingPokemonData(true);
    setErrorInPokemonData(null);
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => {
        const responseData = res.results.map((item) => {
          return fetch(item.url)
            .then((res) => res.json())
            .then((res) => ({
              name: capitalize(res.name),
              img: res.sprites.front_default,
              id: res.id,
            }));
        });
        return Promise.all(responseData);
      })
      .then((res) => {
        setPokemons(res);
      })
      .catch((error) => {
        setErrorInPokemonData(error.message);
      })
      .finally(() => {
        setIsLoadingPokemonData(false);
      });
  }, []);

  const getAllRicksAndMorties = useCallback(() => {
    setIsLoadingRickAndMortyData(true);
    setErrorInRickAndMortyData(null);
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((res) => {
        setRicksAndMorties(res.results);
      })
      .catch((error) => {
        setErrorInRickAndMortyData(error.message);
      })
      .finally(() => {
        setIsLoadingRickAndMortyData(false);
      });
  }, []);

  const postBuy = () => {
    const failOrSuccess = Math.round(Math.random());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (failOrSuccess) {
          resolve(
            "Congratulations, you just spent your money on our unreal stuff!"
          );
        } else {
          reject("Error, will to success not found");
        }
      }, 2000);
    });
  };

  const handleBuyClick = () => {
    setIsLoadingBuy(true);
    setErrorInBuy(null);
    postBuy()
      .then((res) => {
        setModalMessage(res);
        setOpenModal(true);
        setCart([]);
      })
      .catch((error) => {
        setErrorInBuy(error);
      })
      .finally(() => {
        setIsLoadingBuy(false);
      });
  };

  const renderPokemons = () => {
    if (isLoadingPokemonData) {
      return <Loader />;
    } else if (errorInPokemonData) {
      return (
        <ErrorComponent error={errorInPokemonData} retry={getAllPokemons} />
      );
    }
    return pokemons.map((pokemon) => (
      <Card
        key={pokemon.id}
        img={pokemon.img}
        caption={pokemon.name}
        onAddToCart={() =>
          setCart((prevState) => [
            ...prevState,
            { type: "pokemon", id: pokemon.id },
          ])
        }
        href={`/pokemon/${pokemon.id}`}
      />
    ));
  };

  const renderRicksAndMorties = () => {
    if (isLoadingRickAndMortyData) {
      return <Loader />;
    } else if (errorInRickAndMortyData) {
      return (
        <ErrorComponent
          error={errorInRickAndMortyData}
          retry={getAllRicksAndMorties}
        />
      );
    }
    return ricksAndMorties.map((rickAndMorty) => (
      <Card
        key={rickAndMorty.id}
        img={rickAndMorty.image}
        caption={rickAndMorty.name}
        onAddToCart={() =>
          setCart((prevState) => [
            ...prevState,
            { type: "rickAndMorty", id: rickAndMorty.id },
          ])
        }
      />
    ));
  };

  const renderBuyButton = () => {
    if (isLoadingBuy) {
      return <Loader />;
    } else if (errorInBuy) {
      return <ErrorComponent error={errorInBuy} retry={handleBuyClick} />;
    }
    return (
      <BuyButton
        onClick={handleBuyClick}
        total={cart.length}
        disabled={!cart.length}
      />
    );
  };

  useEffect(() => {
    getAllPokemons();
    getAllRicksAndMorties();
  }, [getAllPokemons, getAllRicksAndMorties]);

  return (
    <>
      <div>
        <h2>Buy these pokemons</h2>
        <div className={classes.cardsContainer}>{renderPokemons()}</div>
        <h2>Buy these Rick and Morty characters</h2>
        <div className={classes.cardsContainer}>{renderRicksAndMorties()}</div>
      </div>
      <footer className={classes.footer}>{renderBuyButton()}</footer>
      {openModal &&
        createPortal(
          <div className={classes.portal} onClick={() => setOpenModal(false)}>
            <p>{modalMessage}</p>
          </div>,
          portal
        )}
    </>
  );
}
