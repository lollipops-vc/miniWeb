import { isTurnChild } from '../utils'
export const turnApp = async () => {
  if(!isTurnChild()){
    return 
  }
  console.log('路由切换了');
  
}
