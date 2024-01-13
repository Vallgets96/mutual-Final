import React from "react";
import "../Style.css";


const Faq = () => {
  return (
    <div>
      <section id="Faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>F.A.Q</h2>
            <h3>
              Assistance <span>Corner</span>
            </h3>
          </div>
          <div className="section row justify-content-center mt-5 ">
            <div className="col-xl-10">
              <ul className="faq-list">
                <li>
                  <div
                    data-bs-toggle="collapse"
                    className="collapsed question"
                    href="#faq1"
                  >
                    How do I get started with MR Distribution Services?{" "}
                    <i className="bi bi-chevron-down icon-show" />
                    <i className="bi bi-chevron-up icon-close" />
                  </div>
                  <div
                    id="faq1"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Simply visit our website, fill out the registration form, 
                    and one of our advisors will guide you through the process.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq2"
                    className="collapsed question"
                  >
                    What Security Measures Do You Have?
                    <i className="bi bi-chevron-down icon-show" />
                    <i className="bi bi-chevron-up icon-close" />
                  </div>
                  <div
                    id="faq2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Ensuring the security of your data is our utmost priority. Our platform implements robust security measures, incorporating advanced encryption and multi-factor authentication, to guarantee the utmost protection for your valuable information.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq3"
                    className="collapsed question"
                  >
                    Can I customize my investment portfolio?{" "}
                    <i className="bi bi-chevron-down icon-show" />
                    <i className="bi bi-chevron-up icon-close" />
                  </div>
                  <div
                    id="faq3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Absolutely! We offer a wide range of investment products, allowing
                    you to tailor your portfolio according to your financial goals and preferences.

                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq4"
                    className="collapsed question"
                  >
                    Are there any tools to track my investments?{" "}
                    <i className="bi bi-chevron-down icon-show" />
                    <i className="bi bi-chevron-up icon-close" />
                  </div>
                  <div
                    id="faq4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Yes, our platform not only offers intuitive and advanced tools for portfolio management and analytics but also provides you with a personalized app, empowering you to monitor and optimize your investments
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq5"
                    className="collapsed question"
                  >
                     How often should I review my investment strategy?{" "}
                    <i className="bi bi-chevron-down icon-show" />
                    <i className="bi bi-chevron-up icon-close" />
                  </div>
                  <div
                    id="faq5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Review your strategy every half-year, especially during significant life changes. Our advisors are here to help you adapt your plan to meet evolving financial goals.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
