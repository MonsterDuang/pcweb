<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .auction-video-box {
        width: 584px;
        position: relative;

        .auction-video {
            height: 300px;
            width: 100%;
            position: relative;
            background: #eaeaea;

            img {
                width: 100%;
                height: 100%;
            }

            video {
                width: 100%;
                height: 100%;
                background: #000;
            }

            .video-mask {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.4) url('../../assets/img/058.png') no-repeat center;
                background-size: 10%;
            }
        }

        .app-mask {
            play-mask();
        }

        .auction-info {
            height: 100px;
            padding: 20px;
            background: $themeBgColor;

            .auction-title {
                font-size: 18px;
                color: #333333;
                line-height: 40px;
                text-warp();
            }

            .info-nums {
                color: #818181;
                font-size: 14px;

                span {
                    padding-right: 40px;
                }
            }
        }
    }
</style>
<template>
    <div class="auction-video-box">
        <div class="auction-video">
            <!-- <img src="" alt=""> -->
            <video crossorigin="anonymous" :src="video.videos[0]"></video>
            <div @click="openPlay" class="video-mask"></div>
            <div v-show="showMask" class="app-mask clearfix">
                <div @click="clsoePlay" class="close-box">
                    <span class="icon-close"></span>
                </div>
                <img src="../../assets/img/qrcode.png" alt="">
                <p>扫描二维码，下载手机APP才可以互动哦!</p>
            </div>
        </div>
        <div class="auction-info">
            <p class="auction-title" v-text="video.title"></p>
            <p class="info-nums">
                <span>{{video.playCount}}播放</span>
                <span>{{video.commentCount}}次评论</span>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "HomeAuctionVideo",
        props: {
            video: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                showMask: false
            };
        },
        methods: {
            openPlay() {
                this.showMask = true;
            },
            clsoePlay() {
                this.showMask = false;
            }
        }
    };
</script>


