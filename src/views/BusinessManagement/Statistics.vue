<template>
  <div class="statis-box">
      <div class="data-box">
          <div class="data-title">订单统计</div>
          <div class="data-line clearfix">
              <span class="text-left">今日成交订单</span>
              <span class="text-right theme-font" v-text="statistics.order.today || 0"></span>
          </div>
          <div class="data-line clearfix">
              <span class="text-left">本月成交订单</span>
              <span class="text-right theme-font" v-text="statistics.order.thisMonth || 0"></span>
          </div>
          <div class="data-line clearfix">
              <span class="text-left">累计成交订单</span>
              <span class="text-right theme-font" v-text="statistics.order.total || 0"></span>
          </div>
      </div>
      <div class="data-box">
          <div class="data-title">收入统计</div>
          <div class="data-line clearfix">
              <span class="text-left">今日成交额</span>
              <span class="text-right theme-font">¥{{statistics.income.today || 0}}</span>
          </div>
          <div class="data-line clearfix">
              <span class="text-left">本月成交额</span>
              <span class="text-right theme-font">¥{{statistics.income.thisMonth || 0}}</span>
          </div>
          <div class="data-line clearfix">
              <span class="text-left">累计成交额</span>
              <span class="text-right theme-font">¥{{statistics.income.total || 0}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import { getOrderStatistics, getIncomeStatistics, } from '../../api/my'
  export default {
    name:'statistics',
    data(){
        return {
            statistics: {
                order: {},
                income: {}
            },
        }
    },
    created(){
        this.getStatisticsData()
    },
    methods:{
      getStatisticsData() {
        this.loading = true
        Promise.all([getIncomeStatistics(), getOrderStatistics()]).then((datasets) => {
            this.statistics.income = datasets[0].data
            this.statistics.order = datasets[1].data
            this.loading = false
        }).catch((err) => {
            console.log(err)
            this.loading = false
            this.$message.error(err.resMessage || err.message)
        })
      }
    }
  }
</script>

<style scoped>
.statis-box {
  background: #fff;
  width: 100%;
  padding: 40px;
  margin-bottom: 30px;
}

.data-box {
  border: 1px solid #e0e0e0;
  margin-bottom: 24px;
}
.data-box:last-of-type{
    margin-bottom: 0;
}
.data-title {
  background: #f4f4f4;
  height: 50px;
  border-bottom: 1px solid #e0e0e0;
  line-height: 49px;
  padding: 0 14px;
}

.data-line {
  padding: 0 14px;
  line-height: 69px;
  height: 70px;
  border-bottom: 1px solid #e0e0e0;
}
.text-left {
    float: left;
}

.text-right {
    float: right;
}
</style>