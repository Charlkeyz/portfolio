import mail_icon from "/imageFolder/mail_icon.svg";
import call_icon from "/imageFolder/call_icon.svg";
import location_icon from "/imageFolder/location_icon.svg";
import "../Contact/Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e9c5c15d-a128-461b-8794-58c846829f33");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(" your Email was Successfully sent ", res);
    }
  };
  return (
    <div className="contact">
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>

          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>greatstackdev@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+2348034244528</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>CA, United State.</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="8"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
