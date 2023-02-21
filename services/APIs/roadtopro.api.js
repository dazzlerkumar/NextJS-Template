import { nextupapi } from "../ApiInstance";
import LocalStorageService from "../LocalStorageHandler";
const localStorage = LocalStorageService.getService();

//Get All the plans under raodtopro
export const getPlanList = () =>
    nextupapi
        .get(
            "/v1/portal/list/roadToPro" /* , {
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

//Get details of a particular plan under road to pro using plan id
// as param
export const getPlanDetails = (id) =>
    nextupapi
        .get(
            "/v1/premium/plan/" + id /* , {
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

// To Create New RoadtoPro
export const postNewPlan = (data) =>
    nextupapi
        .post(
            "/v1/premium/plan/create",
            data /* , {
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

// To Update RoadtoPro
export const postUpdatePlan = (planID, data) =>
    nextupapi
        .post(
            `/v1/premium/plan/update/${planID}`,
            data /* , {
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

// To Delete RoadtoPro
export const postDeletePlan = (planID) =>
    nextupapi
        .get(
            `/v1/portal/delete/roadToPro/${planID}`
            /* , {
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

// To Create New Challenge
export const postNewChallenge = (data) =>
    nextupapi
        .post(
            "/v1/premium/challenge/create",
            data /* , {
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
