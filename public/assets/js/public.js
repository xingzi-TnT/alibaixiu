$.ajax({
    type: 'get',
    url: '/posts/random',
    success: res => {
        var tpl = `
        {{each data}}
            <li>
                <a href="javascript:;">
                <p class="title">{{$value.title}}</p>
                <p class="reading">阅读{{$value.meta.views}}</p>
                <div class="pic">
                    <img src="{{$value.thumbnail}}" alt="">
                </div>
                </a>
            </li>
        {{/each}}
        `
        let html = template.render(tpl, {
            data: res
        })
        $('.random').html(html)
    }
})

$.ajax({
    type: 'get',
    url: '/comments/lasted',
    success: res => {

        let tpl = `      
        {{each data}}
        <li>
          <a href="javascript:;">
            <div class="avatar">
              <img src="{{$value.author.avatar}}" alt="">
            </div>
            <div class="txt">
              <p>
                <span>{{$value.author.nickName}}</span>{{$value.createAt.split('T')[0]}}说:
              </p>
              <p>{{$value.content}}</p>
            </div>
          </a>
        </li>
        {{/each}}`


        let html = template.render(tpl, {
            data: res
        })
        $('.discuz').html(html)
    }
})

$.ajax({
    type: 'get',
    url: '/categories',
    success: res => {
        let tpl = `
        {{each data}}
        <li><a href="list.html?categoryId={{$value._id}}"><i class="fa fa-glass"></i>{{$value.title}}</a></li>
        {{/each}}
        `

        let html = template.render(tpl, {
            data: res
        })

        $('#navBox').html(html)
    }
})

function getUrlParams(key) {
    let str = location.search.substr(1)
    let arr = str.split('&')
    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr[i].split('=')
        if (arr1[0] == key) {
            return arr1[1]
        }
    }
}

$('.search form').on('change', function () {
    $(this).find('.keys').val().trim()
    location.href = 'search.html' + key
    return false
})