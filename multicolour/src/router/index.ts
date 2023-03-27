
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 *  全局路由守卫
 */
router.beforeEach((to, from, next) => {
 
  next();
});

export default router;