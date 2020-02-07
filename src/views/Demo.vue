<template>
  <div class="row">
		<SideMenu/>
			<div class="right-column">
				<TopBar/>
				<main class="main-content p-5" role="main">
					<div class="row">
						<div class="col-md-12">
							<h1>Starter Kit</h1>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">What is this?</div>
								<div class="card-body">
									<p>
										This is a blank Starter Kit for you to jump start your project.
									</p>
									<p>
										It contains QuillPro's basic layout so you can populate it with your awesomeness!
									</p>
									<h4>How do I use this Starter Kit?</h4>
									<ol>
										<li>Simple! Just open up your root folder and locate <code>starter-kit.html</code></li>
										<li>Copy it into your project folder</li>
										<li>Rename it from <code>starter-kit.html</code> to <code>index.html</code> <i>(or whatever extension you require for your project)</i></li>
										<li>Open your favorite text editor and start building your awesome app!</li>
										<li>That's it!</li>
									</ol>
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
