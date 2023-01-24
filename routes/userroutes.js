const router = require('express').Router();
const usercontrollers = require('../controllers/usercontroller');
router.route('/users').get(usercontrollers.getallusers).post(usercontrollers.createusers);
router
  .route('/user/:id')
  .get(usercontrollers.getindivisualusers)
  .patch(usercontrollers.updateusers)
  .delete(usercontrollers.deleteusers);
  module.exports = router;
