<template>
  <div>
    <div class="row m-2">
      <PassStat v-if="agentPassStat" :stat="agentPassStat" class="col-9" />
      <div class="col-3 px-0">
        <div class="row justify-content-around h-100">
          <div class="card col-7">
            <div class="card-body">
              <p class="card-title">部門</p>
              <select class="w-100">
                <option>全部</option>
                <option>管理部</option>
                <option>維修部</option>
              </select>
            </div>
          </div>
          <div class="card col-3">
            <div class="card-body px-0">
              <p class="card-title">本部</p>
              <button class="btn btn-dark btn-sm">切換</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mx-2 mt-4 justify-content-around">
      <div class="col p-0">
        <div class="row">
          <ScanInfo v-if="agentScanInfo" :scan="agentScanInfo" class="col-6" />
          <ComplianceRate v-if="newRatio" :ratio="newRatio" class="col-6" />
        </div>
        <div class="row mt-3">
          <SystemInfo class="col" />
        </div>
      </div>
      <div class="col pr-0">
        <AuditInfo v-if="agentAuditInfo" :audit="agentAuditInfo" />
      </div>
    </div>
  </div>
</template>


<script>
import PassStat from "./PassStat.vue";
import ScanInfo from "./ScanInfo.vue";
import ComplianceRate from "./ComplianceRate.vue";
import AuditInfo from "./AuditInfo.vue";
import SystemInfo from "./SystemInfo.vue";

export default {
  name: "HelloWorld",
  components: {
    PassStat,
    ScanInfo,
    ComplianceRate,
    AuditInfo,
    SystemInfo,
  },
  data() {
    return {
      agentPassStat: null,
      agentScanInfo: null,
      agentAuditInfo: null,
      newRatio: null,
    };
  },
  mounted() {
    this.axios.get("http://localhost:3000/results").then((res) => {
      this.agentAuditInfo = res.data.agentAuditInfo;
      this.agentPassStat = res.data.agentPassStat;
      this.agentScanInfo = res.data.agentScanInfo;
      this.newRatio = Object.assign({}, this.agentPassStat.ratio);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
