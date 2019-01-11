// import prompt from 'prompt';

const promptInputSchema = {
  properties: {
    text: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'The input must contain only letters, spaces, or dashes',
      required: true
    },
    singleDigit: {
      pattern: /^[0-9]{1}$/,
      message: 'The input must contain a single digit between 0-9',
      required: true
    },
    hidden: {
      hidden: true
    }
  }
};

class MyClass {
  constructor(attributeOne, attributeTwo, attributeThree) {
    this.attributeOne = attributeOne;
    this.attributeTwo = attributeTwo;
    this.attributeThree = attributeThree;
  }

  setToZero() {
    this.attributeOne = 0;
    this.attributeTwo = 0;
    this.attributeThree = 0;

    return this;
  }

  inputAction(prompt) {
    // Prompt for properties
    prompt.get(promptInputSchema, (err, result) => {
      // Log the results
      console.log('Command-line input received:');
      console.log('  text: ' + result.text);
      console.log('  singleDigit: ' + result.singleDigit);
      console.log('  hidden: ' + result.hidden);
    });
  }
}

export {
  MyClass
};
