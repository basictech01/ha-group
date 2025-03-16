const Heading = ({ title, highlight }) => {
    return (
        <h1 className="heading">
            {title} <span className="highlight">{highlight}</span>
        </h1>
    );
};

export default Heading;
