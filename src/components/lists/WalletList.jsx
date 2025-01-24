import "./WalletList.css";

// eslint-disable-next-line react/prop-types
export function Card({ image, text, isActive }) {
  return (
    <div className={`card ${isActive ? "active-card" : ""}`}>
      <img src={image} alt="Card" className="card-image" />
      <p className="card-text">{text}</p>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export default function WalletList({ items }) {
  return (
    <div className="card-grid">
      {items.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          text={item.text}
          isActive={index === 0}
        />
      ))}
    </div>
  );
}