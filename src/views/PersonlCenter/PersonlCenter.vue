<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .personlCenter {
        width: 100%;
        background: #f4f4f4;
    }

    .personl-view {
        width: 100%;
        background: #f4f4f4;
        min-height: 600px;
    }
</style>
<template>
    <div class="personlCenter">
        <personl-center-nav-bar></personl-center-nav-bar>
        <router-view class="personl-view"></router-view>
    </div>
</template>
<script>
    import PersonlCenterNavBar from './PersonlCenterNavBar.vue'
    import { getShopInfo } from '../../api/my'
    export default {
        name: "PersonlCenter",
        components: {
            PersonlCenterNavBar
        },
        data() {
            return {};
        }
    };
</script>
