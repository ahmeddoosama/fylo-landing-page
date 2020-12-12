<template>
  <div class="appNavbar">
    <b-navbar toggleable="lg" type="dark">
      <div class="container">
        <router-link to="/">
          <img src="../../assets/images/logo/logo.svg" alt="fylo" />
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link to="/Feature" tag="li" class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Features</a>
            </router-link>
            <router-link to="/Team" tag="li" class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Team</a>
            </router-link>
            <router-link to="/SignIn" tag="li" class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Sign In</a>
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
@import "../../assets/scss/global/colors.scss";
@import "../../assets/scss/global/variables.scss";

.appNavbar {
  nav {
    img {
      width: 100px;
    }
    .navbar-nav {
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
