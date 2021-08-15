const soServiceDomain = require("../config/config").so_service_domain;
const axios = require("axios");
const authorizedSO = require("../middlewares/authorizedSO");

const retrieveData = (query, headers, next) => {
    const queryURL = `${soServiceDomain}/query`;
    const params = { q: query };
    axios.get(queryURL, { headers, params })
        .then(response => {
            if (response.status === 401) {
                authorizedSO(response2 => {
                    if (response2.status !== 200) {
                        return next(new Error("service unavailable"), null);
                    } else {
                        const newHeaders = {
                            Authorization: `Bearer ${response2.data.access_token}`
                        }
                        return retrieveData(query, newHeaders, next);
                    }
                });
            } else {
                return next(null, response);
            }
        })
        .catch(error => {
            console.log(error.message);
            authorizedSO(response2 => {
                if (response2.status !== 200) {
                    return next(new Error("service unavailable"), null);
                } else {
                    const newHeaders = {
                        Authorization: `Bearer ${response2.data.access_token}`
                    }
                    return retrieveData(query, newHeaders, next);
                }
            });
        });
}

const insertData = (data, objectName, headers, next) => {
    const queryURL = `${soServiceDomain}/sobjects/${objectName}`;
    headers["Content-Type"] = "application/json";

    axios.post(queryURL, { data }, { headers })
        .then(response => {
            if (response.status === 401) {
                authorizedSO(response2 => {
                    if (response2.status !== 200) {
                        return next(new Error("service unavailable"), null);
                    } else {
                        const newHeaders = {
                            Authorization: `Bearer ${response2.data.access_token}`
                        }
                        return retrieveData(query, newHeaders, next);
                    }
                });
            } else {
                return next(null, response);
            }
        })
        .catch(error => {
            console.log(error.message);
            authorizedSO(response2 => {
                if (response2.status !== 200) {
                    return next(new Error("service unavailable"), null);
                } else {
                    const newHeaders = {
                        Authorization: `Bearer ${response2.data.access_token}`
                    }
                    return retrieveData(query, newHeaders, next);
                }
            });
        })
}

const updateData = (data, objectName, objectId, headers, next) => {
    const queryURL = `${soServiceDomain}/sobjects/${objectName}/${objectId}`;
    headers["Content-Type"] = "application/json";

    axios.patch(queryURL, { data }, { headers })
        .then(response => {
            next(response);
        })
        .catch(error => {
            next(error);
        })
}

const deleteData = (objectName, objectId, headers, next) => {
    const queryURL = `${soServiceDomain}/sobjects/${objectName}/${objectId}`;

    axios.delete(queryURL, {}, { headers })
        .then(response => {
            next(response);
        })
        .catch(error => {
            next(error);
        })
}

module.exports = { retrieveData, insertData, updateData, deleteData };