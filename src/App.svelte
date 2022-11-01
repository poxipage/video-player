<script lang="ts">
  import VideoPlayer from "svelte-video-player";
    import { type Video, getVideo } from "./state";
  
  const video = getVideo()

  let source = ""
  let poster = ""
  let loop = false

  const update = (video: Video) => {
    source = video.source
  }
  
</script>

<VideoPlayer  poster={$video.poster} source={$video.source} loop={$video.loop} />


<style>
</style>
