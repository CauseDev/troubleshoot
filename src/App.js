import React, { useState } from "react";
import axios from "axios";

function App() {
  const [responseData, setResponseData] = useState(null);

  const API_URL =
    "https://rglf0owlbl.execute-api.us-east-1.amazonaws.com/api/v2/barong/identity";

  const postData = {
    session_type: "email",
    password: "Admin@123",
    captcha_response: "0.U_hJw1wnMqGmXXEM2DwHqCoylAiYCfMZChxtwds0Ydef0...",
    email: "sd@yopmail.com",
    authentication_state: "web",
  };

  const sendPostRequest = async () => {
    try {
      const response = await axios.post(API_URL, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setResponseData(response?.data);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error?.response.data : error?.message
      );
      setResponseData(error.response ? error.response.data : "Request failed");
    }
  };

  return (
    <div>
      <h1>Axios POST Request</h1>
      <button onClick={sendPostRequest}>Send POST Request</button>

      {responseData && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
