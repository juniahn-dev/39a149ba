import "./index.css";

import { useEffect } from "react";
import Wrapper from "../../components/Wrapper";
import useFetchActivities from "../../hooks/useFetchActivities";
import CallCard from "../../components/CallCard";

export default function Inbox() {
  const { activities, fetchActivities } = useFetchActivities();

  useEffect(() => {
    fetchActivities(`${process.env.REACT_APP_AIRCALL_ENDPOINT}/activities`);
  }, []);

  return (
    <Wrapper>
      <div className="inbox-wrapper">
        {activities.map((v) => {
          const { date, items } = v;

          return (
            <div key={date} className="activity-wrapper">
              <div className="activity-date">
                <div className="line"></div>
                {date}
                <div className="line"></div>
              </div>
              <div className="activity-cards">
                {items.map((item, idx) => (
                  <CallCard key={idx} activity={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
