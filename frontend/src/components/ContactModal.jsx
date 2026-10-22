import { useState } from 'react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    // Wait 250ms for the CSS animation to finish before removing the component
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 250);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9b5d71bb-4fb4-4889-befa-673018a8a612");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      alert("Message sent successfully!");
      handleClose(); // Use the animated close function here too
      event.target.reset();
    } else {
      alert("Error sending message.");
    }
  };

  return (
    <>
      <button className="contact-btn" onClick={() => setIsOpen(true)}>
        Contact Me
      </button>

      {isOpen && (
        <div className={`modal-overlay ${isClosing ? 'closing' : ''}`}>
          <div className={`modal-content ${isClosing ? 'closing' : ''}`}>
            <button className="close-btn" onClick={handleClose}>X</button>
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Email</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}