<template>
  <div class="about">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2"> Cart </v-card-title>

      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Product</th>
                <th class="text-left">Price</th>
                <th class="text-left">Quantity</th>
                <th class="text-left">Remove Item</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(quantity, key, i) in cart" :key="i">
                <td>{{ key }}</td>
                <td>{{ getPrice(key) }}</td>
                <td>{{ quantity }}</td>
                <td>
                  <v-btn @click="removeProduct(key)" color="red" dark>
                    <v-icon dark> mdi-cancel </v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-chip> {{ total }}</v-chip>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //
    };
  },
  methods: {
    removeProduct(name) {
      this.$store.commit("removeItem", name);
    },
    getPrice(name) {
      const product = this.$store.state.products.find((p) => {
        return p.name === name;
      });
      return product.price;
    },
  },
  computed: {
    cart: {
      get() {
        return this.$store.getters.getCartJson;
      },
    },
    total: {
      get() {
        return this.$store.getters.getTotal;
      },
    },
  },
};
</script>
