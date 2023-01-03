import React from 'react';

const CourseDetail = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
    <div class="max-w-6xl px-6 py-10 mx-auto">
        <p class="text-xl font-medium text-blue-500 ">Check Out</p>

        <h1 class="mt-2 text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Our Course Detail
        </h1>

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://theforbiz.com/wp-content/uploads/2021/12/TutFlix-Learn-any-Course-for-Free.gif" alt="Course photo" />
                
                <div class="mt-3 md:mx-6">
                    <div>
                        <p class="text-2xl font-medium tracking-tight text-white">Course Title</p>
                        <p class="text-blue-200 text-1xl">Course Instructor</p>
                    </div>

                    <p class="mt-4 text-lg leading-relaxed text-white md:text-xl"> “ Course Detail Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda”.</p>

                    <p class="text-3xl mt-3 mb-3 font-bold text-white dark:text-white">$599</p>

                    <button type="button" className="px-8 py-3 font-semibold rounded-full bg-white dark:bg-gray-100 dark:text-gray-800 hover:bg-gray-100">Buy This Course</button>
                    
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