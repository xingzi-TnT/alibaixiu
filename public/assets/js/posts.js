$.ajax({
    type: 'get',
    url: '/posts',
    success: res => {
        let html = template('postsTpl', res)
        $('#postBox').html(html)
    }
})

function dateFormat(date) {
    date = new Date(date)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}