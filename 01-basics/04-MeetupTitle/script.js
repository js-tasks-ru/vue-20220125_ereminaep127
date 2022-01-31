import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
    return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return response.json().then((error) => {
                throw error;
            });
        }
    });
}

const Meetup = {
    data() {
        return {
            meetupId: 0,
            meetupTitle: ''
        }
    },
    watch: {
        meetupId: function(id) {
            fetchMeetupById(id).then(
                result => this.meetupTitle = result.title
            );
        }
    }
}

createApp(Meetup).mount('#app')
