import { UserData } from './__mock.user-data'
import { FilterByProperty } from './_collection.filter-by-prop'

test('FilterByProperty returns a new collection of only names in a dataset', ()=>{

  const result = FilterByProperty(UserData, 'name')
  const expected = [
    "Leanne Graham",
    "Ervin Howell"
  ]

  expect(result).toEqual(expected)

})
