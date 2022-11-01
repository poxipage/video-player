<script lang="ts">
    import { getVideo } from "./state";

    const video = getVideo()

    let source = ""
    let poster = ""

    const updateVideo = () => {
        if (poster != "") $video.poster = poster
        if (source != "") $video.source = source
    }
    
</script>

<div class="pb-5">
    <label for="video">Upload video (.webm, .mp4 or ogv format)</label>
    <input bind:value={source} name="video" type="text">
</div>
<div class="pb-5">
    <label for="poster">Upload poster (.jpg format, optional)</label>
    <input bind:value={poster} name="poster" type="text">
</div>
<button class="btn" on:click={updateVideo}>Get video</button>

<div class="pb-5">
    <label for="poster">Loop</label>
    <input bind:checked={$video.loop} name="loop" type="checkbox">
</div>
