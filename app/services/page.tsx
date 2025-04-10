"use client"
import React from "react";
import {LabelTag} from "@/components/content/LabelTag";
import {P} from "@/components/content/PTag";
import {H2} from "@/components/content/HTag";
import {PrimaryLinkButton} from "@/components/uicomponents/buttons/LinkButton";
export default function Page() {
  //onderstaande services zijn geordent op basis van hoe moeilijk ze zijn.
  const services = ["api development & integration, full stack development, software architecture & design, saas development, custom software development, tech consulting & advisory"]

  return <div className="">
    <div className={"pt-20 pb-40"}>
      <div className={"text-white"}>
        <LabelTag className={"flex justify-around mb-40"}>🚀 Wat ik voor je kan betekenen</LabelTag>
        <div className={"flex justify-around mb-20 "}>
          <div className={"px-6 sm:w-1/2"}>
            <H2 className={"mb-10 font-bold"}>🔗 API-ontwikkeling & koppelingen</H2>
            <P className={"lg:pr-8"}>Ben je appels met peren aan het verbinden? Ik regel dat voor je. Ik bouw robuuste
              APIs met C# en .NET die
              vlekkeloos praten met andere systemen.
              Denk aan REST of integraties met externe tools zoals Stripe of je eigen CRM — gehost in de Azure-cloud
              voor
              stabiliteit en schaalbaarheid..</P>
          </div>
        </div>
      </div>
    </div>

    <div className={"-mt-20"}>
      <WaveUp/>
      <div className={"flex justify-around bg-neutral-200 py-30 -mt-2"}>
        <div className={"px-6 sm:w-1/2"}>
          <H2 className={"mb-10 font-bold"}>💻 Full Stack Development</H2>
          <P className={"lg:pr-8"}>
            Frontend, backend? Ik doe het allebei! Met React & Next.js bouw ik snelle, gebruiksvriendelijke
            interfaces,
            en onder de motorkap draait alles op een solide .NET-backend met een betrouwbare database.
            Alles draait in de cloud via Azure — snel, schaalbaar en future-proof.
          </P>
        </div>
      </div>
      <WaveDown/>
    </div>

    {/*<div className={"flex justify-around my-30"}>*/
    }
    {/*  <div>a</div>*/
    }
    {/*  <div className={"w-1/2"}>*/
    }
    {/*    <H2 className={"mb-10"}>🧱 Software-architectuur & ontwerp</H2>*/
  }
  {/*    <P>Een goed begin is het halve werk, vooral in software. Ik help je bij het opzetten van een slimme architectuur: van monoliet tot microservices.*/
  }
  {/*      Gebouwd met C#, gehost op Azure en ontworpen om mee te groeien met jouw ambities.*/
  }
  {/*    </P>*/
  }
  {/*  </div>*/
  }
  {/*</div>*/
  }

  {/*<div className="mt-20">*/
  }
  {/*  <WaveUp/>*/
  }
  {/*  <div className={"flex justify-around bg-neutral-200 py-20 "}>*/
  }
  {/*    <div className={"w-1/2"}>*/
  }
  {/*      <H2 className={"mb-10"}>☁️ Software in de cloud</H2>*/
  }
  {/*      multitenant?*/
  }
  {/*      <P>Wil je jouw eigen SaaS lanceren? I got you. Ik bouw schaalbare SaaS-platformen met Next.js, React en een solide C#-backend.*/
  }
  {/*        De data gaat netjes in een gestructureerde PostgreSQL-database. Hosting?*/
  }
  {/*        Uiteraard in Azure — veilig, snel en klaar voor groei.</P>*/
  }
  {/*    </div>*/
  }
  {/*    <div>a</div>*/
  }
  {/*  </div>*/
  }
  {/*  <WaveDown/>*/
  }
  {/*</div>*/
  }

  {/*<div className={"flex justify-around py-52 "}>*/}
  {/*  <PrimaryLinkButton href={"/softwaredevelopment"} className={" py-4 px-32 mt-10"}>*/}
  {/*    Wat is de eerste stap?*/}
  {/*  </PrimaryLinkButton>*/}
  {/*  <div className={"w-1/2"}>*/}
  {/*    <H2 className={"mb-10 font-bold"}>🧰 Software op maat</H2>*/}
  {/*    <P>*/}
  {/*      Heb je iets nodig dat je nergens kunt vinden? Ik maak software volledig op maat. Snel, gebruiksvriendelijk,*/}
  {/*      en*/}
  {/*      helemaal afgestemd op jouw bedrijf of workflow.*/}
  {/*    </P>*/}
  {/*  </div>*/}
  {/*</div>*/}


  {/*<div className="mt-20">*/
  }
  {/*  <WaveUp/>*/
  }
  {/*  <div className={"flex justify-around bg-neutral-200 py-20 "}>*/
  }
  {/*    <div className={"w-1/2"}>*/
  }
  {/*      <H2 className={"mb-10"}>🧠 Hulp & advies bij techniek</H2>*/
  }
  {/*      <P>Loop je vast met je huidige software of heb je hulp nodig bij een technisch vraagstuk? Ik kijk met je mee en geef eerlijk en helder advies. Geen moeilijke taal, gewoon duidelijke keuzes.</P>*/
  }
  {/*    </div>*/
  }
  {/*    <div>a</div>*/
  }
  {/*  </div>*/
  }
  {/*  <WaveDown/>*/
  }
  {/*</div>*/
  }

  <div className={"text-white"}>
    {/*<WaveUp/>*/}
    <div className={"flex justify-around  pt-20"}>
      <div className={"px-6 sm:w-1/2"}>
        <H2 className={"mb-10 font-bold"}>🤔 Iets in je hoofd?</H2>
        <P  className={" lg:pr-8"}>Wil je iets bouwen, verbeteren of weten wat er technisch mogelijk is? Stuur een bericht — ik help je
          graag
          verder!</P>

      </div>

    </div>
    <div className={"flex justify-center py-20"}>
      <PrimaryLinkButton href={"/contact"} className={"py-4 mt-10"}>
        Vertel me je idee!
      </PrimaryLinkButton>
    </div>
  </div>
    {/*⚙️ De tools waar ik mee werk*/}
    {/*👍 Wat ik gebruik	🧰 Voorbeelden*/}
    {/*Voorkant van je site (frontend)	React, Next.js*/}
    {/*Achterkant (backend)	C#/.NET*/}
    {/*Databases	PostgreSQL*/}
    {/*Cloud & hosting	Microsoft Azure*/}
    {/*Extra’s*/}
  </div>
}

