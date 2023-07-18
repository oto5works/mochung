<template>
    <div class="CalendarEnglish pa_24">
        <Sticker :main="main" />
        <div class="month__wrap">
            <div class="month">{{ month }}</div>
            <div class="year">{{ year }}</div>
        </div>

        <div class="sp_28"/>
        <Calendar
            ref="calendar"
            :attributes='attributes'
            locale="en"
        />
    </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar';
import Sticker from '@/views/Preview/13.Sticker/Sticker.vue'

export default {
    components: { DatePicker, Calendar, Sticker },
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
            weekdayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] // English weekday names
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
            const calendar = this.$refs.calendar;
            calendar.move(this.date);
            this.attributes = [
                {
                    highlight: true,
                    dates: this.date,
                }
            ];
        },
        splitDate() {
            const [year, month] = this.date.split('-');
            this.year = year;

            const englishMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const englishMonth = englishMonths[Number(month) - 1];
            this.month = englishMonth;
        }
    },
}
</script>

<style scoped>
.CalendarEnglish .title__wrap {
    justify-content: center;
}
.month__wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.year {
    display: block;
    font-size: 15px;
    font-weight: var(--font-weight);
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.2em;
}
.month {
    display: block;
    font-size: 28px;
    font-weight: var(--font-weight);
    line-height: 100%;
    letter-spacing: 0.4em;
    text-align: center;
}
</style>
