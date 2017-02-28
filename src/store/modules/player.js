export default {
    state:{
        songList:[], //歌曲列表
        searchList:[],  //搜索歌曲列表 -存储搜索列表用
        isDisplay:false,  //显示播放条
        nowIndex:0,   //当前顺序
        singerPic:'',  //歌曲图片
        singerName:'', //歌手名字
        playState:false, //播放状态
        singName:'',  //歌曲名称
        songTime:'', //歌曲时长
        songNowTime:'', //歌曲当前时间
        songid:'', //歌曲id
        nowPages:0,  //当前页码
        allPages:0, //总页数
        searchKey:'' //搜索词-存储搜索列表用
    },
    mutations:{
        SET_PLAYER_TIME (state, data) {
            state.songTime = data.songTime;
            state.songNowTime = data.songNowTime;
        },
        SET_SONG_LIST (state, data) {
            state.songList.length = 0;
            data.forEach( (value) => {
                state.songList.push(value);
            });
        },
        SET_PLAYER_ISDISPLAY (state, data) {
            state.isDisplay = data;
        },
        SET_PLAYER_PLAYSTATE (state, data){
            state.playState = data;
        },
        SET_PLAYER_INFO (state , data) {
            data.singerPic && (state.singerPic = data.singerPic);
            data.nowIndex && (state.nowIndex = data.nowIndex);
            data.singerName && (state.singerName = data.singerName);
            data.singName && (state.singName = data.singName);

            data.songid && (state.songid = data.songid);
        }
    },
    getters:{
        GET_PLAYER_INFO: (state) => {
            return {
                singerPic: state.singerPic,
                singerName: state.singerName,
                singName: state.singName,
                nowIndex: state.nowIndex,

                songid:state.songid
            }
        },
        GET_SONG_LIST: (state) => {
            return state.songList
        },
        GET_PLAYER_ISDISPLAY : (state) => {
            return state.isDisplay
        },
        GET_PLAYER_PLAYSTATE: (state) => {
            return state.playState
        },
        GET_PLAYER_TIME : (state) => {
            return {
                songTime:state.songTime,
                songNowTime:state.songNowTime
            }
        }
    },
    actions:{
        // 播放器面板信息
        PLAYER_ACTION ({ commit, state }, data) {
            commit('SET_PLAYER_INFO',data);
        },
        // 设置播放器歌曲列表
        SONG_LIST_ACTION ({ commit, state }, data) {
            commit('SET_SONG_LIST',data);
        },
        PLAYER_ISDISPLAY_ACTION ({ commit, state }, data) {
            commit('SET_PLAYER_ISDISPLAY',data);
        },
        PLAYER_PLAYSTATE_ACTION ({ commit, state }, data) {
            commit('SET_PLAYER_PLAYSTATE',data);
        },
        PLAYER_TIME_ACTION ({ commit, state }, data) {
            commit('SET_PLAYER_TIME',data);
        },
    }
}
