<template>
    <div class="CalendarKorean pa_24">
        <div class="title__wrap">
            <div class="title__content">
                <Sticker :main="main" />
                    <div class="month__wrap">
                        <div class="month">{{ month }}</div>
                        <div class="year">{{ year }}</div>
                    </div>
            </div>
        </div>
        <div class="sp_28"/>
        <Calendar
            ref="calendar"
            :attributes='attributes'
        />
    </div>
</template>


<script>
import { Calendar, DatePicker } from 'v-calendar';
import Sticker from '@/views/Preview/13.Sticker/Sticker.vue'

export default {
    components: { DatePicker,Calendar, Sticker },
    data() {
        return {
            attributes: [
                {
                    highlight: true,
                    dates: this.date,
                }
            ],
            year: null,
            month: null,
        }
    },
    props: {
        date: String,
        main: { type: Object },
    },
    watch: {
        date() {
            this.moveDate();
            this.splitDate();
        },
    },
    mounted() {
        this.moveDate();
        this.splitDate();
    },
    methods: {
        moveDate() {
            const calendar = this.$refs.calendar
            calendar.move(this.date)
            this.attributes = [
                {
                    highlight: true,
                    dates: this.date,
                }
            ]
        },
        splitDate() {
  const [year, month] = this.date.split('-');
  this.year = year;
  
  const koreanMonths = ['일월', '이월', '삼월', '사월', '오월', '유월', '칠월', '팔월', '구월', '시월', '십일월', '십이월'];
  const koreanMonth = koreanMonths[Number(month) - 1];
  this.month = koreanMonth;
}



    },
}
</script>

<style scoped>
.CalendarKorean .title__wrap {
  justify-content: flex-end;
}
.CalendarKorean .vc-day-content {
    font-size: 14px;
}
.month__wrap {
    position: relative;
    display: flex;
    gap: 4px;
}
.year {
    display: block;
    font-size: 16px;
    font-weight: var(--font-weight);
    line-height: 100%;
    writing-mode: vertical-rl;
text-orientation: upright;
}
.month {
    display: block;
    font-size: 40px;
    font-weight: var(--font-weight);
    line-height: 100%;
    letter-spacing: 0.15em;
    writing-mode: vertical-rl;
text-orientation: upright;
}
</style>