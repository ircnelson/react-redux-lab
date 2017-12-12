import _ from 'lodash'
import faker from 'faker'

const PER_PAGE = 10

const source = _.times(100, () => ({
    id: faker.random.number(),
    name: faker.name.firstName()
}))

export async function getPaged(page = 1) {
    return new Promise((resolve, reject) => { 

        let offset = (page - 1) * PER_PAGE
        let sourcePaginated = _(source).slice(offset).take(PER_PAGE).value()

        resolve({ data: sourcePaginated, total: source.length })
    })
}