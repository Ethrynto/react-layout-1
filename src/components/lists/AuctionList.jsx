import "./AuctionList.css";

// eslint-disable-next-line react/prop-types
export function AuctionCard({ image, text, isActive }) {
  return (
    <div className={`auction-card ${isActive ? "active-auction-card" : ""}`}>
      <img src={image} alt="Card" className="auction-card-image" />
      <div className="time-block">
        <p>15 Hrs : 20 Mins : 22 Sec</p>
        <div className="scrollbar">
            <div className="active-bar"></div>
        </div>
      </div>
      <div className="title-block">
        <p className="auction-title">{text}</p>
        <span>Art</span>
      </div>
      <div className="price-block">
        <div className="title">
            Price
        </div>
        <div className="price">
            <p>4.20 ETH</p>
            <span>( USD 20.35 )</span>
        </div>
      </div>

      <div className="created-block">
        <div className="title">
            <p>Created By</p>
            <p>Owner</p>
        </div>
        <div className="users">
            <p>@sanya</p>
            <p>@vijaypatil</p>
        </div>
      </div>

      <button className="buy">Place Bid →</button>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export default function AuctionList ({ items }) {
  return (
    <div className="auction-grid">
{      // eslint-disable-next-line react/prop-types
}      {items.map((item, index) => (
        <AuctionCard 
            key={index} 
            image={item.image} 
            text={item.text}
            isActive={index === 0} 
            />
      ))} 
    </div>
  );
};