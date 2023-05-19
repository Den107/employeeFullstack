const express = require('express');
const {auth} = require("../middleware/auth");
const {getAll, getOne, add, remove, edit} = require("../controllers/employees");
const router = express.Router();

/* api/employees */
router.get('/', auth, getAll)
/* api/employees/123 */
router.get('/:id', auth, getOne)
/* api/employees */
router.post('/', auth, add)
/* api/employees/123 */
router.delete('/:id', auth, remove)
/* api/employees/123 */
router.put('/:id', auth, edit)

module.exports = router;