const apiKey=process.env.REACT_APP_BOX_API;

const apiGet = async (queryString) => {
    let rawData = await fetch(`https://${apiKey}${queryString}`);
    let parsedData = await rawData.json();
    return parsedData;
  };

  export default apiGet;