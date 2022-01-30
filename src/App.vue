<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>Order Spark</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <router-link to="/" class="ma-2" color=" darken-2" dark>
        <v-icon dark left> mdi-arrow-left </v-icon>Back
      </router-link>
      <router-link to="/cart" text>
        <v-icon>mdi-cart</v-icon>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Cart from "@/components/Cart";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    // Cart,
  },
};
</script>
