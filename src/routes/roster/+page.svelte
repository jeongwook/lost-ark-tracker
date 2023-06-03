<script>
    import { CharacterRoster } from '../../stores.js'

    $: characterCount = $CharacterRoster.length;
</script>

{#if characterCount === 0}
    <div class="flex justify-center py-14">
        <div class="p-6 bg-white max-w-sm rounded-xl flex items-center space-x-4">
            <div class="shrink=0">
                <img class="h12 w-12" src=" /images/Error.png" alt="error">
            </div>
            <div>
                <p class="font-medium text-black">You have no characters. Please add a character.</p>
            </div>
        </div>
    </div>
{:else}
    <div class="flex flex-wrap justify-center items-center py-14">
        <ul class="bg-neutral-950 rounded-xl p-10">
            <div class="text-2xl text-white">Characters</div>
            {#each $CharacterRoster as char (char.name)}
                <li class="flex items-center py-4 border-b border-neutral-400 first:pt-0 last:pb-0 last:border-transparent ">
                    <!-- {char.class} image or icon of class -->
                    <div class="ml-3">
                        <p class="text-lg font-medium text-white">{char.name}</p>
                        <p class="text-lg text-slate-500 truncate">ilevel: {char.ilevel}</p>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
{/if}

