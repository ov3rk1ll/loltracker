import _Vue from "vue";

import Pusher from "pusher-js";
import * as PusherTypes from "pusher-js";

declare module "vue/types/vue" {
  interface Vue {
    $pusher: Pusher;
  }
}

export function PusherPlugin(
  Vue: typeof _Vue,
  options: PusherPluginOptions
): void {
  Vue.prototype.$pusher = new Pusher(options?.appKey, options?.options);
}

export interface PusherPluginOptions {
  appKey: string;
  options: PusherTypes.Options;
}
