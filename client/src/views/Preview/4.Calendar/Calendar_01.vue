<template>
    <div class="calendar-default pa_24">
        <div class="title__wrap">
            <div class="title__content">
                <Sticker :main="main" />
                    <div class="month__wrap">
                        <div class="year">{{ year }}</div>
                        <div class="month">{{ month }}</div>
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
            this.month = Number(month).toLocaleString('en-US', { minimumIntegerDigits: 1 });
            },

    },
}
</script>

<style scoped>
.calendar-default {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:baseline;
}
.month__wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.year {
    display: block;
    font-size: 18px;
    font-weight: 700;
    line-height: 100%;
    text-align: center;
    width: 80px;
}
.month {
    display: block;
    font-size: 80px;
    font-weight: var(--font-weight);
    line-height: 100%;
    text-align: center;
    width: 80px;
}
</style>