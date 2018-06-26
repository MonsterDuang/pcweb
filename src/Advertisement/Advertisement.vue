<template>
    <div>


        <div class="hidden-md-only hidden-xs-only hidden-sm-only">
                <div style="position: relative">
                    <img style="width: 100%" src="../../static/images/images/bg.jpg" alt="">
                </div>

                <div>
                    <div class="nav_ clearfix">
                        <p class="clearfix" style="font-size: 35px;font-family: 宋体">
                            为什么选择艺方购
                        </p>
                        <p style="color(121,127,127);font-size: 12px;margin-top: 5px">
                            我们有专业的鉴定师为您鉴定收藏品真伪，有专业的
                            <br>
                            售前售后服务，随时随地，全程指导
                        </p>
                    </div>

                </div>

                <div>

                    <div class="but clearfix">
                        <div class="pr clearfix">
                            <span class="span_1">
                                <img src="../../static/images/C.png" alt="">
                                <div class="img_">
                                    <img id="imgID" src="../../static/images/code_a.png" alt="">
                                </div>
                            </span>

                            <p class="P_1">一分钟快速开拍</p>
                            <p class="P_">品牌用手机拍照后快速上传</p>
                        </div>
                        <div class="pr clearfix">
                            <span class="span_2">
                                <img src="../../static/images/S.png" alt="">
                                <div class="img_">
                                    <img id="imgID2" src="../../static/images/code_a.png" alt="">
                                </div>
                            </span>
                            <p class="P_1">快速鉴定</p>
                            <p class="P_">平台专业老师全天候在线
                                <br>
                                快速准确鉴定</p>
                        </div>
                        <div class="pr clearfix">
                            <span class="span_3">
                                <img src="../../static/images/LD.png" alt="">
                                <div class="img_">
                                    <img id="imgID3" src="../../static/images/code_a.png" alt="">
                                </div>
                            </span>
                            <p class="P_1">第三方担保，谨防骗子</p>
                            <p class="P_">交易过程中资金艺方购保管
                                <br>
                                有效保证交易双方权益</p>
                        </div>
                    </div>

                    <div class="but clearfix">
                        <div class="pr clearfix">
                            <span class="span_4">
                                <img src="../../static/images/S-.png" alt="">
                                <div class="img_">
                                    <img id="imgID4" src="../../static/images/code_a.png" alt="">
                                </div>
                            </span>

                            <p class="P_1">快速结算零手续费</p>
                            <p class="P_">最快当天可结算，无资金周
                                <br>
                                转压力</p>
                        </div>
                        <div class="pr clearfix">
                            <span class="span_5">
                                <img src="../../static/images/L.png" alt="">
                                <div class="img_">
                                    <img id="imgID5" src="../../static/images/code_a.png" alt="">
                                </div>
                            </span>
                            <p class="P_1">海量用户，促进成交</p>
                            <p class="P_">艺方购拥有海量用户，全国
                                <br>
                                各地</p>
                        </div>
                        <div class="pr clearfix">
                            <span class="span_6">
                                <img src="../../static/images/K.png" alt="">
                                <div class="img_">
                                    <img id="imgID6" src="../../static/images/code_a.png" alt="">
                                </div>
                            </span>
                            <p class="P_1">完善的售前售后服务</p>
                            <p class="P_">推出切合实际的合作方案，
                                <br>
                                提供高标准服务</p>
                        </div>
                    </div>

                    <div style="height: 100px;width: 100%;background: rgb(79,164,245);text-align: center;line-height: 50px;color: white">
                        <p>招商电话：18682382382</p>
                        <!--<a style="color: white" href="http://www.miitbeian.gov.cn"></a>-->
                        <p>网络文化经营许可证：&nbsp;粤ICP备17135544号-1&nbsp;&nbsp;Copyright©2017 艺方天地版权所有</p>
                    </div>

                </div>
        </div>


        <div class="hidden-lg-only hidden-xl-only hrefC">
            <div class="up_d">
                <img style="width: 100%" src="../../static/images/up.png" alt="">
                <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yitao.juyiting"><img class="img1" src="../../static/images/iPhone@3x.png" alt=""></a>
                <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yitao.juyiting"><img class="img2" src="../../static/images/Android@3x.png" alt=""></a>
            </div>
            <img style="width: 100%" src="../../static/images/down.png" alt="">
        </div>


        <!--<vue-preview :slides="slide1" @close="handleClose">-->
            <!--&lt;!&ndash;<img v-for="item in slide1" :src="item.src" alt="">&ndash;&gt;-->
        <!--</vue-preview>-->



    </div>
