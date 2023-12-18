import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="contact-container">
      <h3 className="contact-title">Get In Touch</h3>
      <div>
        <form className="contact-form">
          <label>
            <input type="text" name="name" placeholder="Name  " />
          </label>
          <label>
            <input type="email" name="email" placeholder="Emai" />
          </label>
          <label>
            <textarea name="message" placeholder="Message" />
          </label>
          <Button>Send Message</Button>
        </form>
      </div>
    </div>
  );
}
