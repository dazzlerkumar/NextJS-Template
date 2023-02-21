import { nextupapi } from "../ApiInstance";

export const getCoachList = () =>
    nextupapi
        .get(
            "/v1/portal/list/coach" /* , {
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

export const getCoachDetails = (coachid) =>
    nextupapi
        .get(
            "/v1/admin/coach/detail/" + coachid /* , {
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
