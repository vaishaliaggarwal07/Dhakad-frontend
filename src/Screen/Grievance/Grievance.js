import React from 'react';
import classes from './Grievance.module.css';

const Grievance = () => {
    return (
        <div className="main-content">
            <div className="container">
                <div className={classes.gTitle}>Content Grievance</div>
                <div className={classes.gText}>
                    If you wish to register any complaint in respect of any content available on Dhaakad Cineam, kindly
                    register the complaint with our grievance officer Mr. Ankit Yadav
                    on <span className={classes.highlightColor}>ankityadav@dhaakadcinema.com</span>,
                    by providing the below mandatory information, in order to take cognizance of the complaint.
                    <br/>
                    <br/>
                    1. Full Name
                    <br/>
                    2. Email ID
                    <br/>
                    3. Content title, relevant episode/ portion (time code)
                    <br/>
                    4. Details of the Universal Recourse Locator (URL) of the content presently available on Dhaakad
                    Cinema
                    <br/>
                    5. Concise details of the complaint
                    <br/>
                    <br/>
                    Please note that in absence of the complaint not filed in the aforesaid format and/or incomplete
                    and/or misleading and vague in nature, the complaint will be considered as “invalid complaint”.
                </div>

                <div className={classes.gTitle}>GRIEVANCE REDRESSAL PROCESS</div>
                <div className={classes.gText}>
                    1. All complaints received having the aforesaid information will be
                    acknowledged within 24 (twenty-four) hours.<br/>
                    2. The complaint will be reviewed, verified, and addressed at the earliest, however no later than 15
                    (fifteen) days upon receipt of the complaint.
                </div>

                <div className="flex flex-row w-100 justify-content-center mt-5">
                    <div className={classes.gTableContainer}>
                        <table className={classes.gTable}>
                            <tr>
                                <th colSpan="3" className={classes.contentHeaderStyle}>CONTENT CLASSIFICATION</th>
                            </tr>
                            <tr className={classes.mainHeaderStyle}>
                                <th className={classes.slWidth}>Sl. No.</th>
                                <th className={classes.classificationWidth}>Classifications</th>
                                <th className={classes.descriptionWidth}>Description</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>U</td>
                                <td>Suitable for all.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>U/ A 7+</td>
                                <td>
                                    Suitable for user aged 7 years and above and can be viewed by user below
                                    the age of 7 years under parental guidance. The content may be slightly mature and
                                    parental discretion is suggested.
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>U/ A 13+</td>
                                <td>
                                    Suitable for user aged 13 years and above and can be viewed by
                                    user below the age of 13 years under parental guidance. The content may be more
                                    mature and realistic. The language, expression
                                    and depictions may be more mature.
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>U/ A 16+</td>
                                <td>
                                    Suitable for user aged 16 years and above and can be viewed by user below
                                    the age of 16 years under parental guidance. The violence can include more graphic
                                    acts, including self-harm and acts of sexual violence. Sexual content and depictions of nudity may be more adult
                                    as well, but not excessively graphic. Use of crude language and drug use.
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>A</td>
                                <td>
                                    Restricted to adults (18 years and above). This content is suitable for adult viewing.
                                    The themes, depictions and level of content is mature. Graphic nature of any depictions may be much more extreme than any other rating category.
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grievance;
