import React from "react";

import ExpTable from "../components/ExpTable";
import ScreenForApp from "../components/ScreenForApp";

function ExperienceScreen(props) {
  const data = {
    educations: [
      {
        inst: "Osaka University",
        subInst: "School of Engineering",
        hrefText: "https://www.eng.osaka-u.ac.jp/en",
        jobTitle: "Sphecial Researcher",
        time: "2010-2011",
        cont:
          "Takeishi and Komiyama's Laboratory. FrontierLab Program Fall 2010. " +
          "Gas turbine film cooling research.",
      },
      {
        inst: "National Tsing Hua University",
        subInst: "School of Engineering",
        hrefText: "http://pme.site.nthu.edu.tw/index.php?Lang=en",
        jobTitle: "Power of Mechanical Engineering",
        time: "2006-2011",
        cont: "Bachelor's degree. Thermo-Fluids Engineering Division",
      },
    ],
    careers: [
      {
        inst: "Chassis Brake International",
        subInst: "CBI Japan",
        hrefText: "https://www.chassisbrakes.com/country/japan/",
        jobTitle: "Test Engineer",
        time: "Jul 2019 - Present",
        cont:
          "Responsible for brake units testing. " +
          "Brake performance test, functional tests. " +
          "Test data analysis, summarising, material making. ",
      },
      {
        inst: "Working Holiday in Australia",
        subInst: "Food and Meat Industry",
        hrefText: false,
        jobTitle: "Backpacker",
        time: "Jan 2018 - May 2019",
        cont:
          "Experiencing Australian culture and lifestyle. " +
          "Kitchen hand of Sushi Train (sushi restaurant). " +
          "Production line worker in Australian Country Choice (meat factory).",
      },
      {
        inst: "Daimler AG",
        subInst: "Mitsubishi Fuso",
        hrefText: "https://www.mitsubishi-fuso.com",
        jobTitle: "Test Engineer",
        time: "Apr 2013 - Sep 2016",
        cont:
          "Responsible for heavy duty diesel engine dyno testing. " +
          "Engine performance test, emission test , functional test, and durability test. " +
          "Test data analysis, summarising, material making. " +
          "Test planning, execution. ",
      },
      {
        inst: "Taiwan (R.O.C) Army",
        subInst: "52th Engineering Group",
        hrefText: false,
        jobTitle: "Private First Class",
        time: "Nov 2011 - Oct 2012",
        cont:
          "Military service of ROC citizens. " +
          "Accomplished the daily commands and routines.",
      },
    ],
  };

  return (
    <ScreenForApp mainTitle="Experience">
      <ExpTable title="Careers" data={data.careers} />
      <ExpTable title="Educations" data={data.educations} />
    </ScreenForApp>
  );
}

export default ExperienceScreen;
