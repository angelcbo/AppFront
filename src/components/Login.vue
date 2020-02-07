<template>

	<div class="row">
		<div class="right-column sisu">
			<div class="row mx-0">
				<div class="col-md-7 order-md-2 signin-right-column px-5 bg-dark">
					<a class="signin-logo d-sm-block d-md-none" href="#">
						<img src="assets/img/logo-white.png" width="145" height="32.3" alt="QuillPro">
					</a>
					<h1 class="display-4">Sign In To get Started</h1>
					<p class="lead mb-5">
						Big data latte SpaceTeam unicorn cortado hacker physical computing paradigm.
					</p>
				</div>
				<div class="col-md-5 order-md-1 signin-left-column bg-white px-5">
					<a class="signin-logo d-sm-none d-md-block" href="#">
						<img src="assets/img/logo-dark.png" width="145" height="32.3" alt="QuillPro">
					</a>
					<form>
						<div class="form-group">
							<label for="exampleInputEmail1">Username </label>
							<input v-model="Username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
							<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input v-model="Password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
						</div>
						<div class="custom-control custom-checkbox mb-3">
							<input type="checkbox" class="custom-control-input" id="keep-signed-in">
							<label class="custom-control-label" for="keep-signed-in">Keep Me Signed In</label>
						</div>
						
						<button type="button" id="btna" class="btn btn-primary btn-block" @click="login" >
							<i class="batch-icon batch-icon-key"></i>
							Sign In
						</button>

						<button type="button" id="btnb" class="btn btn-primary  btn-block" @click="logout" >
							<i class="batch-icon batch-icon-key"></i>
							logout
						</button>
						<button type="button" class="btn btn-primary  btn-block" @click="showToken" >
							<i class="batch-icon batch-icon-key"></i>
							showtoken
						</button>
						
						<p class="text-center">
							Don't Have An Account? <a href="sisu-signup.html">Sign Up here</a>
						</p>
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
    return {
      Username: 'root',
      Password: 'root',
    };
  },
  methods: {
	showToken(){
		// console.log('token ', MasterModel.getAuthToken())
		console.log(this.$store.getters.isLoggedIn);
		console.log(this.$store.getters.authStatus)
	},
    login() {
      const { Username } = this;
      const { Password } = this;
      this.$store.dispatch('login', { Username, Password })
        .then(
			() => this.$router.push('/')
			// () => console.log('loged', this.$store.getters.isLoggedIn )
		).catch(err => console.log(err));
	},
	logout(){
		this.$store.dispatch('logout')
        .then(
			() => this.$router.push('/')
			// () => console.log('loged', this.$store.getters.isLoggedIn )
		).catch(err => console.log(err));
	}
  },
};
</script>
