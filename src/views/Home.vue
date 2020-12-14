<template>
  <div class="home">
    <!-- import Header Component -->
    <appHeader />

    <div class="container">
    <section class="features-section">
      <b-row>
        <b-col cols="12" md="6">
          <div class="feature-card">
            <img class="card__img" src="../assets/images/icons/icon-access-anywhere.svg" alt="icon-access-anywhere" />
            <h4 class="card__title">Access your files, anywhere</h4>
            <p class="card_description">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="feature-card">
            <img class="card__img" src="../assets/images/icons/icon-security.svg" alt="icon-security" />
            <h4 class="card__title">Security you can trust</h4>
            <p class="card_description">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="feature-card">
            <img class="card__img" src="../assets/images/icons/icon-collaboration.svg" alt="icon-collaboration" />
            <h4 class="card__title">Real-time collaboration</h4>
            <p class="card_description">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="feature-card">
            <img class="card__img" src="../assets/images/icons/icon-any-file.svg" alt="icon-any-file" />
            <h4 class="card__title">Store any type of file</h4>
            <p class="card_description">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
          </div>
        </b-col>
      </b-row>
    </section>
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
</style>
