import { nextupapi } from "../ApiInstance";

export const postLogin = (data) =>
    nextupapi
        .post("v1/admin/verify", data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });
