import React from 'react';
import classes from './TermsAndConditions.module.css';

const TermsAndConditions = () => {
    return (
        <div className="main-content">
            <div className="container">
                <div className={classes.tcTitle}>
                    'Submit Your Movie' Terms and Conditions
                </div>
                <div className={classes.tcSubTitle}>
                    By using this form you will be deemed to have irrevocably agreed to these terms.
                </div>

                <div className={classes.tcLevel1Title}>
                    You represent, warrant and agree that:
                </div>

                <ul className={classes.tcPoints}>
                    <li>You are the owner of all the rights in the content</li>
                    <li>
                        No content submitted by you will: be defamatory, abusive or offensive; infringe the copyright,
                        moral
                        right, performing rights, rights of privacy, trade mark or other proprietary right of any third
                        party; constitute a misuse of any confidential information of a third party- advertise, promote
                        or
                        endorse any products or services which you don’t have the required permission from the
                        respective
                        authorities adversely affect the reputation of Dhaakad Cinema; be false or misleading; omit
                        information that should be disclosed by you; contain software viruses or any other computer
                        code,
                        files or programs designed to affect the functionality of any computer software, hardware or
                        telecommunications equipment
                    </li>
                    <li>
                        <span className={classes.highlightColor}>
                            You will make sure that any necessary consent, waiver, clearance, license or approval required for
                            Dhaakad Cinema to view/watch the content has been obtained.
                        </span>
                    </li>
                    <li>
                        You understand that you are merely submitting your content to DCPL (Dhaakad Cinema Pvt Ltd).
                        Submission does NOT mean automatic approval of acceptance by Dhaakad Cinema. No rights are being
                        transferred from you to DCPL.
                    </li>
                    <li>
                        DCPL will decide if your content is right fit for their platform. You will be informed about the
                        decision. If you are deemed right fit then DCPL and you will enter and negotiate the terms and
                        conditions for licensing/acquisition.
                    </li>
                </ul>

                <div className={classes.tcLevel1Title}>
                    Indemnity
                </div>
                <div className={classes.tcLevel1Text}>
                    You hereby indemnify Dhaakad Cinema against any claims arising out of or in connection to any
                    content, including but not limited to a claim arising out of or in connection to a breach of any of
                    the warranties set out above.
                    <br/>
                    <br/>
                    You hereby release and indemnify Dhaakad Cinema from any and all liability, claims, and demands,
                    causes of action, related to the Materials, including without limitation, claims and demands and
                    causes of action related to unfair competition, copyright infringement, breach of implied contract
                    and breach of confidentiality and for
                    loss or damage to the Materials.
                </div>
            </div>
        </div>
    );
}

export default TermsAndConditions;
