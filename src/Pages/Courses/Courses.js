import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCart from '../Shared/CoursesSummaryCart/CoursesSummaryCart';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <h2>Courses number: {courses.length}</h2>
            {
               courses.map(courses => <CoursesSummaryCart
               key={courses._id}
               courses = {courses}               
               ></CoursesSummaryCart>) 
            }
        </div>
    );
};

export default Courses;