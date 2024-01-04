import PropTypes from "prop-types";
import "./card-list.styles.css";
import Card from "../card/card.component";

function CardList({ filteredMonster }) {
  return (
    <div className="card-list">
      {filteredMonster.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
}

// ? Prop Validation
CardList.propTypes = {
  filteredMonster: PropTypes.array,
};

export default CardList;

// ? Class - CardList
// import { Component } from "react";

// export default class CardList extends Component {
//   render() {
//     const { filteredMonster } = this.props;

//     return (
//       <div className="card-list">
//         {filteredMonster.map((monster) => {
//           return <Card monster={monster} key={monster.id} />;
//         })}
//       </div>
//     );
//   }
// }
