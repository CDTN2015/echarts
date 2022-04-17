<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <router-view style="margin: 0 auto" />
      </v-col>
      <v-col cols="3" v-for="(item, index) in component" :key="index">
        <v-btn @click="link(item)" block class="mx-16"
          >{{ index + 1 }}-{{ item }}</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "HomeView",
  data() {
    return {
      component: [
        "introductory",
        "title",
        "tooltip",
        "legend",
        "bar",
        "pie",
        "line",
        "multiline",
      ],
    };
  },
  methods: {
    link(l) {
      if (this.$route.name !== l) {
        router.replace({
          name: l,
        });
      }
    },
  },
};
</script>

<style scoped></style>
