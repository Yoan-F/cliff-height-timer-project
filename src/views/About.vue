<template>
  <div class="about">
    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">
        {{$t("About")}}
      </h1>

      <p class="subheading font-weight-regular">
        {{$t("description")}}
      </p>
    </v-col>
  </div>
</template>

<script>
  export default {
    name: 'about'
  }
</script>
