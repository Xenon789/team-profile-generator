const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Xenon', 24, 'xenonxpo@gmail.com', 99);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Xenon', 24, 'xenonxpo@gmail.com', 99);

    expect(manager.getRole()).toEqual("Manager");
}); 