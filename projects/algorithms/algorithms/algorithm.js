import sleep from '../Async.js';
export default class Algorithm {
    constructor(arr) {
        this.arr = arr;
        this.DEFAULT_COLOR = '#bacddf';
        this.HIGHLIGHTED_COLOR = '#17A2B8';
    }

    sort() {
        throw new Error('Sorting is not implemented');
    }

    async updateEvent() {
        throw new Error('Update event is not implemented');
    }

    async completedEvent() {
        for (var i = 0; i < this.arr.length; i++) {
            await sleep(1).then(() => {
                $('#' + i).css('background-color', this.HIGHLIGHTED_COLOR);
            });
        }
    }

    swap(a, b) {
        let tmp = this.arr[a];
        this.arr[a] = this.arr[b];
        this.arr[b] = tmp;
    }
}