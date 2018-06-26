<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .wares-card {
        width: 232.5px;
        cursor: pointer;

        .wares-img {
            background: #d6d6dd;
            height: 232.5px;
            width: 232.5px;
            text-align: center;
            overflow: hidden;

            img {
                height: 100%;
                object-fit: scale-down;
                width: 100%;
            }
        }

        &:hover .wares-info {
            background: #4fa2a9;

            .wares-name {
                color: #ffffff;
            }

            .wares-worth {
                span, .wares-money {
                    color: #fff;
                }
            }
        }

        .white {
            background: #fff;
        }

        .black {
            background: #f4f4f4;
        }

        .wares-info {
            transition: background 0.43s;
            padding: 20px;
            height: 80px;

            .wares-name {
                text-wrap();
                font-size: 14px;
                margin-bottom: 20px;
                transition: color 0.43s;
            }

            .wares-worth {
                font-size: 12px;

                span {
                    float: right;
                    color: #d6d6d6;
                    transition: color 0.43s;
                }

                span.wares-money {
                    float: left;
                    color: $themeColor;
                }
            }
        }
    }
</style>
<template>
    <div class="wares-card" :style="{width:width+'px'}" @click="toDetail">
        <div class="wares-img">
            <img :src="photos[0]" :alt="goods.description">
        </div>
        <div class="wares-info" :class="infoBg">
            <p class="wares-name">{{goods.name}}</p>
            <p class="wares-worth  clearfix">
                <span class="wares-money">¥{{goods.price}}</span>
                <span v-if="goods.vol">{{goods.vol}}人已买</span>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "BaseWaresCard",
        props: {
            width: {
                type: Number,
                default: 232.5
            },
            infoBg: {
                type: String,
                default: 'white'
            },
            goods: {
                required: true,
                type: Object
            }
        },
        data() {
            return {};
        },
        computed: {
            photos() {
                return this.goods.photos || []
            }
        },
        methods: {
            toDetail() {
                if (this.goods.shop) {
                    this.$router.push({ name: 'waresDetail', params: { goodsID: this.goods.id } })
                } else {
                    this.$router.push({ name: 'pickGoods', params: { goodsID: this.goods.id } })
                }
            }
        }
    };
</script>
