import React from 'react';
import './card-list.styles.css';
import { CardComponent } from '../card/card.component';

export const CardListComponent = (props) => {
    return <div class='card-list'>
        {
            props.monsters.map((monster) => (
                <CardComponent key={monster.id} monster={monster}></CardComponent>
            ))
        }
    </div>
}