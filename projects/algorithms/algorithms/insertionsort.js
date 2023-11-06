import Algorithm from './Algorithm.js';
import sleep from '../Async.js';

export default class InsertionSort extends Algorithm {
    constructor(arr) {
        super(arr);
    }

    async sort() {
        for (var i = 1; i < this.arr.length; i++) {
            let val = this.arr[i];

            let j = i - 1;
            while(j >= 0 && val < this.arr[j]) {
                this.arr[j+1] = this.arr[j];
                await this.updateEvent(j+1);
                j--;
            }
            this.arr[j+1] = val;
            await this.updateEvent(j+1);
        }
        await this.completedEvent();
    }

    async updateEvent(i) {
        let dp1 = $('#' + i);
        dp1.css('background-color', this.HIGHLIGHTED_COLOR);
    
        await sleep(0).then(() => {
            dp1.css('height', this.arr[i]);
            dp1.css('background-color', this.DEFAULT_COLOR);
        });
    }
}