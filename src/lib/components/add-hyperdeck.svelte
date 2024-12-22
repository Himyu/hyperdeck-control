<script lang="ts">
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { Button } from './ui/button';
</script>

<Accordion.Root class="w-full">
	<Accordion.Item value="item-1">
		<Accordion.Trigger>Add New Hyperdeck</Accordion.Trigger>
		<Accordion.Content>
			<form>
				<div class="grid w-full items-center gap-4">
					<div class="flex flex-col space-y-1.5">
						<Label for="name">Name</Label>
						<Input id="name" placeholder="Name of your project" />
					</div>
					<div class="flex flex-col space-y-1.5">
						<Label for="ip">IP-Address</Label>
						<Input id="ip" placeholder="10.125.100...." />
					</div>

          <div class="flex justify-between">
            <Button>Add Hyperdeck</Button>
          </div>
				</div>
			</form>
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
