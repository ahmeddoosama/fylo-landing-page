<template>
  <div class="comeingSoon">
    <div class="container">
      <img
        src="../../assets/images/background/illustration-stay-productive.png"
        alt="fylo"
      />
      <h3>Comeing Soon...</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComeingSoon"
};
</script>

<style lang="scss" scoped>
// ComeingSoon Variables
@import "../../assets/SCSS/global/colors.scss";
@import "../../assets/SCSS/global/variables.scss";

.comeingSoon {
  img {
    width: 400px;
    margin-top: 8%;
    margin-bottom: 50px;
  }
  h3 {
    color: $gray;
    font-size: 30px;
    font-weight: $font-weight-700;
    font-style: $font-style-italic;
    text-transform: $text-transform-uppercase;
    font-family: $title-font-family;
  }

  @media #{$smallDevices} {
    padding-top: 60px;
    img {
      width: 250px;
    }
    p {
      font-weight: 25px;
    }
  }
}
</style>
