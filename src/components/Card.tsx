import "../sass/Card.scss";
import { useMediaQuery } from "react-responsive";
import desktopDivider from "../assets/pattern-divider-desktop.svg";
import diceIcon from "../assets/icon-dice.svg";
import mobileDivider from "../assets/pattern-divider-mobile.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const isGreaterThan600px = useMediaQuery({ query: "(min-width: 600px)" });
  const [advice, setAdvice] = useState({
    id: 0,
    advice: "",
  });

  // Function to fetch advice from the API
  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const { id, advice } = response.data.slip;
      setAdvice({ id, advice });
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  // useEffect hook to fetch advice on component mount
  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleNewAdviceClick = () => {
    fetchAdvice();
  };

  return (
    <article className="card">
      <p className="title">Advice #{advice.id || ""}</p>
      <p className="advice">{advice.advice}</p>
      <img
        className="divider"
        src={isGreaterThan600px ? desktopDivider : mobileDivider}
        alt="divider"
      />
      <div className="diceContainer" onClick={handleNewAdviceClick}>
        <img src={diceIcon} alt="diceIcon" />
      </div>
    </article>
  );
};

export default Card;
