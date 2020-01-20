import { useState, useEffect } from "react";

export const useFetch = url => {
  const [fetchedData, setFetchedData] = useState({ data: null, loading: true });

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .catch(async response => {
        const error = await response.text().then(text => text);
        return Promise.reject(error);
      })
      .then(myJson => setFetchedData({ data: myJson, loading: false }))
      .catch(error => {
        console.log(error);
      });
  }, [url]);

  return fetchedData;
};
