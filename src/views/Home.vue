<template>
  <div>
    <br />
    <ProductCarousel />
    <br />
    <Products />
  </div>
</template>

<script>
import ProductCarousel from "@/components/ProductCarousel";
import Products from "@/components/Products";

export default {
  name: "Home",

  components: {
    ProductCarousel,
    Products,
  },
};
</script>
