<template>
  <div>
    <a v-if="step === 'Step2'" href="javascript:;" class="d-flex align-items-center gap-2 text-black text-decoration-none back-btn" @click="step = 'Step1'">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 1792 1792"><path d="M1203 544q0 13-10 23L800 960l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L631 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>
        Back
    </a>
    <component :is="step" @previewData="preview" @userProjectData="getUserProjects" :dataUser="dataUser" :userProjects="userProjects"></component>
  </div>
</template>

<script>
  import Step1 from "../components/CVSteps/Step1.vue"
  import Step2 from "../components/CVSteps/Step2.vue"

  export default {
    name: "CVPage",
    components: {
      Step1, Step2
    },
    data() {
      return {
        dataUser: null,
        userProjects:null,
        step: "Step1",
      }
    },
    methods: {
      preview(obj) {
        console.log(obj)
        this.dataUser = obj;
        this.step = "Step2";
      },
      getUserProjects(obj) {
        this.userProjects = obj
      }
    },
  }
</script>

