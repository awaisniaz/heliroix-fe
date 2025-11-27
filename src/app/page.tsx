export const revalidate = 10;
import Header from "./components/header";
import TechnologySection from "./components/techonolgysection";
import OurPillars from "./components/ourpillars";
import AboutUs from "./components/aboutus";
import IndustryUseCase from "./components/industryusecase";
import FutureOfAutomation from "./components/futureofautomation";
import AISolutions from "./components/aisolutions";
import CalculateAutomation from "./components/calculateautomation";
import HomePageFooter from "./components/homepagefooter";
import { HOME_QUERY } from "./Queries/query";
import { client } from "./lib/graphqlClient";
import { getData } from "./lib/apiClient";
import NavBar from "./components/reusable/NavBar";

export async function generateMetadata() {
  const data = await getData(HOME_QUERY);
  const seo = data?.data?.pages?.nodes?.[0]?.seo;

  if (!seo) return {};

  return {
    title: seo.title,
    description: seo.metaDesc,
    keywords: seo.metaKeywords,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.opengraphTitle || seo.title,
      description: seo.opengraphDescription || seo.metaDesc,
      url: seo.opengraphUrl || seo.canonical,
      type: seo.opengraphType || "website",
      siteName: seo.opengraphSiteName || "Heliorix",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.twitterTitle || seo.title,
      description: seo.twitterDescription || seo.metaDesc,
    },
  };
}
export default async function Home() {
  const data1 = await getData(HOME_QUERY);
  console.log(data1?.data?.pages?.nodes[0]);
  const sectionData = data1?.data?.pages?.nodes[0];
  return (
    <>
      <div className="bg-black h-full overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto xl:px-[52px] px-[26px] md:px-8 lg:px-12">
           {/* <NavBar setting={sectionData?.siteSetting} /> */}
        </div>
        {/* <Header data={sectionData?.header} setting={sectionData?.siteSetting} /> */}
        {/* <TechnologySection
          data={sectionData?.trustedPartnersSectionFields}
          technology={sectionData?.technologyFrameworkSection}
        />
        <OurPillars data={sectionData?.ourPillars} />
        <AboutUs data={sectionData?.ourPillars} />
        <IndustryUseCase data1={sectionData?.industryUseCase} />
        <FutureOfAutomation data={sectionData?.future} />
        <AISolutions data={sectionData?.aiSolutions} />
        <CalculateAutomation data={sectionData?.automationRoi} />
         <HomePageFooter
          data={sectionData?.footer}
          automation={sectionData?.automationRoi}
        /> */}
      </div>
    </>
  );
}
