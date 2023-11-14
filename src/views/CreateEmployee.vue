<template>
    <div class="container">
        <CVFormTemplate :dataUser="dataUser" :projects="projects" :skills="skills"/>
    </div>
</template>
<script>
    import CVFormTemplate from '../components/CVFormTemplate.vue'
    import { projects } from '../data/projects'
    import { skills } from '../data/skills'
    
    export default {
        name: "CreateEmployee",
        components: {
            CVFormTemplate
        },
        data() {
            return {
                dataUser: {},
                projects,
                skills,
            }
        },
        methods: {

        },

        created() {
            this.projects = this.projects
            this.skills = this.skills
        },
    }
</script>
<style lang="">
    
</style>