import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface MostViewedInMonthItemProps {
    title?: string;
    image: string;
    href: string;
    className?: string;
}

const MostViewedInMonthItem = ({ href, title, image, className }: MostViewedInMonthItemProps) => {
    return (
        <Link href={href}>
            <a
                className={twMerge(
                    "py-1 duration-200 hover:text-encacap-main flex border-b-2 border-gray-100 pb-5 mt-2 first:mt-0 last:border-b-0 last:pb-2",
                    className
                )}
            >
                <div className="flex-shrink-0 w-10 h-10 mt-1.5 mr-4 overflow-hidden rounded-lg">
                    <img src={image} alt="News" className="object-cover object-center w-full h-full" />
                </div>
                {title && title}
                {!title && (
                    <div className="w-full mt-1.5">
                        <div className="w-full h-3 bg-gray-100 rounded-full animate-pulse" />
                    </div>
                )}
            </a>
        </Link>
    );
};

export default MostViewedInMonthItem;
