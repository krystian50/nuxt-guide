const products = [
  {
    'id': '1',
    'name': 'something 1'
  },
  {
    'id': '2',
    'name': 'something 2'
  },
  {
    'id': '3',
    'name': 'something 3'
  }
]

export default (app) => {
  app.get(`/hello`, (_req, res) => res.status(200).end('no hej'))
  app.get(`/products`, (_req, res) => res.status(200).send(products))
  app.post(`/products`, (req, res) => {

  })
}
