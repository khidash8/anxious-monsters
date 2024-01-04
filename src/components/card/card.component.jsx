import PropTypes from "prop-types";
import "./card.styles.css";

function Card({ monster }) {
  const { id, name, email } = monster;

  return (
    <div className="card-container">
      <h2 key={id}>{name}</h2>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={name}
      />
      <p>{email}</p>
    </div>
  );
}

// ? Prop Validation
Card.propTypes = {
  monster: PropTypes.object,
};

export default Card;

// ? Class - Card
// import { Component } from "react";

// export default class Card extends Component {
//   render() {
//     const { name, id, email } = this.props.monster;
//     return (
//       <div className="card-container">
//         <h2 key={id}>{name}</h2>
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={name}
//         />
//         <p>{email}</p>
//       </div>
//     );
//   }
// }
