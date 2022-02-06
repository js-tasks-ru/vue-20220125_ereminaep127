import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
    name: 'PageMeetup',

    data() {
        return {
            meetup: null,
            load: true,
            error: false
        }
    },

    components: {
        UiAlert,
        UiContainer,
        MeetupView
    },

    props: {
        meetupId: {
            type: Number,
            default: 1
        }
    },

    watch: {
        meetupId: function(meetupId) {
            this.getMeetup(meetupId);
        }
    },

    created() {
        this.getMeetup(this.meetupId);
    },

    methods: {
        getMeetup(meetupId) {
            this.load = true;
            fetchMeetupById(meetupId).then(
                result => {
                    this.load = this.error = false;
                    this.meetup = result;
                },
                error => {
                    this.load = false;
                    this.error = error.message;
                }
            );
        }
    },

    template: `
    <div class="page-meetup">
      <meetup-view v-if="meetup&&!load&&!error" :meetup="meetup"></meetup-view>

      <ui-container v-if="load">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="error">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
