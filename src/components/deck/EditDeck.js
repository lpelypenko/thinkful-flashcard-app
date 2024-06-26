import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { updateDeck, readDeck } from "../../utils/api";
import Breadcrumb from "../common/Breadcrumb";

function EditDeck() {
  const [deckData, setDeckData] = useState({});
  const { deckId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deckData = await readDeck(deckId);
        setDeckData(deckData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [deckId]);

  const handleChange = ({ target }) => {
    const value = target.value;
    setDeckData({
      ...deckData,
      [target.name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateDeck(deckData);
    navigate("/");
  };
  const breadcrumbItems = [
    { link: "/", title: "Home", active: false },
    { link: `/decks/${deckId}`, title: deckData.name, active: false },
    { link: "", title: "Edit Deck", active: true },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <h2>Edit Deck</h2>
      <form name="create" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" style={{ width: "90%" }}>
            Name
            <input
              id="name"
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
              value={deckData.name}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="description" style={{ width: "90%" }}>
            Description
            <textarea
              id="description"
              type="text"
              name="description"
              rows="5"
              className="form-control"
              onChange={handleChange}
              value={deckData.description}
            />
          </label>
        </div>
        <NavLink to="/">
          <button type="button" className="btn btn-secondary ">
            Cancel
          </button>
        </NavLink>
        <button type="submit" className="btn btn-primary ml-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditDeck;
