import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const TermsAndConditions = () => {
    const  {title}= useLoaderData();
    return (
        <div>
            <h3>{title}</h3>
            <p>Go back to : <Link to='/register' >Registration</Link> </p>
        </div>
    );
};

export default TermsAndConditions;