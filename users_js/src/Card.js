import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        /*
            ! tc -> text: centered
            ! bg-light-green -> background: light green
            ! dib -> display: inline block
            ! br3 -> border-radius: 3
            ! pa3 -> padding-all: 3
            ! ma2 -> margin-all: 2
            ! grow -> grow animation when hover
            ! bw2 -> border-width: 2
            ! shadow-5 -> shadow behind the box
        */
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                    {/* JS Expressions put inside '{ }'*/}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;