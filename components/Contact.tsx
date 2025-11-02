import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-800 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-red-500 tracking-wider uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Get In Touch</p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                Have questions or need a quote? Reach out to us. We're here to help.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-slate-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                 <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full bg-slate-800 border-slate-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 text-white" />
                    <input type="email" placeholder="Your Email" className="w-full bg-slate-800 border-slate-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 text-white" />
                    <input type="tel" placeholder="Your Phone (Optional)" className="w-full bg-slate-800 border-slate-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 text-white" />
                    <textarea placeholder="How can we help you?" rows={5} className="w-full bg-slate-800 border-slate-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"></textarea>
                    <button type="submit" className="w-full bg-red-500 text-white font-bold py-3 px-4 rounded-md hover:bg-red-600 transition-colors transform hover:scale-105">Submit Inquiry</button>
                 </form>
            </div>

            {/* Map and Info */}
            <div>
                 <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086431109914!2d144.9537353159042!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v162021 Melbourne" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        title="JPP Tires Trading Location"
                    ></iframe>
                 </div>
                 <div className="mt-8 bg-slate-900 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Location</h3>
                    <p className="text-gray-300">123 Tire Lane, Auto City, 45678</p>
                    <h3 className="text-2xl font-bold text-white mt-6 mb-4">Call Us</h3>
                    <a href="tel:+1234567890" className="text-red-500 text-lg hover:underline">(123) 456-7890</a>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;