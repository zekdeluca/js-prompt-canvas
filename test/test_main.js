import { expect } from 'chai';
import { MyClass } from '../src/my_class';
import { MyMainClass } from '../src/my_main_class';

const test_scenario_inputs = {
    "Basic item": [
        1,
        2,
        3
    ],
};

describe("This is my test suite", function() {
  it("Should have set all attributes to zero", function() {
    const myClass = new MyClass(...test_scenario_inputs["Basic item"]);
    const attributes = myClass.setToZero();
    expect(attributes.attributeOne).to.equal(0);
    expect(attributes.attributeTwo).to.equal(0);
    expect(attributes.attributeThree).to.equal(0);
  });
});
