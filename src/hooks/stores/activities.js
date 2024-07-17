import { atom, useRecoilState } from "recoil";
import { useEffect } from "react";

import { isNil } from "ramda";

const activitiesState = atom({
  key: "Activities",
  default: [],
});

export const useActivities = (initValue) => {
  const [activities, setActivities] = useRecoilState(activitiesState);

  useEffect(() => {
    !isNil(initValue) && setActivities(initValue);
  }, [initValue, setActivities]);

  return {
    activities,
    setActivities,
  };
};
