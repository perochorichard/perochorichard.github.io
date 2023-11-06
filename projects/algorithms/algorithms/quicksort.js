import Algorithm from './Algorithm.js';
import sleep from '../Async.js';

export default class QuickSort extends Algorithm {
    constructor(arr) {
        super(arr);
    }

    async sort() {
        await this.quickSort(0, this.arr.length-1);
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

    async quickSort(low, high) {
        if (low < high) {
            let pivotIndex = await this.partition(low, high);
    
            await this.quickSort(low, pivotIndex - 1);
            await this.quickSort(pivotIndex + 1, high);
        }
    }

    // partitions based on last element of sub-array
    async partition(low, high) {
        let i = low - 1;
        let pivot = this.arr[high];

        for (var j = low; j < high; j++) {
            if (this.arr[j] < pivot) {
                ++i;
                this.swap(i, j);
                await this.updateEvent(i, j);
            }
        }
        this.swap(i + 1, high);
        await this.updateEvent(i + 1, high);
        return (i + 1);
    }
}