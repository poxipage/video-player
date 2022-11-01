import { state, type State } from "poxi";

export type Video = {  poster: string, source: string, loop: boolean };
type Schema = { video: Video };
export const getState = () => state<Schema>();
export const getVideo = () => getState().get("video");

export function onCreate(state: State<Schema>) {
  state.set({
    video: { 
      poster: "https://res.cloudinary.com/dvm02rtnk/image/upload/c_scale,w_1024,q_auto/v1628058523/blender/HERO_Blender_Grease_Pencil_Showcase_g86hfo.jpg",
      source: "https://res.cloudinary.com/dvm02rtnk/video/upload/v1628057414/blender/HERO_Blender_Grease_Pencil_Showcase_1080p_ctsjpy.mp4" },
      loop: false,
  });
}
