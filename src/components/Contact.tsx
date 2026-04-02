import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">

          {/* Connect */}
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/tausif-abdullah-2607ba238"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — tausif-abdullah
              </a>
            </p>

            <h4>Email</h4>
            <p>
              <a href="mailto:juniorscientist3@gmail.com">
                juniorscientist3@gmail.com
              </a>
            </p>

            <h4>Education</h4>
            <p>
              Engineering, CBIT (Osmania University) — 2024–2028
            </p>

            <h4>Location</h4>
            <p>Hyderabad, India</p>
          </div>

          {/* Social */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/marshaltausif"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/tausif-abdullah-2607ba238"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            {/* Optional: add when ready */}
            {/* <a href="https://your-project.vercel.app" className="contact-social">
              Live Project <MdArrowOutward />
            </a> */}
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed & Built <br /> by <span>Md Tausif Abdullah</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>

            <p style={{ marginTop: "10px", opacity: 0.7 }}>
              Exploring AI, Machine Learning & scalable Software systems 
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;