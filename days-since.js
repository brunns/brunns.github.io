document.addEventListener('alpine:init', () => {
    Alpine.data('dayCounter', () => ({
        params: new URLSearchParams(window.location.search),

        get daysSince() {
            const dateStr = this.params.get('last');
            if (!dateStr) return '—';

            const start = dayjs(dateStr).startOf('day');
            const now = dayjs().startOf('day');

            const diff = now.diff(start, 'day');

            return diff >= 0 ? diff : 0;
        },

        get subject() {
            return this.params.get('since') || 'the last time';
        }
    }));
});
