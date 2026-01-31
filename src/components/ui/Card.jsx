const Card = ({ title, description, img, link }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>

      <img
        className="card__image"
        src={img}
        alt={title}
        width="100%"
        height="400px"
        onClick={() => {
          window.open(link, "_blank");
        }}
      />
    </div>
  );
};

export default Card;
