// Challenge Task: Integrating Everything
import greet from "./greeting.js"; // This functions accepts the name
import colorGreeting from './colorful-message.js'; // This functions accepts the name and age
import readingFile from "./files/read-file.js";

console.log('\nNormal Greeting Func');
greet('Brahim');

console.log("\nUsing Chalk colors:");
colorGreeting('Brahimovitch', 88);

console.log('\nReading From a file:')
readingFile("./files/file-data.txt");