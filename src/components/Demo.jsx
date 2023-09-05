import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesLocalStorage = JSON.parse(localStorage.getItem("articles"));
    if (articlesLocalStorage) {
      setAllArticles(articlesLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({
      articleUrl: article.url,
    });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };
  return (
    <section className="mt-4 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center gap-4 items-center"
        >
          <div className="tooltip" data-tip="Input your url...  ">
            <button className="btn btn-primary">
              <AiOutlineLink size={25} />
            </button>
          </div>
          <div className="form-control w-full max-w-2xl">
            <input
              type="url"
              placeholder="Input your article URL here..."
              className="input input-bordered w-full max-w-2xl"
              value={article.url}
              onChange={(e) =>
                setArticle({
                  ...article,
                  url: e.target.value,
                })
              }
              required
            />
          </div>
          <button type="submit" className="btn btn-md btn-primary">
            Generate
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <p className="font-satoshi font-medium text-purple-500 text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-2 max-w-full flex justify-center items-center">
        {isFetching ? (
          <div className="flex flex-row gap-2 items-center">
            <img
              src="https://i.imgur.com/m3Qap8e.gif"
              alt=""
              className="rounded-full w-20 h-20"
            />
            <div className="typewriter">
              <h1 className="border items-center font-semibold text-2xl ">
                Generating...
              </h1>
            </div>
          </div>
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Mavis is busy please try again later
          </p>
        ): (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">Article <span className="blue_gradient">Outline</span></h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-600">{article.summary}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
