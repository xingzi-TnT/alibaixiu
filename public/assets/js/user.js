$.ajax({
    type: 'get',
    url: '/users',
    success: res => {
        let html = template('usersTpl', {
            data: res
        })
        $('#usersBox').html(html)
    }
})

$('#userForm').on('submit', function () {
    let formData = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/users',
        data: formData,
        success: () => {
            location.reload()
        }
    })
    return false
})

$('#avatar').on('change', function () {
    let fd = new FormData();
    fd.append('avatar', this.files[0])


    $.ajax({
        type: 'post',
        url: '/upload',
        processData: false,
        contentType: false,
        data: fd,
        success: res => {
            // 实现头像预览功能，设置给页面元素即可
            $('#preview').attr('src', res[0].avatar);
            //设置一个隐藏域，这里的路径是需要发送给服务器的
            $('#hiddenAvatar').val(res[0].avatar)
        }
    })
})

$('#usersBox').on('click', '.edit', function () {
    let id = $(this).attr('data-id')
    console.log(id);

    $.ajax({
        type: 'get',
        url: '/users/' + id,
        success: res => {
            console.log(res);

            let html = template('modifyTpl',
                res
            )
            console.log(html);

            $('#modifyBox').html(html)
        }
    })
})

$('#usersBox').on('click', '.del', function () {
    if (confirm('是否删除')) {
        let id = $(this).attr('data-id')
        $.ajax({
            type: 'delete',
            url: '/users/' + id,
            success: () => location.reload()
        })
    }
})

$('#checkAll').on('change', function () {
    var bool = $(this).prop('checked')
    let checkList = $('#usersBox input[type="checkbox"]')
    checkList.prop('checked', bool)
    if (bool) {
        $('#deleteAll').show()
    } else {
        $('#deleteAll').hide()
    }
})

$('#usersBox').on('change', 'input[type="checkbox"]', function () {
    if ($('#usersBox input[type="checkbox"]').length == $('#usersBox input[type="checkbox"]:checked').length) {
        $('#checkAll').prop('checked', true)
    } else {
        $('#checkAll').prop('checked', false)
    }

    if ($('#usersBox input[type="checkbox"]:checked').length > 0) {
        $('#deleteAll').show()
    } else {
        $('#deleteAll').hide()
    }
})

$('#deleteAll').on('click', function () {
    let checkList = $('#usersBox input[type="checkbox"]:checked')
    let str = ''
    checkList.each((index, item) => {
        str += $(item).attr('data-id') + '-'
    })
    str = str.substr(0, str.length - 1)
    $.ajax({
        type: 'delete',
        url: '/users/' + str,
        success: () => location.reload()
    })
})