<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .home-live-view {
        padding-bottom: 30px;
    }

    .ad-bit-box {
        width: 100%;
        height: 300px;
        background: #d6d6d6;
        text-align: center;
        line-height: 300px;
        font-size: 18px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .business-list {
        margin-top: 30px;
        min-height: 580px;

        .business-container {
            float: left;
            margin-right: 8px;
            margin-bottom: 8px;

            &:nth-child(2n) {
                margin: 0;
            }
        }
    }

    .not-data {
        margin-top: 20px;
        background: #ffffff;
        width: 100%;
        height: 380px;
        color: #989898;
        line-height: 380px;
        text-align: center;
        font-size: 18px;
    }
</style>
<template>
    <div class="home-live-view">
        <div class="container">
            <div class="ad-bit-box">
                <home-ad-area :poster="poster" :height="300"></home-ad-area>
            </div>
            <div class="business-list clearfix" v-if="lvsList.length>0">
                <div class="business-container" v-for="(item,index) in lvsList" :key="item.id">
                    <home-business-card :lvs="item"></home-business-card>
                </div>
            </div>
            <div v-else class="not-data">
                暂无视频直播
            </div>
        </div>
    </div>
</template>
<script>
    import HomeBusinessCard from "./HomeBusinessCard.vue";
    import HomeAdArea from './HomeADArea.vue'
    import { getLvsList } from '../../api/lvs'
    import { getHomeData } from '../../api/home'
    export default {
        name: "HomeLiveView",
        components: {
            HomeBusinessCard,
            HomeAdArea
        },
        data() {
            return {
                pageIndex: 1,
                pageSize: 10,
                lvsList: [],
                poster: []
            };
        },
        created() {
            this.$store.dispatch("gotoPart");
            this.getLvsData();
            this.getPoster();
        },
        methods: {
            getLvsData() {
                getLvsList({
                    pageIndex: 1,
                    pageSize: 10
                }).then((res) => {
                    this.lvsList = res.data.objects.length > 0 ? res.data.objects : '1'.repeat(6).split('').map((e, index) => { return { id: index, title: '直播房间' + index, shop: { name: '商店' + index } } })
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            getPoster() {
                getHomeData().then((res) => {
                    this.poster = res.data.topAuctions
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            }
        }
    };
</script>
