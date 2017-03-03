import {RemoveFromCollectionById} from './_collection.remove-by-id'
import deepFreeze from 'deep-freeze'

test('RemoveFromCollectionById: returns back a new copy of a collection excluding an object with specified key & id value', ()=>{
    const collection  = [{id:1}, {id:2}, {id:3}]
    deepFreeze(collection)

    const id = 2
    const result = RemoveFromCollectionById(collection, 'id', id)
    const expected = [{id:1},{id:3}]

    expect(result).toEqual(expected)
})


test('RemoveFromCollectionById: fails gracefully when no params are provided', ()=>{
    const collection  = [{id:1}, {id:2}, {id:3}]
    deepFreeze(collection)

    const id = 2
    const result = RemoveFromCollectionById(collection)
    const expected = undefined

    expect(result).toEqual(expected)
})
