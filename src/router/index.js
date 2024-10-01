/**
 * Vue Router
 * @description: Vue Router configuration
 * @docs: https://router.vuejs.org/
 */
import {createRouter, createWebHistory} from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [],
});
/**
 * Set Business name as prefix for each page title
 */
router.beforeEach((to, from, next) => {
  let baseTitle = 'ACME Learning Center';
  document.title = `${baseTitle} | ${to.meta['title']}`;
  next();
});
export default router;