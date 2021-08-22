// const baseURL='http://10.36.149.29:9999'
function fetch(url,method,data){
    return new Promise((resolve,reject)=>{
      wx.request({
        url,
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
  return fetch('http://10.36.149.29:9999/api/v1/weapp/login','post',data)
}
function fetchMusic(data){
  return fetch('https://c.y.qq.com/soso/fcgi-bin/client_search_cp','post',data)
}
module.exports={
  fetchLogin,
  fetchMusic
}