

const exit = () => undefined

const execute = ({collection, key, value}) => {
  //** IF OBJ.VAL == VALUE THEN RETURN NEW ARRAY WITHOUT OBJ **//
  const map = (o, i, arr) =>  (o[key]===value) ? [...arr.slice(0,i), ...arr.slice(i+1)] : undefined
  const truthy = (o) => !!o
  const firstElementOnly = (a,b) => a


  return collection
          .map(map)
          .filter(truthy)
          .reduce(firstElementOnly)

}


export const RemoveFromCollectionById = (collection, key, value) =>
(!!!key  && !!!value ) ? exit() : execute({collection, key, value})
