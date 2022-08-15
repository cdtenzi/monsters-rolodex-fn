import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeHolder="search monsters" onChangeHandler={handleSearch} />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;
