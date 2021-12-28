import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article";

const Blog = () => {
  const [newsData, setNewsData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [errorAuthor, setErrorAuthor] = useState(false);
  const [errorContent, setErrorContent] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3003/articles")
      .then((res) => setNewsData(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let conditionContent = content.length > 100;

    let conditionAuthor = author.length >= 3;

    //Je verifie si la condition Content renvoi true ou false
    if (!conditionContent) {
      setErrorContent(true);
    } else {
      setErrorContent(false);
    }

    if (!conditionAuthor) {
      setErrorAuthor(true);
    } else {
      setErrorAuthor(false);
    }

    if (conditionContent && conditionAuthor) {
      axios
        .post("http://localhost:3003/articles", {
          author,
          content,
          date: Date.now(),
        })
        .then(() => {
          setAuthor("");
          setContent("");
          getData();
        });
    }
  };

  return (
    <div className="news-container">
      <Navigation />
      <h1>Voici les articles publiés</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Titre"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errorAuthor && <p>Veuillez écrire un nom d'une personnalité</p>}
        <textarea
          placeholder="Contenu"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {errorContent && <p>Veuillez écrire un minimum de 100 caractères</p>}
        <input type="submit" value="Publier" />
      </form>
      <ul>
        {newsData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default Blog;
