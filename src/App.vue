<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>Order Spark</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <CartDialog />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CartDialog from "@/components/CartDialog";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    CartDialog,
  },
};
</script>
