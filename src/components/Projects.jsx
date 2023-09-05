import React from "react";

const Projects = () => {
  return (
    <div className=" w-full flex flex-col">
      <h1 className="text-3xl font-bold leading-[1.15] text-black sm:text-4xl text-center">
        AI Projects
      </h1>
      <div className=" pt-4 grid grid-cols-4 gap-10">
        <div className="card w-60 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.imgur.com/VOWuD9k.png"
              alt="Outline"
              className="w-full h-40"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Outline
              <div className="badge badge-primary">2023</div>
            </h2>
            <p className="text-sm">Outline is an application that can outline an article with the help of AI</p>
            <div className="card-actions">
              <div className="badge badge-outline">Vite</div>
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">GPT</div>
            </div>
          </div>
        </div>
        <div className="card w-60 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.imgur.com/UMHtwbZ.png"
              alt="Outline"
              className="h-40 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Topic?
              <div className="badge badge-primary">2023</div>
            </h2>
            <p className="text-sm">Topic is an application that can practice the desired material based on the topic by giving quizzes</p>
            <div className="card-actions">
              <div className="badge badge-outline">Nextjs</div>
              <div className="badge badge-outline">GPT</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
