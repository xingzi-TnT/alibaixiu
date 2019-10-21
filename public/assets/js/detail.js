let id = getUrlParams('id')
let state = 0
$.ajax({
    type: 'get',
    url: '/posts/' + id,
    success: res => {
        let html = template('detailTpl', res)
        $('.article').html(html)
    }
})

$('.article').on('click', '#like', function () {
    $.ajax({
        type: 'post',
        url: 'posts/fabulous/' + id,
        success: function () {
            alert('点赞成功')
        }
    })
})

$.ajax({
    type: 'get',
    url: 'settings',
    success: res => {
        if (res.review == false) {
            state = 0
        } else {
            state = 1
        }
        if (res.comment == true) {
            $('.comment').show()
        }
    }
})

$('comment form').on('submit', function () {
    let content = $(this).find('textarea').val()
    $.ajax({
        type: 'get',
        url: '/comments',
        data: {
            content: content,
            post: id,
            state: state
        },
        success: res => {
            alert('评论成功')
            $(this).find('textarea').val('')
        }
    })
    return false
})