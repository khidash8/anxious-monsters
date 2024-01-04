import { Component } from "react";
import PropTypes from "prop-types";
import "./card-list.styles.css";
import Card from "../card/card.component";

export default class CardList extends Component {
  render() {
    const { filteredMonster } = this.props;

    return (
      <div className="card-list">
        {filteredMonster.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

// ? Prop Validation
CardList.propTypes = {
  filteredMonster: PropTypes.array,
};
