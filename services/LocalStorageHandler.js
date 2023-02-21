const LocalStorageService = (function () {
    var _service;
    function _getService() {
        if (!_service) {
            _service = this;
            return _service;
        }
        return _service;
    }
    //To store JWT Token
    function _setToken(token) {
        localStorage.setItem("token", token);
    }
    //To Access the stored token
    function _getAccessToken() {
        return localStorage.getItem("token");
    }

    //USER ID
    function _setUserID(id) {
        localStorage.setItem("id", id);
    }
    //To Access the stored token
    function _getUserID() {
        return localStorage.getItem("id");
    }

    function _clearToken() {
        localStorage.removeItem("token");
    }
    return {
        getService: _getService,
        setToken: _setToken,
        getAccessToken: _getAccessToken,
        setUserID: _setUserID,
        getUserID: _getUserID,
        clearToken: _clearToken,
    };
})();

export default LocalStorageService;
