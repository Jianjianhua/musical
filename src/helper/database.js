export const getItem = item=>{
  return JSON.parse(window.localStorage.getItem(item))
}

export const setItem = (item,value)=>{
  window.localStorage.setItem(item,JSON.stringify(value))
}


export const removeItem = item=>{
  window.localStorage.removeItem(item)
}