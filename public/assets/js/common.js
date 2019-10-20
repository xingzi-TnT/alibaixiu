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
    url: '/user/' + userId,
    success: res => {
        $('.profile .name').text(res.nickName)
        $('.profile img.avatar').attr('src', res.avatar)
    }
})