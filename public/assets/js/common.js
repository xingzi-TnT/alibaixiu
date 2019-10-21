$('#logout').on('click', function () {
    let bool = confirm('是否退出登录?')
    if (bool) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: () => location.href = 'login.html'
        })
    }
})


$.ajax({
    type: 'get',
    url: `/users/${userId}`,
    success: res => {
        console.log(res);

        $('.profile .name').text(res.nickName)
        $('.profile .avatar').attr('src', res.avatar)
        $('.profile').show()
    }
})