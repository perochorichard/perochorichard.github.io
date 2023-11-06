import Algorithm from './Algorithm.js';
import sleep from '../Async.js';

export default class BubbleSort extends Algorithm {
    constructor(arr) {
        super(arr);
    }

    async sort() {
        for (var i = this.arr.length; i > 0; i--) {
            for (var j = 1; j < i; j++) {
                if (this.arr[j - 1] > this.arr[j]) {
                    this.swap(j - 1, j);
                    await this.updateEvent(j - 1, j);
                }
            }
        }
        await this.completedEvent();
    }

    async updateEvent(i, j) {
        let dp1 = $('#' + i);
        let dp2 = $('#' + j);
        dp1.css('background-color', this.HIGHLIGHTED_COLOR);
        dp2.css('background-color', this.HIGHLIGHTED_COLOR);
    
        await sleep(0).then(() => {
            dp1.css('height', this.arr[i]);
            dp2.css('height', this.arr[j]);
            dp1.css('background-color', this.DEFAULT_COLOR);
            dp2.css('background-color', this.DEFAULT_COLOR);
        });
    }
}