<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';

</script>

<template>
	<div class="pt-0.5">
		<!-- App header -->
		<AppHeader />
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
		<!-- Scroll to top -->
		<back-to-top
			visibleoffset="500"
			right="30px"
			bottom="20px"
			class="shadow-lg"
		>
			<i data-feather="chevron-up"></i>
		</back-to-top>

		<!-- App footer -->
		<AppFooter />
	</div>
</template>

<style scoped>
</style>
