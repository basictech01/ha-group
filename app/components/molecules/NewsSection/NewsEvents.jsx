import news from "../../../data/news.json";
import "./NewsEvents.css";
import EventCards from "./EventCards";

const NewsEvents = () => {

    return (
        <section className="news-section">
            <h2 className="news-title">
                News & <span className="highlight">Events</span>
            </h2>
            {news.map((event) => (
                <div key={event.id} className="news-card">
                    <img src={event.image} alt="Event" className="news-image" />
                    <div className="news-content">
                        <div className="news-header">
                            <span className="news-source">{event.source}</span>
                            <span className="news-date">{event.date}</span>
                        </div>
                        <h3 className="news-heading">{event.title}</h3>
                        <a href={event.link} className="news-button">
                            See More
                        </a>
                    </div>
                </div>
            ))}
            <EventCards />
        </section>
    );
};

export default NewsEvents;
