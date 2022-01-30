<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(product, i) in $store.state.products"
        :key="i"
        md="4"
        sm="12"
      >
        <Product
          :name="product.name"
          :imageUrl="product.imageUrl"
          :price="product.price"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Product from "@/components/Product";
export default {
  //
  components: {
    Product,
  },
};
</script>
