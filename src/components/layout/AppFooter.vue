<template>
  <div class="appFooter">
    <footer>
      <div class="container">
        <router-link to="/">
          <img
            class="fotor-logo"
            src="../../assets/images/logo/logo.svg"
            alt="fylo"
          />
        </router-link>
        <b-row class="footer-body">
          <b-col cols="12" md="4">
            <div class="dev-location">
              <img
                class="icon"
                src="../../assets/images/icons/icon-location.svg"
                alt="location"
              />
              <P
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua</P
              >
            </div>
          </b-col>
          <b-col cols="12" md="3">
            <ul class="list-group">
              <li class="list-item">
                <a href="+1-543-123-4567">
                  <img
                    class="icon"
                    src="../../assets/images/icons/icon-phone.svg"
                    alt="location"
                  />
                  +1-543-123-4567
                </a>
              </li>
              <li class="list-item">
                <a href="example@fylo.com">
                  <img
                    class="icon"
                    src="../../assets/images/icons/icon-email.svg"
                    alt="location"
                  />
                  example@fylo.com
                </a>
              </li>
            </ul>
          </b-col>
          <b-col cols="12" md="3">
            <b-row>
              <b-col cols="12" md="6">
                <ul class="list-group">
                  <router-link to="/AboutUs" tag="li" class="list-item">
                    <a>About Us</a>
                  </router-link>
                  <router-link to="/Jobs" tag="li" class="list-item">
                    <a>Jobs</a>
                  </router-link>
                  <router-link to="/Press" tag="li" class="list-item">
                    <a>Press</a>
                  </router-link>
                  <router-link to="/Blog" tag="li" class="list-item">
                    <a>Blog</a>
                  </router-link>
                </ul>
              </b-col>
              <b-col cols="12" md="6">
                <ul class="list-group">
                  <router-link to="/ContactUs" tag="li" class="list-item">
                    <a>Contact Us</a>
                  </router-link>
                  <router-link to="/Terms" tag="li" class="list-item">
                    <a>Terms</a>
                  </router-link>
                  <router-link to="/Privacy" tag="li" class="list-item">
                    <a>Privacy</a>
                  </router-link>
                </ul>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" md="2">
            <div class="social-links">
              <a href="#"><span class="icon-facebook"></span></a>
              <a href="#"><span class="icon-twitter"></span></a>
              <a href="#"><span class="icon-instagram"></span></a>
            </div>
          </b-col>
        </b-row>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "appFooter"
};
</script>

<style lang="scss" scoped>
// ComeingSoon Variables
@import "../../assets/SCSS/global/colors.scss";
@import "../../assets/SCSS/global/variables.scss";

.appFooter {
  footer {
    padding-top: 120px;
    text-align: $text-align-left;
    background-color: $DarkBlue3;
    .fotor-logo {
      width: 120px;
      margin-top: 60px;
    }

    .footer-body {
      padding-top: 40px;
      padding-bottom: 40px;
      color: $gray;

      a {
        color: $gray;
        font-weight: $font-weight-500;
        &:hover {
          color: $White;
        }
      }

      .dev-location {
        display: flex;
        .icon {
          height: 20px;
          margin-right: 15px;
          position: relative;
          top: 4px;
        }
        p {
          font-size: 15px;
        }
      }

      .list-group {
        .list-item {
          margin-bottom: 10px;
          .icon {
            margin-right: 10px;
          }
        }
      }

      .social-links {
        a {
          margin-right: 15px;
          border: 1px solid $gray;
          padding: 6px;
          border-radius: 50%;
          &:hover {
            color: $Cyan;
            border-color: $Cyan;
          }
        }
      }
    }
    @media #{$smallDevices} {
      .footer-body {
        .dev-location {
          font-size: 17px;
        }

        .dev-location,
        .list-group {
          margin-bottom: 20px;
        }

        .social-links {
          text-align: center;
        }
      }
    }
  }
}
</style>
