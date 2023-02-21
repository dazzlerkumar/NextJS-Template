import { nextupapi } from "../ApiInstance";

export const getTeamList = () =>
    nextupapi
        .get(
            "/v1/portal/list/team" /* , {
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

export const getTeamDetails = (teamid) =>
    nextupapi
        .get(
            "/v1/admin/team/detail/" + teamid /* , {
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
            "/v1/stats/team/season/player",
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

//To Delete User
export const getDeleteTeam = (id) =>
    nextupapi
        .get(
            `v1/portal/delete/team/${id}`
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

//To Delete User
export const postTeamSeasonalStats = (data) =>
    nextupapi
        .post(
            `v1/stats/team/season/`,
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
