import { nextupapi } from "../ApiInstance";

export const getChallengesList = () =>
    nextupapi
        .get(
            "/v1/portal/list/challenges" /* , {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZXNoYXYudEBjaXNpbmxhYnMuY29tIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9DT0FDSCJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9QTEFZRVIifV0sImlhdCI6MTY1OTQyODIxMywiZXhwIjoxNjYyMDIwMjEzfQ.zkMLYOboOv4jFs_7PywWCQhv5EaP4vi23lssx_-ZF8s`,
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
export const postNewSuggestedChallenge = (data) =>
    nextupapi
        .post(
            "/v1/premium/plan/challenge/create",
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

// Get Suggested Challenge Details
export const getSuggestedChallengeDetails = (challengeid) =>
    nextupapi
        .get(
            `/v1/premium/plan/challenge/detail?challengeId=${challengeid}&&teamId=${challengeid}` /* , {
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
export const getDeleteChallenge = (challengeid) =>
nextupapi
    .get(
        `/v1/portal/delete/challenge/${challengeid}`
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
