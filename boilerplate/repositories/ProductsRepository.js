export default {
  get: () => Promise.resolve([
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
  ])
}
