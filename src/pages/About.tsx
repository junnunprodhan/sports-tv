import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">
            We are committed to delivering innovative solutions for a better
            future.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Our Mission</h2>
              <p className="text-muted">
                Our mission is to create value through technological innovation,
                offering top-notch services and solutions that make a
                difference. We believe in building products that not only solve
                problems but also enhance lives.
              </p>
              <p className="text-muted">
                With a focus on user-centric design and seamless experiences, we
                ensure that our products are efficient, scalable, and tailored
                to meet industry standards.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://source.unsplash.com/600x400/?technology,innovation"
                alt="Mission"
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Meet Our Team</h2>
          <div className="row">
            {[
              {
                name: "MD Junnun Prodhan",
                role: "CEO",
                img: "https://lh3.googleusercontent.com/d/1Cu7d36sfPpQmCmb2MkVfbSM48pXhyZxG",
              },
              {
                name: "Sophia Williams",
                role: "CTO",
                img: "https://source.unsplash.com/200x200/?woman,face",
              },
              {
                name: "Liam Brown",
                role: "Lead Developer",
                img: "https://source.unsplash.com/200x200/?developer",
              },
            ].map((member, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="card border-0 shadow-lg">
                  <img
                    src={member.img}
                    className="card-img-top rounded-circle p-3"
                    alt={member.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{member.name}</h5>
                    <p className="card-text text-muted">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h3 className="fw-bold mb-3">Want to learn more about our work?</h3>
          <p className="lead">
            Join us on our journey and explore the world of innovation and
            excellence.
          </p>
          <button className="btn btn-outline-light btn-lg">Contact Us</button>
        </div>
      </section>
    </div>
  );
}
