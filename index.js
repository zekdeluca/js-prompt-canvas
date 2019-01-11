import { MyClass } from './src/my_class';
import { MyMainClass } from './src/my_main_class';

const inputs = {
    "Item": [
        1,
        2,
        3
    ],
};

const main = new MyMainClass([ new MyClass(...inputs["Item"]) ]);
main.performMainAction();
main.inputAction();
