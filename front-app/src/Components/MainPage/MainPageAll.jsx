import TopBar from "../TopBar";
import MainContact from "./MainContact";
import MDescription from "./MainDescription";
import MainPictures from "./MainPictures";
import MPRojects from "./MainProjects";
import MainTittle from "./MainTittle";
import MWhatWeDo from "./MainWhatWeDo";

export default function MainPage() {
    return (
        <>
            <TopBar />
            <MainTittle />
            <MDescription />
            <MWhatWeDo />
            <MPRojects />
            <MainPictures />
            <MainContact />
        </>
    )
}