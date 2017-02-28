const showapi_appid=29545
const showapi_sign='c1f0d56a3e4c4417b1c61f5ba4c04e28'

const _baseUrl = 'http://route.showapi.com/213-4' //qq榜单
const _baseUrl2 = 'http://route.showapi.com/213-1'  //根据歌名、人名查询歌曲
export default {
    //榜单列表
    getPlayListByWhere ( id,page) {
        return _baseUrl + '?showapi_appid=' + showapi_appid + '&showapi_sign=' + showapi_sign +'&topid='+id+ '&page=' + page
    },
    search (keyword,page) {
        return _baseUrl2 + '?showapi_appid=' + showapi_appid + '&showapi_sign=' + showapi_sign+'&keyword=' + keyword +'&page='+page
    }
}
