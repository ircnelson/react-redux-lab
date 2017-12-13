import _ from 'lodash'
import faker from 'faker'

const PER_PAGE = 10

const source = _.times(100, () => ({
  id: faker.random.number(),
  name: faker.name.firstName()
}))

export async function getAll(filter) {
  return new Promise((resolve, reject) => {
    const { page } = filter

    const offset = (page - 1) * PER_PAGE
    const sourcePaginated = _(source)
      .slice(offset)
      .take(PER_PAGE)
      .value()

    resolve({ data: sourcePaginated, total: source.length })
  })
}
