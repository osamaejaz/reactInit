import React from 'react';

export const Hello = props => {
    return (
        <div>
            <h1> Hey</h1>
            {props.children}
            {props.name} {props.end}
        </div>
    );
    // return React.createElement(
    //     'div',
    //     { className: 'hello' },
    //     React.createElement('h1', null, 'Hello')
    // );
};
