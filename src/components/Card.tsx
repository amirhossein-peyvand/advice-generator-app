import mobileDivider from "../assets/pattern-divider-mobile.svg";
// import desktopDivider from "../assets/pattern-divider-desktop.svg";
import diceIcon from "../assets/icon-dice.svg";
import "../sass/Card.scss";

const Card = () => {
  return (
    <article className="card">
      <p className="title">Advice #</p>
      <p className="advice">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
      </p>
      <img className="divider" src={mobileDivider} alt="divider" />
      <div className="diceContainer">
        <img src={diceIcon} alt="" />
      </div>
    </article>
  );
};

export default Card;
