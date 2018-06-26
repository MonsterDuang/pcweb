<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .top-area {
        width: 1200px;
        position: relative;
        overflow: hidden;
        height: 150px;
        text-align: center;
        font-size: 24px;
        background: #e0e0e0;
    }

    .top-block {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: left 0.45s;
    }

    .top-box {
        width: 1200px;
        height: 100%;
        float: left;
        background: #e0e0e0;

        a {
            display: block;
            width: 100%;
            height: 100%;
        }

        img {
            height: 100%;
        }
    }
</style>

<template>
    <div class="top-area" :style="{height:`${height}px`}">
        <div class="top-block clearfix" :style="{width: `${poster.length*1200}px`,left:`${s*-1200}px`}">
            <div class="top-box" v-for="(item,index) in poster" :key="item.id">
                <a href="javascripts:void(0)">
                    <img :src="item.shop.logo" :alt="item.shop.name">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HometopArea',
        data() {
            return {
                s: 0,
                timer: null
            }
        },
        props: {
            poster: {
                type: Array
            },
            height: {
                type: Number,
                default: 150
            }
        },
        mounted() {
            var self = this
            self.$nextTick(() => {
                self.start()
            })
        },
        destroyed() {
            window.clearInterval(this.timer)
        },
        methods: {
            start() {
                this.timer = setInterval(() => {
                    this.s++
                    if (this.s >= this.poster.length) {
                        this.s = 0
                    }
                }, 3000)
            }
        }
    }
</script>

