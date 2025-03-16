import testimonials from "../../../data/testimonials";
import "./Testimonials.css";

const Testimonials = () => {

    return (
        <section className="testimonials">
            <div className="testimonials-header">
                <h2>
                    What our <br /><span className="highlight">Clients Says</span>
                </h2>
                <p>
                    Golden Visa Dubai allows people to broaden their horizons and become UAE residents. The main criteria for
                    eligibility include investors, business owners, doctors, engineers, exceptional students, and humanitarian
                    pioneers.
                </p>
            </div>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="testimonial-card slide-in">
                        <div className="testimonial-header">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                            <div className="testimonial-info">
                                <h3 className="testimonial-name">{testimonial.name}</h3>
                                <p className="testimonial-date">{testimonial.date}</p>
                                <div className="testimonial-rating">
                                    {"★".repeat(testimonial.rating)}
                                    {"☆".repeat(5 - testimonial.rating)}
                                </div>
                            </div>
                        </div>
                        <p className="testimonial-message">{testimonial.message}</p>
                        <a href="#" className="read-more">
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
