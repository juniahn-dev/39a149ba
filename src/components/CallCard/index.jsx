import { useMemo, useState } from "react";
import usePatchArchive from "../../hooks/usePatchArchive";
import "./index.css";
import clsx from "clsx";
import dayjs from "dayjs";

export default function CallCard({ activity }) {
  const [modalOn, setModalOn] = useState(false);

  const { patchArchive } = usePatchArchive();
  const isPM = Number(activity.time.split(":")[0]) >= 12;
  const dateFormatting = dayjs(activity.created_at).format("MMM DD, YYYY");
  const callType = useMemo(() => {
    if (activity.call_type === "missed") {
      return "Missed";
    } else if (activity.direction === "inbound") {
      return "Incoming";
    }

    return "Outgoing";
  }, [activity]);

  return (
    <>
      <div className="call-card-wrapper" onClick={() => setModalOn(!modalOn)}>
        {activity.direction === "inbound" ? (
          <img src="../../assets/ReceiveIcon.png" />
        ) : (
          <img src="../../assets/SendIcon.png" />
        )}
        <div className="call-from-wrapper">
          <strong
            className={activity.call_type === "missed" ? "missed-call" : null}
          >
            {activity.from}
          </strong>
          <span>{`Using via ${activity.via}`}</span>
        </div>
        <div className="archived">{activity.is_archived && "ARCHIVED"}</div>
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
              src="../../assets/BackIcon.png"
            />
            <img
              className="header-icon"
              onClick={() =>
                patchArchive(
                  `/activities/${activity.id}`,
                  !activity.is_archived
                )
              }
              src={
                activity.is_archived
                  ? "../../assets/ArchiveIcon.png"
                  : "../../assets/UnArchiveIcon.png"
              }
            />
          </div>
          <div className="header-info">
            <img src="../../assets/DefaultUserIcon.png" />
            <h4>{activity.via}</h4>
            <h2>{activity.from}</h2>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-card">
            <p>{dateFormatting}</p>
            <div className="call-content">
              {activity.time}
              <div className="call-info-content">
                <span className={callType === "Missed" ? "missed" : null}>
                  {callType} Call
                </span>
                {activity.call_type !== "missed" && (
                  <span>{activity.duration} seconds</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
