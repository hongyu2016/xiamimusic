import store from '../../src/store/index.js'

export default {
    playMusic:function(index){
        this.setPlayInfo(index);
        store.dispatch('PLAYER_ISDISPLAY_ACTION',true);
        store.dispatch('PLAYER_PLAYSTATE_ACTION',true);
    },
    setPlayInfo:function (index){
        this.nowIndex = index;
        this.songList = store.getters.GET_SONG_LIST;
        store.dispatch('PLAYER_ACTION', {
            singerPic: this.songList[index].albumpic_big,
            singerName: this.songList[index].singername,
            singName: this.songList[index].songname,
            // singerBigPic:this.songList[index].albumpic_big,
            songid: this.songList[index].songid,
            nowIndex: index
        });
        //store.dispatch('LYRIC_ACTION','');
        this.setPlay();

    },
    setPlay:function (){
        this.targetNumber = 0;
        this.audioEle.src = this.songList[this.nowIndex].url || this.songList[this.nowIndex].m4a;
        this.audioEle.play();
        //this.getLyric();
    },
    playState:function (){
        if (this.audioEle.paused) {
            store.dispatch('PLAYER_PLAYSTATE_ACTION', true);
            this.audioEle.play();
        } else {
            store.dispatch('PLAYER_PLAYSTATE_ACTION', false);
            this.audioEle.pause();
        }
    },
    nextPlay:function (){
        //clearInterval(this.timer);
        if (this.nowIndex == this.songList.length - 1) {
            this.nowIndex = -1;
        }
        this.nowIndex++;
        this.setPlayInfo(this.nowIndex);
    },
    isEnded:function (){
        var _this = this,
            smallBar = document.getElementById('small-progress'); //进度条
        this.audioEle = document.getElementById('audio');


        this.audioEle.addEventListener('ended', function() {
            _this.nextPlay();
        });

        //监听播放进度 进度条
        this.audioEle.ontimeupdate = function (event) {

            var scale = parseInt(_this.audioEle.currentTime) / parseInt(_this.audioEle.duration) * 100 + '%',
                nowCurrentTime = _this.audioEle.currentTime.toFixed(2);

            _this.getPlayerTime(_this.audioEle.duration, _this.audioEle.currentTime);
            smallBar.style.display = 'block';
            smallBar.style.width = scale;
            //_this.bigBar&&_this.bigBar.width(scale);
            // _this.bigDot&&_this.bigDot.css({
            //     left:scale
            // });

            //更新歌词
            /*if(_this.lyricList && _this.lyricList.length) {
                for(let i = 0,len = _this.lyricList.length;i<len;i++){
                    if(i > _this.targetNumber && nowCurrentTime  > _this.lyricList[i][0] ){
                        _this.targetNumber = i;
                        store.dispatch('LYRIC_ACTION',_this.lyricList[i][1]);
                        break;
                    }
                }
            }*/
        };
    },
    getPlayerTime:function (time, nowTime){
        this.durationTime = time;
        store.dispatch('PLAYER_TIME_ACTION', {
            songTime: this.toDouble(parseInt(time / 60)) + ':' + this.toDouble(parseInt(time % 60)),
            songNowTime: this.toDouble(parseInt(nowTime / 60)) + ':' + this.toDouble(parseInt(nowTime % 60))
        });
    },

    getTime:function (){
        var time = new Date();
        return '' + time.getFullYear() + this.toDouble(time.getMonth() + 1) + this.toDouble(time.getDate()) + this.toDouble(time.getHours()) + this.toDouble(time.getMinutes()) + this.toDouble(time.getSeconds());
    }, //获得随机时间戳
    toDouble:function (num){
        return num < 10 ? '0' + num : num;
    }
    /*playMusic (index){
        this.setPlayInfo(index);
        store.dispatch('PLAYER_ISDISPLAY_ACTION',true);
        store.dispatch('PLAYER_PLAYSTATE_ACTION',true);
    },
    setPlayInfo (index){
        this.nowIndex = index;
        this.songList = store.getters.GET_SONG_LIST;
        store.dispatch('PLAYER_ACTION', {
            singerPic: this.songList[index].albumpic_big,
            singerName: this.songList[index].singername,
            singName: this.songList[index].songname,
            // singerBigPic:this.songList[index].albumpic_big,
            songid: this.songList[index].songid,
            nowIndex: index
        });
        //store.dispatch('LYRIC_ACTION','');
        this.setPlay();

    },
    setPlay (){
        this.targetNumber = 0;
        this.audioEle.src = this.songList[this.nowIndex].url || this.songList[this.nowIndex].m4a;
        this.audioEle.play();
        //this.getLyric();
    },
    playState (){
        if (this.audioEle.paused) {
            store.dispatch('PLAYER_PLAYSTATE_ACTION', true);
            this.audioEle.play();
        } else {
            store.dispatch('PLAYER_PLAYSTATE_ACTION', false);
            this.audioEle.pause();
        }
    },
    nextPlay (){
        //clearInterval(this.timer);
        if (this.nowIndex == this.songList.length - 1) {
            this.nowIndex = -1;
        }
        this.nowIndex++;
        this.setPlayInfo(this.nowIndex);
    },
    isEnded (){
        let _this = this,
            smallBar = document.getElementById('small-progress'); //进度条
        this.audioEle = document.getElementById('audio');


        this.audioEle.addEventListener('ended', () => {
            _this.nextPlay();
        });

        //监听播放进度 进度条
        this.audioEle.ontimeupdate = function (event) {

            let scale = parseInt(_this.audioEle.currentTime) / parseInt(_this.audioEle.duration) * 100 + '%',
                nowCurrentTime = _this.audioEle.currentTime.toFixed(2);

            _this.getPlayerTime(_this.audioEle.duration, _this.audioEle.currentTime);
            smallBar.style.display = 'block';
            smallBar.style.width = scale;
            //_this.bigBar&&_this.bigBar.width(scale);
            // _this.bigDot&&_this.bigDot.css({
            //     left:scale
            // });

            //更新歌词
			/!*if(_this.lyricList && _this.lyricList.length) {
			 for(let i = 0,len = _this.lyricList.length;i<len;i++){
			 if(i > _this.targetNumber && nowCurrentTime  > _this.lyricList[i][0] ){
			 _this.targetNumber = i;
			 store.dispatch('LYRIC_ACTION',_this.lyricList[i][1]);
			 break;
			 }
			 }
			 }*!/
        };
    },
    getPlayerTime (time, nowTime){
        this.durationTime = time;
        store.dispatch('PLAYER_TIME_ACTION', {
            songTime: this.toDouble(parseInt(time / 60)) + ':' + this.toDouble(parseInt(time % 60)),
            songNowTime: this.toDouble(parseInt(nowTime / 60)) + ':' + this.toDouble(parseInt(nowTime % 60))
        });
    },

    getTime (){
        let time = new Date();
        return '' + time.getFullYear() + this.toDouble(time.getMonth() + 1) + this.toDouble(time.getDate()) + this.toDouble(time.getHours()) + this.toDouble(time.getMinutes()) + this.toDouble(time.getSeconds());
    }, //获得随机时间戳
    toDouble (num){
        return num < 10 ? '0' + num : num;
    }*/
}