<template>
  <div class="row">
		<SideMenu/>
			<div class="right-column">
				<TopBar/>
				<main class="main-content p-5" role="main">
					<div class="row">
						<div class="col-md-12">
							<h1>Bienvenido</h1>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">Soporte</div>
								<div class="card-body">
									<p>
										¿Tienes dudas, sugerencias o algun problema? te atendemos en el numero 618 138 68 16
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-md-12">
							<footer>
								Powered by - <a href="http://base5builder.com/?click_source=quillpro_footer_link" target="_blank" style="font-weight:300;color:#ffffff;background:#1d1d1d;padding:0 3px;">Base<span style="color:#ffa733;font-weight:bold">5</span>Builder</a>
							</footer>
						</div>
					</div>
				</main>
			</div>
		</div>
</template>

<script>
// @ is an alias to /src
import SideMenu from '@/components/SideMenu.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'demo',
  components: {
	  SideMenu,
	  TopBar,
  },
};
</script>
