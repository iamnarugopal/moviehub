import axios from "axios";

const Api = async (endpoint, method, body) => {
  const options = {
    url: process.env.API_BASE_URL + endpoint,
    method: method || "GET",
    // data: body,
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Headers": "*",
    // },
    // responseType: "json",
  };


  if (!!body) {
    options.data = body;
  }

//   console.log("options=>>", options);

  return axios(options)
    .then((response) => {
    //  console.log(`response from ${endpoint} >> ${response}`);
      return response;
    })
    .catch((error) => {
      console.log(`Error from ${endpoint} >> ${error}`);
      throw error.response;
    });
};

export default Api;
