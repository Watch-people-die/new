import { PostsWidget } from "./PostsWidget"
export default function Posts() {


  return (
      <PostsWidget data={posts}/>
  )
}

export const posts = [
    { id: "1", title: "Understanding Closures in JavaScript", author: "Jane Doe", date: "2025-07-01", tags: ["JavaScript", "functions", "closure"], content: "A closure is the combination of a function and the lexical environment within which that function was declared.", likes: 124 },
    { id: "2", title: "Intro to Asynchronous Programming", author: "John Smith", date: "2025-06-28", tags: ["JavaScript", "async", "promises"], content: "Async programming allows your program to start a task and move on to another before the first is complete.", likes: 98 },
    { id: "3", title: "What is the Event Loop?", author: "Sarah Tan", date: "2025-06-20", tags: ["JavaScript", "event loop", "runtime"], content: "The event loop handles all async callbacks and allows JavaScript to be non-blocking.", likes: 156 },
    { id: "4", title: "Understanding JavaScript Hoisting", author: "Mike Zhao", date: "2025-06-15", tags: ["JavaScript", "hoisting", "var", "let", "const"], content: "Hoisting is JavaScript's behavior of moving declarations to the top of the current scope.", likes: 76 },
    { id: "5", title: "Deep vs Shallow Copy in JavaScript", author: "Emily Stone", date: "2025-06-10", tags: ["JavaScript", "copy", "objects", "arrays"], content: "Shallow copies copy references. Deep copies create entirely new instances of the values.", likes: 89 },
    { id: "6", title: "Arrow Functions Explained", author: "Daniel Kim", date: "2025-06-05", tags: ["JavaScript", "ES6", "arrow function"], content: "Arrow functions provide a more concise syntax and lexically bind the `this` value.", likes: 110 },
    { id: "7", title: "JavaScript Map vs Object", author: "Aisha Malik", date: "2025-05-30", tags: ["JavaScript", "Map", "Object", "data structures"], content: "Maps allow keys of any type and preserve insertion order, unlike plain objects.", likes: 102 },
    { id: "8", title: "Debounce and Throttle in JavaScript", author: "Tommy Li", date: "2025-05-22", tags: ["JavaScript", "performance", "debounce", "throttle"], content: "Use debounce to limit how often a function runs. Throttle limits execution rate.", likes: 147 },
    { id: "9", title: "JavaScript Prototypes and Inheritance", author: "Linda George", date: "2025-05-15", tags: ["JavaScript", "OOP", "prototypes"], content: "Prototypes allow inheritance in JavaScript by linking objects to others.", likes: 120 },
    { id: "10", title: "Nullish Coalescing vs Logical OR", author: "Carlos Vega", date: "2025-05-08", tags: ["JavaScript", "??", "||", "logical operators"], content: "`??` only returns the right-hand value when the left-hand is `null` or `undefined`.", likes: 94 }
];