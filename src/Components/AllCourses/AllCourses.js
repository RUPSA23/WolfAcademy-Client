import React from 'react';
import AllCourse from './AllCourse';

const AllCourses = () => {
    const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div>
        <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl mt-4 text-start ml-12 dark:gray-900">Check Out Our <span class="text-blue-600 dark:text-blue-500">Best Courses</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12 mb-10 mx-12">
            {
                courses.map(course => <AllCourse
                key={course._id}
                tool={course}
                ></AllCourse>)
            }
         </div>
        </div>
    );
};

export default AllCourses;