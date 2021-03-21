let AWS = require('aws-sdk');


let keyPairId = APKAIGXL7J2IUPLPQACQ;
let privateKey = -----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAiRC0EmzUIcsCyFNTbE0OEanNc1+freU1x0MlBGZ8ub6EBZoV
4VExEgmzo2Fnv0rrUlwt+4PjowMaJE8+9V8KXnO1nJWd0eukdL9pN0SiaKrPGoyT
jn+Xe+ZHh/WGipnjJc1JJQC7n1rHDvuuzC1UNoiprs2tnC9mlFIQT2tKaVjF855G
wExujgZAPvxl72WJdInTaFl3pjt9d5+0N+/KFSsN5ZsN+ZvuSl47LSakVNkShDNy
XZgyHa10MNmaQBxkD8QDdzVKcmHlx+CSPljvOce3xhJ0TldlgukFqr795hD0EG9G
/uQRnmtqrPCg4thyGS0XFvwp0U+cjGJauS5MQwIDAQABAoIBADpPCMvt0DCwFHb0
O8EO5rVM70HtpBhuMfqa7dx5XQYHrlJTwosf5ygtSGZwwZn3XTSkUkt1SBnI8A4S
SE5KKDcWMmRyobjz7fpck34XjJ/KSmCY/QzZ6q+ivztvj9TWsnMaact8DFU2YQhW
uX3SqsioSsc6aGjRIWpnntiqY/V8VnFH46RAiq+xf8OqDTjS+ZG1DWMETVm01VUQ
yrs10qIf1vtCyPLkldW83ioX6hQTWx6KuV+pnArWy4jqvBkccD/LW7IVjDVRzJ1E
vqpyIMxij/vgbuFhutqRJ6cFhjaAvIHE11240RAb+xtGUWcb0r/6vESEzkMhh44v
sZliDMECgYEAzRrxVpjnytFoFk0R+OOVIACKjRIj+1Q9z70KWz0syvs/qXSELQmT
3RvtrpfgvUsvXYkHQ/uKb0092o10B6zLAlbq1Dt2TgBwTb6Xy8FrPLb99Au6BP3W
o1ImimfqznNC5lh1Lz7fYaKcyxV2rb+QnS9xBitETkMxBCtB2Rl1iJcCgYEAqxOa
mhjPYiMNh9mVpc1yXTdVcuzIGpD/YIHkK2Ym2GO4xRVl4WZSLeHMaKv9NuxNrAB7
OPBjKIMh5ZidR+g65CTfGj97IHyKOJ+Q8reKWk1HtFDuCvRhpaZBUpBaRWAVNNk9
qdV3XbPYgrrL4rT4/pohLaZKdCCYlXGWoNViwzUCgYAibPtFBbUiHbPSymzR0aEe
FfkrZHgVnzYgwCIU3le+Wh19W8kzpf/jhOSIAYX/P7dbg7xsdLPvqo9PN57aCu6o
Hd6ccL6SqRAwfGUOFhDhx/UoGS/H1rNIBmnhoT+QF1iLQR2qKGtl/91BWQDqeNTV
DTlzR5/XYv+/K2OKBPPtUQKBgEHvhVe9FjkBv5ZLc1T7EQgCaqmnvxwWJIdiqLld
Xr1p+e3j6GduU2AhtfHlz+taOjl/2f5BEEat++OM5ZmwVPpXh7GLI/6KYY+fWHNj
8CwLuwYxZv3L4NLCeEzFHDW+6Y176TtK7f2sclc4fZp8G7etWfpJLEsDwStgIykL
9Uu9AoGBAIialREE/4plRcE3zOInH6rWCijmJMD1ChuAuRezFFcXdkzhYfKQiL6N
XS/WsjDxvTb0WOTEBno99WsIts+grNJs9nUS92uwxzz6fqjk4c+5dTL4uX02D2o2
az+rFSJxv+ZHOzeS/U/wfKv1Nfg1xq/zt4RG8DcIbEIUCwbrEOtp
-----END RSA PRIVATE KEY-----
;

let cfUrl = "dlj5uw0y1y1k.cloudfront.net";
let expiry = ;

let policy = {
  'Statement': [{
    'Resource': 'http*://' + cfUrl + '/*',
    'Condition': {
      'DateLessThan': {'AWS:EpochTime': expiry}
    }
  }]
};

let policyString = JSON.stringify(policy);

let signer = new AWS.CloudFront.Signer(keyPairId, privateKey);

exports.getSignedCookie = function(req, res) {
    var options = {url: "http://"+cfUrl, policy: policyString};

    signer.getSignedCookie(options, function(err, cookie) {
        if (err) {
            res.send(err);
        } else {

            console.log("cookies: ");
            console.log(cookie);
            res.send(cookie);
            
        }
    });
};
