import axios from 'axios'

export default (app) => {
  app.get(`/hello`, (_req, res) => res.status(200).end('no hej'))
  app.get(`/products`, async (_req, res) => {
    const { data } = (await axios.get('http://127.0.0.1:3001/products'))
    res.status(200).send(data)
  })
  app.post(`/products`, async (req, res) => {
    const { data } = (await axios.post('http://127.0.0.1:3001/products', req.body))
    res.status(200).send(data)
  })
}
