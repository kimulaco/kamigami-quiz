<template>
  <p class="c-paragraph"><slot/></p>
</template>

<script>
export default {
  name: 'Paragraph'
}
</script>

<style lang="scss" scoped>
.c-paragraph {
  margin: 0 0 32px;
  line-height: 1.6;

  a {
    font-weight: bold;

    @include hover() {
      text-decoration: none;
    }
  }

  strong {
    font-weight: bold;
    color: #d02203;
  }
}
</style>
