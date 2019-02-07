import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  handleDeleteCard = (id) => {
    console.log(id)
    this.setState({
      store: {
                lists: this.props.store.lists.map(list => {
                list.cardIds = list.cardIds.filter(card => card !== id)
                return list;
              }),
                allCards: this.props.allCards
             }
    })
  }

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              handleDeleteCard = {this.handleDeleteCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
