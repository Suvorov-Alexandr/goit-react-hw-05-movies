import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Form, Input } from "./Searchbar.styled";
import Button from "../Button";
import toast, { Toaster } from "react-hot-toast";

function Searchbar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const onInput = (evt) => {
    const query = evt.target.value.toLowerCase().trim();
    setInput(query);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate({ ...location, search: `query=${input}` });
    setInput("");

    if (!input) {
      toast.error(`Oops... Please enter a search term!`);
      return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        onChange={onInput}
        value={input}
        placeholder={"Enter your search request"}
      />
      <Button type="submit">Search</Button>
      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{
          style: {
            border: "2px solid red",
            padding: "18px",
            fontSize: "16px",
          },
        }}
      />
    </Form>
  );
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func,
  onInput: PropTypes.func,
};

export default Searchbar;;
