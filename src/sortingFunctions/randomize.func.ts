import { SortFunc } from './SortingFunction.type'

export const randomizeFunc:SortFunc = ({array,setArray})=>{
  setArray(array.sort(() => 0.5 - Math.random()).slice(0))
}