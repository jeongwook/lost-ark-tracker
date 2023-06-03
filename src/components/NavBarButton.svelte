<script>
    export let button = ''
    // export let sub = []

</script>

<li class="flex text-xl">
    <!-- {#if button == 'Home'}
        <a href="/" class="flex items-center m-3 px-2 hover:text-white">{button}</a>
    {:else} -->
        <a href="/{button.toLowerCase()}" class="border-b border-transparent flex items-center m-3 px-3 transition-all hover:text-white hover:border-b hover:border-amber-400">{button}</a>
    <!-- {/if} -->

        <!-- Submenu -->
        <!-- {#if button == 'Roster'}
            <ul class="absolute">
                <li><a href="/">Test Dropdown</a></li>
                <li><a href="/">Test Dropdown</a></li>
                <li><a href="/">Test Dropdown</a></li>
                <li><a href="/">Test Dropdown</a></li>
            </ul>
        {/if} -->
</li>
