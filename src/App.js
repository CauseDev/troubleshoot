import React, { useState } from "react";
import axios from "axios";

function App() {
  const [responseData, setResponseData] = useState(null);

  const API_URL =
    "https://rglf0owlbl.execute-api.us-east-1.amazonaws.com/api/v2/barong/identity";

  const postData = {
    "session_type": "email",
    "password": "Admin@123",
    "captcha_response": "0.-L-g4Vl3j1Hysm0dQQxZXj9UZAlnaUQ1DI7fg6_QT28tZkC8j0M6EEPN1fioBh4bc23wywo0TZGcJksWCanHknjp6Bx86u0gTP_tyvJD9NX7sGo3d0Q2l0Seh4z4T303BOdPs87TRpipwAq8O7Yc2-fSMNnz-wguqg6I5zM3JdS5HfRYydYXzwIESdPh7K57XRGgpqA9WTr8Xm6mozIVZnDmTKwX2T0woRxBLwM9eX3NApXOsUHnQ6KiKDRiv2XXw6p5VP-sowq8eR8TmGgdbW2KxJzEq3-nZHKPKopJmUMidOKza52keSfvZqUszFQnnETBvhcDWzDJaWT39HuiBjcWzb3bRn0arL-N1gNo0PUBUCTVK_IEbD9rQyQ3Kq75JnRWARpL-0iqrYETMfr2o0ULVeQc82Bta_hD3VTdl7Pd_vxT9S0BTpOiRfo4vwZHEXDlaX0TaYYUjDzJrNxlw7EvsUnBomURZDzfzOdhKl1Oe4cW1fbMKHEau0tifs9C5z7eitJKtMdbhSwVJuNLPcH03HoQkVY2V1BxJyyY-x__SGH1_F8MPE-V59pjBFU2EjSLPcqEgHqnNhSgRnCtr9WjqB0gYkdGjovbmDvVBG4w2RCCHel3TCRFwoZKhI75_v5vXKimjxpcl8vxFAPk1_p3_Zm-gkhpOWra5Gm0etZz-g8r5Qbe0i_J5dLTuaiVBhFpyMDAigzj65hjpqgWFrxAAATx8d83jgB7k2MCX0Jr_3kDIFGIUAHhH3SDjhwaWTw4VcJaXhKwIQ4KPIfuMN6X2wuM9MtjbuQB-LXq3d3ittjqye5RmmWtJfRuYdjaWgY1CsIlqnzXr_XP1Z_7gEu4gMYFp37-_a6OkENPPwMbpnZNQVtg5WaqeWn1y3k1.JngscP9v4kvpuffm4SBs1Q.88000924ae6662c7698eb9626456dadb583987f6b9fe37ead131e2998713374e",
    "email": "Admin@123",
    "authentication_state": "web"
}
  const sendPostRequest = async () => {
    try {
      const response = await axios.post(API_URL, postData,
      //    {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
    );

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
