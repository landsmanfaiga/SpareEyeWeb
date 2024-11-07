import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { BsCheckCircleFill } from "react-icons/bs";
import MonthlyPlan from '../Components/MonthlyPlan';

const Home = () => {

    const [click, setClick] = useState(false);
    const [submit, setSubmit] = useState(false);
    

    const onSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('form');
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                setSubmit(true);
            })
    }
  

    const onClick = () => {
        setClick(true);
    }

   


    if (!click) {
        return (
            
            <>
                <div className="jumbotron p-5 rounded-lg mb-4 container">
                    <br />
                    <br/>
                        <h1 className="display-4 d-flex w-100 justify-content-center align-self-center" style={{ fontFamily: "Georgia, Arial" } }>Keep your head in the sand about cybersecurity. We&#39;ll do the looking out for you.</h1>
                        <p className="lead d-flex w-80" style={{ textAlign: 'center', color: "rgb(167, 155, 148)", fontFamily: "Helvetica" }}>SpareEye secures compliance with cybersecurity guidelines for CPAs who are too busy to worry about compliance. You never have to worry about penalty fines or fraudulent returns either.</p>
                        <Link to='/'
                            className="btn btn-outline-danger w-25 offset-4" style={{ marginTop: 10, fontFamily: "Helvetica" }} onClick={onClick}>Secure my compliance
                    </Link>
                    <br />
                </div>
                <div className="jumbotron" style={{ backgroundColor: "rgba(167, 155, 148, 0.2)" }}>
                    <div className="container">
                        <br />
                        <br />
                        <br />
                        <br />
                        <span style={{ fontSize: 38, fontFamily: "Georgia, Arial" }}>Why be compliant with cybersecurity laws for accountants?</span>
                        <br />
                    <br/>
                        <ul>
                            <li style={{ fontSize: 25, fontFamily: "Helvetica" }}>Fines</li>
                        
                        <p className="lead d-flex w-80" style={{ color: "rgb(167, 155, 148)", fontFamily: "Helvetica" }}>Aside from the IRS Pub 4557, the latest FTC guidelines under the Gramm-Leach-Bliley Act have gone into penalty phase since June 2023.
                                If you&#39;re found non-compliant, you could face up to $43,000 in fines per day.</p>
                            <li style={{ fontSize: 25, fontFamily: "Helvetica" }}> Audits</li>
                       
                        <p className="lead d-flex w-80" style={{ color: "rgb(167, 155, 148)", fontFamily: "Helvetica" }}>Once the audit happens, you can&#39;t prepare anymore.
                                You need to be compliant now if you want a clean audit later. Running after the paper trail during an actual audit swallows all your resources, creates endless headaches, and often isn&#39;t enough to actually prevent penalties in case of previous noncompliance.
                            </p>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <br/>
                    </div>
                </div>
                <div className="jumbotron" style={{ backgroundColor: "rgba(104, 158, 184, 0.9)" }}>
                <div className="container">
                        <br/>
                        <span style={{ fontSize: 30, color: "rgb(0,73,106)", fontFamily: "Georgia, Arial" }}>On the other hand, following compliance laws protects your clients&#39; financial records from hackers and cybercriminals.
                    </span>
                    </div>
                <div className="container"><br/>
                        <p className="lead d-flex w-80" style={{ color: "rgb( 243, 244, 246)", fontFamily: "Helvetica" }}>Incidence of identity theft, tax data breaches, and rerouted refunds are on a steep rise.
                        </p>
                        <p className="lead d-flex w-80" style={{ color: "rgb( 243, 244, 246)", fontFamily: "Helvetica" }}>So steep there&#39;s no data available to measure the rise yet, though experts estimate 2024 will see the biggest jump ever.
                        </p>
                        <p className="lead d-flex w-80" style={{ color: "rgb( 243, 244, 246)", fontFamily: "Helvetica" }}>But maybe this doesn&#39;t apply to you.
                        </p>
                        <p className="lead d-flex w-80" style={{ color: "rgb( 243, 244, 246)", fontFamily: "Georgia, Arial" }}>You might ask:
                        </p>
                        <span style={{ fontSize: 30, fontFamily: "Georgia, Arial", color: "rgb(0,73,106)" }}>As a successful CPA, will hackers target you?
                        </span>
                        <br />
                        <br/>
                        <span style={{ fontSize: 30, fontFamily: "Georgia, Arial", color: "rgb(0,73,106)" }}>Don&#39;t be the accountant in the next frantic post.
                            </span>
                            <br/>
                        <q style={{ color: "rgb(243, 244, 246)", fontFamily: "Helvetica" }}>My CPA&#39;s inuit was hacked and thus so was I...
                            </q>
                            <br/>
                        <q style={{ color: "rgb(243, 244, 246)", fontFamily: "Helvetica" }}>Our CPA says she was hacked and someone basically changed the routing numbers for multiple refunds...
                        </q>
                        <br />
                            <br/>
                        <p className="lead d-flex w-80" style={{ color: "rgb(243, 244, 246)", fontFamily: "Helvetica" }}>Look at the facts:
                        </p>
                        <ul style={{ fontFamily: "Helvetica", color: "rgb(0,73,106)" } }>
                            <li>CPAs store thousands of client financial records.</li>
                            <li>Financial records contain valuable information such as SS numbers.</li>
                            <li>Hackers use SS numbers yearly to file fraudulent returns and reroute the refunds.</li>
                        </ul>
                        <p className="lead d-flex w-80" style={{ fontFamily: "Helvetica", color: "rgb(0,73,106)" }}>Hacking CPAs is profitable for fraudsters - and without safeguards in place, it&#39;s easy to do.</p>
                        <div style={{ textAlign: 'center' } }>
                        <Link to='/'
                        className="btn btn-light" style={{ marginTop: 10, fontFamily: "Helvetica" }} onClick={onClick}>Protect my practice from hackers and audits
                            </Link>
                        </div>
                        <br />
                        <br/>
                </div>   
                </div>  
               
                <div className="jumbotron p-5 rounded-lg mb-4">
                    <span style={{ fontSize: 30, fontFamily: "Georgia, Arial" }}>You&#39;ve seen scam alerts from friends. Heard hacker reports in the news.
                        </span>
                    <p className="lead d-flex w-80" style={{ color: "rgb(167, 155, 148)", fontFamily: "Helvetica" }}>Like everyone in cyberspace, you know that there are darker elements on the web.
                        </p>
                    <p className="lead d-flex w-80" style={{ color: "rgb(167, 155, 148)", fontFamily: "Helvetica" }}>But as a CPA, it&#39;s not just $$$ on the line.
                        </p>
                    <p className="lead d-flex w-80" style={{ color: "rgb(167, 155, 148)", fontFamily: "Helvetica" }}>It&#39;s:
                        </p>
                        <ul>
                        <li style={{ fontSize: 25, fontFamily: "Georgia, Arial" }}> Your reputation</li>
                        <li style={{ fontSize: 25, fontFamily: "Georgia, Arial" }}> Your clients trust</li>
                        <li style={{ fontSize: 25, fontFamily: "Georgia, Arial" }}> Your accounting practice</li>
                        </ul>
                    <b className="lead d-flex w-80" style={{ color: "rgb(167, 155, 148)", fontFamily: "Helvetica" }}>What took years to build can vanish in weeks with one crafty hackers success.
                        </b>
                    <p className="lead d-flex w-80" style={{ fontFamily: "Helvetica", color: "rgb(167, 155, 148)" } }>Are you an easy target?
                    </p>
                    <div style={{textAlign: 'center'} }>
                        <Link to='/'
                        className="btn btn-outline-danger w-25" style={{ marginTop: 10, fontFamily: "Helvetica" }} onClick={onClick}>Get protected
                        </Link>
                    </div>
                    </div>
                <div className="jumbotron p-5 rounded-lg mb-4" style={{ backgroundColor: "rgba(104, 158, 184, 0.9)" }}>
                <div className="container">
                        <span style={{ fontSize: 30, fontFamily: "Georgia, Arial", color: "rgb(0,73,106)" }}>Accounting in 2024 isn&#39;t accounting in 2014
                        </span>
                        <p className="lead d-flex w-80" style={{ fontSize: 15, color: "rgb(243, 244, 246)", fontFamily: "Helvetica" }}>A basement flood could wipe out CPA records decades ago. A data breach on your computer systems today is worse.
                        </p>
                    </div>
                </div>
                <div className="jumbotron p-5 rounded-lg mb-4">
                    <p className="lead d-flex w-80" style={{ fontStyle: 'italic', color: "rgb(167, 155, 148)", fontSize: 40, fontFamily: "Georgia, Arial" }}>Who we are:
                        </p>
                    <span style={{ fontSize: 28, fontFamily: "Georgia, Arial" }}>SpareEye is a cybersecurity firm that specializes in compliance.
                        </span>
                    <p className="lead d-flex w-80" style={{ fontFamily: "Helvetica" }}>We&#39;ve helped dozens of businesses secure their compliance with a completely managed service model. Our Managed Compliance subscription model is unique to SpareEye.
                        </p>
                    <p className="lead d-flex w-80" style={{ fontSize: 15, fontFamily: "Helvetica" }}>Want to ask us a question? Sure! Email&nbsp; <b>info@spareeye.com</b>
                        </p>

                    <p className="lead d-flex w-80" style={{ fontStyle: 'italic', color: "rgb(167, 155, 148)", fontFamily: "Helvetica" }}>What past clients who&#39;ve gotten their compliance with us loved:
                        </p>
                                <div >
                                        <div className="row" style={{ marginTop: 20}}>
                        <div className="col-md-4 mb-4 offset">
                                <div className="card shadow-sm h-200" style={{ height: 300, width: 300, borderRadius: 15, backgroundColor: "rgba(104, 158, 184, 0.9)" }}>
                                    <div className="card-body d-flex flex-column">
                                        <span style={{ color: "rgb(0,73,106)" }}> &#9733; &#9733; &#9733; &#9733; &#9733;</span>
                                    <div className="d-flex justify-content-center mb-3">
                                    </div>
                                    <div style={{ flex: "1 1 auto", overflowY: "auto" }}>
                                        <center>
                                            <p>
                                                <strong style={{ fontFamily: "Georgia, Arial" }}>We were having a hard time with compliance and a friend recommended Spare Eye. They delivered everything we wanted and it was so easy to work with them.</strong>
                                                </p>
                                                <p className="lead d-flex w-80" style={{ fontSize: 12, textAlign: 'right', marginLeft: 50, fontFamily: 'Helvetica', color: "rgb(0,73,106)" }}>Menachem Geller
                                                <br />
                                                Compliance Officer, Four Star Funding
                                                <br />
                                                Satisfied Spare Eye client
                                            </p>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                                <div className="card shadow-sm h-200" style={{ height: 300, width: 300, borderRadius: 15, backgroundColor: "rgba(104, 158, 184, 0.9)" }}>
                                    <div className="card-body d-flex flex-column">
                                        <span style={{ color: "rgb(0,73,106)" }}> &#9733; &#9733; &#9733; &#9733; &#9733;</span>
                                        <div className="d-flex justify-content-center mb-3">
                                        </div>
                                        <div style={{ flex: "1 1 auto", overflowY: "auto" }}> 
                                        <center>
                                            <p>
                                                <strong style={{ fontFamily: "Georgia, Arial" }}>What I like about Spare Eye is that they don&#39;t say, "You need to do this". They just do it for you.</strong>
                                                </p>
                                                <br />
                                                <br />
                                                <br />
                                                <p className="lead d-flex w-80" style={{ fontSize: 12, textAlign: 'right', marginLeft: 115, fontFamily: 'Helvetica', color: "rgb(0,73,106)" }}>Bayla Stroh
                                                <br />
                                                COO, Exclugo
                                                <br />
                                                    Satisfied Spare Eye client
                                            </p>
                                        </center>
                                    </div>
                                </div>
                                </div>

                            </div>
                            <div className="col-md-1 mb-4">
                                <div className="card shadow-sm h-200" style={{ height: 300, width: 300, borderRadius: 15, backgroundColor: "rgba(104, 158, 184, 0.9)" }}>
                                    <div className="card-body d-flex flex-column">
                                        <span style={{ color: "rgb(0,73,106)" }}> &#9733; &#9733; &#9733; &#9733; &#9733;</span>
                                        <div className="d-flex justify-content-center mb-3">
                                        </div>
                                        <div style={{ flex: "1 1 auto", overflowY: "auto" }}>
                                            <center>
                                                <p>
                                                    <strong style={{ fontFamily: "Georgia, Arial" }}>SpareEye is so quick and on top of things. You don't have to remind them, they remind you and are on top of everything.</strong>
                                                </p>
                                                <br />
                                                <br/>
                                                <p className="lead d-flex w-80" style={{ fontSize: 12, textAlign: 'right', marginLeft: 50, fontFamily: 'Helvetica', color: "rgb(0,73,106)" }}>Leonora Bediner
                                                    <br />
                                                    CEO, Expert Medicaid Consultants LLC
                                                    <br />
                                                    Satisfied Spare Eye client
                                                </p>
                                            </center>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                        <div>
                        </div>
                <div className="jumbotron p-5" style={{ backgroundColor: "rgb(255,255,255)" }}>
                <div className="container">
                        <span className="offset-1" style={{ fontSize: 30, textAlign: 'center', fontFamily: "Georgia, Arial", color: "rgb(0,73,106)" }}>SpareEye&#39;s 12-Month Cybersecurity Plan
                        </span>
                        <p className="lead d-flex w-80 offset-1" style={{ color: "rgb(0,0,0)", fontFamily: "Helvetica" }}>What you can expect when you sign up for managed compliance
                        </p>
                        <div className="col-md-4 mb-4 offset-1" style={{ width: 900 }}>
                            <div className="card shadow-sm h-200">
                                <div className="card-body d-flex flex-column" style={{ maxHeight: 300, overflow: "hidden", backgroundColor: "rgb(104, 158, 184, 0.5)" }}>
                                  
                                <div>
                                        
                                            <section className="slider_container">
                                                <section className="slider">
                                                    <div className="slide one" style={{display: 'flex'} }>
                                                        <MonthlyPlan key={1} id={1} title='Risk Assessment' explanation='We&#39;ll conduct interviews to find your biggest risks.'  />
                                                        <MonthlyPlan key={2} id={2} title='Risk Management' explanation='You&#39;ll get a detailed report with an outline explaining how to deal with your risks and what to focus on first.' />
                                                        <MonthlyPlan key={3} id={3} title='Policies and Procedures' explanation='Together, we&#39;ll decide on the safest policies and procedures for your practice.' />
                                                    </div>
                                                    <div className="slide two" style={{ display: 'flex' }}>
                                                        <MonthlyPlan key={4} id={4} title='Implement Policies' explanation='We&#39;ll make it super-easy for you to implement the policies with 13+ copy-paste templates.' />
                                                        <MonthlyPlan key={5} id={5} title='Vulnerability Scanning' explanation='We&#39;ll perform a scan to identify security flaws and weaknesses in your network and infrastructure.' />
                                                        <MonthlyPlan key={6} id={6} title='On-site Security Evaluation' explanation='We&#39;ll visit your office to perform a physical risk assessment.' />
                                                    </div>
                                                    <div className="slide three" style={{ display: 'flex' }}>
                                                        <MonthlyPlan key={7} id={7} title='Employee Training' explanation='We&#39;ll conduct an interactive live training session with your employees, including a Q&A at the end to address any questions.' />
                                                        <MonthlyPlan key={8} id={8} title='Follow-Up with Training' explanation='We&#39;ll send your employees a quiz to make sure they understood the training.' />
                                                        <MonthlyPlan key={9} id={9} title='Phishing tests' explanation='We&#39;ll send fake phishing emails to check if anyone in your practice will fall for a scam.' />
                                                    </div>
                                                    <div className="slide four" style={{ display: 'flex' }}>
                                                        <MonthlyPlan key={10} id={10} title='Phishing Tests Follow-Up' explanation='We&#39;ll follow up with anyone in your practice who needs additional training based on phishing test results.' />
                                                        <MonthlyPlan key={11} id={11} title='Bi-annual Vulnerability Scanning' explanation='We&#39;ll perform the second yearly scan to identify security flaws and weaknesses in your network and infrastructure.' />
                                                        <MonthlyPlan key={12} id={12} title='GLBA FTC Training' explanation='Specific compliance training to ensure all your employees are familiar with their obligations.' />
                                                    </div>
                                                    <div className="slide five" style={{ display: 'flex' }}>
                                                        <MonthlyPlan key={1} id={1} title='Risk Assessment' explanation='We&#39;ll conduct interviews to find your biggest risks.' />
                                                        <MonthlyPlan key={2} id={2} title='Risk Management' explanation='You&#39;ll get a detailed report with an outline explaining how to deal with your risks and what to focus on first.' />
                                                        <MonthlyPlan key={3} id={3} title='Policies and Procedures' explanation='Together, we&#39;ll decide on the safest policies and procedures for your practice.' />
                                                    </div>
                                                </section>
                                            </section>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="jumbotron p-5 rounded-lg mb-4">
                    <span style={{ fontSize: 30, fontFamily: "Georgia, Arial" }}>Get SpareEye Managed Compliance for the lowest we&#39;ll ever offer it.
                        </span>
                    <p className="lead d-flex w-80" style={{ fontSize: 15, color: "rgb(167, 155, 148)", fontFamily: "Helvetica" }}>Here&#39;s the pricing breakdown:
                        </p>
                        <div>
                            <div className="container mt-5" style={{
                                borderRadius: 10,
                                width: 500
                            }}>
                                <div className="col-md-4 mb-4">
                                <div className="card shadow-sm h-200" style={{ borderRadius: 15, width: 450, borderColor: "rgb(0,0,0)", borderWidth: 2}}>
                                        <div className="card-body d-flex flex-column" style={{ overflow: "hidden" }}>
                                        <h3 className="text-center" style={{ fontFamily: "Georgia, Arial", fontSize: 25 } }>
                                            Managed Compliance <br />Subscription Plan</h3>
                                        <br />
                                                <br/>
                                        <b style={{ textAlign: 'center', fontSize: 40, color: "rgb(255, 90, 96)" }}>$497/month</b>
                                        <br />  
                                        <b style={{fontSize: 22, marginLeft: 105} }>Includes:</b>
                                        <ul style={{ color: "rgb(0,0,0)", fontSize: 20, marginLeft: 80 }}>
                                            <span style={{ color: "#28A745" }}>&#10003;&nbsp;</span><span>Complete WISP</span>
                                                <br/>
                                            <span style={{ color: "#28A745" }}>&#10003;&nbsp;</span>
                                            <span>Employee Trainings</span>
                                                <br/>
                                            <span style={{ color: "#28A745" }}>&#10003;&nbsp;</span>
                                            <span>Risk Assessment</span>
                                            <br/>
                                        </ul>
                                                <br/>
                                            <Link to='/'
                                                className="btn btn-outline-dark w-50 offset-3" style={{ marginTop: 10, fontFamily: "Helvetica" }} onClick={onClick}>Protect my practice
                                        </Link>
                                        <br />
                                            <br/>
                                        <center id="blinking-text" style={{ color: "rgb(255, 90, 96)", fontSize: 22 }} >Offer expires in {Math.floor((new Date("Jan 5, 2030 15:37:25").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days</center>
                                        <br />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <span style={{ fontSize: 30, color: "rgb(255, 90, 96)", fontFamily: "Georgia, Arial" }}>The only done-for-you complete compliance package.
                        </span>
                    <p className="lead d-flex w-80" style={{ fontFamily: "Helvetica" } }>SpareEye is more comprehensive than any other compliance offer.
                        </p>
                        <div>
                        <table style={{ fontFamily: "Helvetica", backgroundColor: "rgb(243, 244, 246)" } }>
                               
                                <tr>
                                    <th><b>Other Compliance Offers</b></th>
                                    <th><b>SpareEye Managed Compliance</b></th>
                                    </tr>
                                
                                <tbody>
                                    <tr>
                                    <td><span style={{ color: "#347c17" }}>&#10003;&nbsp;</span> Some offer a WISP template (Written Information Security Plan)</td>
                                    <td><span style={{ color: "#347c17" }}>&#10003;&nbsp;</span> Creates the WISP for you</td>
                                    </tr>
                                    <tr>
                                    <td><span style={{ color: "#347c17" }}>&#10003;&nbsp;</span> Some may customize the WISP for your practice</td>
                                    <td><span style={{ color: "#347c17" }}>&#10003;&nbsp;</span> Customizes your WISP to your unique practice</td>
                                    </tr>
                                    <tr>
                                    <td><span style={{ color: "#347c17" }}>&#10003;&nbsp;</span> Some may offer risk assessments</td>
                                    <td><span style={{ color: "#347c17" }}>&#10003;&nbsp;</span> Always includes risk assessments, vulnerability scanning, and tests</td>
                                    </tr>
                                    <tr>
                                    <td><span style={{ color: "#347c17" }}>&#10003;&nbsp;</span> Some may offer recommendations</td>
                                    <td><span style={{ color: "#347c17" }}>&#10003;&nbsp;</span> Always offers tech and security recommendations</td>
                                    </tr>
                                    <tr>
                                    <td></td>
                                    <td style={{ backgroundColor: "rgba(167, 155, 148, 0.2)" }}><span style={{ color: "#347c17" }}>&#10003;&nbsp;</span>
                                            <b>Templates</b> that make all aspects of compliance easy</td>
                                    </tr>
                                    <tr>
                                    <td></td>
                                    <td style={{ backgroundColor: "rgba(167, 155, 148, 0.2)" }}><span style={{ color: "#347c17" } }>&#10003;&nbsp;</span>
                                            <b>Employee Training</b> that ensures you&#39;re actually protected from the most common risks</td>
                                    </tr>
                                    <tr>
                                    <td></td>
                                    <td style={{ backgroundColor: "rgba(167, 155, 148, 0.2)" }}><span style={{ color:"#347c17" }}>&#10003;&nbsp;</span>
                                            <b>Follow-Up Testing</b> to make sure your risks have been addressed</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    </div>
                    <div className="jumbotron p-5" style={{ backgroundColor: "rgba(167, 155, 148, 0.2)" }}>
                        <div className="container">
                    <span style={{ fontSize: 30, fontFamily: "Georgia, Arial" }}>Without SpareEye Managed Compliance, you face
                            noncompliance penalties and risks to sensitive data
                        </span>
                    <p className="lead d-flex w-80" style={{ color: "rgb(167, 155, 148)", fontFamily: "Helvetica" }}>SpareEye Managed Compliance covers every aspect of compliance.
                        </p>
                    <ul style={{ fontFamily: "Helvetica" } }>
                            <li>Addressing risks that could lead to a data breach</li>
                            <li>Preventing penalties for non-compliance</li>
                            <li>Completing your WISP in time to renew your PTIN with confidence.</li>
                        </ul>
                    <p className="lead d-flex w-80" style={{ fontSize: 15, color: "rgb(255, 90, 96)", fontFamily: "Georgia, Arial" }}>

                            Get compliance off your head, off your plate, and off your list of worries -
                            Give it over to us.
                        </p>
                        
                    </div>
                </div>
                <div className="jumbotron p-3" style={{ backgroundColor: "rgba(0,73,106, 0.7)" }}>
                    <center style={{ color: "rgb(243, 244, 246)", fontFamily: "Georgia, Arial", fontSize: 20 }}>929-925-4100&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;&nbsp;&nbsp;&nbsp;info@spareeye.com&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;&nbsp;&nbsp;&nbsp;428 Kiryas Sanz Avenue Lakewood, NJ 08701</center>
                </div>
            </>
           
        )
    };
    return (<>
        <div className="col-md-6 offset-md-3 bg-light p-4 rounded shadow">
  <br/>
            <button className="btn btn-outline-danger"  onClick={e => setClick(false)}>&larr;</button>
            {submit && <h3 style={{ textAlign: 'center', color: "rgb(104, 158, 184)" }}>Thank you for your business<br /><br/>A member from our team will be in contact with you shortly</h3>}
            {!submit && <h3 style={{ textAlign: 'center', color: "rgb(104, 158, 184)" }}>Sign up</h3>}
            {!submit && <form id="form" onSubmit={onSubmit}
                method="POST"
                action="https://script.google.com/macros/s/AKfycbxC44yU9CrWGOPI9-zq4Q-zE_uez6o9oAu0Q6rX0xkg2QMVNN7cSkYZFunIDkDSFzPd3g/exec
"
            >
                <input name="Name" type="text" className="form-control" placeholder="Name" required />
                <br/>
                <input name="Email" type="email" className="form-control" placeholder="Email" required />
                <br />
                <input type="checkbox" style={{ width: 20, height: 20 }}  required/><span> I would like to sign up for the 12 month cybersecurity plan</span>
                <br />
                <br />
                <input type="text" className="form-control" placeholder="Message(optional)" name="Message" />
                <br/>
                <button type="submit" className="btn btn-outline-danger w-50 offset-3" id="submit-button">Signup</button>
                    </form>}
        </div>
 
    </>)
};

export default Home;