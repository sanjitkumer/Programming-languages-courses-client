import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";



const CoursesSummaryCart = ({courses}) => {
    const {_id, title, author,  details, image_url} = courses;
    return (
        <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between">
          <div className='d-flex'>
            <Image
            className='me-2'
            roundedCircle
            src={author.img}
            style={{height:'60px'}}            
            ></Image>
            <div>
              <p className='mb-0'>{author.name}</p>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div>
            <FaDownload></FaDownload>
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {
                details.length > 250 ?
                <p>{details.slice(0, 250) + '...'} <Link to ={`/courses/${_id}`}>Read more</Link> </p>
                :
                <p>{details}</p>
            }
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default CoursesSummaryCart;