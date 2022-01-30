<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="imageUrl"></v-img>

    <v-card-title>{{ name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ • {{ price }}</div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip @click="decreaseQuantity">-</v-chip>

        <v-chip>{{ quantity }}</v-chip>

        <v-chip @click="increaseQuantity">+</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="addTocart">
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    quantity: 0,
  }),
  props: ["name", "imageUrl", "price"],

  methods: {
    addTocart() {
      this.loading = true;
      this.$store.commit("addTocart", {
        pname: this.name,
        quantity: this.quantity,
      });
      this.quantity = 0;
      setTimeout(() => (this.loading = false), 2000);
    },
    increaseQuantity() {
      this.quantity = ++this.quantity;
    },
    decreaseQuantity() {
      if (!this.quantity) return;
      this.quantity = --this.quantity;
    },
  },
};
</script>
