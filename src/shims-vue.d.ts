import VueRouter from 'vue-router'
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
  import Vue from "vue";
  export default Vue;
  
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
  }
}