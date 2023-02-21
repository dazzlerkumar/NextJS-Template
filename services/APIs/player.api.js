import { nextupapi } from "../ApiInstance";

export const getPlayerList = () =>
    nextupapi
        .get(
            "/v1/portal/list/player" /* , {
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

export const getPlayerDetails = (playerid) =>
    nextupapi
        .get(
            "/v1/admin/player/detail/" + playerid /* , {
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

export const postPlayerStats = (data) =>
    nextupapi
        .post(
            "/v1/stats/player",
            data /* , {
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

export const getDeleteUser = (id) =>
    nextupapi
        .get(
            `v1/portal/delete/user/${id}`
            /* , {
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

export const postVerifyUser = (id, data) =>
    nextupapi
        .post(
            `v1/portal/approve/user/${id}`,
            data
            /* , {
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
