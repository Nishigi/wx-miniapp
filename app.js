// app.js

const { fetchLogin } = require("./utils/request")

//入口文件
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('获取code成功',res);
        const code=res.code
        fetchLogin({code}).then(res=>{
          console.log('登陆成功',res);
          wx.setStorageSync('token', res.data.token)
        })
      }
    })

  },

  globalData: {
    userInfo: null
  }
})
