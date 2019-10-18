$.ajax({
    type: 'get',
    url: '/categories',
    success: res => {
        let html = template('categoryTpl', {
            data: res
        })
        $('#category').html(html)
    }
})

$('#feature').on('change', function () {
    let fd = new FormData()
    fd.append('avatar', this.files[0])

    $.ajax({
        type: 'post',
        url: '/upload',
        processData: false,
        contentType: false,
        data: fd,
        success: res => {
            $('.thumbnail').attr('src', res[0].avatar).show()
            $('#thumbnail').val(res[0].avatar)
        }
    })
})

$('#addForm').on('submit', function () {
    $.ajax({
        type: 'post',
        url: '/posts',
        data: $(this).serialize(),
        success: res => location.href = 'posts.html'
    })
    return false
})