<svelte:options accessors />

<script lang="ts">
	import type { Options } from "../components/MonetPref/MonetPref.svelte";
	import MonetPref from "../components/MonetPref/MonetPref.svelte";
	import "../assets/global.css";

	export let heading = '';
	export let options: Options = [];
	export let onChange = (
		detail: { type: "allow" | "deny"; name: string } | { type: "reorder" },
	) => {};
</script>

<MonetPref bind:options bind:heading on:change={(ev) => onChange(ev.detail)} />
