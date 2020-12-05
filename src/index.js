import react from "react";
import reactDom from "react-dom";
import './index.css';

function App(){
    return(
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}
const Book=()=>{
    return <article className="book">
         <Image></Image>
         <Title/>
         <Author/>
         </article>
}
const Image=()=>(<img src="https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg"alt=""/>);
const Title=()=><h1>Rich Dad Poor Dad</h1>
const Author=()=><h4>by Robert T. Kiyosaki</h4>
reactDom.render(<App />,document.getElementById('root'));
