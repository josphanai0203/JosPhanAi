const h1 = document.createElement('h1');
h1.title = 'hello world'
h1.className = "heading"
h1.innerHTML= 'Hello 123';



const h2 = <ul>
    <li className="hidden">hello</li>
    <li>bcsauch</li>
</ul>
const root = document.querySelector("#root")
ReactDOM.render(h2,root);
