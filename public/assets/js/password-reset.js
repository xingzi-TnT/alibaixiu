$('#modifyForm').on('submit', function () {
    console.log($(this).serialize());

    $.ajax({
        type: 'put',
        url: '/users/password',
        data: $(this).serialize(),
        success: function () {
            location.href = 'login.html'
        }

    })
})