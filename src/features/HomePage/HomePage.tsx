import Layout from "../../common/Layout/Layout";
import CategorySection from "./components/CategorySection";
import EstateListSection from "./components/EstateListSection";
import SearchSection from "./components/SearchSection";
import SliderSection from "./components/SliderSection";

const HomePage = () => (
    <Layout title="Trang chủ">
        <SliderSection />
        <SearchSection />
        <CategorySection />
        <EstateListSection />
    </Layout>
);

export default HomePage;
