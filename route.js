const express = require('express')
const router = express.Router()



const {
   getnames,
   getname,
   postname,
   putname,
   deletename
} = require('./controller')

router.route('/').get(getnames).post(postname)
router.route('/:id').get(getname).put(putname).delete(deletename)



















module.exports = router;