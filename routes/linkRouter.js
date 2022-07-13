const express = require('express')
const router = express.Router()
const linkController = require('../controllers/linkController')

router.get('/', linkController.allLinks)

router.get('/add', linkController.loadLinks)

router.post(
  '/add',
  express.urlencoded({ extended: true }),
  linkController.addLink
)

router.get('/edit/:id', linkController.loadLinks)

router.post(
  '/edit/:id',
  express.urlencoded({ extended: true }),
  linkController.editLink
)

router.delete('/:id', linkController.deleteLink)

router.get('/:title', linkController.redirect)

module.exports = router
