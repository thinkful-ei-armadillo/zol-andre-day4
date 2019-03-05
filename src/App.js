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

  newRandomCard = (listId) => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    console.log(id)
    /*let allCards = this.props.store.allCards;
    allCards[id] = {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    };*/
    // Object.assign(this.props.store.allCards, {[id]: {
    //   id,
    //   title: `Random Card ${id}`,
    //   content: 'lorem ipsum',
    // }})

    this.setState({
      store: {
        lists: this.props.store.lists.map(list => {
          if(list.id === listId) {
            list.cardIds = [...list.cardIds, id];
          }
          return list;
        }),
        allCards: Object.assign(this.props.store.allCards, {[id]: {
            id,
            title: `Random Card ${id}`,
            content: 'lorem ipsum'
          }})
      }
    })
  }
  render() {
    const { store } = this.props
    const cards = store.lists.map(list => {
      console.log(list)
      return list.cardIds.map(id => {
        console.log(id)
        console.log(store.allCards)
      })
    })
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              newRandomCard = {this.newRandomCard}
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
