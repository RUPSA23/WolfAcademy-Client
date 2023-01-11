import React from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const sentEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_qenmnls', 
      'template_4k72zin', 
      e.target, 
      'HMeUxEZOpdFgISvk7').then(res => {
        console.log(res);
        alert('Message sent successfully to WolfAcademy');
        navigate('/');
        
      }).catch(err => {
        console.log(err);
        alert('Message did not send successfully');
      })

  }
    return (
        <div>
<div class="container my-24 px-6 mx-auto">

  <section class="mb-32 text-gray-800">
    <div class="flex flex-wrap">
      <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6 dark:bg-white">
        <h2 class="text-3xl font-bold mb-6 text-start">Contact us</h2>
        <p class="text-gray-500 mb-6 text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium, modi accusantium ipsum corporis quia asperiores
          dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
          autem omnis fugiat perspiciatis? Ad, veritatis.
        </p>
        <p class="text-gray-500 mb-2 text-start">1009, 10th floor, Weve Silver Tower Sector 18, Noida, UP, 201301</p>
        <p class="text-gray-500 mb-2 text-start">8299620433</p>
        <p class="text-gray-500 mb-2 text-start">wolfacademy.queries2023@gmail.com</p>
      </div>
      <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <form onSubmit={sentEmail}>
          <div className="form-group mb-6 dark:bg-white">
            <input type="text" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="Name"
              name='name'
              />
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Email address"
              name='email'
              />
          </div>
          <div className="form-group mb-6">
            <input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Subject"
              name='subject'
              />
          </div>
          <div class="form-group mb-6">
            <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" 
            placeholder="Message"
            name='message'
            ></textarea>
          </div>

          <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Send</button>
        </form>
      </div>
    </div>
  </section>

</div>
        </div>
    );
};

export default Contact;