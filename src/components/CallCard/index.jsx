import { useState } from "react";
import usePatchArchive from "../../hooks/usePatchArchive";
import "./index.css";
import clsx from "clsx";
import dayjs from "dayjs";

export default function CallCard({ activity }) {
  const [modalOn, setModalOn] = useState(false);

  const { patchArchive } = usePatchArchive();
  const isPM = Number(activity.time.split(":")[0]) >= 12;
  const dateFormatting = dayjs(activity.created_at).format("MMM DD, YYYY");
  console.log(activity);

  return (
    <>
      <div className="call-card-wrapper" onClick={() => setModalOn(!modalOn)}>
        {activity.is_archived && (
          <img className="archive-icon" src="./src/assets/ArchiveIcon.png" />
        )}
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
      <div className={clsx(modalOn ? "on-modal" : null, "modal-wrapper")}>
        <div className="header-wrapper">
          <div className="header-icons">
            <img
              className="header-icon"
              onClick={() => setModalOn(false)}
              src="./src/assets/BackIcon.png"
            />
            <img
              className="header-icon archive"
              onClick={() =>
                patchArchive(
                  `/activities/${activity.id}`,
                  !activity.is_archived
                )
              }
              src={
                activity.is_archived
                  ? "./src/assets/ArchiveIcon.png"
                  : "./src/assets/ArchiveYetIcon.png"
              }
            />
          </div>
          <div className="header-info">
            <img src="./src/assets/DefaultUserIcon.png" />
            <h4>{activity.via}</h4>
            <h2>{activity.from}</h2>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-card">
            <p>{dateFormatting}</p>
            <div>
              {activity.time}
              <div>
                {activity.direction === "inbound" ? "Incoming" : "Outcoming"}
                {activity.duration}
              </div>
            </div>
          </div>
          <div className="content-card">{dateFormatting}</div>
        </div>
      </div>
    </>
  );
}
