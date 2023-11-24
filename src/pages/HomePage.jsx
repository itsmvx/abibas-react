import {useEffect} from "react";
import {HomeLayout} from "../components/HomeComponents/HomeLayout.jsx";
import {HomeNavbar} from "../components/HomeComponents/HomeNavbar.jsx";
import {HomeSeriesBanner} from "../components/HomeComponents/HomeSeriesBanner.jsx";
import {HomeWhatsHot} from "../components/HomeComponents/HomeWhatsHot.jsx";
import {HomeGendersBanner} from "../components/HomeComponents/HomeGendersBanner.jsx";
import {HomeEventBanner} from "../components/HomeComponents/HomeEventBanner.jsx";

export const HomePage = () => {
    useEffect(() => {
        return ()=>{
            document.title = 'Abibas : Home'
        }
    }, []);
    return (
        <>
            <HomeLayout>
                <HomeNavbar />
                <HomeSeriesBanner />
                <HomeEventBanner />
                <HomeWhatsHot />
                <HomeGendersBanner />
            </HomeLayout>
        </>
    )
}