document.addEventListener('alpine:init', () => {
    Alpine.data('dayCounter', () => ({
        params: new URLSearchParams(window.location.search),

        init() {
            const titleText = `It has been ${this.count} ${this.unit} since ${this.subject}`;
            document.title = titleText;
        },

        get count() {
            const dateStr = this.params.get('last');
            if (!dateStr) return 0;

            const start = dayjs(dateStr).startOf('day');
            const now = dayjs().startOf('day');

            const diff = now.diff(start, 'day');

            return diff >= 0 ? diff : 0;
        },

        get unit() {
            return this.count === 1 ? 'day' : 'days';
        },

        get subject() {
            return this.params.get('since') || 'the last time';
        }
    }));
});
