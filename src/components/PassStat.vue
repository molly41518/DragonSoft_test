<template>
  <div>
    <div class="passStat row justify-content-between">
      <div class="card col mr-2" v-for="(item, index) in okStat" :key="index">
        <div class="card-body row">
          <div class="col-6 icon-size">
            <font-awesome-icon :icon="['fas', icon[index]]" />
          </div>
          <div class="col-6 text-left">
            <h5 class="card-title mt-3 mb-0">
              {{ item }}
            </h5>
            <p class="m-0 info-name">
              {{ name[index] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "passStat",
  props: ["stat"],
  data() {
    return {
      name: {
        total: "資產總數",
        passed: "符合數",
        failed: "未符合數",
        other: "未稽核數",
      },
      icon: {
        total: "database",
        passed: "check-circle",
        failed: "times-circle",
        other: "question-circle",
      },
      color: {
        total: "text-primary",
        passed: "text-success",
        failed: "text-danger",
        other: "text-secondary",
      },
    };
  },
  computed: {
    okStat() {
      delete this.stat.ratio;
      return this.stat;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.icon-size {
  font-size: 3rem;
}
.info-name {
  font-size: 0.8rem;
}
</style>