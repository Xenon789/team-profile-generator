const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Xenon', 24, 'xenonxpo@gmail.com', 'CSUS');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Xenon', 24, 'xenonxpo@gmail.com', 'CSUS');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Xenon', 24, 'xenonxpo@gmail.com', 'CSUS');

    expect(intern.getRole()).toEqual("Intern");
}); 