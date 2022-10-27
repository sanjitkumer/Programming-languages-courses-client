import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Details = () => {
    const courses = useLoaderData();
    const{title, details, image_url} = courses;
    return (
     <Card className="mb-5"> 
        <Card.Img variant="top" src={image_url} /> 
        <Card.Body>
          <Card.Title>{title}</Card.Title>          
          <Card.Text>           
            {details}
          </Card.Text>
         <Link>
         <Button variant="primary">Get Premium access</Button>
         </Link>
        </Card.Body>        
      </Card>
    );
};

export default Details;