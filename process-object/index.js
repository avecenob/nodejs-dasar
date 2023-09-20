const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i < 100000; i++) {
    let a = 0;
    a++;
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hi, ${yourName}`);
console.log(`Environment: ${environment}`);
console.log(`Memory usage increased from ${initialMemoryUsage} to ${currentMemoryUsage}`);