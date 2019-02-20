const access = require('../UtilProgs/interfaceExample');
const util = require('../UtilProgs/exampleClass');
//import Sample from "../UtilProgs/interfaceExample";
function main() {
    try {
        // implement(access.Sample)(util.Example);
        let exp = util.Example(45);
        console.log(exp);
    } catch (error) {
        console.log(error.message);
    }
}
main();