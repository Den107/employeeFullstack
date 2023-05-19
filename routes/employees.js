const express = require('express');
const {auth} = require("../middleware/auth");
const router = express.Router();

/* api/employees */
router.get('/', auth, ()=>console.log('get all emp'))
/* api/employees/123 */
router.get('/:id', auth, ()=>console.log('get one emp'))
/* api/employees */
router.post('/', auth, ()=>console.log('add emp'))
/* api/employees/123 */
router.delete('/:id', auth, ()=>console.log('delete emp'))
/* api/employees/123 */
router.put('/:id', auth, ()=>console.log('edit emp'))

module.exports = router;