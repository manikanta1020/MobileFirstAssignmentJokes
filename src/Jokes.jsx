// Jokes.js
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import   {Button}  from "react-bootstrap"

export default function Jokes({ onLogout }) {
  const [jokes, setJokes] = useState([]);

  const getJokes = async () => {
    try {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      );
      setJokes(response.data.jokes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div>
      <Table striped responsive bordered hover variant="dark">
        <thead>
          <tr>
            <th>Type</th>
            <th>Joke</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.joke}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className="w-25" variant="dark" onClick={onLogout}>Logout</Button>
    </div>
  );
}

Jokes.propTypes = {
  onLogout: PropTypes.func.isRequired,
};