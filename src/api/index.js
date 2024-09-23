/**
 * 导出接口请求函数
 * 
 */

import Axios from 'axios'

import { base } from './base'

import qs from 'query-string'




const api = {
  /**
   * 
   * @param {*} params 
      * {
      * username:'',`
      * email:'',
      * password:'',
      * confirmPwd:''}
   */
  toRegister(params) {
    console.log(qs.stringify(params));

    return Axios.post(base.register, qs.stringify(params))

  },
  toLogin() {

  },

}

export default api