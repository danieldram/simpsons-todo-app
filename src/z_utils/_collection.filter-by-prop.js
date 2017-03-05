import deepFreeze from 'deep-freeze'

export const FilterByProperty = (collection, propKey) => {
    deepFreeze(collection)

    return collection
            .filter(o=>!!o[propKey])
            .map(o => o[propKey])


}
