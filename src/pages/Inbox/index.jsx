import "./index.css";

import { useEffect, useMemo } from "react";
import Wrapper from "../../components/Wrapper";
import useFetchActivities from "../../hooks/useFetchActivities";
import CallCard from "../../components/CallCard";
import { useCallTarget } from "../../hooks/stores/callTarget";
import usePatchArchive from "../../hooks/usePatchArchive";
import { isEmpty } from "ramda";
import clsx from "clsx";

export default function Inbox() {
  const { patchArchive } = usePatchArchive();
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

  const allUnarchive = () => {
    try {
      filteredActivities.map(({ items }) =>
        items.map(
          (item) =>
            !item.is_archived && patchArchive(`/activities/${item.id}`, true)
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <div
        className={clsx(
          isEmpty(filteredActivities) ? "empty-wrapper" : null,
          "inbox-wrapper"
        )}
      >
        {callTarget !== "archive" && (
          <div className="archive-btn">
            <button
              onClick={() => allUnarchive()}
              className="archive-all-calls"
            >
              <img src="./src/assets/ArchiveColorIcon.png" />
              Archive all
            </button>
          </div>
        )}
        {isEmpty(filteredActivities) && (
          <div className="empty-container">{`Nothing in ${callTarget}`}</div>
        )}
        {!isEmpty(filteredActivities) &&
          filteredActivities.map((v) => {
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
