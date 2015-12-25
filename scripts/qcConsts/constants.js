System.register([], function(exports_1) {
    var QCConstants;
    return {
        setters:[],
        execute: function() {
            QCConstants = (function () {
                function QCConstants() {
                }
                QCConstants.domain = "https://feature-morgan-stanley.kuluvalley.com";
                QCConstants.oauthClient = "sharepoint";
                QCConstants.token = "b11e5012c69e0dcdbcac0ce249136c73";
                QCConstants.restEndPoint = QCConstants.domain + "/api/2.1/rest";
                return QCConstants;
            })();
            exports_1("QCConstants", QCConstants);
        }
    }
});
//# sourceMappingURL=constants.js.map