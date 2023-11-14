<template>
    <div class="container">
        <section>
            <div class="row">
                <div class="col-xs-12 col-md-6">
                    <div class="card f-1">
                        <div class="card-body">
                            <div>
                                <div class="d-flex align-items-center justify-content-between mb-3 gap-4">
                                    <h4 class="mb-0 text-nowrap"><strong>Append Skill</strong></h4>
                                    <input type="text" class="form-control mb-0" placeholder="Search Skill..." v-model="searchSkills">
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Add Skill" v-model="addSkill">
                                    <button class="btn btn-success w-25" type="button" :disabled="disableSkill">Add</button>
                                </div>
                                <hr>
                            </div>
                            <ul class="h-100 list-group border-top border-bottom list-group-skill list-group-flush mb-3">
                                <li class="list-group-item d-flex align-items-center justify-content-between" v-for="skill in skills" :key="skill.id">{{skill.id}}. {{skill.name}} 
                                    <button class="btn btn-danger btn-sm btn-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-x"><path d="M18 6 6 18M6 6l12 12"/></svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between mb-3 gap-4">
                                <h4 class="mb-0 text-nowrap"><strong>Append Project</strong></h4>
                                <input type="text" class="form-control mb-0" placeholder="Search Project..." v-model="searchProjects">
                            </div>
                            <h4><strong></strong></h4>
                            <input type="text" class="form-control mb-3" placeholder="Add Project" v-model="addProject">
                            <textarea name="" class="form-control mb-3" placeholder="Project Description" id=""></textarea>
                            <button class="btn btn-success w-25 float-end" :disabled="disableProject">Add </button>  
                            <div class="clearfix"></div>
                            <hr>
                            <ul class="h-100 list-group list-group-flush border-top border-bottom mb-3">
                                <li class="list-group-item d-flex align-items-center justify-content-between gap-3 ps-5" v-for="project in projects" :key="project.id">
                                    <div class="position-relative">
                                        <span class="numb">{{project.id}}.</span> 
                                        <p class="mb-0"><strong>{{project.name}}</strong></p> 
                                        <p class="mb-1" v-if="project.description">{{project.description}}</p>
                                    </div>
                                    <button class="btn btn-danger btn-sm btn-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-x"><path d="M18 6 6 18M6 6l12 12"/></svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import { projects } from '../../src/data/projects'   
    import { skills } from '../../src/data/skills'
export default {
    name: "AddSkillsProjects",
    data() {
        return {
            projects: [],
            skills: [],
            searchSkills: "",
            searchProjects: "",
            addSkill: "",
            addProject: "",
            disableSkill: true,
            disableProject: true,
        }
    },

    watch: {
        searchSkills(newVal) {
            this.filterSkills(newVal);
        },
        searchProjects(newVal) {
            
            this.filterProjects(newVal);
        },
        addSkill(val) {
            val === '' ? this.disableSkill = true : this.disableSkill = false
        },
        addProject(val) {
            val === '' ? this.disableProject = true : this.disableProject = false
        }
    },

    methods: {
        filterSkills(query) {
            this.skills = skills;
            const searchQuery = query
            this.skills = this.skills.filter(i => i.name.toLowerCase().includes(searchQuery));
        },

        filterProjects(query) {
            this.projects = projects;
            const searchQuery = query
            this.projects = this.projects.filter(i => i.name.toLowerCase().includes(searchQuery));
        },
    },

    created() {
        this.projects = projects.reverse();
        this.skills = skills.reverse();
    },
}
</script>
<style lang="scss" scoped>
    section {
        padding: 40px 0;
    }

    .numb {
        position: absolute;
        right: calc(100% + 10px);
        top: -1px;
    }

    .list-group {
        max-height: 400px;
        overflow: auto;
    }

    .list-group-skill {
        max-height: 550px;
    }
</style>