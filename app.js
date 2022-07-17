new Vue({
    el: '#app',
    data: {
        menu: menu,
        aminoacids: Object.keys(aminoacids),
        tags: (
            Object.entries(aminoacids)
            .map(x => x[1])
            .map(x => x.tags)
            .reduce((acc, arr) => new Set([...acc, ...arr]), new Set())
        ),
        filtered_aminos: [],
    },
    methods: {
        selectTag(tag, event) {
            this.filtered_aminos = (
                Object.entries(aminoacids)
                .filter(pair => pair[1].tags.includes(tag))
            );
        },
        countAminosByTag(tag) {
            return (
                Object.entries(aminoacids)
                .filter(pair => pair[1].tags.includes(tag))
                .length
            )
        }
    },
    mounted () {
    }
});