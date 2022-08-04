import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { cardWrapper } from "./index.module.scss";
import Navigation from "../components/Navigation/Navigation";
const About = () => {
  return (
    <Layout>
      <div className="roundedMain">
        <Navigation />
        <section
          id="cta"
          className="section"
          style={{ flexDirection: "column", paddingBottom: 50 }}
        >
          <div className="sectionHeader">
            <div className="titleLineWrapper">
              <p className="pageTitle">About mPowa</p>
              <div className="lineWrapper" style={{ justifyContent: "center" }}>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <StaticImage
            style={{ width: "100%" }}
            src="../images/banner.jpg"
            alt=""
          />
          <iframe
            width="100%"
            height="570"
            src="https://www.youtube.com/embed/oI91qtrBBMg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
        <section
          id="cta"
          className="section"
          style={{ flexDirection: "column", paddingBottom: 50 }}
        >
          <div className="sectionHeader">
            <div className="titleLineWrapper">
              <p className="bodyText">
                In February 2020 President Cyril Ramaphosa launched a youth
                employment intervention, a strategic national vision and plan
                poised to address youth unemployment. <br />
                <br />
                At the centre of the strategy is SA Youth, a network of
                tech-based services that connects young South Africans with
                work, learning and work readiness opportunities in their areas.
                The network is managed by Harambee and supported by other major
                partners such as the Office of the Presidency, Department of
                Science and Innovation, World Bank Group, mLab, Saldru and
                OpenUp amongst others.
                <br />
                <br />
                mPowa is one of the services at the centre of this initiative,
                an app developed by mLab. The app points users to resources and
                opportunities based on their preference settings. This means
                that the user can easily find realtime information on
                entrepreneurship-related workshops, courses, calls for
                proposals, etc., within their immediate location. With this app,
                job seekers won’t miss out on, for example, a soft skills
                workshop, a seminar on how to conduct an interview, a course in
                coding or other opportunities that may be happening there and
                then in their area. It also offers information on youth centres,
                colleges, free Wi-Fi spots, other resources that can help young
                people overcome the logistic obstacles they face when chasing
                that dream job.
                <br />
                <br />
                The app is not only for those who wish to find employment but
                also for the young entrepreneurial mind. Whether they have been
                building a business for years, are nurturing a recent start-up
                or simply have a great business idea, the app will connect them
                with a plethora of resources such as financial assistance like
                those offered by seda or mentorship programmes such as one of
                mLab’s own multiple start-up accelerator programmes.
                <br />
                <br />
                The app is friendly to use and is available for download from
                Google Play or the Apple app store.
              </p>
            </div>
          </div>
          <div className={cardWrapper} style={{ justifyContent: "center" }}>
            <Link
              to="https://play.google.com/store/apps/details?id=com.mlab.mpowa"
              target="_blank"
            >
              <StaticImage
                style={{ width: 300 }}
                src="../images/playstore.png"
                alt=""
              />
            </Link>
            <Link
              style={{ width: 300 }}
              to="https://apps.apple.com/za/app/mpowa/id1560352984"
              target="_blank"
            >
              <StaticImage src="../images/appleStore.png" alt="" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
