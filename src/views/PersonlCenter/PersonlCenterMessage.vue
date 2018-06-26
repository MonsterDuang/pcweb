<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .message-view {
        padding-top: 28px;
        width: 100%;
    }

    .message-item {
        height: 100px;
        width: 100%;
        padding: 10px 20px;
        background: #fff;
        margin-bottom: 20px;

        .item-img {
            float: left;
            width: 80px;
            height: 80px;
            background: #d6d6d6;
            margin-right: 10px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .item-info {
            width: 1070px;
            float: left;
            line-height: 20px;
        }

        h4 {
            font-size: 18px;
            color: #333;
            font-weight: normal;
        }

        .time {
            color: #b3b3b3;
            font-size: 14px;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
            color: #848484;
            text-wrap();
        }
    }

    .my-pagination {
        padding: 20px 0;
    }
</style>
<template>
    <div class="message-view">
        <div class="container">
            <div class="message-item clearfix" v-for="(message,index) in messageList" :key="message.id">
                <div class="item-img"><img :src="message.cover" alt=""></div>
                <div class="item-info">
                    <h4 v-text="message.title"></h4>
                    <p class="time" v-text="$_dateFormat(message.updatedAt)"></p>
                    <p v-text="message.content"></p>
                </div>
            </div>
            <el-pagination class="my-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout="prev,pager,next,slot" :total="total">
                <span>共{{totalPage}}页</span>
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import { getMessageList } from '../../api/my'
    export default {
        name: 'PersonlCenterMessage',
        data() {
            return {
                messageList: [],
                pageIndex: 1,
                pageSize: 5,
                total: 0
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            }
        },
        created() {
            this.getMessageList()
        },
        methods: {
            handleCurrentChange(pageIndex) {
                this.pageIndex = pageIndex
                this.getMessageList()
            },
            getMessageList() {
                getMessageList({
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }).then((res) => {
                    this.messageList = res.data.objects
                    this.pageIndex = res.data.pageIndex
                    this.total = res.data.total
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
</script>

