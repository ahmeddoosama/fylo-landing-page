<template>
  <div class="appNavbar">
    <b-navbar toggleable="lg" type="dark">
      <div class="container">
        <router-link to="/">
          <img src="../../assets/images/logo/logo.svg" alt="fylo" />
        </router-link>

        <b-navbar-toggle target="nav-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link to="/Features" tag="li" class="nav-item">
              <a class="nav-link">Features</a>
            </router-link>
            <router-link to="/Team" tag="li" class="nav-item">
              <a class="nav-link">Team</a>
            </router-link>
            <router-link to="/SignIn" tag="li" class="nav-item">
              <a class="nav-link">Sign In</a>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "appNavbar"
};
</script>

<style lang="scss" scoped>
// Navbar Variables
@import "../../assets/scss/global/colors.scss";
@import "../../assets/scss/global/variables.scss";

.appNavbar {
  nav {
    position: absolute;
    width: 100%;
    background-color: $DarkBlue2;
    img {
      width: 100px;
    }
    .navbar-nav {
      z-index: 2;
      .nav-item {
        .nav-link {
          font-size: 17px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    @media #{$small_and_Medium_Devices} {
      .navbar-nav {
        text-align: start;
        padding-top: 10px;
      }
    }
  }
}
</style>
