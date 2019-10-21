// 获取地址栏的分类id值
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

let categoryId = getUrlParams('categoryId')

$.ajax({
    type: 'get',
    url: `/posts/category/${categoryId}`,
    success: res => {
        let html = template('listTpl', {
            data: res
        })
        $('#listBox').html(html)
        $('.new h3').text(res[0].category.title)
    }
})