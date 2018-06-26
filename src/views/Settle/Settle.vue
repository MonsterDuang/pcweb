<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .settle {
        width: 100%;
    }

    .settle-view {
        width: 100%;
        background: #fff;
    }
</style>
<template>
    <div class="settle">
        <router-view class="settle-view"></router-view>
    </div>
</template>
<script>
    export default {
        name: "Settle",
        data() {
            return {};
        },
        created() {
            this.$store.dispatch('settleConfrim')
        },
        destroyed() {
            this.$store.dispatch('settleOver')
        }
    };
</script>
