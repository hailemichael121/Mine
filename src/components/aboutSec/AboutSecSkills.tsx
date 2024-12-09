import { Grid, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import React from "react";
import AboutSecSkillItem from "./AboutSecSkillItem";

const AboutSecSkills: React.FC = () => {
  const { colorMode } = useColorMode();

  const skillLabels = {
    javascript:
      useBreakpointValue({ base: "JavaScript", md: "JavaScript" }) ||
      "JavaScript",
    nodejs: useBreakpointValue({ base: "Node", md: "NodeJs" }) || "NodeJs",
    html: useBreakpointValue({ base: "HTML", md: "HTML" }) || "HTML",
    python: useBreakpointValue({ base: "Python", md: "Python" }) || "Python",
    css: useBreakpointValue({ base: "CSS", md: "CSS" }) || "CSS",
    database:
      useBreakpointValue({
        base: "DB",
        md: "Database (MongoDB, MySQL,Postgress)",
      }) || "Database",
    remix: useBreakpointValue({ base: "Remix", md: "Remix" }) || "Remix",
    ml:
      useBreakpointValue({
        base: "ML",
        md: "Machine Learning & Data Analysis",
      }) || "Machine Learning",
    tailwind:
      useBreakpointValue({ base: "Tailwind", md: "TailwindCSS" }) ||
      "TailwindCSS",
    r: useBreakpointValue({ base: "R", md: "R" }) || "R",
    angular:
      useBreakpointValue({ base: "Angular", md: "AngularJs" }) || "AngularJs",
    react:
      useBreakpointValue({ base: "React", md: "React & React Native" }) ||
      "React",
    java: useBreakpointValue({ base: "Java", md: "Java" }) || "Java",
    kotlin: useBreakpointValue({ base: "Kotlin", md: "Kotlin" }) || "Kotlin",
    android:
      useBreakpointValue({ base: "Android", md: "Android Application" }) ||
      "Android",
    flutter:
      useBreakpointValue({ base: "Flutter", md: "Flutter" }) || "Flutter",
  };

  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(2, 1fr)",
    md: "repeat(2, 1fr)",
  });

  return (
    <Grid
      templateColumns={gridTemplateColumns}
      gap={5}
      alignItems="start"
      p={5}
      pb={20}
    >
      <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/java-scriptLogo.png"
        altText="JavaScript Logo"
        label={skillLabels.javascript}
      />
      <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/nodejsLogo.png"
        altText="NodeJs Logo"
        label={skillLabels.nodejs}
      />
      <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/htmlLogo.png"
        altText="HTML Logo"
        label={skillLabels.html}
      />
      <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/pythonLogo.png"
        altText="Python Logo"
        label={skillLabels.python}
      />
      <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/cssLogo.png"
        altText="CSS Logo"
        label={skillLabels.css}
      />
      <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/databaseLogo.png"
        altText="Database Logo"
        label={skillLabels.database}
      />
      <AboutSecSkillItem
        imgSrc={
          colorMode === "dark"
            ? "/images/SkillsLogo/remix-letter-darkLogo.png"
            : "/images/SkillsLogo/remix-letter-lightLogo.png"
        }
        altText="Remix Logo"
        label={skillLabels.remix}
      />
      <AboutSecSkillItem
        imgSrc={
          colorMode === "dark"
            ? "/images/SkillsLogo/MLDarkLogo.png"
            : "/images/SkillsLogo/MLLightLogo.png"
        }
        altText="Machine Learning Logo"
        label={skillLabels.ml}
      />
      <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/tailwindcssLogo.svg"
        altText="TailwindCSS Logo"
        label={skillLabels.tailwind}
      />
      {/* <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/rLogo.png"
        altText="R Logo"
        label={skillLabels.r}
      /> */}
      <AboutSecSkillItem
        imgSrc={
          colorMode === "dark"
            ? "/images/SkillsLogo/angularjsLogoDark.png"
            : "/images/SkillsLogo/angularjsLogo.png"
        }
        altText="AngularJs Logo"
        label={skillLabels.angular}
      />
      <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/reactLogo.png"
        altText="React Logo"
        label={skillLabels.react}
      />
      <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/javaLogo.png"
        altText="Java Logo"
        label={skillLabels.java}
      />
      {/* <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/KotlinLogo.png"
        altText="Kotlin Logo"
        label={skillLabels.kotlin}
      /> */}
      <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/androidLogo.png"
        altText="Android Logo"
        label={skillLabels.android}
      />
      <AboutSecSkillItem
        imgSrc="/images/SkillsLogo/flutterLogo.png"
        altText="Flutter Logo"
        label={skillLabels.flutter}
      />
    </Grid>
  );
};

export default AboutSecSkills;
