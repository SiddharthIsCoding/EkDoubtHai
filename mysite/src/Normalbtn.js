import react from "react";

function Normalbutton(props) {
  return (
    <button href={props.link} class='normalbtn' >{props.txt}</button>
  );
}

export default Normalbutton;
