<script lang='ts'>
    import MarkdownDemo from "$lib/components/MarkdownDemo.svx"
</script>

<article class="markdown-demo">
    <MarkdownDemo/>
</article>
<footer class="text-black">
    <p>I've tried demonstrating a lot of stuff I believe is useful and purposely didn't document everything here so you hopefully have a good look, I hope you'll find it valuable.</p>
</footer>


<style>
    .markdown-demo {
        @apply text-gray-700 mb-4;
    }

    .markdown-demo :global(:is(h1,h2,h3)) {
        @apply mb-4;
    }

    .markdown-demo :global(p) {
        @apply text-base mb-6;
    }

    .markdown-demo :global(pre) {
        @apply p-4 rounded-lg;
    }

    .markdown-demo :global(pre:not(:last-of-type)){
        @apply mb-4;
    }

    .markdown-demo :global(a) {
        @apply text-lg text-blue-400;
    }

    .markdown-demo :global(h3) {
        @apply text-xl text-gray-400 uppercase font-semibold mb-2;
    }
</style>