import PropTypes from "prop-types";
import "./search-box.styles.css";

const SearchBox = ({ className, placeHolder, handleInputChange }) => {
  return (
    <div>
      <input
        type="search"
        className={className}
        placeholder={placeHolder}
        onChange={handleInputChange}
      />
    </div>
  );
};

// ? Prop Validation
SearchBox.propTypes = {
  handleInputChange: PropTypes.func,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
};

export default SearchBox;

// ? Class - SearchBox
// import { Component } from "react";

// export default class SearchBox extends Component {
//   render() {
//     const { handleInputChange, placeHolder, className } = this.props;

//     return (
//       <div>
//         <input
//           type="search"
//           className={className}
//           placeholder={placeHolder}
//           onChange={handleInputChange}
//         />
//       </div>
//     );
//   }
// }
