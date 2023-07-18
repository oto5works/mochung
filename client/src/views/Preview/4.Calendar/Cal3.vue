<template>
    <div class="calendar-default">
        <Calendar
            ref="calendar"
            :attributes='attributes'
        />
    </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
export default {
    components: { DatePicker,Calendar },
    data() {
        return {
            attributes: [
                {
                    highlight: true,
                    dates: this.date,
                }
            ]
        }
    },
    props: {
        date: String,
    },
    watch: {
        date() {
            this.moveDate();
        },
    },
    mounted() {
        const calendar = this.$refs.calendar;
        calendar.move(this.date || new Date().toISOString().substring(0, 10))
            this.attributes = [
                {
                    highlight: true,
                    dates: this.date || new Date().toISOString().substring(0, 10)
                }
            ]
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
    },
}
</script>
<style scoped>

</style>