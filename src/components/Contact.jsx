import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import Aos from 'aos';

const ContactSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing function
    });
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_ofnzxql', 
        'template_p1siet8', 
        formData,
        '9NfSTZS-0fIN-EqWC' 
      )
      .then(
        (result) => {
          toast.success('Message Sent!', result.text);
          setFormData({ name: '', email: '', subject: '', message: '' }); 
        },
        (error) => {
          toast.error('Failed to send message', error.text);
        }
      );
  };

  return (
    <div id='contact' className="relative md:top-3 top-32 bg-cover bg-center " style={{ backgroundImage: `url(https://images.pexels.com/photos/14321795/pexels-photo-14321795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto py-20 px-5">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Left Side - Contact Form */}
          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="w-full md:w-1/2 bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full my-2 px-4 py-2  rounded-lg focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 my-2 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 my-2 rounded-lg focus:outline-none"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-2 my-2 rounded-lg focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-amber-500 text-white px-4 py-2 rounded-lg "
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div  data-aos="fade-left" className="w-full ml-8 md:w-1/2 text-white space-y-6">
            <h2 className="text-3xl font-semibold">Get In Touch</h2>
            <div className="space-y-4">
              <p className="text-lg">📞 Phone: +8801886967825</p>
              <p className="text-lg">📍 Location: Mirpur, Dhaka, Bangladesh</p>
              <p className="text-lg">✉️ Email: bullahmohi50@gmail.com</p>
            </div>
            {/* Add any other contact details you want here */}
             <div className="flex gap-3 mt-4">
                      <a target='_blank' href="https://www.facebook.com/najmul.sakib.3954" aria-label="Facebook">
                        <CiFacebook className="text-2xl " />
                      </a>
                      <a target='_blank' href="https://github.com/mohibbullah272" aria-label="GitHub">
                        <FaGithub className="text-2xl " />
                      </a>
                      <a target='_blank' href="https://www.linkedin.com/in/mohi-bullah-4767962a3" aria-label="LinkedIn">
                        <FaLinkedin className="text-2xl " />
                      </a>
                      <a target='_blank' href="https://wa.me/8801886967825?text=Hi%20there!%20I%20wanted%20to%20connect%20with%20you" aria-label="WhatsApp">
                        <FaWhatsapp className="text-2xl " />
                      </a>
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
