import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    console.clear();
    console.log("mounted");
  }, []);

  const [word, setWord] = useState("");
  const [sentence, setSentence] = useState([1, 2, 3, 4]);

  useEffect(() => {
    console.log("2 will only call on sentence change");
    // setSentence(sentence);
    return () => {
      console.log("1 defered");
    };
  }, [sentence]);

  useEffect(() => {
    console.log("3 will only call on word change");
  }, [word]);

  const handleAddWord = () => {
    setSentence([...sentence, word]);
    setWord("");
  };

  return (
    <>
      <h3>Starting Vite App From Here...</h3>
      <ul>
        <li>
          <input
            onChange={(e) => setWord(e.target.value)}
            placeholder="What's the word?"
            value={word}
            style={{ fontSize: 25, textAlign: "center" }}
          />
        </li>
        <li>
          <button style={{ border: "2px solid white" }} onClick={handleAddWord}>
            Add word to Sentence
          </button>
        </li>
      </ul>
      {sentence ? sentence : ""}
      {}
    </>
  );
}

export default App;
