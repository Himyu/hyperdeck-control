<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
</script>

<ModeWatcher />

<Sidebar.Provider>
	<AppSidebar />
	<main>
		<Sidebar.Trigger />
		<div class="ml-[75px]">
			{@render children?.()}
		</div>
	</main>
</Sidebar.Provider>