import PageHeader from "../../component/pageheader/PageHeader";

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />
      <div className="contact-container">
        <h2>Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
        <div className="contact-info">
          <div className="contact-data">
            <li>
              <div className="contact-icon"></div>
              <div className="contact-content">
                <h3>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </li>
            <li>
              <div className="contact-icon"></div>
              <div className="contact-content">
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </li>
            <li>
              <div className="contact-icon"></div>
              <div className="contact-content">
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </li>
          </div>
          <form className="contact-form" action="">
            <li>
              <label htmlFor="">Your name</label>
              <input type="text" placeholder="Abc" />
            </li>
            <li>
              <label htmlFor="">Email address</label>
              <input type="text" placeholder="Abc@def.com" />
            </li>
            <li>
              <label htmlFor="">Subject</label>
              <input type="text" placeholder="This is an optional" />
            </li>
            <li>
              <label htmlFor="">Message</label>
              <textarea placeholder="Hi! i'd like to ask about" />
            </li>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
