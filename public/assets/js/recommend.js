$.ajax({
    type: 'get',
    url: '/posts/recommend',
    success: res => {
        console.log(res);
        // 避免模板写两次
        let recommendTpl = `
        {{each data}}
        <li>
            <a href="javascript:;">
            <img src="{{$value.thumbnail}}" alt="">
            <span>{{$value.title}}</span>
            </a>
        </li>
        {{/each}}
        `
        let html = template.render(recommendTpl, {
            data: res
        })
        $('.hots ul').html(html)

    }
})