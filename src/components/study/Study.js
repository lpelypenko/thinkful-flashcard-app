import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import NotEnoughCards from "./NotEnoughCards";
import Breadcrumb from "../common/Breadcrumb";

function Study() {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const [deck, setDeck] = useState();
  const [flipped, setFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deckData = await readDeck(deckId);
        setDeck(deckData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [deckId]);

  console.log("deck for study:", deck);
  console.log("deckId", deckId);
  function handleFlip() {
    setFlipped(!flipped);
  }

  const clickHandler = () => {
    if (currentIndex < deck.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    } else {
      const restartConfirm = window.confirm(
        "Restart cards?\n\n Click 'cancel' to return to the home page."
      );
      if (restartConfirm) {
        setCurrentIndex(0);
        setFlipped(false);
      } else {
        navigate(`/decks/${deckId}/study`);
      }
    }
  };

  if (!deck) {
    return <div>Loading...</div>;
  }

  if (deck.cards && deck.cards.length <= 2) {
    return (
      <NotEnoughCards
        deckId={deckId}
        deck={deck}
        numberOfCards={deck.cards.length}
      />
    );
  }
  const breadcrumbItems = [
    { link: "/", title: "Home", active: false },
    { link: `/decks/${deckId}`, title: deck.name, active: false },
    { link: "", title: "Study", active: true },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <h3 className="my-4">Study: {deck.name}</h3>
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">
            Card {currentIndex + 1} of {deck.cards.length}
          </h5>
          <p className="card-text">
            {flipped
              ? deck.cards[currentIndex].back
              : deck.cards[currentIndex].front}
          </p>
          <button className="btn btn-secondary" onClick={handleFlip}>
            Flip
          </button>
          {flipped && (
            <button className="btn btn-primary mx-2" onClick={clickHandler}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Study;
