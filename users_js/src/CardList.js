import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardsArray = robots.map((user, i) => {
            //! Adding robots properties
                //? 'key' prop should have something that not change, like the array index
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
            />
        );
    });
    return(
        <div>
                {/* Adding robots list using the function above */}
            { cardsArray }
        </div>
    );
}

export default CardList;