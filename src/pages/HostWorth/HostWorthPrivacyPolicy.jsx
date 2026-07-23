import React from 'react';
import './HostWorthPrivacyPolicy.css';
import { Link } from 'react-router-dom';

const HostWorthPrivacyPolicy = () => {
    return (
        <div className='PrivacyContainer'>
            <div className='headingText'>Privacy Policy</div>

            <div className='boldText' style={{ textAlign: 'center' }}>
                Last updated: {new Date().toLocaleDateString('en-GB')}
            </div>

            <div className='heading2' style={{ textAlign: 'center' }}>
                <Link className='heading2Link' to={'/host-worth'}>HostWorth</Link>
            </div>

            <p>
                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the HostWorth Service and explains Your privacy rights and how the law protects You.
            </p>
            <p>
                We use Your Personal Data to provide, maintain, and optimize Your fleet management, vehicle maintenance tracking, expense logging, and rental profitability analysis. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <div className='heading2'>Interpretation and Definitions</div>
            <div className='heading3'>Interpretation</div>
            <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <div className='heading3'>Definitions</div>
            <p>For the purposes of this Privacy Policy:</p>
            <div className='bulletPoint'><span className='boldText'>• Account:</span> A unique account created for You to access Our Service and sync Your fleet data.</div>
            <div className='bulletPoint'><span className='boldText'>• Application:</span> Refers to HostWorth, the software program provided by SRMakes.</div>
            <div className='bulletPoint'><span className='boldText'>• Company:</span> (referred to as either "We", "Us", or "Our") refers to HostWorth / SRMakes.</div>
            <div className='bulletPoint'><span className='boldText'>• Device:</span> Any mobile device or tablet that can access the Service.</div>
            <div className='bulletPoint'><span className='boldText'>• Personal Data:</span> Any information relating to an identified or identifiable individual.</div>
            <div className='bulletPoint'><span className='boldText'>• Service:</span> Refers to the HostWorth Application.</div>
            <div className='bulletPoint'><span className='boldText'>• You:</span> The individual accessing or using the Service, or the company/legal entity on whose behalf such individual is accessing or using the Service.</div>

            <div className='heading2'>Collecting and Using Your Personal Data</div>
            <div className='heading3'>Types of Data Collected</div>

            <div className='heading4'>Personal Data</div>
            <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information, including but not limited to:</p>
            <div className='bulletPoint'><span className='boldText'>• Email address</span></div>
            <div className='bulletPoint'><span className='boldText'>• First name and last name</span></div>
            <div className='bulletPoint'><span className='boldText'>• Authentication credentials</span> (e.g., via Supabase or Google Auth)</div>

            <div className='heading4'>Vehicle, Financial & Operational Data</div>
            <p>
                To provide accurate tracking, financial reporting, and fleet management features, HostWorth collects and processes data provided directly by You. We are completely transparent about collecting this information because it is strictly required to deliver actionable insights and maximize your fleet’s potential:
            </p>
            <div className='bulletPoint'>
                • <span className='boldText'>Vehicle Information:</span> Vehicle registration numbers (VRN), make, model, year, MOT expiry dates, and insurance renewal schedules. <em>(Used to track individual vehicle performance and deliver timely maintenance reminders.)</em>
            </div>
            <div className='bulletPoint'>
                • <span className='boldText'>Financial & Transaction Records:</span> Rental income, guest booking logs, maintenance expenses, fuel costs, and custom fee entries. <em>(Used to compute net profit, total revenue, operational costs, and overall vehicle profitability.)</em>
            </div>
            <p style={{ marginTop: '10px' }}>
                <strong style={{ color: '#ffffff' }}>Why We Collect This:</strong> HostWorth uses this operational data solely to calculate metrics, generate reports, and give you as much helpful financial clarity and convenience as possible. We do not sell your personal, vehicle, or financial data to third parties.
            </p>

            <div className='heading4'>Usage Data & Analytics</div>
            <p>Usage Data is collected automatically when using the Service and may include:</p>
            <div className='bulletPoint'>• Device identifiers, operating system version, and crash logs (via Sentry)</div>
            <div className='bulletPoint'>• Mobile advertising identifiers (used to serve personalized or non-personalized ads via Google AdMob)</div>

            <div className='heading3'>Use of Your Personal Data</div>
            <p>The Company may use Personal Data for the following purposes:</p>
            <div className='bulletPoint'><span className='boldText'>• To provide and maintain our Service:</span> Including monitoring vehicle profitability, tracking MOT/insurance reminders, and syncing across your devices.</div>
            <div className='bulletPoint'><span className='boldText'>• To manage Your Account:</span> To manage Your registration as a user of the Service.</div>
            <div className='bulletPoint'><span className='boldText'>• Error reporting & diagnostics:</span> Using crash logs to continuously improve application stability.</div>

            <div className='heading3'>Retention & Security of Your Data</div>
            <p>
                We retain Your personal and operational data only for as long as necessary to fulfill the services provided by HostWorth. We employ industry-standard encryption and security measures via our backend service providers (e.g., Supabase) to keep your rental operational data safe.
            </p>

            <div className='heading3'>Advertising & Third-Party Services</div>
            <p>
                HostWorth uses Google AdMob to display advertisements and Sentry for error tracking. These third-party services may collect diagnostic info or advertising IDs subject to their respective privacy policies.
            </p>

            <div className='heading3'>Children's Privacy</div>
            <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
            </p>

            <div className='heading3'>Contact Us</div>
            <p>
                If you have any questions about this Privacy Policy or wish to request data deletion, you can contact us at:
            </p>
            <div className='emailBox'>
                <strong>Email:</strong> samisamadur@gmail.com
            </div>
        </div>
    );
};

export default HostWorthPrivacyPolicy;