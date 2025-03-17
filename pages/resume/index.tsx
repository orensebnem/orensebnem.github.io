import React, { useRef } from "react";
import {
  Box,
  Button,
  Container,
  VStack,
  Text,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { useReactToPrint } from "react-to-print";
import { WorkExperience } from "./WorkExperience";
import LayoutSideProject from "../../components/LayoutSideProject";
import { Skills } from "./Skills";

const PagesResume = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    documentTitle: "Sebnem_Oren_Resume",
    onAfterPrint: () => console.log("Printed successfully"),
    onPrintError: (err) => console.warn("Print failed", err),
    contentRef: componentRef,
    pageStyle: `
            @page {
                size: A4;
                margin: 20mm;
            }
            @media print {
                body {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                .no-print {
                    display: none !important;
                }
            }
        `,
  }) as any;

  const skillsData = {
    sections: [
      {
        title: "CERTIFICATIONS",
        items: [
          {
            title: "SCALED AGILE",
            subItems: [
              { description: "Certified SAFe 6 PM/PO" }
            ]
          },
          {
            title: "SCRUM.ORG",
            subItems: [
              { description: "Professional Scrum Product Owner" },
              { description: "Professional Scrum Master I" }
            ]
          },
          {
            title: "GOOGLE",
            subItems: [
              { description: "Google Data Analytics" },
              { description: "Google Analytics IQ" },
              { description: "Product Design" }
            ]
          }
        ]
      },
      {
        title: "CORE COMPETENCES",
        items: [
          {
            title: "PRODUCT MANAGEMENT",
            subItems: [
              { description: "Roadmap & Prioritisation" },
              { description: "Workshop facilitation" },
              { description: "Competitor Analysis" },
              { description: "User Journey Mapping" },
              { description: "Backlog Management" },
              { description: "Feature Ideation" },
              { description: "Agile ceremonies" },
              { description: "Data-Driven Development" }
            ]
          }
        ]
      }
    ]
  };


  const moulaExperience = {
    role: "Product Owner",
    company: "Moula",
    period: "September 2020 - December 2020",
    website: "https://moula.com.au",
    items: [
      {
        description:
          "Managed product backlog for three development teams, driving discovery and development of a loan assessment and tracking platform.",
      },
      {
        description:
          "Launched of an automated reporting and reconciliation system, improving efficiency of accounting team by ~40%.",
      },
      {
        description:
          "Defined requirements and partnered with stakeholders to deliver a company-wide rebranding project.",
      },
    ],
  };

  const pccwGlobalExperience = {
    role: "Product Manager / Product Owner",
    company: "PCCW Global/Console Connect",
    period: "April 2021 - October 2024",
    website: "https://consoleconnect.com",
    items: [
      {
        description:
          "Promoted to Product Manager after 2 years as a Product Owner, growing from leading one team to managing four cross-functional teams",
      },
      {
        description:
          "Product Owner (First 2 years): Led a team of 7 engineers, running Agile ceremonies, workshops, discoveries, and platform feature implementation.",
      },
      {
        description:
          "As Product Manager (Last 1.5 years): Oversaw 4 teams while continuing as PO for original team, collaborating with stakeholders and global PMs. Co-led transformation of a network connectivity platform into a scalable B2B marketplace, introducing a modular architecture and no-code onboarding",
      },
      {
        description:
          "Reduced product onboarding time from 4 months to 1 week and costs from A$ 500K to A$10K by implementing low-code APIs.",
      },
      {
        description:
          "Led platform's third-party integrations (Partner, LMS) and new Design System, Nimbus, for enhanced consistency",
      },
      {
        description:
          "Launched ConsoleConnect Marketplace (Feb 2024), 39 products onboarded so far without needing any development support.",
      },
      {
        description:
          "Launched self-service profile management reducing ~70% of operational costs.",
      },
      {
        description:
          "Defined roadmaps, prioritised backlogs, and led-data-driven experiments to optimise user experience and align with business goals.",
      },
      {
        description:
          "Provided Product Marketing Brief to Marketing team for launches",
      },
    ],
  };

  const keepspeechWorkExperience = {
    role: "Site Projects / Co-founder",
    company: "KeepSpeech",
    period: "December 2024 - Present",
    website: "https://keepspeech.com",
    items: [
      {
        description:
          "Chrome Extension for recording and AI-driven processing of meeting transcripts",
      },
      {
        description:
          "automatically summarising discussions, highlights key objectives and transforms extensive dialogues into digestible, actionable insights.",
      },
    ],
  };

  const myobExperience = {
    role: "Business Analyst / Product Owner",
    company: "MYOB",
    period: "December 2019 - July 2020",
    website: "https://myob.com",
    items: [
      {
        description:
          "Collaborated with Product Manager on the Personalization project to deliver tailored CX across all touchpoints, including marketing, support, application forms, training, and fulfilment, creating a holistic and integrated experience",
      },
      {
        description:
          "Conducted surveys and workshops to gather insights, prioritise backlogs and refine features.",
      },
    ],
  };

  const latitudeExperience = {
    role: "Business Analyst / Scrum Master",
    company: "Latitude Financial",
    period: "August 2019 - November 2019",
    website: "https://latitudefinancial.com.au",
    items: [
      {
        description:
          "Analysed web pages and sales funnels to enhance UX and conversion, partnering with marketing, sales, and UI teams to remove friction.",
      },
      {
        description:
          "Led digital projects for web optimisation and funnel streamlining using data insights.",
      },
      {
        description:
          "Built OKR/KPI dashboards in Adobe Analytics for marketing to track performance and inform decisions.",
      },
    ],
  };

  const proquoExperience = {
    role: "Product Owner",
    company: "Proquo.ai",
    period: "March 2018 - August 2019",
    website: "https://proquo.ai",
    items: [
      {
        description:
          "Managed two AI powered Digital Marketplace solutions (Web/Mobile)",
      },
      {
        description: "A freelancer-to-enterprise platform",
      },
      {
        description:
          "AI-powered Facilities Management SaaS product with quoting, automated dispatching, and predictive maintenance",
      },
      {
        description:
          "Led pivot from freelancer marketplace platform into Facilities Management, conducting market analysis, user research, and testing to refine algorithms and prioritise features with CEO, CTO and Head of Product for product-market fit",
      },
      {
        description:
          "Secured a $500,000 cornerstone client with the sales team via data-driven insights and partnerships",
      },
      {
        description:
          "Enhanced Freelancer Platform UX with optimised profiles, badging and rating systems",
      },
      {
        description:
          "Managed backlog, led Agile ceremonies, and collaborated with engineers, designers and data scientists on wireframes, models, and metrics to align with business goals.",
      },
    ],
  };

  const hsbcExperience = {
    role: "Senior Business Analyst / Project Lead",
    company: "HSBC Bank",
    period: "June 2015 - February 2017",
    website: "https://hsbc.com",
    items: [
      {
        description:
          "Managed and analysed Digital Banking projects at HSBC (Internet and Mobile Banking), including UI - Design System migration, Core Banking transformation, and retail product enhancements (credit cards, loans, KYC, FATCA), using Agile.",
      },
      {
        description:
          "Coordinated global testing (Istanbul, Hong Kong, India, UK) for HSBC's Global Mobile App releases",
      },
      {
        description:
          "Handling UAT, post-prod tests, and KPI tracking via Google Analytics",
      },
      {
        description:
          "Collaborated with UX/UI designers and stakeholders to optimize user experience, leading discovery workshops, writing user stories, creating wireframes, prioritised backlogs, and running A/B testing to enhance user journeys and process flows.",
      },
    ],
  };

  const turkcellExperience = {
    role: "Technical Product Owner/Lead Software Engineer",
    company: "Turkcell Technology",
    period: "February 2011 - April 2015",
    website: "https://turkcell.com.tr",
    items: [
      {
        description:
          "Product Owner and Lead Software Engineer of Flexible Payment System, enabling customised payment plans for 35M customers across channels (Call Center, IVR, retail, online) via cash or credit cards.",
      },
      {
        description:
          "Technical analysis of 10+ year-old legacy Installment System, conducted User Interviews with call centre agents and business stakeholders, created wireframes for user testing",
      },
      {
        description:
          "Defined software architecture and applied Lean Product Management with 5 iterations, wrote requirements (JIRA epics, user stories) for Agile development",
      },
      {
        description:
          "Designed automated reporting dashboards for real-time performance tracking and KPIs.",
      },
      {
        description:
          "Led Flexible Payment Solution for SuperOnline, cutting delivery from 15 to 3 months, boosting revenue 80% above estimates, and recovering $258K from from 2,190 suspended customers in the first month.",
      },
      {
        description:
          "Improved Call Center efficiency, reducing average call duration from 20-30 to 5-10 minutes, increasing revenue by 30%.",
      },
      {
        description:
          "Managed 33 cross-functional engineers to replace billing system, saving $500K annually in maintenance costs",
      },
    ],
  };

  return (
    <LayoutSideProject title="Resume">
      <Box position="relative" mb={8}>
        <Button
          className="no-print"
          leftIcon={<DownloadIcon />}
          onClick={handlePrint}
          colorScheme="blue"
          position="fixed"
          top="4"
          right="4"
          zIndex="999"
          _hover={{ bg: "blue.600" }}
        >
          PDF İndir
        </Button>

        <div  style={{ width: "100%", height: "100%" }}>
          <Container maxW="6xl" py={8} ref={componentRef}>
            <Text
              fontSize="lg"
              color="gray.700"
              lineHeight="tall"
              mb={6}
              fontWeight="medium"
            >
                Product Manager with a strong technical background and
                user-centric design approach, and a MBA. Skilled in product
                strategy, platform optimization through analytics, and
                collaboration with engineers, designers, and data teams to
                develop scalable solutions.
            </Text>

            <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={8}>
              {/* Sol Kolon - İş Deneyimleri */}
              <GridItem>
                <VStack spacing={8} align="stretch">
                  <WorkExperience experience={keepspeechWorkExperience} />
                  <WorkExperience experience={pccwGlobalExperience} />
                  <WorkExperience experience={moulaExperience} />
                  <WorkExperience experience={myobExperience} />
                  <WorkExperience experience={latitudeExperience} />
                  <WorkExperience experience={proquoExperience} />
                  <WorkExperience experience={hsbcExperience} />
                  <WorkExperience experience={turkcellExperience} />
                </VStack>
              </GridItem>

              {/* Sağ Kolon - Yetenekler */}
              <GridItem>
                <Skills sections={skillsData.sections} />
              </GridItem>
            </Grid>
          </Container>
        </div>
      </Box>
    </LayoutSideProject>
  );
};

export default PagesResume;
