import { CategoryType } from "../../../../../../../common/Types/commonTypes";
import { EstateDetailPageProps } from "../../../../../../../common/Types/pageProps";
import EstateDetailPage from "../../../../../../../features/Estates/EstateDetail/EstateDetailPage";

const Home = (props: EstateDetailPageProps) => <EstateDetailPage {...props} />;

export const getServerSideProps = async () => {
    const head = { title: "Danh sách bất động sản đang bán" };
    const categories: CategoryType[] = [
        {
            categoryId: 1,
            name: "BĐS Nghỉ dưỡng",
            url: "/bat-dong-san-ban/bat-dong-san-nghi-duong",
            image: "/images/categories/bat-dong-san-nghi-duong.jpg",
        },
        {
            categoryId: 2,
            name: "Đất nền",
            url: "/bat-dong-san-ban/dat-nen",
            image: "/images/categories/dat-nen.jpg",
        },
        {
            categoryId: 3,
            name: "Nhà phố",
            url: "/bat-dong-san-ban/nha-pho",
            image: "/images/categories/nha-pho.jpg",
        },
    ];
    return { props: { head, categories } };
};

export default Home;