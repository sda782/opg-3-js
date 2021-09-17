Vue.createApp({
    data() {
        return {
            word_original: '',
            word_normal: '',
            word_upper: '',
            word_lower: ''
        };
    },
    methods: {
        show() {
            this.word_normal = this.word_original
            this.word_lower = this.word_original.toLowerCase()
            this.word_upper = this.word_original.toUpperCase()
        },
    }
}).mount("#app");