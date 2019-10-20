$.ajax({
    type: 'get',
    url: '/slides',
    success: res => {
        let html = template('slidesTpl', {
            data: res
        })
        $('#slidesBox').html(html)
    }
})



$('#file').on('change', function () {
    let fd = new FormData()
    fd.append('avatar', this.files[0])
    $.ajax({
        type: 'post',
        url: '/upload',
        data: fd,
        processData: false,
        contentType: false,
        success: res => $('#hiddenImage').val(res[0].avatar)
    })
})

$('#slidesForm').on('submit', function () {
    $.ajax({
        type: 'post',
        url: '/slides',
        data: $(this).serialize(),
        success: () => location.reload()
    })
    return false
})

$('#slidesBox').on('click', '.delete', function () {
    let id = $(this).attr('data-id')
    $.ajax({
        type: 'delete',
        url: `/slides/${id}`,
        success: () => location.reload()
    })
})