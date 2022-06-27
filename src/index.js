/*
 * @Description: Description
 * @Author: Kun Yang
 * @Date: 2022-06-27 16:37:05
 * @LastEditors: Kun Yang
 * @LastEditTime: 2022-06-27 16:44:18
 */
const axios =  require('axios')


axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
  .then(res => {
    console.log('res',res.data);
  })
  .catch(err => {
    console.log('error',err.message);
  })