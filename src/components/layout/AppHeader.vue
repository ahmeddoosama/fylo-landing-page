<template>
  <div class="appHeader">
    <div class="container">
      <img
        class="header__img"
        src="../../assets/images/background/illustration-intro.png"
        alt="bg-header"
      />
      <h1 class="header__title">
        All your files in one secure location, accessible
        anywhere.
      </h1>
      <p class="header__description">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <!-- Import Button Component -->
        <b-button href="#" pill variant="info">Get Started</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "appHeader"
};
</script>

<style lang="scss" scoped>

// Header Variables
@import "../../assets/scss/global/colors.scss";
@import "../../assets/scss/global/variables.scss";

.appHeader {
    padding: 40px 0;
    background:$DarkBlue1 url("../../assets/images/background/bg-curvy-desktop.svg") no-repeat bottom right 5px;
    .header__img {
        width: 450px;
    }
    .header__title {
        font-family: $title-font-family;
        font-size: 27px;
        width: 48%;
        margin: 20px auto;
        font-weight: 700;
        line-height: 1.6;
        word-spacing: 4px;
    }
    .header__description {
            width: 39%;
            font-size: 15px;
            margin: auto;
            opacity: 70%;
            margin-bottom: 20px;
    }
    .btn {
            padding: 7px 60px;
            font-size: 15px;
            font-weight: 600;
            background-color: $Cyan;
            border-color: $Cyan;
        &:hover {
            background-color: #9ce2dd;
            border-color: #9ce2dd;
        }
        &:active {
            background-color: $Cyan !important;
            border-color: $Cyan !important;
        }
    }
}
</style>
