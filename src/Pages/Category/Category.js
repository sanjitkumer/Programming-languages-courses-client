import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCart from '../Shared/CoursesSummaryCart/CoursesSummaryCart';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div>
            <h2>This is category has courses : {categoryCourses.length}</h2>
            {
                categoryCourses.map(courses => <CoursesSummaryCart
                key = {courses._id}
                courses ={courses}              
                ></CoursesSummaryCart>)
            }            
        </div>
    );
};

export default Category;