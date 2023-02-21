import { nextupapi } from "../ApiInstance";

export const getPersonaList = () =>
    nextupapi
        .get(
            "v1/admin/get/persona"
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

export const getPersonaDetails = (id) =>
    nextupapi
        .get(
            `v1/admin/get/persona`,
            {
                params: {
                    id: id,
                },
            }
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

export const postPersonaDetails = (data) =>
    nextupapi
        .post(
            `v1/admin/create/persona`,
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

export const patchPersonaDetails = (id, data) =>
    nextupapi
        .patch(
            `v1/admin/update/persona/${id}`,
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

//To Delete User
export const getDeletePersona = (id) =>
    nextupapi
        .get(
            `v1/admin/delete/persona/${id}`
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
