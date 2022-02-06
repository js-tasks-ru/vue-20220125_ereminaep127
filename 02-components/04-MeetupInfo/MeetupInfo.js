import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
    name: 'MeetupInfo',
    props: {
        organizer: {
            type: String,
            default: ''
        },
        place: {
            type: String,
            default: ''
        },
        date: {
            type: Number,
            default: 0
        }
    },
    computed: {
        dataFormat() {
            let date = new Date(this.date);
            let options = {
                year: "numeric",
                month: "long",
                day: "numeric"
            };
            return {
                format: date.toLocaleDateString(navigator.language, options),
                value: date.toISOString().split('T')[0]
            }
        }
    },
    template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="dataFormat.value">{{ dataFormat.format }}</time>
      </li>
    </ul>`,
});
