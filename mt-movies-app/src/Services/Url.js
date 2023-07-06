import queryString from 'query-string';
//import {Config} from "../Services/Config";

export const Url = {
    makeUrl
};

function makeUrl(sEndPoint, sBaseUrl='', oData) {
    sBaseUrl = sBaseUrl ? sBaseUrl : process.env.MEDIXCEL_PHR_API_URL;
    var sUrl = sBaseUrl + sEndPoint;
    return oData ? sUrl + "?" + queryString.stringify(oData) : sUrl;
}