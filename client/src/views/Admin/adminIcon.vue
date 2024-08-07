<template>
  <div>
    <p>아이콘 프리뷰</p>
    <div class="icon__wrap">
      <div class="icon__item" v-for="icon in icons" :key="icon">
        <div class="icon"><icon><component :is="icon" /></icon></div> 
        <span>{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import home from '@/components/icon/home'
import titles from '@/components/icon/titles'
import brush from '@/components/icon/brush'
import heart from '@/components/icon/heart'
import user from '@/components/icon/user'
import images from '@/components/icon/images'
import guest from '@/components/icon/guest'
import settings from '@/components/icon/settings'
import userSetting from '@/components/icon/userSetting'
import person from '@/components/icon/person'
import color from '@/components/icon/color'
import custom from '@/components/icon/custom'
import crop from '@/components/icon/crop'
import magicWand from '@/components/icon/magicWand'
import confettiFalling from '@/components/icon/confettiFalling'
import confettiSide from '@/components/icon/confettiSide'
import confettiExplosion from '@/components/icon/confettiExplosion'
import shapes from '@/components/icon/shapes'
import sakura from '@/components/icon/sakura'
import polygons from '@/components/icon/polygons'
import asterisk from '@/components/icon/asterisk'
import asterisk2 from '@/components/icon/asterisk2'

import star from '@/components/icon/star'
import sparkle from '@/components/icon/sparkle'
import copy from '@/components/icon/copy'
import textAa from '@/components/icon/textAa'
import textB from '@/components/icon/textB'
import textT from '@/components/icon/textT'

import textUnderline from '@/components/icon/textUnderline'
import textItalic from '@/components/icon/textItalic'
import textAlignLeft from '@/components/icon/textAlignLeft'
import textAlignCenter from '@/components/icon/textAlignCenter'
import textAlignRight from '@/components/icon/textAlignRight'
import alignLeft from '@/components/icon/alignLeft'
import alignCenter from '@/components/icon/alignCenter'
import alignRight from '@/components/icon/alignRight'

import textSizeDown from '@/components/icon/textSizeDown'
import textSizeUp from '@/components/icon/textSizeUp'
import highlighter from '@/components/icon/highlighter'
import clock from '@/components/icon/clock'
import calendar from '@/components/icon/calendar'
import arrowLeft from '@/components/icon/arrowLeft'
import arrowLeft2 from '@/components/icon/arrowLeft2'
import arrowLeft3 from '@/components/icon/arrowLeft3'
import arrowRight from '@/components/icon/arrowRight'
import arrowRight2 from '@/components/icon/arrowRight2'
import arrowRight3 from '@/components/icon/arrowRight3'
import arrowUpRight from '@/components/icon/arrowUpRight'

import caretLeft from '@/components/icon/caretLeft'
import caretRight from '@/components/icon/caretRight'
import caretDown from '@/components/icon/caretDown'
import x from '@/components/icon/x'
import list from '@/components/icon/list'
import listBack from '@/components/icon/listBack'
import archive from '@/components/icon/archive'
import info from '@/components/icon/info'
import login from '@/components/icon/login'
import logout from '@/components/icon/logout'
import eye from '@/components/icon/eye'
import eyeClosed from '@/components/icon/eyeClosed'
import http from '@/components/icon/http'
import outline from '@/components/icon/outline'
import shadow from '@/components/icon/shadow'

import grid from '@/components/icon/grid'
import slideshow from '@/components/icon/slideshow'
import thumbnail from '@/components/icon/thumbnail'
import swipe from '@/components/icon/swipe'
import background from '@/components/icon/background'
import backgroundFilter from '@/components/icon/backgroundFilter'

import countdown from '@/components/icon/countdown'
import check from '@/components/icon/check'
import plus from '@/components/icon/plus'
import minus from '@/components/icon/minus'
import transport from '@/components/icon/transport'
import audios from '@/components/icon/audios'
import audioAuto from '@/components/icon/audioAuto'
import envelope from '@/components/icon/envelope'
import location from '@/components/icon/location'
import maps from '@/components/icon/maps'
import app from '@/components/icon/app'
import notice from '@/components/icon/notice'
import bank from '@/components/icon/bank'
import videos from '@/components/icon/videos'
import videoAuto from '@/components/icon/videoAuto'
import password from '@/components/icon/password'
import survey from '@/components/icon/survey'
import order from '@/components/icon/order'
import kakaotalk from '@/components/icon/kakaotalk'
import music from '@/components/icon/music'
import upload from '@/components/icon/upload'

import kakaomap from '@/components/icon/kakaomap'
import kakaonavi from '@/components/icon/kakaonavi'
import navermap from '@/components/icon/navermap'
import naver from '@/components/icon/naver'

import tmap from '@/components/icon/tmap'
import phone from '@/components/icon/phone'
import swap from '@/components/icon/swap'
import users from '@/components/icon/users'
import user1 from '@/components/icon/user1'
import user2 from '@/components/icon/user2'

import kanji from '@/components/icon/kanji'
import flower from '@/components/icon/flower'
import ribbon from '@/components/icon/ribbon'
import cross from '@/components/icon/cross'

import play from '@/components/icon/play'
import pause from '@/components/icon/pause'

import dots from '@/components/icon/dots'
import paperPlane from '@/components/icon/paperPlane'
import save from '@/components/icon/save'
import design from '@/components/icon/design'
import and from '@/components/icon/and'
import search from '@/components/icon/search'
import chat from '@/components/icon/chat'
import share from '@/components/icon/share'
import trash from '@/components/icon/trash'
import pencil from '@/components/icon/pencil'
import at from '@/components/icon/at'
import question from '@/components/icon/question'
import frame from '@/components/icon/frame'
import hand from '@/components/icon/hand'
import rsvp from '@/components/icon/rsvp'
import lock from '@/components/icon/lock'
import warning from '@/components/icon/warning'
import stamp from '@/components/icon/stamp'
import camera from '@/components/icon/camera'
import compass from '@/components/icon/compass'



// bank
import bankKb from '@/components/icon/bankKb'
import bankIbk from '@/components/icon/bankIbk'
import bankNh from '@/components/icon/bankNh'
import bankShinhan from '@/components/icon/bankShinhan'
import bankKdb from '@/components/icon/bankKdb'
import bankWoori from '@/components/icon/bankWoori'
import bankCiti from '@/components/icon/bankCiti'
import bankKeb from '@/components/icon/bankKeb'
import bankSc from '@/components/icon/bankSc'
import bankBnk from '@/components/icon/bankBnk'
import bankJb from '@/components/icon/bankJb'
import bankDgb from '@/components/icon/bankDgb'
import bankDb from '@/components/icon/bankDb'
import bankBac from '@/components/icon/bankBac'
import bankSj from '@/components/icon/bankSj'
import bankSb from '@/components/icon/bankSb'
import bankMg from '@/components/icon/bankMg'
import bankSh from '@/components/icon/bankSh'
import bankCu from '@/components/icon/bankCu'
import bankPost from '@/components/icon/bankPost'
import bankKakao from '@/components/icon/bankKakao'
import bankKbank from '@/components/icon/bankKbank'
import bankToss from '@/components/icon/bankToss'
import bankSelf from '@/components/icon/bankSelf'
import kakaopay from '@/components/icon/kakaopay'

export default {
  components: { home, titles, brush, heart, user, images, guest, settings, userSetting, person, color, custom, crop, magicWand, confettiFalling,
    confettiSide, confettiExplosion, shapes, sakura, polygons, asterisk, asterisk2, star, sparkle, copy, 
    textAa, textB, textT, textUnderline, textItalic, textAlignLeft, textAlignCenter, textAlignRight, alignLeft, alignCenter, alignRight, textSizeDown, textSizeUp, highlighter,
    clock, calendar, 
    arrowLeft, arrowLeft2, arrowLeft3, arrowRight, arrowRight2, arrowRight3, arrowUpRight, caretLeft, caretRight, caretDown, x, list, listBack, archive, info, login, logout,
    eye, eyeClosed, http, outline, shadow,
    grid, slideshow, thumbnail, swipe, background, backgroundFilter, countdown, check, plus, minus, transport, audios, audioAuto,
    envelope, location, maps, app, notice, bank, videos, videoAuto, password, survey, order, kakaotalk, music, upload,
    kakaomap, kakaonavi, navermap, naver, tmap, phone, swap, users, user1, user2, kanji, flower, ribbon, cross, play, pause, dots, paperPlane, save, design, and, search, chat, share,
    trash, pencil, at, question, frame, hand, rsvp, lock, warning, stamp, camera, compass,
    // bank
    bankKb, bankIbk, bankNh, bankShinhan, bankKdb, bankWoori, bankCiti, bankKeb, bankSc, bankBnk, bankJb,
    bankDgb, bankDb, bankBac, bankSj, bankSb, bankMg, bankSh, bankCu, bankPost, bankKakao, bankKbank, bankToss, bankSelf, kakaopay, 

  },
  data() {
    return {
      icons: [
        'home', 'titles', 'brush', 'heart', 'user', 'images', 'guest', 'settings', 'userSetting', 'person', 'color', 'custom', 'crop', 'magicWand',
        'confettiFalling', 'confettiSide', 'confettiExplosion', 'shapes', 'sakura', 'polygons', 'asterisk', 'asterisk2', 'star', 'sparkle', 'copy', 
        'textAa', 'textB', 'textT', 'textUnderline', 

        'textItalic', 'textAlignLeft', 'textAlignCenter', 'textAlignRight', 'alignLeft', 'alignCenter', 'alignRight', 'textSizeDown', 'textSizeUp', 'highlighter',
         'clock', 'calendar', 
         'arrowLeft', 'arrowLeft2', 'arrowLeft3', 'arrowRight', 'arrowRight2', 'arrowRight3', 'arrowUpRight', 'caretLeft', 'caretRight', 'caretDown', 'x', 'list', 'listBack', 'archive', 'info', 'login', 'logout',
         'eye', 'eyeClosed', 'http', 'outline', 'shadow',
         'grid', 'slideshow', 'thumbnail', 'swipe', 'background', 'backgroundFilter', 'countdown', 'check', 'plus', 'minus', 'transport', 'audios', 'audioAuto',
         'envelope', 'location', 'maps', 'app', 'notice', 'bank', 'videos', 'videoAuto', 'password', 'survey', 'order', 'kakaotalk', 'music', 'upload',
         'kakaomap', 'kakaonavi', 'navermap', 'naver', 'tmap', 'phone', 'swap', 'users', 'user1', 'user2', 'kanji', 'flower', 'ribbon', 'cross', 'play', 'pause', 'dots', 'paperPlane', 'save', 'design', 'and', 'search', 'chat',
         'share', 'trash', 'pencil', 'at', 'question', 'frame', 'hand', 'rsvp', 'lock', 'warning', 'stamp', 'camera', 'compass',

         //bank
         'bankKb', 'bankIbk', 'bankNh', 'bankShinhan', 'bankKdb', 'bankWoori', 'bankCiti', 'bankKeb', 'bankSc', 'bankBnk', 'bankJb',
    'bankDgb', 'bankDb', 'bankBac', 'bankSj', 'bankSb', 'bankMg', 'bankSh', 'bankCu', 'bankPost', 'bankKakao', 'bankKbank', 'bankToss', 'bankSelf', 'kakaopay'

      ]
    };
  },
};
</script>
<style scoped>
.icon__wrap {
  position: relative;
  display: grid;
	grid-template-columns: repeat(8, 1fr);
  gap: 24px 0;
  width: 100%;
  padding: 24px;
}
.icon__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.icon__item span {
  font-size: 12px;
  text-align: center;
}
.icon__item .icon {
  position: relative;
  width: 24px;
  height: 24px;
}
.icon__item .icon::before{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: aqua;
  opacity: .15;
}
</style>