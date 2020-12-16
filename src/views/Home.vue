<template>
  <div class="home">
    <!-- import Header Component -->
    <appHeader />

    <div class="container">
      <!-- Feature Section -->
      <section class="features-section">
        <b-row>
          <b-col cols="12" md="6">
            <div class="feature-card">
              <img
                class="card__img"
                src="../assets/images/icons/icon-access-anywhere.svg"
                alt="icon-access-anywhere"
              />
              <h4 class="card__title">Access your files, anywhere</h4>
              <p class="card_description">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="feature-card">
              <img
                class="card__img"
                src="../assets/images/icons/icon-security.svg"
                alt="icon-security"
              />
              <h4 class="card__title">Security you can trust</h4>
              <p class="card_description">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="feature-card">
              <img
                class="card__img"
                src="../assets/images/icons/icon-collaboration.svg"
                alt="icon-collaboration"
              />
              <h4 class="card__title">Real-time collaboration</h4>
              <p class="card_description">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="feature-card">
              <img
                class="card__img"
                src="../assets/images/icons/icon-any-file.svg"
                alt="icon-any-file"
              />
              <h4 class="card__title">Store any type of file</h4>
              <p class="card_description">
                Whether you're sharing holidays photos or work documents, Fylo
                has you covered allowing for all file types to be securely
                stored and shared.
              </p>
            </div>
          </b-col>
        </b-row>
      </section>

      <!-- About Section -->
      <section class="about-section">
        <b-row>
          <b-col cols="12" md="6">
            <div class="bg-about">
              <img
                src="../assets/images/background/illustration-stay-productive.png"
                alt="icon-any-file"
              />
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="about-content">
              <h4>Stay productive, wherever you are</h4>
              <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              <router-link to="/Features" class="abut-btn"
                >See how Fylo works
                <img
                  src="../assets/images/icons/icon-arrow.svg"
                  alt="icon-arrow"
              /></router-link>
            </div>
          </b-col>
        </b-row>
      </section>

      <!-- testimonials Section -->
      <section class="testimonials-section">
        <b-row>
          <b-col cols="12" md="4">
            <div class="testimonial-card bg">
              <div class="testimonial-card-review">
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
              </div>
              <div class="testimonial-card-author">
                <img
                  class="author-img"
                  src="../assets/images/persons/profile-1.jpg"
                  alt="Satish Patel img"
                />
                <div class="author-info">
                  <p class="author-name">Satish Patel</p>
                  <p class="author-position">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </b-col>

          <b-col cols="12" md="4">
            <div class="testimonial-card">
              <div class="testimonial-card-review">
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
              </div>
              <div class="testimonial-card-author">
                <img
                  class="author-img"
                  src="../assets/images/persons/profile-2.jpg"
                  alt="Bruce McKenzie"
                />
                <div class="author-info">
                  <p class="author-name">Bruce McKenzie</p>
                  <p class="author-position">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </b-col>

          <b-col cols="12" md="4">
            <div class="testimonial-card">
              <div class="testimonial-card-review">
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
              </div>
              <div class="testimonial-card-author">
                <img
                  class="author-img"
                  src="../assets/images/persons/profile-3.jpg"
                  alt="Iva Boyd"
                />
                <div class="author-info">
                  <p class="author-name">Iva Boyd</p>
                  <p class="author-position">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </section>

      <!-- Subscribe Section -->
      <div class="subscribe-section">
        <h4>Get early access today</h4>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you
        </p>
        <form action="" method="POST">
          <input
            class="btn-form"
            type="email"
            placeholder="email@example.com"
          />
          <button class="btn-submit">Get Started Free</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// Import Components
import appHeader from "../components/layout/AppHeader";

export default {
  name: "Home",
  components: {
    appHeader
  }
};
</script>

<style lang="scss" scoped>
// import home Variables
@import "../assets/scss/global/colors";
@import "../assets/scss/global/variables";