function WaveUp() {

  return <div className="w-full ">
    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
        className="fill-current text-neutral-200 w-full"
      />
    </svg>
  </div>
}

function WaveDown() {
  return <div className="w-full ">
    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(1, -1) translate(0, -100)">
        <path
          d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
          className="fill-current text-neutral-200"
        />
      </g>
    </svg>
  </div>
}

//hieronder staan voorbeeld services
// Web Development Services
// Custom Website Development – Building fully customized websites tailored to specific business needs.
//   E-commerce Development – Developing online stores using Shopify, WooCommerce, or custom solutions.
//   Frontend Development – Creating beautiful and responsive user interfaces with React, Vue.js, or Angular.
//   Backend Development – Building server-side applications with Node.js, Django, Laravel, etc.
//   Full-Stack Development – End-to-end development, including both frontend and backend systems.
//   Website Maintenance & Support – Updating and maintaining websites to ensure smooth performance.
//   Landing Page Development – Creating high-converting landing pages for marketing campaigns.
//   Web Performance Optimization – Speed and performance improvements (e.g., reducing load time).
// Mobile App Development Services
// iOS App Development – Building mobile apps for iPhone/iPad using Swift or Objective-C.
//   Android App Development – Developing Android applications using Kotlin or Java.
//   Cross-Platform App Development – Creating apps with Flutter or React Native that work on both iOS and Android.
//   Mobile App UI/UX Design & Prototyping – Creating intuitive mobile interface designs and wireframes.
//   App Maintenance & Updates – Keeping apps updated and fixing any issues that arise.
//   Software Development & Automation
// Custom Software Development – Designing software solutions tailored to business needs.
//   API Development & Integration – Building and connecting APIs for smooth data exchange.
// SaaS (Software-as-a-Service) Development – Creating cloud-based software solutions.
//   Automation & Scripting – Creating scripts to automate repetitive tasks and workflows.
//   CRM & ERP Development – Building customer relationship or enterprise management systems.
//   Cloud & DevOps Services
// Cloud Infrastructure Setup – Deploying applications on AWS, Google Cloud, or Azure.
//   CI/CD Pipeline Setup – Automating software deployment and integration using Jenkins, GitHub Actions, etc.
//   Docker & Kubernetes Services – Containerizing applications for easier scalability.
//   Server Management & Hosting Setup – Managing hosting, security, and DevOps solutions.
//   AI & Data Science Services
// AI/ML Model Development – Implementing artificial intelligence and machine learning models.
//   Chatbot Development – Creating AI-powered chatbots for customer interaction.
//   Data Analytics & Visualization – Processing and presenting business data in meaningful ways.
//   Data Scraping & Web Crawling – Extracting data from websites using Python, Selenium, or Scrapy.
//   Consulting & Training Services
// Tech Consulting & Advisory – Providing expert advice on software development strategies.
//   Code Review & Optimization – Reviewing and improving existing codebases.
//   Software Architecture & Design – Helping businesses structure scalable software applications.
//   Developer Training & Mentorship – Teaching coding skillsoldpage or mentoring junior developers.