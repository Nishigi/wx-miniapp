const baseURL='http://10.36.149.29:9999'
function fetch(url,method,data){
    return new Promise((resolve,reject)=>{
      wx.request({
        url: baseURL+url,
        method,
        data,
        headers:{
          Authorization:wx.getStorageSync('token')
        },
        success(res){
          resolve(res.data)
        },
        fail(err){
          wx.showToast({
            title:'network error',
            icon:"error",
            duration:2000
          })
          // reject(err)
        }
      })
    })
}

function fetchLogin(data){
  return fetch('/api/v1/weapp/login','post',data)
}
module.exports={
  fetchLogin
}