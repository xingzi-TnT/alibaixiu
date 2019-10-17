$('#logout').on('click',function(){
    let bool = confirm('是否退出登录?')
    if(bool){
        $.ajax({
            type:'post',
            url:'/logout',
            success:() => location.href = 'login.html'
        })
    }
})