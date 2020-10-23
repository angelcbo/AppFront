<template>
	<div class="row fill-height">
		<div class="col-md-7 order-md-2 signin-right-column px-5 bg-dark">
			<div class="d-flex align-items-center fill-height">
				<div>
					<a class="signin-logo d-sm-block d-md-none" href="#">
						<img src="/img/LogoB.svg" width="145" height="32.3" v-bind:alt="Sistema">
					</a>
					<h1 class="display-4">{{Sistema}}</h1>
					<p class="lead mb-5">
						Ingresa tu usuario y contraseña.
					</p>
				</div>
			</div>
		</div>
		<div class="col-md-5 order-md-1 signin-left-column bg-white px-5">
			<div class="d-flex align-items-center fill-height">
				<div class="col-md-12">		
					<div class="d-flex flex-column align-items-center mb-3">
						<a href="#">			
							<img src="/img/LogoB.svg" height="150" v-bind:alt="Sistema">
						</a>
					</div>
					<form>
						<div class="form-group">
							<label for="user">Usuario </label>
							<input v-model="Username" type="text" class="form-control" id="user" placeholder="Usuario">

						</div>
						<div class="form-group">
							<label for="password">Contraseña</label>
							<input v-model="Password" type="password" class="form-control" id="password" placeholder="Contraseña">
						</div>


						<button type="button" id="btnLogin" class="btn btn-primary btn-block" @click="login" >
							<i class="batch-icon batch-icon-key"></i>
							Ingresar
						</button>

						<button type="button" id="btnb" class="btn btn-primary  btn-block" @click="logout" >
							<i class="batch-icon batch-icon-key"></i>
							logout
						</button>
						<button type="button" id="btnc" class="btn btn-primary  btn-block" @click="showToken" >
							<i class="batch-icon batch-icon-key"></i>
							showtoken
						</button>


					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<style>

</style>

<script>
import MasterModel from '@/modules/core/MasterModel.js';

export default {
  data() {
    const res = {
      Sistema: 'Nombre Sistema',
      Username: '',
      Password: '',
    };
    if (MasterModel.isDev) {
      res.Username = 'root';
      res.Password = 'root';
    }
    return res;
  },
  methods: {
    showToken() {
      // console.log('token ', MasterModel.getAuthToken())
      console.log(this.$store.getters.isLoggedIn);
      console.log(this.$store.getters.authStatus);
    },
    login() {
      const { Username } = this;
      const { Password } = this;
      this.$store.dispatch('login', { Username, Password })
        .then(
          () => this.$router.push('/'),
          // () => console.log('loged', this.$store.getters.isLoggedIn )
        ).catch(err => console.log(err));
    },
    logout() {
      this.$store.dispatch('logout')
        .then(
          () => this.$router.push('/'),
          // () => console.log('loged', this.$store.getters.isLoggedIn )
        ).catch(err => console.log(err));
    },
  },
};
</script>

<style>
html, body, .container-fluid{
    height: 100%;
}

.fill-height {
    min-height: 100%;
    height:auto !important; /* cross-browser */
    height: 100%; /* cross-browser */
}
</style>