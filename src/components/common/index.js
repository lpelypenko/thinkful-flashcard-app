import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../deck/DeckList";
import EditDeck from "../deck/EditDeck";
import CreateNewDeck from "../deck/CreateNewDeck";
import ViewDeck from "../deck/ViewDeck";
import Study from "../study/Study";
import CreateNewCard from "../card/CreateNewCard";
import EditCard from "../card/EditCard";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<DeckList />} />
          <Route path="decks" element={<DeckList />}>
            <Route path="new" element={<CreateNewDeck />} />
            <Route path=":deckId" element={<ViewDeck />}>
              <Route path="study" element={<Study />} />
              <Route path="cards/new" element={<CreateNewCard />} />
              <Route path="cards/:cardId/edit" element={<EditCard />} />
              <Route path="edit" element={<EditDeck />} />
            </Route>
          </Route>
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
