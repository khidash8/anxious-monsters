// import { Component } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// ? Functional - App component

const App = () => {
  // ********* Hooks - useState *********
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  const users = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setMonsters(data);
  };

  // ********* Hooks - useEffect *********
  // ? useEffect - fetch data from API and set monsters
  useEffect(() => {
    users();
  }, []);

  // ? filter the monsters according to search
  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredMonster(newFilteredMonster);
  }, [monsters, searchTerm]);

  // ? Event Handlers
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      {/* render the title */}
      <h1 className="app-title">Anxious Monsters</h1>
      {/* render the search box */}
      <SearchBox
        placeHolder="search monsters"
        handleInputChange={handleInputChange}
        className="search-box"
      />

      {/* render the monsters */}
      <CardList filteredMonster={filteredMonster} />
    </div>
  );
};

export default App;

// ? Class - App component
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       monsters: [],
//       searchTerm: "",
//     };
//   }

//   // ? fetch data when component is mounted on the DOM
//   async componentDidMount() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();

//     this.setState(() => {
//       return { monsters: data };
//     });
//   }

//   // ? handle input change
//   handleInputChange = (e) => {
//     const searchTerm = e.target.value.toLowerCase();

//     this.setState(() => ({ searchTerm }));
//   };

//   render() {
//     // ? Desturucture state
//     const { searchTerm, monsters } = this.state;
//     const { handleInputChange } = this;

//     // ? filter the monsters according to search
//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//     return (
//       <div className="App">
//         {/* render the title */}
//         <h1 className="app-title">Anxious Monsters</h1>

//         {/* render the search box */}
//         <SearchBox
//           placeHolder="search monsters"
//           handleInputChange={handleInputChange}
//           className="search-box"
//         />

//         {/* render the monsters */}
//         <CardList filteredMonster={filteredMonster} />
//       </div>
//     );
//   }
// }

// export default App;
