<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .refer {
        width: 100%;
    }

    .refer-view {
        width: 100%;
        background: #fff;
    }
</style>
<template>
    <div class="refer">
        <router-view class="refer-view"></router-view>
    </div>
</template>
<script>
    export default {
        name: "Refer",
        data() {
            return {};
        }
    };
</script>
