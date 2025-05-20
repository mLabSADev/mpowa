
import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import { cardWrapper } from './index.module.scss'
import Navigation from '../components/Navigation/Navigation';
const Privacy = () => {
  return <Layout>
    <div className="roundedMain">
      <Navigation />
      <section id="cta" className="section" style={{ flexDirection: 'column', paddingBottom: 50 }}>
        <div className="sectionHeader">
          <div className="titleLineWrapper">
            <p className="pageTitle">Privacy Policy</p>
            <div className="lineWrapper" style={{ justifyContent: 'center' }}>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="cta" className="section" style={{ flexDirection: 'column', paddingBottom: 50 }}>
        <div className="sectionHeader">
          <div className="titleLineWrapper">

            <div className='bodyText'>

              <h1 id="privacy-policy">Privacy Policy</h1>
              <p><strong>Effective Date:</strong> May 20, 2025<br><strong>App Name:</strong> mPowa</p>
              <p>Thank you for using <strong>mPowa</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.</p>
              <h2 id="1-information-we-collect">1. Information We Collect</h2>
              <p>We collect the following types of personal information:</p>
              <h3 id="a-personal-information">a. Personal Information</h3>
              <ul>
                <li>Full name  </li>
                <li>Email address  </li>
                <li>Phone number  </li>
                <li>Work experience, education, and other CV-related data  </li>
              </ul>
              <p>This information is collected when you create a profile, log in, or update your CV.</p>
              <h3 id="b-location-information">b. Location Information</h3>
              <p>We collect your device’s GPS location to display nearby services and opportunities relevant to your profile. This data is collected only while the app is in use, with your permission.</p>
              <h3 id="c-device-and-usage-data">c. Device and Usage Data</h3>
              <p>We may collect:</p>
              <ul>
                <li>Device type and operating system  </li>
                <li>App usage data  </li>
                <li>Crash reports  </li>
              </ul>
              <p>This data helps us improve app performance and user experience.</p>
              <h2 id="2-how-we-use-your-information">2. How We Use Your Information</h2>
              <p>We use your data to:</p>
              <ul>
                <li>Create and manage your CV  </li>
                <li>Authenticate your login and manage your account  </li>
                <li>Show nearby services using your location  </li>
                <li>Improve the functionality and security of the app  </li>
              </ul>
              <h2 id="3-data-sharing">3. Data Sharing</h2>
              <p>We <strong>do not sell</strong> or rent your personal information to third parties.</p>
              <p>We may share your data:</p>
              <ul>
                <li>With service providers who help us operate the app (e.g., hosting, analytics)  </li>
                <li>If required by law or legal process  </li>
                <li>To protect the rights and safety of mPowa, its users, or the public</li>
              </ul>
              <h2 id="4-data-security">4. Data Security</h2>
              <p>We use industry-standard security measures to protect your data. However, no method of transmission or storage is 100% secure.</p>
              <h2 id="5-your-choices">5. Your Choices</h2>
              <ul>
                <li><strong>Location Access:</strong> You can control location permissions through your device settings.  </li>
                <li><strong>Profile Data:</strong> You can view, edit, or delete your information at any time within the app.  </li>
                <li><strong>Account Deletion:</strong> To delete your account and all associated data, contact us at [support@mpowa.app] or use the in-app support feature.</li>
              </ul>
              <h2 id="6-children-s-privacy">6. Children’s Privacy</h2>
              <p>mPowa is not intended for users under the age of 16. We do not knowingly collect personal information from children.</p>
              <h2 id="7-changes-to-this-policy">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. When we do, we will update the <strong>Effective Date</strong> at the top of the policy and notify users where appropriate.</p>
              <h2 id="8-contact-us">8. Contact Us</h2>
              <p>If you have any questions or concerns about this policy or your data, please contact:</p>
              <p><strong>mPowa Support Team</strong><br />Email: [support@mpowa.app]<br />Website: <a href="https://mpowa.app">https://mpowa.app</a></p>

            </div>

            {/* <p className="bodyText"> */}
            {/*   In February 2020 President Cyril Ramaphosa launched a youth employment intervention, a strategic national vision and plan poised to address youth unemployment. <br /><br /> */}
            {/**/}
            {/*   At the centre of the strategy is SA Youth, a network of tech-based services that connects young South Africans with work, learning and work readiness opportunities in their areas. The network is managed by Harambee and supported by other major partners such as the Office of the Presidency, Department of Science and Innovation, World Bank Group, mLab, Saldru and OpenUp amongst others.<br /><br /> */}
            {/**/}
            {/*   mPowa is one of the services at the centre of this initiative, an app developed by mLab. The app points users to resources and opportunities based on their preference settings. This means that the user can easily find realtime information on entrepreneurship-related workshops, courses, calls for proposals, etc., within their immediate location. With this app, job seekers won’t miss out on, for example, a soft skills workshop, a seminar on how to conduct an interview, a course in coding or other opportunities that may be happening there and then in their area. It also offers information on youth centres, colleges, free Wi-Fi spots, other resources that can help young people overcome the logistic obstacles they face when chasing that dream job.<br /><br /> */}
            {/**/}
            {/*   The app is not only for those who wish to find employment but also for the young entrepreneurial mind. Whether they have been building a business for years, are nurturing a recent start-up or simply have a great business idea, the app will connect them with a plethora of resources such as financial assistance like those offered by seda or mentorship programmes such as one of mLab’s own multiple start-up accelerator programmes.<br /><br /> */}
            {/**/}
            {/*   The app is friendly to use and is available for download from Google Play or the Apple app store. */}
            {/* </p> */}
          </div>
        </div>
        <div className={cardWrapper} style={{ justifyContent: 'center' }}>
          <Link to="https://play.google.com/store/apps/details?id=com.mlab.mpowa" target="_blank">
            <StaticImage style={{ width: 300 }} src="../images/playstore.png" alt="" />
          </Link>
          <Link style={{ width: 300 }} to="https://apps.apple.com/za/app/mpowa/id1560352984" target="_blank">
            <StaticImage src="../images/appleStore.png" alt="" />
          </Link>
        </div>
      </section>
    </div>

  </Layout>;
}

export default Privacy;
