<template>
  <div class="DatetimePicker"
    @click='calendarClicked($event)'>
    <div class="DatetimePicker__wrapper">
      <input
        :class="['DatetimePicker__input', inputClass]"
        type='text'
        :id='id'
        :value="date"
        :name='name'
        @click='toggleCal'
        autocomplete='off' />
      <div class='DatetimePicker__calendar-container'
        ref="dropdown"
        :class="{'hidden': hideCal, 'top': position === 'top'}">
        <div class="DatetimePicker__calendar-picker"
           v-if="view === 'date'"
          :class="{'hidden': hideDate, 'current-period': currentMonth}">
          <div class='DatetimePicker__month-setter'>
            <button type='button'
              class='DatetimePicker__nav-l'
              @click='leftMonth'>
              <i class="icon-left-open"></i>
            </button>
            <span class='DatetimePicker__month'>
              {{month}} {{year}}
            </span>
            <button type='button'
              class='DatetimePicker__nav-r'
              @click='rightMonth'>
              <i class="icon-right-open"></i>
            </button>
          </div>
          <div class='DatetimePicker__headers'>
            <span class='DatetimePicker__days'
              v-for="(port, index) in days"
              :key="index">
              {{port}}
            </span>
          </div>
          <div class="DatetimePicker__ports">
            <span class="DatetimePicker__port"
              v-for="(port, index) in ports"
              :key="index"
              :class='{
                activePort: index === activePort,
                inScope: port,
                currentDay: port === current.day}'
              @click='setDay(index, port)'>
              {{port}}
            </span>
          </div>
          <div class="DatetimePicker__clear--grey"
            @click="clear">
            <i class="DatetimePicker__clear-text">Clear</i>
          </div>
        </div>
        <div class='DatetimePicker__time-picker'
          v-if="view === 'time'"
          :class='{hidden: hideTime}'>
          <div class="DatetimePicker__clear"
            @click="clear">
            <i class="DatetimePicker__clear-text">Clear</i>
          </div>
          <div class="DatetimePicker__time-picker-inner">
            <div class='DatetimePicker__hour-selector'>
              <i class="icon-up-open DatetimePicker__hour-selector-icon increase"
                @click="increaseHour"></i>
              <div class="DatetimePicker__hour-selector-value">
                {{hour}}
              </div>
              <i class="icon-down-open DatetimePicker__hour-selector-icon decrease"
                @click="decreaseHour"></i>
            </div>
            <div class='DatetimePicker__time-separator'>
              <span>:</span>
            </div>
            <div class='DatetimePicker__minute-selector'>
              <i class="icon-up-open DatetimePicker__hour-selector-icon increase"
                @click="increaseMinute"></i>
              <div class="DatetimePicker__minute-selector-value">
                {{minute}}
              </div>
              <i class="icon-down-open DatetimePicker__hour-selector-icon decrease"
                @click="decreaseMinute"></i>
            </div>
            <div class='DatetimePicker__period-switcher' >
              <div @click='changePeriod'>{{period}}</div>
            </div>
          </div>
          <div class="DatetimePicker__submit"
            @click="setDate">
            Submit
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatetimePicker',
  props: [
    'format',
    'name',
    'value',
    'inputClass',
    'position'
  ],
  data() {
    return {
      date: this.value,
      hideCal: true,
      activePort: null,
      timeStamp: new Date(1524743286000),
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      fullMonths: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthIndex: 0,
      hourIndex: 0,
      minuteIndex: 0,
      year: new Date().getFullYear(),
      portsHolder: [],
      minute: '00',
      hour: '01',
      day: 1,
      period: 'AM',
      current: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate()
      },
      view: null,
      timeFormats: ['h:i:s', 'h:i'],
      dateFormats: [
        'YYYY-MM-DD',
        'DD-MM-YYYY',
        'MM-DD-YYYY',
        'YYYY/MM/DD',
        'DD/MM/YYYY',
        'MM/DD/YYYY',
        'MMMM DD, YYYY'
      ],
      combinedFormats: [
        'YYYY-MM-DD h:i:s',
        'DD-MM-YYYY h:i:s',
        'MM-DD-YYYY h:i:s',
        'YYYY/MM/DD h:i:s',
        'DD/MM/YYYY h:i:s',
        'MM/DD/YYYY h:i:s',
        'MMMM DD, YYYY h:i:s',
        'YYYY-MM-DD h:i',
        'DD-MM-YYYY h:i',
        'MM-DD-YYYY h:i',
        'YYYY/MM/DD h:i',
        'DD/MM/YYYY h:i',
        'MM/DD/YYYY h:i',
        'MMMM DD, YYYY h:i'
      ],
      id: `datetime-input-${(Math.random() * (new Date().getTime())).toFixed()}`
    };
  },
  methods: {
    clear() {
      this.date = null;
    },
    leftMonth() {
      const index = this.months.indexOf(this.month);
      if (index === 0) {
        this.leftYear();
        this.monthIndex = 11;
      } else {
        this.monthIndex = index - 1;
      }
      this.updateCalendar();
    },
    rightMonth() {
      const index = this.months.indexOf(this.month);
      if (index === 11) {
        this.rightYear();
        this.monthIndex = 0;
      } else {
        this.monthIndex = index + 1;
      }
      this.updateCalendar();
    },
    rightYear() {
      this.year++;
      this.updateCalendar();
    },
    leftYear() {
      this.year--;
      this.updateCalendar();
    },
    updateCalendar() {
      const date = new Date(this.year, this.monthIndex, 1, 0, 0, 0);
      const day = date.getDay();
      const daysInMonth = new Date(this.year, this.monthIndex + 1, 0).getDate();
      const ports = [];
      let portsLenght = 35;
      if (day === 6 || (day === 5 && daysInMonth === 31)) {
        portsLenght = 42;
      }
      let activeFound = false;
      for (let i = 0; i < portsLenght; i++) {
        const j = i - day;
        const curr = (j < 0 || j >= daysInMonth) ? '' : j + 1;
        ports.push(curr);
        if (
          curr === this.day
          && this.timeStamp.getMonth() === this.monthIndex
          && this.timeStamp.getFullYear() === this.year
        ) {
          this.activePort = i;
          activeFound = true;
        }
      }
      if (!activeFound) {
        this.activePort = -1;
      }
      this.ports = ports;
    },
    setDay(index, port) {
      if (port !== '') {
        this.activePort = index;
        this.day = port;
        this.timeStamp = new Date(this.year, this.monthIndex, this.day);
        if (this.hideTime) {
          this.setDate();
        } else {
          this.view = 'time';
        }
      }
    },
    setMinute(index) {
      this.minuteIndex = index;
      this.minute = this.minutes[index];
    },
    setHour(index) {
      this.hourIndex = index;
      this.hour = this.hours[index];
    },
    scrollTopMinute() {
      const mHeight = this.$refs.minuteScroller.scrollHeight;
      const wHeight = this.$refs.minuteScrollerWrapper.clientHeight;
      const top = mHeight * ((this.minuteIndex / (this.minutes.length - 1)) - (wHeight / 2));
      this.$refs.minuteScroller.scrollTop = top;
    },
    scrollTopHour() {
      const mHeight = this.$refs.hourScroller.scrollHeight;
      const wHeight = this.$refs.hourScrollerWrapper.clientHeight;
      const top = mHeight * ((this.hourIndex / (this.hours.length - 1)) - (wHeight / 2));
      this.$refs.hourScroller.scrollTop = top;
    },
    changePeriod() {
      this.period = this.period === 'AM' ? 'PM' : 'AM';
    },
    calendarClicked(event) {
      event.cancelBubble = true;
      if (event.stopPropagation) {
        event.stopPropagation();
      }
    },
    documentClicked(event) {
      if (event.target.id !== this.id) {
        this.hideCal = true;
      }
    },
    toggleCal() {
      this.hideCal = !this.hideCal;
      this.view = this.hideDate ? 'time' : 'date';
    },
    setDate() {
      let d = null;
      if (!this.dateFormat) {
        console.error('Invalid date format supplied');
      } else {
        let h = `${this.hour}`;
        if (h === '12') {
          if (this.period === 'AM') {
            h = '00';
          } else {
            h = '12';
          }
        } else if (this.period === 'PM') {
          h = `${parseInt(h, 10) + 12}`;
        }
        d = this.dateFormat;
        this.minute += '';
        d = d.replace('h', h.length < 2 ? `0${h}` : `${h}`);
        d = d.replace('i', this.minute.length < 2 ? `0${this.minute}` : `${this.minute}`);
        d = d.replace('s', '00');
        d = d.replace('YYYY', this.year);
        d = d.replace('DD', this.day < 10 ? `0${this.day}` : `${this.day}`);
        d = d.replace('MMMM', this.fullMonths[this.monthIndex]);
        const m = this.monthIndex + 1;
        d = d.replace('MM', m < 10 ? `0${m}` : `${m}`);
        this.$emit('input', d);
        const mod = new Date(d);
        this.$emit('onchange', new Date(
          mod.getFullYear(),
          mod.getMonth(),
          mod.getDate(),
          mod.getHours(),
          mod.getMinutes(),
          mod.getSeconds()
        ).getTime());
        this.date = d;
        this.hideCal = true;
      }
    },

    zeroPad(val) {
      return `0${val}`.slice(-2);
    },

    increaseHour() {
      if (this.hour < 12) {
        this.hour++;
      } else {
        this.hour = 1;
        this.changePeriod();
      }
      this.hour = this.zeroPad(this.hour);
    },
    decreaseHour() {
      if (this.hour > 1) {
        this.hour--;
      } else {
        this.hour = 12;
        this.changePeriod();
      }
      this.hour = this.zeroPad(this.hour);
    },
    increaseMinute() {
      if (this.minute < 59) {
        this.minute++;
      } else {
        this.minute = 0;
        this.increaseHour();
      }
      this.minute = this.zeroPad(this.minute);
    },
    decreaseMinute() {
      if (this.minute > 0) {
        this.minute--;
      } else {
        this.minute = 59;
        this.decreaseHour();
      }
      this.minute = this.zeroPad(this.minute);
    },
    getHours() {
      let hour = this.timeStamp.getHours();
      if (hour > 12) {
        hour -= 12;
      } else if (hour === 0) {
        hour = 12;
      }
      return hour;
    }
  },
  created() {
    if (this.value) {
      try {
        this.timeStamp = new Date(this.value);
      } catch (e) {
        console.warn('Invalid date format supplied');
      }
    }
    this.year = this.timeStamp.getFullYear();
    this.monthIndex = this.timeStamp.getMonth();
    this.day = this.timeStamp.getDate();
    this.hour = this.zeroPad(this.getHours());
    this.period = this.timeStamp.getHours() >= 12 ? 'PM' : 'AM';
    this.minute = this.zeroPad(this.timeStamp.getMinutes());
    this.updateCalendar();
    document.addEventListener('click', this.documentClicked);
    this.setDate();
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal) {
        this.value = newVal;
        try {
          this.timeStamp = new Date(this.value);
        } catch (e) {
          console.warn('Invalid date format supplied');
        }
      }
      this.year = this.timeStamp.getFullYear();
      this.monthIndex = this.timeStamp.getMonth();
      this.day = this.timeStamp.getDate();
      this.hour = this.zeroPad(this.getHours());
      this.period = this.timeStamp.getHours() >= 12 ? 'PM' : 'AM';
      this.minute = this.zeroPad(this.timeStamp.getMinutes());
      this.updateCalendar();
      this.setDate();
    }
  },
  destroyed() {
    document.removeEventListener('click', this.documentClicked);
  },
  computed: {
    ports: {
      get() {
        let p = [];
        if (this.portsHolder.length === 0) {
          for (let i = 0; i < 42; i++) {
            p.push('');
          }
        } else {
          p = this.portsHolder;
        }
        return p;
      },
      set(newValue) {
        this.portsHolder = newValue;
      }
    },
    month() {
      return this.months[this.monthIndex];
    },
    dateTime() {
      return `${this.timeStamp.getFullYear()}-${(this.timeStamp.getMonth() + 1)}-${this.timeStamp.getUTCDay()}`;
    },
    minutes() {
      const arr = [];
      for (let i = 0; i < 60; i++) {
        i < 10 ? arr.push(`0${i}`) : arr.push(`${i}`);
      }
      return arr;
    },
    hours() {
      const arr = [];
      for (let i = 1; i <= 12; i++) {
        i < 10 ? arr.push(`0${i}`) : arr.push(`${i}`);
      }
      return arr;
    },
    dateFormat() {
      let f = 'YYYY-MM-DD h:i:s';
      const allowedFormats = [
        ...this.timeFormats,
        ...this.dateFormats,
        ...this.combinedFormats
      ];
      if (this.format) {
        f = this.format;
      }
      if (allowedFormats.indexOf(f) < 0) {
        console.warn('Invalid date format supplied');
        f = null;
      }
      return f;
    },
    hideTime() {
      const formatsWithTime = [
        ...this.combinedFormats,
        ...this.timeFormats
      ];
      return !formatsWithTime.includes(this.dateFormat);
    },
    hideDate() {
      return this.timeFormats.includes(this.dateFormat);
    },
    currentMonth() {
      return this.current.year === this.year && this.current.month === this.monthIndex;
    }
  }
};
</script>
<style scoped lang="scss">
@import "datetime-picker.scss";
</style>