.home {
  .features-section {
    margin: 50px 0;
    .feature-card {
      padding: 20px 0;
      .card__img {
        width: 60px;
        margin-bottom: 25px;
      }
      .card__title {
        font-family: $title-font-family;
        font-size: 20px;
        font-weight: $font-weight-700;
      }
      .card_description {
        font-size: 15px;
        width: 70%;
        margin: 10px auto;
        opacity: 70%;
      }
    }
  }
  .about-section {
    .bg-about {
      img {
        width: 550px;
      }
    }
    .about-content {
      text-align: start;
      margin-top: 15%;
      width: 90%;
      margin-left: 40px;
      h4 {
        font-family: $title-font-family;
        font-size: 32px;
        width: 60%;
        font-weight: 700;
        margin-bottom: 20px;
      }
      p {
        font-size: 15px;
        opacity: 70%;
      }
      .abut-btn {
        color: $Cyan;
        border-bottom: 1px solid $Cyan;
        padding-bottom: 5px;
        img {
          width: 15px;
          position: relative;
          bottom: 1px;
        }
        &:hover {
          border: none;
          img {
            margin-left: 5px;
          }
        }
      }
    }
    @media #{$small_and_Medium_Devices} {
      .bg-about {
        img {
          max-width: 100%;
        }
      }
      .about-content {
        width: 100%;
        margin-left: 0;
        h4 {
          font-size: 22px;
          width: 100%;
        }
        p {
          opacity: 90%;
        }
      }
    }
  }
  .testimonials-section {
    position: relative;
    margin: 10% 0;
    .bg {
      &::before {
        content: "";
        position: absolute;
        width: 55px;
        height: 50px;
        top: -2rem;
        left: 5px;
        z-index: -1;
        background: url("../assets/images/background/bg-quotes.png");
        background-repeat: no-repeat;
      }
    }
    .testimonial-card {
      background-color: $DarkBlue4;
      box-shadow: 5px 3px 8px 1px $DarkBlue4;
      padding: 25px 25px;
      text-align: start;
      .testimonial-card-review {
        font-size: 15px;
        opacity: 80%;
      }
      .testimonial-card-author {
        display: flex;
        margin-top: 20px;
        .author-img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .author-info {
          p {
            margin-bottom: 0;
          }
          .author-name {
            font-weight: 700;
            font-size: 15px;
          }
          .author-position {
            font-size: 12px;
            opacity: 70%;
          }
        }
      }
    }
    @media #{$smallDevices} {
      margin: 25% 0;
      .testimonial-card {
        margin-bottom: 30px;
      }
    }
  }
  .subscribe-section {
    background: $DarkBlue1;
    max-width: 90%;
    margin: auto;
    text-align: center;
    padding: 3rem;
    box-shadow: 0 3px 15px 3px hsl(217, 62%, 11%);
    margin-bottom: -8rem;
    position: relative;
    border-radius: 5px;
    h4 {
      font-size: 2rem;
      font-family: $title-font-family;
      font-weight: 700;
    }
    p {
      font-size: 15px;
      width: 90%;
      margin: 20px auto;
    }
    form {
      .btn-form {
        width: 500px;
        max-width: 100%;
        margin-right: 1.5rem;
        border: none;
        padding: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border-radius: 30px;
      }
      .btn-submit {
        outline: none;
        border: unset;
        background: linear-gradient(
          to right,
          hsl(176, 68%, 64%),
          hsl(198, 60%, 50%)
        );
        font-size: 1rem;
        font-weight: 700;
        width: 200px;
        padding: 15px;
        border-radius: 30px;
        color: hsl(240, 75%, 98%);
        &:hover {
          background: linear-gradient(
            to left,
            hsl(176, 68%, 64%),
            hsl(198, 60%, 50%)
          );
        }
      }
    }
    @media #{$small_and_Medium_Devices} {
      max-width: 100%;
      padding: 3rem 30px;
      h4 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
        width: 100%;
      }
      form {
        .btn-form {
          margin-bottom: 15px;
        }
        .btn-submit {
          width: 225px;
        }
      }
    }
  }
}
</style>
