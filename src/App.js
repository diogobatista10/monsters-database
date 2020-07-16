import React from 'react';
import { CardListComponent } from './components/card-list/card-list.component';
import './App.css';
import { SearchBoxComponent } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Database</h1>
        <SearchBoxComponent placeholder='Search Monster' handleChange={e => this.setState({ searchField: e.target.value })} />
        <CardListComponent monsters={filteredMonsters} />
      </div >
    );
  }
}

export default App;
