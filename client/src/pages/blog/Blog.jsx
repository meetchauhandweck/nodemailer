import BlogCards from "../../components/blogCards/BlogCards";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import PageTitle from "../../components/pageTitle/PageTitle";
import bannerImage from "../../images/blogBannerImage.png";

const Blog = () => {
  return (
    <>
    <PageTitle pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"} />
      <InnerPageBanner heading={"Blogs"} image={bannerImage} />
      <BlogCards />
    </>
  );
};
export default Blog;
