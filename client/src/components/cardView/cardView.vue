<template>
  <button :class="['cardView', { alt: alt }]">
    <div class="cardView-header">
      <icon class="icon_24"><component :is="icon" /></icon>
      <div class="title-wrap">
        <div class="title">
          <span>{{ title }}</span>
        </div>
        <div v-if="content" class="content">{{ content }}</div>
      </div>
    </div>

    <div class="cardView-content">
      <slot></slot>
    </div>
    <div class="underlay" />
  </button>
</template>

<script>
import { defineAsyncComponent } from "vue";
import "@/components/cardView/cardView.scss";

export default {
  components: {
    outline: defineAsyncComponent(() => import("@/components/icon/outline")),
    shadow: defineAsyncComponent(() => import("@/components/icon/shadow")),
    polygons: defineAsyncComponent(() => import("@/components/icon/polygons")),
    caretRight: defineAsyncComponent(() =>
      import("@/components/icon/caretRight")
    ),
    color: defineAsyncComponent(() => import("@/components/icon/color")),
    home: defineAsyncComponent(() => import("@/components/icon/home")),

    textAa: defineAsyncComponent(() => import("@/components/icon/textAa")),
    titles: defineAsyncComponent(() => import("@/components/icon/titles")),
    background: defineAsyncComponent(() =>
      import("@/components/icon/background")
    ),
    backgroundFilter: defineAsyncComponent(() =>
      import("@/components/icon/backgroundFilter")
    ),
    countdown: defineAsyncComponent(() =>
      import("@/components/icon/countdown")
    ),
    images: defineAsyncComponent(() => import("@/components/icon/images")),
    transport: defineAsyncComponent(() =>
      import("@/components/icon/transport")
    ),
    audios: defineAsyncComponent(() => import("@/components/icon/audios")),
    audioAuto: defineAsyncComponent(() =>
      import("@/components/icon/audioAuto")
    ),
    heart: defineAsyncComponent(() => import("@/components/icon/heart")),
    envelope: defineAsyncComponent(() => import("@/components/icon/envelope")),
    location: defineAsyncComponent(() => import("@/components/icon/location")),
    maps: defineAsyncComponent(() => import("@/components/icon/maps")),
    app: defineAsyncComponent(() => import("@/components/icon/app")),
    notice: defineAsyncComponent(() => import("@/components/icon/notice")),
    bank: defineAsyncComponent(() => import("@/components/icon/bank")),
    videos: defineAsyncComponent(() => import("@/components/icon/videos")),
    videoAuto: defineAsyncComponent(() =>
      import("@/components/icon/videoAuto")
    ),
    password: defineAsyncComponent(() => import("@/components/icon/password")),
    survey: defineAsyncComponent(() => import("@/components/icon/survey")),
    order: defineAsyncComponent(() => import("@/components/icon/order")),
    kakaotalk: defineAsyncComponent(() =>
      import("@/components/icon/kakaotalk")
    ),
    calendar: defineAsyncComponent(() => import("@/components/icon/calendar")),
    date: defineAsyncComponent(() => import("@/components/icon/date")),

    textT: defineAsyncComponent(() => import("@/components/icon/textT")),
    phone: defineAsyncComponent(() => import("@/components/icon/phone")),
    users: defineAsyncComponent(() => import("@/components/icon/users")),
    user: defineAsyncComponent(() => import("@/components/icon/user")),
    plus: defineAsyncComponent(() => import("@/components/icon/plus")),
    design: defineAsyncComponent(() => import("@/components/icon/design")),
    crop: defineAsyncComponent(() => import("@/components/icon/crop")),
    falling: defineAsyncComponent(() =>
      import("@/components/icon/confettiFalling")
    ),
    side: defineAsyncComponent(() => import("@/components/icon/confettiSide")),
    explosion: defineAsyncComponent(() =>
      import("@/components/icon/confettiExplosion")
    ),
    confetti: defineAsyncComponent(() => import("@/components/icon/shapes")),
    sakura: defineAsyncComponent(() => import("@/components/icon/sakura")),
    grid: defineAsyncComponent(() => import("@/components/icon/grid")),
    swipe: defineAsyncComponent(() => import("@/components/icon/swipe")),
    thumb: defineAsyncComponent(() => import("@/components/icon/thumbnail")),
    slideshow: defineAsyncComponent(() =>
      import("@/components/icon/slideshow")
    ),
    chat: defineAsyncComponent(() => import("@/components/icon/chat")),
    share: defineAsyncComponent(() => import("@/components/icon/share")),
    at: defineAsyncComponent(() => import("@/components/icon/at")),
    frame: defineAsyncComponent(() => import("@/components/icon/frame")),
    rsvp: defineAsyncComponent(() => import("@/components/icon/rsvp")),
    stamp: defineAsyncComponent(() => import("@/components/icon/stamp")),
    settings: defineAsyncComponent(() => import("@/components/icon/settings")),
    upload: defineAsyncComponent(() => import("@/components/icon/upload")),

    left: defineAsyncComponent(() => import("@/components/icon/alignLeft")),
    center: defineAsyncComponent(() => import("@/components/icon/alignCenter")),
    right: defineAsyncComponent(() => import("@/components/icon/alignRight")),
  },
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    alt: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
