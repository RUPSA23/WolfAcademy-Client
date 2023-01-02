import React from 'react';
import { Link } from 'react-router-dom';
import Course from './Course';

const courses = () => {
    const courses = [1, 2, 3, 4, 5, 6];
    return (
        <div>
        <div className="flex justify-between">
        <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl mt-4 text-start ml-12 dark:text-white">Check Out Our <span class="text-blue-600 dark:text-blue-500">Best Courses</span></h1>
        <Link className="btn btn-primary mr-12 mt-5" to="/allCourses">View More</Link>
        </div>
        
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12 mb-10 mx-12">
            {
                courses.map(course => <Course
                key={course._id}
                tool={course}
                ></Course>)
            }
         </div>
        </div>
    );
};

export default courses;