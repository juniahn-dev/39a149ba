import dayjs from "dayjs";
import { useActivities } from "./stores/activities";
import fetchData from "libs/fetchData";

const orderingTime = (data) => {
  const groupedData = data.reduce((acc, item) => {
    const date = dayjs(item.created_at).format("MMM, DD, YYYY");
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  const formattedData = Object.keys(groupedData).map((date) => {
    return {
      date,
      items: groupedData[date].map((v) => {
        const time = dayjs(v.created_at).format("HH:mm");
        return { ...v, time };
      }),
    };
  });

  return formattedData;
};

const useFetchActivities = () => {
  const { activities, setActivities } = useActivities();

  const fetchActivities = async (url) => {
    try {
      const fetchedNewData = await fetchData(url);

      const orderingData = orderingTime(fetchedNewData);

      setActivities(orderingData);
    } catch (error) {
      console.error(error);
    }
  };

  return { activities, fetchActivities };
};

export default useFetchActivities;
