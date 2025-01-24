import "./StepList.css";

// eslint-disable-next-line react/prop-types
export function StepCard({ image, title, description }) {
  return (
    <div className="step-card">
      <img src={image} alt="Card" className="step-image" />
      <p className="step-title">{title}</p>
      <p className="step-description">{description}</p>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export default function StepList({ items }) {
  return (
    <div className="steps-grid">
      {items.map((item, index) => (
        <StepCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}