import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  console.log(props);
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            handleDeleteCard={() => props.handleDeleteCard(card.id)}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick = {()=>props.newRandomCard(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}
