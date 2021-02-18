window.onload = () => {
  let checkTimer = setInterval(() => {
  let checked = $('.el-checkbox').length ? $('.el-checkbox')[0].className.indexOf('is-checked') > -1 : false
  if (!checked) {
    let timer = setInterval(() => {
      if (checked) {
        clearInterval(timer)
      } else {
        const allCheckBox = Array.from($('.el-checkbox'))
        if (allCheckBox.length) {
          allCheckBox.map(v=> {
            v.click()
          })
          checked = true
        }
      }
    },200)
  } 
  },800)
}