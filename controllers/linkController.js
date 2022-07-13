const linkController = {
  link: require('../models').Link,
  redirect: async (req, res) => {
    let title = req.params.title

    await linkController.link
      .findOne({ where: { title: title } })
      .then(link => {
        link
          .update({ clicks: link.clicks + 1 }, { where: { title: title } })
          .then(res.redirect(link.url))
          .catch(error => {
            res.redirect('/')
          })
      })
      .catch(error => {
        res.redirect('/')
      })
  },
  addLink: async (req, res) => {
    await linkController.link
      .create(req.body)
      .then(res.redirect('/'))
      .catch(error => {
        res.render('add', { error, body: req.body })
      })
  },
  allLinks: async (req, res) => {
    await linkController.link
      .findAll()
      .then(links => res.render('all', { links: links }))
      .catch(error => res.send(error))
  },
  deleteLink: async (req, res) => {
    let links = await linkController.link.findAll()
    let id = req.params.id

    await linkController.link
      .destroy({
        where: { id: req.params.id }
      })
      .then(() => {
        res.json({ id: id })
      })
      .catch(error => {
        res.send(error)
      })
  },
  loadLinks: async (req, res) => {
    let id = req.params.id

    if (id) {
      if (!(await linkController.link.findOne({ where: { id: id } }))) {
        return res.status(400).send('Link was not found.')
      }
      res.render('edit', { error: false, body: {}, id: id })
    } else {
      res.render('add', { error: false, body: {} })
    }
  },
  editLink: async (req, res) => {
    await linkController.link
      .update(req.body, { where: { id: req.params.id } })
      .then(res.redirect('/'))
      .catch(error => res.render('edit', { error, body: req.body }))
  }
}

module.exports = linkController
