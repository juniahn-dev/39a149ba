import "./index.css";

export default function CallCard({ activity }) {
  const isPM = Number(activity.time.split(":")[0]) >= 12;
  console.log(activity);
  return (
    <div className="call-card-wrapper">
      {activity.direction === "inbound" ? (
        <img src="./src/assets/ReceiveIcon.png" />
      ) : (
        <img src="./src/assets/SendIcon.png" />
      )}
      <div className="call-from-wrapper">
        <strong>{activity.from}</strong>
        {`Using via ${activity.via}`}
      </div>
      <div className="call-time-wrapper">
        {activity.time}
        <span>{isPM ? "PM" : "AM"}</span>
      </div>
    </div>
  );
}
