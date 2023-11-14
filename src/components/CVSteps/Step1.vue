<template>
  <div class="container">
        <!-- <button class="btn btn-success preview-btn" @click="preview">Preview CV</button> -->
        <CVFormTemplate :dataUser="dataUser" :projects="projects" :skills="skills" @previewData="preview" @userProjectData="getUserProjects"/>
    </div>
</template>

<script>
    import { employees } from '../../../src/data/employees'
    import { projects } from '../../../src/data/projects'
    import { skills } from '../../../src/data/skills'
    import CVFormTemplate from '../CVFormTemplate.vue'

    export default {
        name: "Step1",
        components:{
            CVFormTemplate
        },
        emits: ['previewData', 'userProjectData'],
        data() {
            return {
                projects,
                skills,
                // dataUser,
            }                               
        },

        methods: {
            preview(obj) {
                console.log(obj)

            },
            getUserProjects(obj) {
                console.log(obj)
            }
        },
    
        created() {
            this.dataUser = employees.find(user => user.id === this.$route.params.id);
            this.projects = projects
            this.skills = skills
        },
        mounted() {
            // this.userProjects = projects.filter(e => this.dataUser.projects.includes(e.name))
        }
    }
</script>

<style lang="scss" scoped>

    .preview-btn {
        position: fixed;
        right: 20px;
        top: 80px;
    }
    
    .upload-image-wrapper {
        input {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            z-index: -1;
        }
    }

    .upload-image {
        width: 200px;
        aspect-ratio: 1 / 1;
        border: 1px solid #bababa;
        margin-bottom: 20px;
        cursor: pointer;
        background-size: cover;
        background-position: 50% 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .first-step {
        display: flex;
        border-radius: 2px;
        border: 1px solid #bababa;
        margin-top: 20px;
    }

    h3 {
        font-size: 16px;
        color: #39A6DE;
    }
    .aside {
        width: 40%;
        padding: 20px;
    }
    .content {
        background-color: #FBFBFB;
        width: 60%;
        padding: 20px;
    }

    .project-list {
        overflow: auto;
        max-height: 500px;

        li:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    .checkblock {
        
        input {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            z-index: -1;
        }

        label {
            border: 1px solid #222222;
            border-radius: 5px;
            padding: 15px;
            display: block;
            transition: all .3s ease;
            cursor: pointer;
        }

        input:checked + label {
            background-color: rgba(#39A6DE, .2);
            border-color: #39A6DE; 
        }

        p {
            font-size: 14px;
        }
    }
    
    .previous-jobs {
        border-top: 1px solid #222;
        padding-top: 15px;

        li {
            position: relative;
            border-bottom: 1px solid #bababa;
            padding: 10px;

            .remove-job {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0,-50%);
                
            }

            h3 {
                color: #555555;
            }

            p {
                font-size: 16px;
            }
        }
    }

    .education {
        border-top: 1px solid #222;
        padding-top: 15px;
        margin-top: 20px;

        li {
            position: relative;
            border-bottom: 1px solid #bababa;
            padding: 10px;

            .remove-education {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0,-50%);
                
            }

            h3 {
                color: #555555;
            }

            p {
                font-size: 16px;
            }
        }
    }

    .footer {
        border: 1px solid #bababa;
        border-top: 0;
        margin-bottom: 50px;
        display: flex;
        flex-direction: row-reverse;
    }
</style>