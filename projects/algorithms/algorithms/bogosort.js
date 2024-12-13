import Algorithm from './algorithm.js';
import sleep from '../async.js';

export default class BogoSort extends Algorithm {
    constructor(arr) {
        super(arr);
    }

    async sort() {
        while (!this.isSorted()) {
            for (let i = this.arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1)); // Random index
                [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]]; // Swap elements
            }
            await this.updateEvent();
        }
        await this.completedEvent();
    }

    isSorted() {
        for (let i = 0; i < this.arr.length - 1; i++) {
            if (this.arr[i] > this.arr[i+1]) {
                return false;
            }
        }
        return true;
    }

    async updateEvent() {
        await sleep(1);
        for (let i = 0; i < this.arr.length; i++) {
            let dp = $('#'+i);
            await sleep(0).then(() => {
                dp.css('height', this.arr[i]);
            });
        }
    }
}