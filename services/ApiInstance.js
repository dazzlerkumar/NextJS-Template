import axios from "axios";
//Constants
const API_URL = process.env.base_url;
const CancelTokenn = axios.CancelToken;

//Instance
export const nextupapi = axios.create({
    baseURL: API_URL,
});

/* _____Common APIs_____ */

export const postUploadFile = (
    data,
    setUpload,
    cancelFileUpload,
    filetype
) =>
    axios
        .post(API_URL + `/v1/storage/upload/${filetype}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: function (progressEvent) {
                var percentCompleted = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );

                setUpload(percentCompleted);
            },
            cancelToken: new CancelTokenn(
                (cancel) => (cancelFileUpload.current = cancel)
            ),
        })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });
