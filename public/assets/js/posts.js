$.ajax({
    type: 'get',
    url: '/posts',
    success: res => {
        let html = template('postsTpl', res)
        $('#postBox').html(html)
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
        url: '/posts',
        data: {
            page: page
        },
        success: res => {
            let html = template('postsTpl', res)
            $('#postBox').html(html)
            let page = template('pageTpl', res)
            $('.pagination').html(page)
        }
    })
}

$.ajax({
    type: 'get',
    url: '/categories',
    success: res => {
        let html = template('categoryTpl', {
            data: res
        })
        $('#categoryBox').html(html)
    }
})

$('#filterForm').on('submit', function () {
    let formData = $(this).serialize()
    console.log(formData);

    $.ajax({
        type: 'get',
        url: '/posts',
        data: formData,
        success: res => {
            let html = template('postsTpl', res)
            $('#postBox').html(html)
            let page = template('pageTpl', res)
            $('.pagination').html(page)
        }
    })
    return false
})