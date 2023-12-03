<script>
	import '../app.pcss';
	import ParaglideJsSvelteKitAdapter from '$lib/ParaglideSvelteKit.svelte';
	import { ModeWatcher } from "mode-watcher";
</script>

<svelte:head>
	<script async src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js'></script>
        <script>
          var wa_btnSetting = {"btnColor":"#16BE45","ctaText":"تواصل معنا","cornerRadius":40,"marginBottom":20,"marginLeft":20,"marginRight":20,"btnPosition":"right","whatsAppNumber":"966539040070","welcomeMessage":"السلام عليكم","zIndex":999999,"btnColorScheme":"light"};
          window.onload = () => {
            _waEmbed(wa_btnSetting);
          };
        </script>
</svelte:head>

<ParaglideJsSvelteKitAdapter>
	<ModeWatcher />
	<slot />
</ParaglideJsSvelteKitAdapter>
