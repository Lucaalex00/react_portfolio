import React, { useRef } from "react";
import emailjs from "emailjs-com";

const EmailJSComponent = () => {
  //UseRef to target a specified FORM
  const form = useRef();

  //SendEmail Function
  const sendEmail = (e) => {
    e.preventDefault(); //Do Not Refresh !

    emailjs
      .sendForm(
        "service_6lwbh8d", // Service ID EmailJS
        "template_j4ucpnr", // Template ID EmailJS
        form.current, // Ref FORM
        "vYzCrWSpVoegMPEj7" // User ID EmailJS
      )
      .then(
        (result) => {
          console.log(result.text); // SUCCESS In console
          alert("Email inviata con successo!"); // SUCCESS In alert
        },
        (error) => {
          console.log(error.text); // ERROR In console
          alert("Si è verificato un errore durante l'invio dell'email."); // ERROR In Alert
        }
      );

    e.target.reset(); // RESET FORM FIELDS
  };

  return (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
        <label className="block text-gray-700">Name</label>
        <input
            type="text"
            name="from_name" // This corresponds to the variable in the EmailJS template
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
            required
        />
        </div>
        <div>
        <label className="block text-gray-700">Email</label>
        <input
            type="email"
            name="user_email" // This corresponds to the variable in the EmailJS template
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
            required
        />
        </div>
        <div>
        <label className="block text-gray-700">Message</label>
        <textarea
            name="message" // This corresponds to the variable in the EmailJS template
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
            rows="4"
            required
        ></textarea>
        </div>
        <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
        Send Message
        </button>
    </form>
  );
};

export default EmailJSComponent;
