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
    !isNil(initValue) && setUser(initValue);
  }, [initValue]);

  return {
    activities,
    setActivities,
  };
};
