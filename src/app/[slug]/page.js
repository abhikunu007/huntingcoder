
import React from 'react';

const Blogpost = ({ params }) => {
    const { slug } = params;

    return (
        <div>Blogpost: {slug}</div>
    );
}

export default Blogpost;
