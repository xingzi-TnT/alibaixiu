$('#logo').on('change', function () {
    let fd = new FormData()
    fd.append('logo', this.files[0])
    $.ajax({
        type: 'post',
        url: '/upload',
        data: fd,
        processData: false,
        contentType: false,
        success: res => {
            $('#hiddenLogo').val(res[0].logo)
            $('#logoShow').attr('src', res[0].logo)
        }
    })
})

$('#settingsForm').on('submit', function () {
    $.ajax({
        type: 'post',
        url: '/settings',
        data: $(this).serialize(),
        success: () => location.reload()
    })
    return false
})

$.ajax({
    type: 'get',
    url: '/settings',
    success: res => {
        $('#logoShow').attr('src', res.logo)
        $('#hiddenLogo').val(res.logo)
        $('#title').val(res.title)
        $('input[name="comment"]').prop('checked', res.comment)
        $('input[name="review"]').prop('checked', res.review)
    }
})