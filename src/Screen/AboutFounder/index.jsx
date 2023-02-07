import React from "react";

const AboutFounder = () => {
  return (
    <React.Fragment>
      <div className="main-content about-container">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-outer col-md-12">
              <div className="about-content-title col-md-12 text-center">
                <h2 className="about-main-heading">About Founder</h2>
              </div>
              <div className="about-content">
                <div className="about-content-heading section-heading">
                  <h3 className="about-title">What is a founder?</h3>
                </div>
                <div className="about-content-description">
                  <p className="about-description">
                    To understand the difference between a founder and a CEO,
                    let’s first look at the definition for each. A founder is
                    the person who starts their own company. They’re the one who
                    came up with the business idea and acted on it. For example,
                    Jeff Bezos of Amazon is probably the founder who comes most
                    readily to mind. Amazon distributes goods worldwide, but
                    once upon a time, it was a bookstore operating from a
                    garage. A founder needs to secure funding, bring resources,
                    and market the brand. Unlike a CEO, the founder of the
                    business will always remain the same, even if they leave. In
                    cases where there is more than one founder, they are
                    co-founders. And, usually, the founder of a startup is also
                    referred to as an entrepreneur.
                  </p>
                  <p className="about-description">
                    The term "founder" describes your relationship to the
                    history of the business. Page and Brin will always be
                    Google's founders. The term "CEO" is about your position in
                    the current organization's hierarchy. Some founders will be
                    CEOs, at least for a while.
                  </p>
                  <p className="about-description">
                    Titles are the easy way for outsiders to understand how to
                    connect with your organization. So if you're the head, just
                    use the title CEO unless you have some strong reason not to.
                    That way people will know to come to you with CEO-ish
                    things. There's no harm in putting "founder" on your
                    business cards as well. E.g., "Founder / CEO" or "CEO &
                    Founder". But things like "CTO & Founder" are also
                    legitimate, so don't go with "Founder" alone, or people will
                    be left wondering which things they should contact you
                    directly about.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutFounder;
