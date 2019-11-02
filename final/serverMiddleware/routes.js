export default (app) => {
  app.get(`/hello`, (_req, res) => res.status(200).end('no hej'))
}
