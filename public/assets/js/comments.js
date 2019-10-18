$.ajax({
    type: 'get',
    url: '/comments',
    success: res => {
        let html = template('commentsTpl', res)
        $('#commentsBox').html(html)
        let page = template('pageTpl', res)
        $('.pagination').html(page)
    }
})


function dateFormat(date) {
    date = new Date(date)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}

function changePage(page) {
    $.ajax({
        type: 'get',
        url: '/comments',
        data: {
            page: page
        },
        success: res => {
            let html = template('commentsTpl', res)
            $('#commentsBox').html(html)
            let page = template('pageTpl', res)
            $('.pagination').html(page)
        }
    })
}

$('#commentsBox').on('click', '.status', function () {
    let id = $(this).parent().attr('data-id')
    let state = $(this).parent().attr('data-status')
    console.log(status);
    $.ajax({
        type: 'put',
        url: '/comments/' + id,
        data: {
            state: state == 1 ? 0 : 1
        },
        success: () => location.reload()
    })
})

$('#commentsBox').on('click', '.delete', function () {
    if (confirm('是否删除')) {
        let id = $(this).parent().attr('data-id')
        $.ajax({
            type: 'delete',
            url: '/comments/' + id,
            success: () => location.reload()
        })
    }
})