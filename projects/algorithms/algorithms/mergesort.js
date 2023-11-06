import Algorithm from './Algorithm.js';
import sleep from '../Async.js';

export default class MergeSort extends Algorithm {
    constructor(arr) {
        super(arr);
    }

    async sort() {
        this.arr = await this.mergeSort(this.arr, 0, this.arr.length);
        await this.completedEvent();
    }

    async updateEvent(arr, left, right) {
        let j = 0;
        for (var i = left; i < right; i++) {
            await sleep(0).then(async () => {
                let dp = $('#' + i);
                dp.css('background-color', this.HIGHLIGHTED_COLOR);
                dp.css('height', arr[j++]);

                await sleep(0).then(() => {
                    dp.css('background-color', this.DEFAULT_COLOR);
                });
            });
        }
    }

    async mergeSort(arr, left, right) {
        if (arr.length <= 1) {
            return arr;
        }

        let mid = Math.round(arr.length / 2);

        let temp1 = arr.slice(0, mid);
        let temp2 = arr.slice(mid, arr.length);

        temp1 = await this.mergeSort(temp1, left, left + mid);
        temp2 = await this.mergeSort(temp2, left + mid, right);

        let merged = merge(temp1, temp2);
        console.log(merged);
        await this.updateEvent(merged, left, right);
        return merged;

        function merge(arr1, arr2) {
            let arr3 = [];
    
            let i = 0, j = 0;
            while (i < arr1.length && j < arr2.length) {
                let a = arr1[i];
                let b = arr2[j];
    
                if (a < b) {
                    arr3.push(a);
                    i++;
                } else {
                    arr3.push(b);
                    j++;
                }
            }
    
            while (i < arr1.length) {
                arr3.push(arr1[i++]);
            }
    
            while (j < arr2.length) {
                arr3.push(arr2[j++]);
            }
    
            return arr3;
        }
    }
}