import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
    return (
        <div>
            <section class="bg-white dark:bg-white">
    <div class="max-w-6xl px-6 py-10 mx-auto">
        <p class="text-xl font-medium text-blue-500 ">Check Out</p>

        <h1 class="mt-2 text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-gray-800">
            Our Course Detail
        </h1>

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://theforbiz.com/wp-content/uploads/2021/12/TutFlix-Learn-any-Course-for-Free.gif" alt="Course photo" />
                
                <div class="mt-3 md:mx-6">
                    <div>
                        <p class="text-2xl font-medium tracking-tight text-white">EDUCINE</p>
                        <p class="text-blue-200 text-1xl">Course Instructor</p>
                    </div>

                    <p class="mt-4 grid grid-cols-2 text-lg leading-relaxed text-white md:text-xl">
                 
                    <li>Market Introduction</li>  
                    <li>Types of Markets</li>
                    <li>Technical Trading tools</li>
                    <li>How to Trade</li>
                    <li>Demo Account</li>
                    <li>calculating Profiles</li>
                   
                    
                    </p>

                    <p class="text-3xl mt-3 mb-3 font-bold text-white dark:text-white">$599</p>

                    <Link to="/checkoutPage" type="button" className="px-8 py-3 font-semibold rounded-full bg-white dark:bg-gray-100 dark:text-gray-800 hover:bg-gray-100">Buy This Course</Link>
                    
                    <div class="flex items-center justify-between mt-6 md:justify-start">
                    </div>
                </div>
            </div>
        </main>
    </div>
</section>
        </div>
    );
};

export default CourseDetail;