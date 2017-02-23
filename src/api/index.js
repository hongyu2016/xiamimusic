const showapi_appid=29545
const showapi_sign='c1f0d56a3e4c4417b1c61f5ba4c04e28'

const _baseUrl = 'http://route.showapi.com/1143-7' //虾米排行
const _baseUrl2 = 'http://route.showapi.com/1143-2'  //阿里排行
export default {
    //榜单列表
    getPlayListByWhere ( id,page) {
        return _baseUrl + '?showapi_appid=' + showapi_appid + '&showapi_sign=' + showapi_sign +'&id='+id+ '&page=' + page
    },
    /*getLrc (id) {
        return _baseUrl2 + '?type=lyric&id=' + id
    },
    getSong (id) {
        return _baseUrl + '?type=url&id=' + id
    },
    getPlayListDetail (id) {
        return _baseUrl2 + '?type=playlist&id=' + id
    },
    getMv (id) {
        return _baseUrl2 + '?type=mv&id=' + id
    },
    search (words) {
        return _baseUrl2 + '?type=search&s=' + words
    }*/
}
