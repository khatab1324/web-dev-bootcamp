import Die from "./Die";
import "../Dice.css";
function Dice({ dice, color='red' }) {//look for this there is no hard code all of these are custm
  return (
    <section className="Dice">
      {dice.map((v, i) => (
        <Die key={i} val={v} color={color} />
      ))}
    </section>
  );
}
export default Dice;


