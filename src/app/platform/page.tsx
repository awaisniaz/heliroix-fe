export const revalidate = 10;
import { HOME_QUERY } from "@/app/Queries/query";
import { getData } from "@/app/lib/apiClient";
import MainHeader from "@/app/components/platform/MainHeader";
import ArchitectureSnapshot from "@/app/components/platform/ArchitectureSnapshot";
import EcoSystem from "@/app/components/platform/EcoSystem";
import Security from "@/app/components/platform/Security";
import ContinuousLearning from "@/app/components/platform/ContinuousLearning";
import NavBar from "../components/reusable/NavBar";
import HomePageFooter from "../components/homepagefooter";
export default async function Page() {
  const data1 = await getData(HOME_QUERY);
  console.log(data1?.data?.pages?.nodes[0]);
  const sectionData = data1?.data?.pages?.nodes[0];
  console.log(
    sectionData?.siteSetting?.logoSection,
    "sectionData?.siteSetting?.logoSection"
  );
  return (
    <div className="bg-black">
      {/* <div className="w-full max-w-[1920px] mx-auto xl:px-[52px] px-[26px] md:px-8 lg:px-12">
                 <NavBar setting={sectionData?.siteSetting} />
              </div>
      
      <MainHeader />
      <ArchitectureSnapshot />
      <EcoSystem />
      <Security />
      <ContinuousLearning />
       <HomePageFooter
                data={sectionData?.footer}
                automation={sectionData?.automationRoi}
              /> */}
      
    </div>
  );
}

