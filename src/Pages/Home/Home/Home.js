import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCart from '../../Shared/CoursesSummaryCart/CoursesSummaryCart';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
          <h1>Programming Languages Courses Home:{allCourses.length} </h1>
          {
            allCourses.map(courses => <CoursesSummaryCart
            key={courses._id}
            courses={courses}            
            ></CoursesSummaryCart>)
          }
        </div>
    );
};

export default Home;