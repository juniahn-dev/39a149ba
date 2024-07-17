import "./index.css";

import { useEffect, useMemo } from "react";
import Wrapper from "../../components/Wrapper";
import useFetchActivities from "../../hooks/useFetchActivities";
import CallCard from "../../components/CallCard";
import { useCallTarget } from "../../hooks/stores/callTarget";

export default function Inbox() {
  const { activities, fetchActivities } = useFetchActivities();
  const { callTarget } = useCallTarget();

  useEffect(() => {
    fetchActivities("/activities");
  }, []);

  const filteredActivities = useMemo(() => {
    if (callTarget === "archive") {
      return activities
        .map((activity) => {
          const filteredItems = activity.items.filter(
            (item) => item.is_archived
          );
          return { ...activity, items: filteredItems };
        })
        .filter((activity) => activity.items.length > 0);
    }

    return activities;
  }, [callTarget, activities]);

  return (
    <Wrapper>
      <div className="inbox-wrapper">
        {filteredActivities.map((v) => {
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
