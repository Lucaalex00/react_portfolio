import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const EmailJSComponent = () => {
  const [isConfirmed, setIsConfirmed] = useState(false); // Stato di conferma
  const [confirmationCode, setConfirmationCode] = useState(''); // Codice di conferma generato
  const [userCode, setUserCode] = useState(''); // Codice inserito dall'utente
  const [message, setMessage] = useState(''); // Messaggio di feedback
  const [userEmail, setUserEmail] = useState(''); // Salva l'email dell'utente
  const [userName, setUserName] = useState(''); // Salva il nome dell'utente
  const form = useRef(); // Ref per il form del messaggio

  // Funzione per inviare l'email di conferma
  const sendConfirmationEmail = (e) => {
    e.preventDefault();

    // Genera un codice di conferma
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    setConfirmationCode(generatedCode);

    // Salva l'email e il nome inseriti dall'utente
    setUserEmail(e.target.user_email.value);
    setUserName(e.target.from_name.value);

    const templateParams = {
      from_name: e.target.from_name.value,
      user_email: e.target.user_email.value,
      confirmation_code: generatedCode, // Include il codice di conferma
    };

    emailjs.send('service_6lwbh8d', 'template_j4ucpnr', templateParams, 'vYzCrWSpVoegMPEj7')
      .then((result) => {
        console.log(result.text);
        setMessage('A confirmation email has been sent. Please check your inbox and enter the code to confirm.');
      })
      .catch((error) => {
        console.log(error.text);
        setMessage('Failed to send confirmation email');
      });

    e.target.reset(); // Resetta il form dopo l'invio della conferma
  };

  // Funzione per verificare il codice di conferma inserito dall'utente
  const verifyConfirmationCode = () => {
    if (userCode === confirmationCode) {
      setIsConfirmed(true);
      setMessage('Email confirmed successfully! Now you can send your message.');
    } else {
      setMessage('Incorrect confirmation code. Please try again.');
    }
  };

  // Funzione per inviare il messaggio finale dopo la conferma
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isConfirmed) {
      setMessage('Please confirm your email first.');
      return;
    }

    const templateParams = {
      from_name: userName, // Usa il nome salvato
      user_email: userEmail, // Usa l'email salvata
      message: form.current.message.value,
    };

    emailjs.send('service_6lwbh8d', 'template_t5booah', templateParams, 'vYzCrWSpVoegMPEj7')
      .then((result) => {
        console.log(result.text);
        setMessage('Your message has been sent successfully!');
      })
      .catch((error) => {
        console.log(error.text);
        setMessage('Failed to send your message.');
      });

    e.target.reset();
  };

  return (
    <div>
      {!isConfirmed ? (
        <form onSubmit={sendConfirmationEmail} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="from_name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Confirmation Email
          </button>
        </form>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
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
      )}

      {!isConfirmed && (
        <div className="mt-4">
          <label className="block text-gray-700">Confirmation Code</label>
          <input
            type="text"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter the confirmation code"
            required
          />
          <button
            onClick={verifyConfirmationCode}
            className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300 mt-4"
          >
            Verify Code
          </button>
        </div>
      )}

      {message && (
        <p className={`mt-4 text-lg font-semibold ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default EmailJSComponent;
