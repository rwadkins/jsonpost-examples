var express = require('express');
var router = express.Router();

var responseTemplate = "<!DOCTYPE html><html><head><title></title></head><body><script>window.parent.postMessage({uuid: '{{uuid}}', payload: '{{payload}}'}, '*');</script></body></html>";

router.post('/', function(req,res,next) {
    var payload = JSON.parse(req.body.payload);

    payload.three = 4;

    var response = responseTemplate.replace(/\{\{uuid\}\}/, req.body.uuid).replace(/\{\{payload\}\}/, JSON.stringify(payload));

    res.send(response);
    res.end();
});

module.exports = router;