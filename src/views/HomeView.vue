<template>
  <div class="container">
    <section class="empoloyes-list">
      <div class="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
        <h4 class="mb-0">Employees List</h4>
        <div class="d-flex align-items-center gap-2">
          <input type="text" class="form-control w-100" placeholder="Search employees" v-model="searchInput">
          <router-link to="/create-employee" class="btn btn-primary text-nowrap">Append Employee</router-link>
          <router-link to="/skills-projects" class="btn btn-primary text-nowrap">Add Skills & Projects</router-link>
        </div>
      </div>
      <div class="table-respobnsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th style="width: 120px;">
                Avatar
              </th>
              <th>Full Name</th>
              <th>
                Position
              </th>
              <th>
                Email
              </th>
              <th>
                Phone
              </th>
              <th style="width: 120px;" class="text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>
                <div class="d-flex align-items-center">
                  <div class="image-wrapper" :style="'background-image: url(/images/avatars/' + user.source + '.png)'">
                  </div>
                </div>
              </td>
              <td>
                {{user.userName}}
              </td>
              <td>
                {{user.position}}
              </td>
              <td>
                {{user.email}}
              </td>
              <td>
                {{user.phone}}
              </td>
              <td class="text-end">
                <router-link :to="'/cv/' + user.id" class="btn btn-success btn-sm">View & Edit</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
  import { employees } from '../data/employees'

  export default { 
    name: "Home",

    data() {
      return {
        users: employees,
        searchInput: '',
      }
    },
    watch: {
      searchInput(newVal) {
        this.filterNames(newVal);
      },
    },
    methods: {
      filterNames(query) {
        this.users = employees;
        const searchQuery = query
        this.users = this.users.filter(user  => user.id.includes(searchQuery));
      },
    },
  }
</script>

<style lang="scss" scoped>
  .empoloyes-list {
    padding: 30px 0;

    h4 {
      margin-bottom: 40px;
    }
  }

  .image-wrapper {
    width: 100px;
    aspect-ratio: 1 / 1;
    border: 1px solid #f1f1f1;
    overflow: hidden;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>

