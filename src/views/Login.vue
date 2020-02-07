<template>
  <div class="frmLogin">
    <img alt="Vue logo" src="../assets/logo.png">
    <FrmLogin msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
// @ is an alias to /src
import FrmLogin from '@/components/frmLogin.vue';

export default {
  name: 'home',
  components: {
    FrmLogin,
  },
};
</script>
