import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    // const courses = [1, 2, 3, 4, 5, 6];

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/allCourses')
        .then(res => res.json())
        .then(data => setCourses(data))
    })

    return (
        <div>
        <div className="flex justify-between">
        <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl mt-4 text-start ml-12 dark:text-gray-900">Check Out Our <span class="text-blue-600 dark:text-blue-500">Best Courses</span></h1>
        <Link className="btn btn-primary mr-12 mt-5" to="/allCourses">View More</Link>
        </div>
        
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12 mb-10 mx-12">
            {
                courses.map(course => <Course
                key={course._id}
                course={course}
                ></Course>)
            }
         </div>
        </div>
    );
};

export default Courses;