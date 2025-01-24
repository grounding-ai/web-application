import { FC } from "react";

export const HomePage: FC = () => {
  return (
    <main className="px-3 py-5">
      <h1>Welcome to the AI Atlas of AI in Science.</h1>

      <p className="fw-bold fs-6 mt-5">Now you can decide...</p>
      <p>Would you like to explore the AI landscape on your own or take on some challenges with a guide?</p>

      <div className="d-flex flex-column p-5 pt-5">
        <a href="#/explore" className="btn btn-outline-dark rounded-pill mt-5">
          Play
        </a>
        <a href="#/map" className="btn btn-outline-dark rounded-pill mt-5">
          Explore Freely
        </a>
      </div>
    </main>
  );
};
