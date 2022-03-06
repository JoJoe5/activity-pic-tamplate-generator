import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSignaturePad from 'vue-signature-pad';
import App from './App.vue';
import router from './router';
import store from './store';
import { bootstrap } from './assets/bootstrap-5.1.2-dist/js/bootstrap.bundle.min';
import './assets/bootstrap-icons-1.6.1/bootstrap-icons.css';

// 全域的導航守衛, 進入路由之前先確認是否有登入
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)bearerToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const api = `${process.env.VUE_APP_API_BASE_URL}Login/LoginCheck`;
    axios.post(api).then((res) => {
      if (res.data.isSuccess === true) {
        store.commit('addUserInfo', res.data.response);
        next();
      } else {
        store.commit('resetUserInfo');
        next({ name: 'Login' });
      }
    });
  } else {
    next();
  }
});
// 頁面的權限驗證
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API_BASE_URL}Permission/PagePermissionCheck`;
    axios
      .post(api, {}, { params: { pageAlias: to.name } })
      .then((res) => {
        if (res.data.isSuccess) {
          next();
        } else {
          // 如果沒權限就強制回到登入頁面
          next({ name: 'Login' });
        }
      })
      .catch((err) => {
        console.log(err);
        next({ name: 'Login' });
      });
  } else {
    next();
  }
});
const app = createApp(App);
app.use(VueAxios, axios);
app.use(store);
app.use(router);
app.use(bootstrap);
app.use(VueSignaturePad);
app.mount('#app');
