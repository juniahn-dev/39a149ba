import fetchData from "libs/fetchData";
import useFetchActivities from "./useFetchActivities";

const usePatchArchive = () => {
  const { fetchActivities } = useFetchActivities();

  const patchArchive = async (url, is_archived) => {
    try {
      await fetchData(url, "PATCH", { is_archived });
      fetchActivities("/activities");
    } catch (error) {
      console.error(error);
    }
  };

  return { patchArchive };
};

export default usePatchArchive;
