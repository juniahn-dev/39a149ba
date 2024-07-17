import axios from "axios";

const makeUrl = (url) => {
  return `${process.env.REACT_APP_AIRCALL_ENDPOINT}${url}`;
};

const fetchData = async (url, method = "GET", data) => {
  const callUrl = makeUrl(url);
  const params = method.toLowerCase() === "post" ? undefined : data;

  try {
    const result = await axios({
      method,
      url: callUrl,
      data,
      params,
      timeout: 5 * 1000,
    });

    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchData;