</template>

<script>
    export default {
        name: "advertisement",
        data(){
            return{
                equipment:this.equipmentFn(),
                slide1: [
                    {
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                        msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                        alt: 'picture2',
                        title: 'Image Caption 2',
                        w: 1200,
                        h: 900
                    }
                ]
            }
        },
        watch:{

        },
        methods:{
            equipmentFn:function() {
                console.log(navigator.userAgent,"navigator.userAgent");
                return navigator.userAgent.indexOf("Windows")>-1
            },
            handleClose () {
                console.log('close event')
            }
        },
        created:function () {

        },
        mounted:function () {
            var self = this
            // console.log(document.body.clientWidth);
        }
    }
</script>


<style scoped>
    .up_d{
        position: relative;
        width: 100%;
    }
    .img1,.img2{
        position: absolute;
        left: 50%;
        width: 55%;
        margin-left: -27.5%;
        z-index: 5;
    }
    .img1{
        top: 65%;
    }
    .img2{
        top: 77%;
    }
    .hrefC img{
        vertical-align: top;
    }
    .content_1{
        display: flex;
        /*-webkit-justify-content:center;*/
        /*justify-content:center;*/
        text-align: center;
    }
    .content_1 div{
        flex:1
    }
    .content_1 div img{
        width: 70%;
    }
    .p1{
        font-size: 12px;
    }
    .content_1 div p{
        padding: 0 5px;
    }

    .pr{
        position: relative;
    }
    .span_1:hover #imgID{
        display: block;
    }
    .span_2:hover #imgID2{
        display: block;
    }
    .span_3:hover #imgID3{
        display: block;
    }
    .span_4:hover #imgID4{
        display: block;
    }
    .span_5:hover #imgID5{
        display: block;
    }
    .span_6:hover #imgID6{
        display: block;
        height: 100%;
    }
    .img_{
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -87px;
    }
    .img_ img{
        display: none;
    }
    .img_ :hover #imgID{
        display: block;
    }
    .P_1{
        margin: 10px 0;
    }
    .P_{
        font-size: 12px;
        color: rgb(113,113,113);
    }
    .but{
        width: 55%;
        margin: 45px auto;
    }
    .but div{
        display: inline-block;
        float: left;
        width: 33.333%;
        text-align: center;
    }
    .but div img{
        margin: 0 auto;
    }
    .nav_1{
        display: inline-block;
        width: 20px;
        height: 25px;
        border: 3px solid deepskyblue;
    }
    .nav_{
        text-align: center;
        margin-top: 25px;
        margin-right: 8px;
    }

    .dis1:hover .span1{
        display: block;
    }

    .dis2:hover .span2{
        display: block;
    }

    .dis3:hover .span3{
        display: block;
    }

    .Bottom{
        height: 150px;
        width: 50%;
        margin: 10px auto;
        position: relative;
    }
    .Bottom div{
        width: 150px;
        height: 150px;
    }
    .Bottom div span{
        display: inline-block;
        width: 100%;
        height: 100%;
        background: blue;
        display: none;
    }
    .Bottom div:nth-child(1){
        background: red;
        float: left;
    }
    .Bottom div:nth-child(2){
        background: red;
        margin: 0 auto;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -75px;
    }
    .Bottom div:nth-child(3){
        background: red;
        float: right;
    }

    .Nav_ div{
        width: 8%;
        height: 0;
        border: 1px solid rgb(199,51,34);
        margin: 0 auto;
    }

    #newsticker-demo a {
        text-decoration:none;
    }
    #newsticker-demo img {
        border: 2px solid #FFFFFF;
    }
    #newsticker-demo .title {
        text-align:center;
        font-size:14px;
        font-weight:bold;
    }
    .newsticker-jcarousellite {
        margin-top: 10%;
        width: 100%;
        height: 10%;
        border: 1px solid red;
        height: 400px;
    }
    .newsticker-jcarousellite ul{
        background: white;
        margin-left: 30%;
    }
    .newsticker-jcarousellite ul li {
        list-style:none;
        display:block;
        padding-bottom:1px;
        margin-bottom:5px;
    }
    .newsticker-jcarousellite .thumbnail {
        float:left;
        width:110px;
    }
    .newsticker-jcarousellite .info {
        width:190px;
        border: 1px solid red;
        padding: 7px 0;
        margin: 7px auto;
    }
    .newsticker-jcarousellite .info span.cat {
        display: block;
        font-size:10px;
        color:#808080;
    }
    .clear {
        clear: both;
    }
</style>