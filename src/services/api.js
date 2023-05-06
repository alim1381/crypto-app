import axios from "axios";
// URL
const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en";

const getData = async () => {
    const response = await axios.get(BASE_URL , {headers : ["Access-Control-Allow-Origin"] });
    return response.data;
}

export {getData};