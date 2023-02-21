import { nextupapi } from "../ApiInstance";

export const getGameList = () =>
    nextupapi
        .get("v1/admin/list/games/")
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });

export const getGameDetails = (gameid) =>
    nextupapi
        .get("/v1/admin/game/detail/" + gameid)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });

export const getTeamList = (searchKeyword, teamid) =>
    nextupapi
        .get("/v1/portal/list/team", {
            params: {
                search: searchKeyword,
                selected: teamid,
            },
        })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });

export const postScheduleGame = (data) =>
    nextupapi
        .post("/v1/admin/create/game", data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });
