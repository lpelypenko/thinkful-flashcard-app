import React, { useEffect, useState } from "react";
import { readDeck, updateCard, readCard } from "../../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import CardForm from "./CardForm";
import Breadcrumb from "../common/Breadcrumb";

function EditCard() {
  const navigate = useNavigate();
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const deckData = await readDeck(deckId);
        setDeck(deckData);
        const cardData = await readCard(cardId);
        setCard(cardData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [deckId, cardId]);

  const handleChange = ({ target }) => {
    setCard({ ...card, [target.name]: target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const abortController = new AbortController();
    try {
      await updateCard(card, abortController.signal);
      navigate(`/decks/${deckId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const breadcrumbItems = [
    { link: "/", title: "Home", active: false },
    { link: `/decks/${deckId}`, title: deck.name, active: false },
    { link: "", title: `Edit Card ${cardId}`, active: true },
  ];
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <h3>Edit Card</h3>

      <CardForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        cardData={card}
        deckId={deckId}
        isAdd={false}
      />
    </div>
  );
}
export default EditCard;
