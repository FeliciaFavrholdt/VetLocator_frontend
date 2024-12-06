export function fetchData(url, callback, method = "GET", body = null) {
    const headers = {
      Accept: "application/json",
    };
  
    if (method === "POST" || method === "PUT") {
      headers["Content-Type"] = "application/json";
    }
  
    const options = {
      method,
      headers,
    };
  
    if (body) {
      options.body = JSON.stringify(body);
    }
  
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => callback(data))
      .catch((err) => {
        console.error("Error:", err.message || "Network error");
      });
  }
  