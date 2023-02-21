import { nextupapi } from "../ApiInstance";
import LocalStorageService from "../LocalStorageHandler";
const localStorage = LocalStorageService.getService();

//Get All the stats
export const getStatList = () =>
    nextupapi
        .get(
            "/v1/admin/get/stats" /* , {
            headers: {
                Authorization: `Bearer ` + localStorage.getAccessToken(),
            },
        } */
        )
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });

//Get All the plans under raodtopro
export const postStats = (data) =>
    nextupapi
        .post(
            `/v1/admin/create/stats`,
            data /*, {
            headers: {
                Authorization: `Bearer ` + localStorage.getAccessToken(),
            },
        } */
        )
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });

//Get All the plans under raodtopro
export const patchStats = (id, data) =>
    nextupapi
        .patch(
            `v1/admin/update/stats/${id}`,
            data /*, {
            headers: {
                Authorization: `Bearer ` + localStorage.getAccessToken(),
            },
        } */
        )
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });
