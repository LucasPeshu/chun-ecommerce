import React from "react";
import Layout from "../../hocs/Layout";
import HomeBanner from "../../components/home/HomeBanner";
import VerticalCard from "../../components/home/VerticalCard";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <div className="bg-gray-100 px-6 sm:px-4 lg:px-48 py-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Nuestro blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
          <VerticalCard
            title="Project Title"
            description="This is a brief description of the project."
            image="https://example.com/image.jpg"
          />
          <VerticalCard
            title="Project Title"
            description="This is a brief description of the project."
            image="https://example.com/image.jpg"
          />
          <VerticalCard
            title="Project Title"
            description="This is a brief description of the project."
            image="https://example.com/image.jpg"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
