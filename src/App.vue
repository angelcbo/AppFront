<template>
  <div id="app" class="container-fluid">
  <router-view/>
	</div>
</template>


<script>
export default {
  computed: {
    isLoggedIn() { return this.$store.getters.isLoggedIn; },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login');
        });
    },
  },
  created() {
    this.$http.interceptors.response.use(undefined, err => new Promise(function (resolve, reject) {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch(logout);
      }
      throw err;
    }));
  },
};
</script>
