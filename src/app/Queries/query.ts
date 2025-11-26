import { gql } from 'graphql-request';

export const HOME_QUERY = gql`
  query GetHomePage 
  {
  pages(where: { name: "home" }) {
    nodes {
      id
      title
      slug
      siteSetting{
                logoSection
                siteName
                siteHeaderButtons{
                    loginText
                    loginUrl
                    signuptext
                    signupUrl
                }
            }
      seo {
      title
      metaDesc
      metaKeywords
      focuskw
      canonical
      cornerstone
      fullHead
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphAuthor
      opengraphDescription
      opengraphModifiedTime
      opengraphPublishedTime
      opengraphPublisher
      opengraphSiteName
      opengraphTitle
      opengraphType
      opengraphUrl
      opengraphImage {
        sourceUrl
        mediaItemUrl
        altText
      }
      twitterDescription
      twitterTitle
      twitterImage {
        sourceUrl
        mediaItemUrl
        altText
      }
      schema {
        raw
      }
    }
      

      header {
        headerTitle
        headerTitle1
        headerStyleFontFamily
        headerStyleFontColor
        headerStyleFontWeight
        headerStyleLineHeight
        headerStyleTextTransform
        headerStyleTextDecoration
        headerStyleFontSize
        description1
        descriptionText
        descriptions
        descriptionStyleFontSize
        descriptionStyleFontColor
        descriptionStyleFontFamily
        descriptionStyleFontWeight
        descriptionStyleLineHeight
        descriptionStyleTextTransform
        descriptionStyleTextDecoration
        navigationButton
        navigationButtonUrl
        backgroundImage {
          sourceUrl
        }
        navigationButtonIcon {
          sourceUrl
        }
      }

      trustedPartnersSectionFields {
        trustedTopText
        trustedPartnerLogos{
       trustedLogoImage{
        sourceUrl
       }
      trustedLogoLink
        }
      }

      technologyFrameworkSection {
        technologyLeftTitle
        technologyRightDescription
        technologyCtaLink
        technologyCtaText
        technologyStats{
            technologyValue
            technologyDescription
             suffix
                    delay
        }
      }

      ourPillars {
        pillarsSectionTitle
        pillarsRightSideTitle
        pillarsRightDescription
        rightDescription2
        rightDescription3
        pillarsMainHeading
        pillarsIntegrations{
            pillarsLogoImage{
                sourceUrl
            }
            pillarsLogoName
            width
            height
        }
        pillarsRightImage{
            pillarImage{
                sourceUrl
            }
        }
      }

      industryUseCase {
        industrySectionLabel
        industrySectionHeading
        industryMainImage{
            sourceUrl
        }
        industryUseCases{
            industryTitle
            industryDescription
            industryImage{
                sourceUrl
            }
        }
      }

      future {
        futureSectionHeading
        futureCards{
            cardImage{
                sourceUrl
            }
            cardDescription
            cardSubtitle
            cardTitle
        }
      }

      aiSolutions {
        aiSectionHeading
        aiSectionDescription
        aiCards{
            aiCardIcon{
                sourceUrl
            }
            aiCardTitle
            aiCardDescription
        }
      }

      automationRoi {
        roiDescription
        roiHeading
        roiCards{
            cardTagline
            cardIcon{
                sourceUrl
            }
            cardTitle
            cardDescription
        }
        roiCtaButtonLink
        roiCtaDescription
        roiCtaHeading
        roiCtaButtonText
      }

      footer {
        footerTagline
        footerCopyrightText
        footerSupportHeading
        footerSupportEmail
        footerSupportPhone
        footerNewsletterDescription
        footerNewsletterHeading
        footerQuickLinksHeading
        footerQuickLinks{
            linkUrl
            footerLinkText
        }
        footerAddressDescription1
        addressDescription
        footerAddressHeading
        footerSocialIcons{
            footerIconImage
            footerIconLink
        }
        footerBottomText
    }
  }
  }

}
`;
