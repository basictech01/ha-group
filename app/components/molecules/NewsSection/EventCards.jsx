import events from "../../../data/events.json"
import "./EventCards.css";

const EventCards = () => {

    return (
        <div className="event-list">
            {events.map((event) => (
                <div key={event.id} className="event-card">
                    <img src={event.image} alt="Event" className="event-image" />
                    <p className="event-date">{event.date}</p>
                    <p className="event-desc">{event.description}</p>
                    <p className="read-more">Read More</p>
                </div>
            ))}
        </div>
    );
};

export default EventCards;
