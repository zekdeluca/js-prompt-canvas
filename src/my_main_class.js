import prompt from 'prompt';

class MyMainClass {
  constructor(items=[]){
    this.items = items;

    // Start the prompt
    prompt.start();
  }

  performMainAction() {
    // Perform main action and return items
    this.items.map((item) => {
      return item.setToZero();
    });

    return this.items;
  }

  inputAction() {
    // Perform input action
    this.items.map((item) => {
      item.inputAction(prompt);
    });

    return this.items;
  }
}

export {
  MyMainClass
};
