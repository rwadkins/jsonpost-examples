var express = require('express');
var router = express.Router();

var responseTemplate = "<!DOCTYPE html><html><head><title></title></head><body><script>window.parent.postMessage(JSON.stringify({uuid: '{{uuid}}', payload: '{{payload}}'}), '{{origin}}');</script></body></html>";

router.post('/', function(req,res,next) {
    var payload = processPayload(JSON.parse(req.body.payload));

    var response = responseTemplate
                    .replace(/\{\{uuid\}\}/, req.body.uuid)
                    .replace(/\{\{payload\}\}/, JSON.stringify(payload))
                    .replace(/\{\{origin\}\}/, req.body.origin);

    res.send(response);
    res.end();
});

function processPayload(payload) {
    var menagerie = {
        Dog: "Dogs are great and so are you!",
        Cat: "Cats are nice, but Dogs are better ;)",
        Bird: "Birds are, well, for the birds"
    };

    return {
        name : payload.name,
        message : menagerie[payload.animal]
    };
}

module.exports = router;
