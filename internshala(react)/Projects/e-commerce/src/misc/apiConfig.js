
const apiGet=async(query)=>{
    const rawData=await fetch(`https://fakestoreapi.com${query}`)
    const parsedData=rawData.json();
    return parsedData;
}

export default apiGet;