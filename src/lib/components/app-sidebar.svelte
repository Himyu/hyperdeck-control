<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Sun from 'lucide-svelte/icons/sun';
	import Button from './ui/button/button.svelte';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import AddHyperdeck from './add-hyperdeck.svelte';
	import { Separator } from "$lib/components/ui/separator";
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight">Hyperdeck Control</h1>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Separator class="my-3" />
			
			<Separator class="my-3" />
		</Sidebar.Group>
		<Sidebar.Group class="mt-auto">
			<AddHyperdeck></AddHyperdeck>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer>
		<Button onclick={toggleMode} variant="outline" size="sm">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden"
			/>
			<Moon
				class="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hidden dark:block"
			/>
			Toggle theme
		</Button>
	</Sidebar.Footer>
</Sidebar.Root>
