<template>
    <DatePicker
        v-model:value="time"
        format="hh:mm a"
        value-type="format"
        type="time"
        placeholder="시간을 선택하렴"
        @open="appendDatepickerPopupToBottomSheet"
    ></DatePicker>
</template>
<script>
import DatePicker from 'vue-datepicker-next';
export default {
    components: { DatePicker },
    props: {
        time: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
        time:null,
        }
    },
    watch: {
        time: function(time) {
            this.$emit('selectedTime', time);
        },
    },
    methods: {
        appendDatepickerPopupToBottomSheet() {
            this.$nextTick(() => {
                const datepickerPopup = document.querySelector(".mx-datepicker-popup");
                if (datepickerPopup)
                this.$refs.bottomSheetContent.appendChild(datepickerPopup);
            });
        },
    }
  };
  </script>
  
  <style>
  </style>
  