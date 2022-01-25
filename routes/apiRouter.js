const usersCtrl = require('../controllers/usersCtrl.js');
var express = require('express');
 
exports.router = (function() {
    var apiRouter = express.Router();

apiRouter.post("/user",usersCtrl.createUser);
apiRouter.get("/findalluser",usersCtrl.findAllUser);
apiRouter.delete("/deleteuser",usersCtrl.delete);
apiRouter.put("/updateuser",usersCtrl.update);
return apiRouter;

})();
    

