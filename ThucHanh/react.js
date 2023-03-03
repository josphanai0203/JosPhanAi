const h1 = document.createElement('h1');
h1.title = 'hello world'
h1.className = "heading"
h1.innerHTML= 'Hello 123';



const h2 = React.createElement('h2',{
    title: "react 2",
    className : "heading",
},React.createElement("h2",{
    className : "heading2",
},"1234"),React.createElement("h2",{
    className : "heading2",
},"1234"));
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);
