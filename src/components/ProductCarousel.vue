<template>
  <v-carousel v-model="model">
    <v-carousel-item v-for="(imageUrl, i) in imageUrls" :key="i">
      <v-sheet height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-col sm="12">
            <v-img height="300" :src="imageUrl"></v-img>
          </v-col>
          <v-col sm="12">
            <div class="text-h2">Slide {{ i + 1 }}</div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data: () => ({
    model: 0,
  }),
  computed: {
    imageUrls: {
      get() {
        console.log(
          "this.$store.getters.getImages",
          this.$store.getters.getImages
        );
        return this.$store.getters.getImages;
      },
    },
  },
};
</script>
