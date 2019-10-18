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