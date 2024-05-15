import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/common/NotFound";
import DeckList from "./components/deck/DeckList";
import EditDeck from "./components/deck/EditDeck";
import CreateNewDeck from "./components/deck/CreateNewDeck";
import ViewDeck from "./components/deck/ViewDeck";
import Study from "./components/study/Study";
import CreateNewCard from "./components/card/CreateNewCard";
import EditCard from "./components/card/EditCard";

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DeckList />} />
      <Route path="/decks" element={<DeckList />} />
      <Route path="/decks/new" element={<CreateNewDeck />} />
      <Route path="/decks/:deckId" element={<ViewDeck />} />
      {/* <Route path="/decks/:deckId/study" element={<Study />} /> */}
      <Route path="/decks/:deckId/cards/new" element={<CreateNewCard />} />
      <Route path="/decks/:deckId/cards/:cardId/edit" element={<EditCard />} />
      <Route path="/decks/:deckId/edit" element={<EditDeck />} />
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}

export default RootRoutes;
