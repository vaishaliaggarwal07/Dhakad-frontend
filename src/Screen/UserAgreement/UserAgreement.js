import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './UserAgreement.module.css';

const UserAgreement = () => {
    return (
        <div className="main-content">
            <div className="container">
                <div className={classes.uaTitle}>User Agreement</div>
                <div className={classes.uaText}>
                    Welcome to DHAAKAD CINEMA app, we provide you TVOD (Transactional Video on Demand) that allows our
                    end users to access entertainment content including movies and series streamed over the internet to
                    certain Devices. Basically you only pay for the content you like.
                    <br/>
                    This User Agreement ("Terms of Use") govern your use of our service.
                    <br/>
                    This document is an electronic record in terms of Information Technology Act, 2000 and rules
                    thereunder pertaining to electronic records in various statutes as amended by the Information
                    Technology Act, 2000.
                    <br/>
                    The website, <NavLink to="/">https://dhaakadcinema.com</NavLink> and its website
                    and Application is owned, operated and maintained by Dhaakad Cinema Pvt Limited ("DCPL").
                    <br/>
                    PLEASE READ THE TERMS CAREFULLY BEFORE USE OF THE DHAAKAD CINEMA SERVICES. THESE TERMS CONSTITUTE A
                    LEGAL AND BINDING AGREEMENT BETWEEN YOU (THE END USER OF DHAAKAD CINEMA) AND DCPL (THE OWNER OF
                    DHAAKAD CINEMA), AND GOVERN YOUR USE OF THE DHAAKAD CINEMA. BY CHECKING/CLICKING ON THE `I AGREE`
                    LINK AND/OR BY DOWNLOADING AND/OR INSTALLING AND/OR BROWSING OR USING DHAAKAD CINEMA, YOU EXPRESSLY
                    ACCEPT THE TERMS. IF YOU DO NOT ACCEPT TO THE TERMS, PLEASE DO NOT BROWSE AND/OR DOWNLOAD AND/OR
                    INSTALL AND/OR USE DHAAKAD CINEMA. You agree and
                    grant permission to Dhaakad Cinema to send WhatsApp
                    notifications to your registered mobile number.
                    {/*<br/>
                    <span className={classes.highlightColor}>In case you wish to opt out of receiving WhatsApp notifications, you may go to 'Edit Profile' inside
                    the Dhaakad Cinema app and untick the 'I want to receive updates and notifications over WhatsApp'
                        checkbox.</span>*/}
                    <br/>
                    For the purpose of these Terms of Use, the terms "You" "Your" or "User" shall mean any person,
                    natural or legal who uses or browses DHAAKAD CINEMA. The term "We", "Us", "Our" shall mean DCPL.
                </div>

                <div className={classes.uaQuestionTitle}>Q. Why Dhaakad Cinema?</div>
                <div className={classes.uaAnswer}><span className={classes.uaAnswerChar}>A.&nbsp;</span> Experience
                    Movie
                    Magic like never before with DCPL – A premium video on demand service where you
                    can watch upcoming must watch movies/webseries on pay-per-view basis.
                </div>

                <div className={classes.uaQuestionTitle}>Q. How to watch content on Dhaakad Cinema?</div>
                <div className={classes.uaAnswer}><span className={classes.uaAnswerChar}>A.&nbsp;</span>DHAAKAD CINEMA
                    consumers can easily discover latest must watch independent movies/webseries. We
                    plan to be online theatre of India and as such we aim to to keep content which audience are willing
                    to pay for.
                    <br/>
                    Upon selecting content from playing now and coming soon, you can watch trailers of those movies and
                    rent the content on landing page.
                    On clicking rent, you will be guided to login or register with DHAAKAD CINEMA. This will be followed
                    by a list of supported payment options where you can complete the transaction and start enjoying the
                    content.
                    <br/>
                    Note that stipulated amount of time will be given to start watching that particular content as this is a pay-per-view
                    service (pack validity). Also, once you’ve started watching, the session will last for limited hours
                    (watch time validity). You can pause and resume the content multiple times only within watch time
                    validity. Furthermore, content will be available for download or offline viewing for the particular
                    time period mentioned above. Recording/transmitting the content in any manner is strictly prohibited
                    and will make you liable for stringent legal action. Watch time validity will be considered as per
                    applicable local time in your country of viewing.
                </div>

                <div className={classes.uaQuestionTitle}>Q. How to buy/rent content?</div>
                <div className={classes.uaAnswer}><span className={classes.uaAnswerChar}>A.&nbsp;</span>
                    Once you have clicked the ‘Rent’ button for the content offered, you will be presented with multiple
                    payment options. The payment options for are UPI, Credit/Debit Card, Net Banking and Wallet. As a
                    pay-per-view service, additional viewing of content will require further purchase. The transaction
                    will be non-refundable, non-transferrable and cannot be carried forward for any reason once the
                    watch time validity ends. Each transaction is unique to individual subscriber and cannot be shared
                    with any other person.
                </div>

                <div className={classes.uaQuestionTitle}>Q. How will I know about the validity left for viewing content
                    after transaction?
                </div>
                <div className={classes.uaAnswer}><span className={classes.uaAnswerChar}>A.&nbsp;</span>
                    A confirmation message (SMS & Email) will be sent to you
                    after a successful transaction. This will inform you about the pack and watch time validity.
                    This information will also be visible on app and web once the transaction is completed.
                    Watch time validity shall be within the local time zone in your country of access.
                </div>

                <div className={classes.uaQuestionTitle}>Q. Can I watch content on multiple devices?</div>
                <div className={classes.uaAnswer}><span className={classes.uaAnswerChar}>A.&nbsp;</span>
                    {/*<span className={classes.highlightColor}>
                        After renting the content, it can be watched across 2 devices however, at any given point, you can
                    watch it on only one single device. You can start viewing, pause and resume on your second device
                    only if you have logged in using the right credentials and your watch time validity has not expired.
                    The start time and end time will remain unchanged for both devices.
                    </span>*/}
                    Yes
                </div>

                <div className={classes.uaQuestionTitle}>Q. Can I purchase/rent movies in advance?</div>
                <div className={classes.uaAnswer}><span className={classes.uaAnswerChar}>A.&nbsp;</span>
                    The rental / transaction for content will be possible only once it has been released and is made
                    available on DHAAKAD CINEMA Platform
                </div>

                <div className={classes.uaQuestionTitle}> Q. Can I cancel my transaction?</div>
                <div className={classes.uaAnswer}><span className={classes.uaAnswerChar}>A.&nbsp;</span>
                    Once you have rented content, the amount cannot be refunded or redeemed against any other benefit.
                </div>


                <div className={classes.uaDefinitionTitle}>DEFINITIONS</div>
                <div className={classes.uaDefinitionText}>
                    Certain words in this TERMS have a specific meaning and are explained below for YOUR easy
                    understanding:
                    <br/>
                    1. `Application` means the DHAAKAD CINEMA application owned by DCPL to provide the Content on
                    Devices, which is available on various platforms such as iOS, android and supported web browsers
                    etc.
                    <br/>
                    2. `Content` means all text, graphics, images, music, software, audio, video, information or any
                    other materials available on DHAAKAD CINEMA.
                    <br/>
                    3. `Devices` means any and all internet enabled devices like smart phones, tablets, laptops,
                    desktops, etc. which are compatible with and have access to the Internet.
                    <br/>
                    4. `DHAAKAD CINEMA` means DHAAKAD CINEMA website, <NavLink to="/">https://dhaakadcinema.com</NavLink>,
                    DHAAKAD CINEMA mobile, and any other future variations or domain, Application and any present
                    and future means and modes to offer Services.
                    <br/>
                    5. `Internet` shall mean the system making use of the TCP/IP software protocols known as the
                    internet or the worldwide web whatever the communications links may be which connects the user
                    (including by way of fixed, mobile, DSL, ISDN, UMTS WiMax or other broadband links) including any
                    developments in such protocols or any other protocols which may be developed which give equivalent,
                    reduced or enhanced functionality compared with such protocols.
                    <br/>
                    6.`Subscription Package` means a combination of one or multiple live tv channels, video on demand,
                    TV shows, movies, music or any other Information or entertainment based Content priced at a specific
                    amount decided by DCPL at its sole discretion.
                    <br/>
                    ELIGIBILITY
                    <br/>
                    Unless otherwise specified, DHAAKAD CINEMA is available for individuals who have attained the age of
                    majority in their jurisdiction. In the case of India, this service is restricted to Users who are
                    aged 18 years or older. If you are under the relevant age of majority in Your jurisdiction, you may
                    only access the Site and the Services only in accordance with applicable law which enables a minor
                    in your jurisdiction to access such a service. In India, by browsing or downloading and/or
                    installing and/or using the DHAAKAD CINEMA, YOU represent and warrant that YOU are 18 years of age
                    or older and in case YOU are less than 18 years of age, YOU have taken consent of YOUR parent or
                    guardian.
                </div>

                <div className={classes.uaDefinitionText}>
                    SOME CONTENT OFFERED ON THE SITE MAY NOT BE SUITABLE FOR SOME VIEWERS AND THEREFORE VIEWER
                    DISCRETION IS ADVISED. ALSO, SOME CONTENT OFFERED ON THE SITE MAY NOT BE APPROPRIATE FOR VIEWERSHIP
                    BY CHILDREN. PARENTS AND/OR LEGAL GUARDIANS ARE ADVISED TO EXERCISE DISCRETION BEFORE ALLOWING THEIR
                    CHILDREN AND/OR WARDS TO ACCESS CONTENT ON THIS WEBSITE. Your access to and use of the Services is
                    subject to these Terms of Use, Privacy Policy and all
                    applicable laws, rules, and regulations.
                    <br/>
                    YOUR RESPONSIBILITIES
                    <br/>
                    YOU will be solely responsible for obtaining and maintaining the Device and Internet connection
                    needed in order to access and use DHAAKAD CINEMA and paying for all such charges in relation
                    thereto. Internet charges will depend on the plan subscribed by you from the internet service
                    provider.
                    <br/>
                    DHAAKAD CINEMA is compatible on selected operating systems and specific versions and Device(s). The
                    download procedure of the Application shall be subject to the process specified by the operating
                    system of YOUR Device(s). YOU need to have a Device connected with Internet for download of DHAAKAD
                    CINEMA to begin and complete. DCPL shall not be responsible in case of any fluctuation in the
                    Internet connection speed leading to corruption of Application file download or any delayed or
                    defective download of the Application on Your Device(s). DCPL shall not be responsible or liable to
                    YOU for interruption, disruption, deactivation of DHAAKAD CINEMA on account of any Force Majeure
                    Event. For the purpose of these Terms of Use, “Force Majeure Event” shall mean any event beyond the
                    reasonable control of DCPL including but not limited to act of God, any act or omission of
                    government or quasi-government agencies or lock out, strike, curfew, technical errors etc. DCPL may,
                    at its sole discretion, make bug fixes, updates for the installed Application. In the event DCPL has
                    upgraded the Application or any features thereof, you will be required to update Your Device in
                    order to make the Device compatible with such upgrades. DCPL shall not be responsible or liable to
                    YOU in the event you are unable to access DHAAKAD CINEMA or view the Content on DHAAKAD CINEMA due
                    to Your failure to upgrade Your Device.
                    The Content contained or available on DHAAKAD CINEMA is protected by copyright, trademark, patent,
                    trade secret and other laws and shall be used as provided in these Terms of Use, without written
                    permission of DCPL.
                </div>

                <div className={classes.uaDefinitionTitle}>REGISTERED USERS</div>
                <div className={classes.uaDefinitionText}>YOU may register YOURSELF as a user of DHAAKAD CINEMA and
                    become a registered user of the DHAAKAD CINEMA platform ("Registered User"). During the
                    registration process, YOU as Registered User are required to create user name (by using YOUR mobile
                    number) and password.
                    <br/>
                    As Registered User, YOU agree to provide accurate, current and complete information during the
                    registration process and to update such information to keep it accurate, current and complete. DCPL
                    reserves the right to suspend or terminate YOUR registration as Registered User without assigning
                    any reason (including for provision of inaccurate, not current or incomplete information during the
                    registration process or thereafter). As Registered User, YOU shall be responsible for safeguarding
                    YOUR password and for all transactions undertaken using YOUR Username and password. YOU agree not to
                    disclose YOUR password to any third party and to take sole responsibility for any activities or
                    actions under YOUR account, whether or not YOU have authorized such activities or actions. It is
                    YOUR sole responsibility to change YOUR password immediately if YOU believe that YOUR password has
                    been compromised. DCPL will not be responsible for any financial loss, inconvenience or mental agony
                    resulting from misuse of YOUR Username and password in any circumstances.
                    <br/>
                    Further, DCPL reserves the right to change packaging and introduce base and add on packages and/or
                    offer channels on a-la-carte basis. YOU acknowledge and agree that the Content provided by DCPL as
                    part of DHAAKAD CINEMA is being supplied by third parties and availability of such Content is
                    outside DCPL’s control and can be removed anytime. Additionally, DCPL shall have the right, but not
                    the obligation, to refrain from providing to YOU any Content in the interest of national security or
                    in the event of emergency / war or similar situation or if the Content is anti-national, promotes
                    political / religious propaganda, is against public policy, is banned or restricted from being
                    distributed under any applicable law or DCPL otherwise determine that it is objectionable or obscene
                    or is derogatory to any person or class of persons, hurts the religious sentiments of any religious
                    group or infringes the privacy rights of any individual(s) or is not in the interest of DCPL’s
                    subscribers or the general public.
                    <br/>
                    In a credit card and/or debit card and/or net banking and/or cash card transaction and/or any other
                    mode available, YOU must use YOUR own credit card and/or debit card and/or net banking account
                    and/or cash card. YOU confirm and acknowledge that YOU are aware of the fact that when making any
                    online payment through credit card or debit card or net banking account or cash card or via any
                    other mode available, YOU may be directed to an external payment gateway page. The payment gateway
                    may redirect YOU to other website(s) maintained or controlled by third parties, and DCPL does not
                    control such third party website(s) and hence are not responsible for any transactions on such
                    website(s). DCPL will not be liable for any credit card or debit card or net banking or cash card
                    fraud, and DCPL will not entertain or address any such grievances or issues. YOU are requested to
                    communicate all grievances related to such issues to YOUR bank or mobile carrier/operator or mobile
                    wallet provider who has issued such credit card or debit card or net banking account or cash card.
                    DCPL shall not be responsible for all or any dispute or difference relating to online payment made
                    by YOU through credit card or debit card or net banking account or cash card or via any other mode
                    available. Further, DCPL will not be responsible for any financial loss, inconvenience or mental
                    agony resulting from misuse of YOUR credit card or debit card or net banking account number or cash
                    card and other details. Payments once made by credit card or debit card or net banking or cash cards
                    or via any other mode available shall not be refunded in any circumstances. You are hereby advised
                    to keep details of your credit/debit card and net banking confidential and do not share any such
                    details with any other third party.
                    <br/>
                    DHAAKAD CINEMA is available in select countries only. DCPL would not be held responsible for
                    hindrances in the access and use of DHAAKAD CINEMA due to geographical change in YOUR location.
                    Further, YOU will be solely liable for accessing and using DHAAKAD CINEMA in the countries of YOUR
                    use.
                    <br/>
                    DHAAKAD CINEMA shall have the discretion to make certain or all Content that is a part of the
                    Subscription available to you on either one or limited number of end user device concurrently.
                </div>

                <div className={classes.uaDefinitionTitle}>OWNERSHIP</div>
                <div className={classes.uaDefinitionText}>The Content on DHAAKAD CINEMA and the "DHAAKAD CINEMA" word
                    mark and the “DHAAKAD CINEMA” design mark, as well as certain other of the names, logos, and
                    materials displayed on or through DHAAKAD CINEMA that constitute trademarks, trade-names, service
                    marks or logos ("Marks") are owned by or licensed to DCPL and are subject to copyright, trademark,
                    and other intellectual property rights under Indian laws. YOU agree not to reproduce, duplicate,
                    copy, download, stream capture, archive, upload, publish, broadcast, sell, resell, modify,
                    translate, decompile, disassemble, reverse engineer or exploit for any purposes the DHAAKAD CINEMA
                    or any portion of the DHAAKAD CINEMA, including, without limitation, the Content and the Marks,
                    except as authorized by these TERMS or as otherwise authorized in writing by DCPL. In addition, YOU
                    are strictly prohibited from creating derivative works, or materials that otherwise are derived from
                    or based on in any way the Content and the Marks, including montages, mash-ups and similar videos,
                    wallpaper, desktop themes, greeting cards, and merchandise, except as authorized by these TERMS or
                    as otherwise authorized in writing by DCPL. You must abide by all copyright notices, information,
                    and restrictions contained in or associated with any Content. You must not remove, alter, interfere
                    with, or circumvent any copyright, trademark, or other proprietary notices marked on the Content or
                    any digital rights management mechanism, device or other content protection or access control
                    measure (including, without limitation, geo-filtering and/or encryption) associated with the
                    Content.
                    You hereby agree that all intellectual property rights, title and interest in the user generated
                    content published or generated on DHAAKAD CINEMA by you shall vest with DCPL.
                    RESTRICTIONS
                </div>

                <div className={classes.uaDefinitionTitle}>RESTRICTIONS</div>
                <div className={classes.uaDefinitionText}>
                    <span className={classes.uaDefinitionPointChar}>A.&nbsp;</span>
                    It is hereby clarified that DHAAKAD CINEMA is provided for
                    YOUR personal, non-commercial use only. You agree not to, either directly or through the use of any
                    device, software, web-based service, or by other means, copy, download, archive, perform, display,
                    upload, publish, transmit or retransmit the Content or create any work or material that is derived
                    from or based on the Content, rent, lease, duplicate, sublicense, assign, pledge, loan, or resell
                    the Content of DHAAKAD CINEMA. YOU shall not translate, reverse engineer, decompile and disassemble
                    DHAAKAD CINEMA. YOU shall only use the DHAAKAD CINEMA on Device that is under YOUR exclusive control
                    and ownership. YOU shall not permit any third party to benefit from the use or functionality of
                    DHAAKAD CINEMA, either directly or via any facility management, timesharing, service bureau or any
                    other arrangement. If YOU transfer possession of any copy of DHAAKAD CINEMA to another party, YOUR
                    subscription of DHAAKAD CINEMA shall automatically get terminated. All rights not expressly set
                    forth hereunder are reserved exclusively by DCPL.
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>B.&nbsp;</span>
                    You are prohibited from using technology or other means to access, index, frame, or link DHAAKAD
                    CINEMA, in whole or in part that is not authorized by DCPL;
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>C.&nbsp;</span>
                    You hereby agree not to use DHAAKAD CINEMA for promoting services of competitors of DCPL;
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>D.&nbsp;</span>
                    You hereby expressly agree to use DHAAKAD CINEMA in strict compliance with applicable laws;
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>E.&nbsp;</span>
                    You agree, undertake and confirm that your use of DHAAKAD CINEMA shall be strictly governed by
                    the following binding principles:
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>F.&nbsp;</span>
                    You shall not host, display, upload, modify, publish, transmit, update or share any information
                    that:
                    <br/>
                    <ul className={classes.uaDefinitionSubPoint}>
                        <li>
                            belongs to another person and to which you do not have any right to; or interferes with another
                            user`s use and enjoyment of DHAAKAD CINEMA
                        </li>
                        <li>that is harmful, harassing, blasphemous, defamatory, obscene, pornographic, libellous, invasive
                            of another`s privacy, hateful, or ethnically objectionable, disparaging, relating or encouraging
                            money laundering or gambling, or otherwise unlawful in any manner whatever, or unlawfully
                            threatening or unlawfully harassing including but not limited to "indecent representation of women"
                            within the meaning of the Indecent Representation of Women (Prohibition) Act, 1986, of another
                            person;</li>
                        <li>misleading in any way; or</li>
                        <li>is patently offensive to the online community, such as content that promotes paedophilia, racism,
                            bigotry, or physical harm of any kind against any group or individual;</li>
                        <li>involves the transmission of "junk mail," "chain letters," or unsolicited mass mailing or
                            "spamming"</li>
                        <li>infringes upon intellectual property rights of third party or violates rights of privacy
                            (including without limitation unauthorized disclosure of a person`s name, email address, physical
                            address or phone number) or rights of publicity</li>
                        <li>Contains restricted or password-only access pages, or hidden pages or images</li>
                        <li>Provides material that exploits people in a violent or otherwise inappropriate manner or
                            solicits personal information from anyone</li>
                        <li>Provides instructional information about illegal activities such as making or buying illegal
                            weapons or providing or creating computer viruses</li>
                        <li>Contains video, photographs, or images of another person without his or her express written
                            consent and permission or the permission or the consent of his her guardian in the case of minor</li>
                        <li>Engages in commercial activities and/or sales without Our prior written consent such as
                            contests, sweepstakes, barter, advertising etc. Throughout these Terms of Use, Our "prior written
                            consent" means a communication coming from Our authorized representative, specifically in response
                            to Your request, and specifically addressing the activity or conduct for which you seek
                            authorization</li>
                        <li>Harm minors in any way</li>
                        <li>Violates any law for the time being in force</li>
                        <li>Threatens the unity, integrity, defense, security or sovereignty of India, friendly relations
                            with foreign states, or public order or causes incitement to the commission of any cognizable
                            offence or prevents investigation of any offence or is insulting to any other nation</li>
                        <li>contains software virus, or any other computer code, file or program designed to
                            interrupt, destroy or limit the functionality of any computer resource;</li>
                        <li>is patently false and untrue, and is written or published in any form, with the intent to
                            mislead or harass a person, entity or agency for financial gain or to cause any injury to any
                            person;</li>
                    </ul>
                    <span className={classes.uaDefinitionPointChar}>G.&nbsp;</span>
                    You shall not use any "deep-link", "page-scrape", "robot", "spider" or other automatic device,
                    program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire,
                    copy or monitor any portion of DHAAKAD CINEMA or any Content, or in any way reproduce or circumvent
                    the navigational structure or presentation of DHAAKAD CINEMA or any Content, to obtain or attempt to
                    obtain any materials, documents or information through any means not purposely made available
                    through DHAAKAD CINEMA. We reserve the right to bar any such activity.
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>H.&nbsp;</span>
                    You shall not probe, scan or test the vulnerability of DHAAKAD CINEMA website or any network
                    connected to DHAAKAD CINEMA nor breach the security or authentication measures on DHAAKAD CINEMA or
                    any network connected to DHAAKAD CINEMA. You may not reverse look-up, trace or seek to trace any
                    information on any other user of or visitor to DHAAKAD CINEMA to its source.
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>I.&nbsp;</span>
                    You agree that you will not take any action that imposes an unreasonable or disproportionately
                    large load on the infrastructure of DHAAKAD CINEMA or any systems or networks connected to DHAAKAD
                    CINEMA.
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>J.&nbsp;</span>
                    You may not forge headers or otherwise manipulate identifiers in order to disguise the origin of
                    any message or transmittal you send to Us on or through DHAAKAD CINEMA or any service offered on or
                    through DHAAKAD CINEMA. You may not pretend that you are, or that you represent, someone else, or
                    impersonate any other individual or entity.
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>K.&nbsp;</span>
                    You shall not engage in advertising to, or solicitation of, other users of DHAAKAD CINEMA to buy
                    or sell any products or services, including, but not limited to, services being displayed on or
                    related to DHAAKAD CINEMA.
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>L.&nbsp;</span>
                    Your correspondence or business dealings with, or participation in promotions of, third party
                    advertisers found on or through DHAAKAD CINEMA, including payment and delivery of goods or services,
                    and any other terms, conditions, warranties or representations associated with such dealings, are
                    solely between you and such third party advertiser. We shall not be responsible or liable for any
                    loss or damage of any sort incurred as the result of any such dealings or as the result of the
                    presence of such third party advertisers on DHAAKAD CINEMA. YOU acknowledge and agree that DCPL is
                    not responsible or liable for: (i) the availability or accuracy of such websites or resources or
                    (ii) the content, products, or services on or available from such websites or resources. Links to
                    such websites or resources do not imply any endorsement by DCPL of such websites or resources or the
                    content, products, or services available from such websites or resources. YOU acknowledge sole
                    responsibility for and assume all risks arising from YOUR use of any such websites or resources.
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>M.&nbsp;</span>
                    It is possible that other users (including unauthorized users or "hackers") may post or transmit
                    offensive or obscene materials on DHAAKAD CINEMA and that you may be involuntarily exposed to such
                    offensive and obscene materials. It also is possible for others to obtain personal information about
                    You on the public forum due to your use of DHAAKAD CINEMA, and that the recipient may use such
                    information to harass or injure you. We do not approve of such unauthorized uses but by
                    browsing/using DHAAKAD CINEMA, You acknowledge and agree that We shall not responsible for the use
                    of any personal information that you publicly disclose or share with others on DHAAKAD CINEMA.
                    Please carefully select the type of information that you publicly disclose or share with others on
                    DHAAKAD CINEMA.
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>N.&nbsp;</span>
                    You give DHAAKAD CINEMA express rights and consent to display your comment in relation to the
                    relevant Content on the DHAAKAD CINEMA Application/website, including making it available to other
                    members for viewing.
                    <br/>
                    <span className={classes.uaDefinitionPointChar}>O.&nbsp;</span>
                    DHAAKAD CINEMA reserves the right to remove your comment in relation to the relevant Content on
                    DHAAKAD CINEMA application at its sole discretion and/or upon on request of any third party, that
                    such comment may create liability for DHAAKAD CINEMA or harm the reputation and /or goodwill of
                    DHAAKAD CINEMA in any nature.
                </div>

                <div className={classes.uaDefinitionTitle}>TERMINATION</div>
                <div className={classes.uaDefinitionText}>YOUR (User, Registered User or Subscription User) right to use
                    DHAAKAD CINEMA shall automatically terminate if YOU violate these Terms of Use or any terms, rules
                    or guidelines published in connection with DHAAKAD CINEMA. DCPL reserves the right, in its sole
                    discretion, to suspend or terminate YOUR access to all or any part of DHAAKAD CINEMA, for any
                    reason, with or without notice.
                    You may discontinue your participation in and access to DHAAKAD CINEMA at any time. YOU agreed that
                    upon suspension or termination, no amount shall be refunded to YOU by DCPL.
                </div>

                <div className={classes.uaDefinitionTitle}>FEEDBACK</div>
                <div className={classes.uaDefinitionText}>DCPL welcomes and encourages YOU to provide feedback, comments
                    and suggestions for improvements to DHAAKAD CINEMA ("Feedback"). YOU may submit Feedback by emailing
                    us at <span className={classes.highlightColor}>support.in@Dhaakad Cinema.com</span>. YOU acknowledge
                    and agree that all Feedback will be the sole
                    and exclusive property of DCPL and YOU hereby irrevocably assign to DCPL all of YOUR right, title,
                    and interest in and to all Feedback, including without limitation all worldwide patent rights,
                    copyright rights, trade secret rights, and other proprietary or intellectual property rights
                    therein. At DCPL`s request and expense, YOU will execute documents and take such further acts as
                    DCPL may reasonably request to assist DCPL to acquire, perfect, and maintain its intellectual
                    property rights and other legal protections for the Feedback. You further acknowledge and agree that
                    DCPL shall not be under an obligation to take any action pursuant to the Feedback provided by you.
                    DCPL may, at its sole discretion, decide whether any action is required to be taken based on the
                    Feedback received from you. You hereby expressly agree to indemnify and keep DCPL harmless against
                    any liabilities that may suffered or incurred by DCPL as a consequence of any action taken by DCPL
                    pursuant to Your Feedback.
                </div>

                <div className={classes.uaDefinitionTitle}>WARRANTY DISCLAIMER</div>
                <div className={classes.uaDefinitionText}>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW OF INDIA,
                    DHAAKAD CINEMA IS PROVIDED ON AN "AS IS" BASIS WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
                    WITHOUT LIMITING THE FOREGOING PROVISIONS, YOU ASSUME SOLE RISK AND RESPONSIBILITY FOR SELECTING
                    DHAAKAD CINEMA TO ACHIEVE YOUR INTENDED RESULTS, AND SOLE RESPONSIBILITY FOR THE INSTALLATION OF,
                    USE OF, AND RESULTS OBTAINED FROM DHAAKAD CINEMA. WITHOUT LIMITING THE FOREGOING PROVISIONS, DCPL
                    MAKES NO WARRANTY THAT DHAAKAD CINEMA WILL BE ERROR-FREE, VIRUS FREE, OR FREE FROM INTERRUPTIONS OR
                    OTHER FAILURES OR THAT THE DHAAKAD CINEMA WILL SATISFY YOUR SPECIFIC REQUIREMENTS OR THAT THE ERRORS
                    WILL BE RECTIFIED. YOU UNDERSTAND THAT DHAAKAD CINEMA CAN BE BLOCKED OR MADE INOPERABLE AND DCPL
                    ASSUMES NO RESPONSIBILITY OR LIABILITY FOR THE SAME. DHAAKAD CINEMA IS NOT FAULT-TOLERANT AND IS NOT
                    DESIGNED OR INTENDED FOR USE IN HAZARDOUS ENVIRONMENTS REQUIRING FAIL-SAFE PERFORMANCE, INCLUDING
                    WITHOUT LIMITATION, IN THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT NAVIGATION OR COMMUNICATION
                    SYSTEMS, AIR TRAFFIC CONTROL, WEAPONS SYSTEMS, DIRECT LIFE-SUPPORT MACHINES, OR ANY OTHER
                    APPLICATION IN WHICH THE FAILURE OF DHAAKAD CINEMA NETWORK COULD LEAD DIRECTLY TO DEATH, PERSONAL
                    INJURY, OR SEVERE PHYSICAL OR PROPERTY DAMAGE (COLLECTIVELY, "HIGH RISK ACTIVITIES"). DCPL EXPRESSLY
                    DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTY OF FITNESS FOR HIGH RISK ACTIVITIES.
                </div>

                <div className={classes.uaDefinitionTitle}>INDEMNIFICATION</div>
                <div className={classes.uaDefinitionText}>YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS DCPL, ITS
                    SUBSIDIARIES, AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, CONSULTANTS AND AGENTS (“INDEMNIFIED
                    PARTIES”) FROM AND AGAINST ANY AND ALL CLAIMS, LIABILITIES, DAMAGES, LOSSES, COSTS, EXPENSES, FEES
                    (INCLUDING REASONABLE ATTORNEYS` FEES AND COSTS) THAT SUCH INDEMNIFIED PARTIES MAY INCUR AS A RESULT
                    OF OR ARISING FROM (A) ANY INFORMATION (INCLUDING, WITHOUT LIMITATION, YOUR USER GENERATED CONTENT,
                    FEEDBACK, OR ANY OTHER CONTENT) YOU (OR ANYONE USING YOUR ACCOUNT) SUBMIT, POST, OR TRANSMIT ON OR
                    THROUGH DHAAKAD CINEMA (B) YOUR (OR ANYONE USING YOUR ACCOUNT`S) USE OF THE DHAAKAD CINEMA (C) YOUR
                    (OR ANYONE USING YOUR ACCOUNT`S) VIOLATION OF THESE TERMS OR (D) YOUR (OR ANYONE USING YOUR
                    ACCOUNT`S) VIOLATION OF ANY RIGHTS OF ANY OTHER PERSON OR ENTITY, INCLUDING, WITHOUT LIMITATION, ANY
                    COPYRIGHT, PATENT, TRADEMARK, TRADE SECRET OR OTHER PROPRIETARY RIGHTS OF ANY PERSON OR ENTITY. DCPL
                    RESERVES THE RIGHT, AT ITS OWN EXPENSE, TO ASSUME THE EXCLUSIVE DEFENSE AND CONTROL OF ANY MATTER
                    OTHERWISE SUBJECT TO INDEMNIFICATION BY YOU, IN WHICH EVENT YOU WILL COOPERATE WITH DCPL IN
                    ASSERTING ANY AVAILABLE DEFENSES.
                </div>

                <div className={classes.uaDefinitionTitle}>LIMITATION OF LIABILITY</div>
                <div className={classes.uaDefinitionText}>UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY, WHETHER IN
                    TORT, CONTRACT, OR OTHERWISE, SHALL DCPL BE LIABLE TO YOU OR TO ANY OTHER PERSON OR ENTITY FOR ANY
                    INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, REMOTE OR CONSEQUENTIAL DAMAGES OR ANY OTHER DAMAGES
                    WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF GOODWILL, LOSS OF
                    CONFIDENTIAL OR OTHER INFORMATION, BUSINESS INTERRUPTION, WORK STOPPAGE, COMPUTER FAILURE OR
                    MALFUNCTION, PERSONAL INJURY, LOSS OF PRIVACY, FAILURE TO MEET ANY DUTY INCLUDING A DUTY OF GOOD
                    FAITH OR OF REASONABLE CARE, NEGLIGENCE (WHETHER ACTIVE OR PASSIVE), AND ANY OTHER PECUNIARY OR
                    OTHER LOSS WHATSOEVER) ARISING OUT OF OR IN ANY WAY RELATED TO THE USE OR INABILITY TO USE DHAAKAD
                    CINEMA, LOSS OF DATA OR OTHERWISE UNDER OR IN CONNECTION WITH ANY PROVISION OF THESE TERMS, EVEN IN
                    THE EVENT OF FAULT, TORT (INCLUDING NEGLIGENCE, AND GROSS NEGLIGENCE), STRICT LIABILITY, BREACH OF
                    CONTRACT, OR BREACH OF WARRANTY BY DCPL, AND EVEN IF DCPL HAS BEEN ADVISED OF THE POSSIBILITY OF
                    SUCH DAMAGES. IN NO EVENT WILL DCPL BE LIABLE FOR ANY DAMAGES IN EXCESS OF YOUR LAST RECHARGE AMOUNT
                    FOR DHAAKAD CINEMA. THIS LIMITATION OF LIABILITY SHALL NOT APPLY TO LIABILITY FOR DEATH OR PERSONAL
                    INJURY TO THE EXTENT THAT APPLICABLE LAW PROHIBITS SUCH LIMITATION. THE FOREGOING PROVISIONS SHALL
                    BE ENFORCEABLE TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
                </div>

                <div className={classes.uaDefinitionTitle}>INTERNATIONAL USE</div>
                <div className={classes.uaDefinitionText}>DCPL is a company based in India. DCPL’s goal is to bring to
                    YOU as much Content as is legally available. That said, DCPL is limited by the rights that DCPL’s
                    content licensors grant to DCPL. Using technologies to access the Content from territories where
                    DCPL does not have rights or does not offer services is prohibited. By browsing or using DHAAKAD
                    CINEMA, YOU hereby acknowledge that DCPL is not responsible or liable in any manner to comply with
                    any local laws of YOUR territory except India with respect to DHAAKAD CINEMA. Further, YOU hereby
                    agree that by usage of DHAAKAD CINEMA, YOU undertake the responsibility and liability with respect
                    to viewing the Content of DHAAKAD CINEMA in YOUR territory.
                </div>

                <div className={classes.uaDefinitionTitle}>PRIVACY POLICY</div>
                <div className={classes.uaDefinitionText}>All information provided by you or collected by us shall be
                    governed in accordance with the Privacy Policy located at <NavLink
                        to="/privacy-policy">www.dhaakadcinema.com/privacy-policy</NavLink>
                </div>

                <div className={classes.uaDefinitionTitle}>RELATIONSHIP</div>
                <div className={classes.uaDefinitionText}>The relationship between DCPL and you is on a
                    principal-to-principal basis. You are in no way DCPL’s legal representative, partner or agent for
                    any reason whatsoever.
                </div>

                <div className={classes.uaDefinitionTitle}>EXPORT LAWS</div>
                <div className={classes.uaDefinitionText}>YOU agree to comply fully with all Indian export laws and
                    regulations to ensure that DHAAKAD CINEMA are not exported or re-exported directly or indirectly in
                    violation of, or used for any purposes prohibited by, such laws and regulations.
                </div>

                <div className={classes.uaDefinitionTitle}>CONFIDENTIALITY</div>
                <div className={classes.uaDefinitionText}>YOU agree that DHAAKAD CINEMA, including, but not limited to,
                    the object code components, provided to YOU is "Confidential Information" of DCPL. YOU shall retain
                    all Confidential Information in strict confidence at least with the same amount of diligence that
                    YOU exercise in preserving the secrecy of YOUR most-valuable information, but in no event less than
                    reasonable diligence.
                </div>

                <div className={classes.uaDefinitionTitle}>ASSIGNMENT</div>
                <div className={classes.uaDefinitionText}>These TERMS are personal to YOU and YOU shall not assign,
                    transfer, sub-contract or otherwise part with these TERMS or any right or obligation under it
                    without DCPL`s prior written consent. Any attempt by YOU to assign or transfer these TERMS, without
                    such written consent, will be null and of no effect. DCPL may assign or transfer these TERMS to any
                    third party, at its sole discretion, without restriction. Subject to the foregoing, these TERMS will
                    bind and inure to the benefit of the parties, their successors, personal representatives and
                    permitted assigns.
                </div>

                <div className={classes.uaDefinitionTitle}>SEVERABILITY</div>
                <div className={classes.uaDefinitionText}>If any provision of these TERMS is held to be unenforceable,
                    the enforceability of the remaining provisions shall in no way be affected or impaired thereby.
                </div>

                <div className={classes.uaDefinitionTitle}>WAIVER</div>
                <div className={classes.uaDefinitionText}>The failure of DCPL to enforce or to exercise at any time or
                    for any period any term of or any right pursuant to these Terms of Use shall not be construed as a
                    waiver of any such right and shall in no way affect DCPL’s right later to enforce or exercise it.
                </div>

                <div className={classes.uaDefinitionTitle}>ELECTRONIC COMMUNICATION</div>
                <div className={classes.uaDefinitionText}>When you use or send any data, information or communication to
                    DCPL, you agree and understand that you are communicating with DCPL through electronic records and
                    you consent to receive communications via electronic records from DCPL periodically and as and when
                    required. DCPL will communicate with you by email or any push or other message or electronic records
                    on the email address and or mobile number available with DCPL which will be deemed adequate service
                    of notice / electronic record.
                </div>

                <div className={classes.uaDefinitionTitle}>NOTICE</div>
                <div className={classes.uaDefinitionText}>Any notices or other communications required will be in
                    writing and emailed to DCPL
                    at <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=support@dhaakadcinema.com" target="_blank">support@dhaakadcinema.com</a>. For notices made by
                    e-mail, the date of receipt will be deemed the date on which such notice is transmitted. In the
                    event you have any complaints with respect to any Content on DHAAKAD CINEMA, please write to us
                    at <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=support@dhaakadcinema.com" target="_blank">support@dhaakadcinema.com</a>. with details of the
                    objectionable content and Your details including Your name and mobile number and such other details
                    as may be requested by Us. Based on the complaint raised, we will take reasonable measures to
                    resolve the issue. You hereby expressly agree that DCPL shall under no circumstance shall be liable
                    to you for any damages whatsoever. Further, you hereby expressly agree that DCPL makes no
                    representations under these Terms of Use that any complaint raised by you will be resolved to Your
                    satisfaction. All steps to be taken by DCPL in this regard shall be at the sole discretion of DCPL.
                    If you have any claims with respect to the ownership of Content transmitted through DHAAKAD CINEMA,
                    please lodge a complaint in the prescribed format at <NavLink
                        to="/privacy-policy">www.dhaakadcinema.com/privacy-policy</NavLink>.
                </div>

                <div className={classes.uaDefinitionTitle}>LAW DISPUTES</div>
                <div className={classes.uaDefinitionText}>These TERMS and all matters arising from it are governed by
                    and construed in accordance with the laws of India and courts of Gurgaon, India shall have exclusive
                    jurisdiction over all disputes arising in connection with these TERMS.
                </div>

                <div className={classes.uaDefinitionTitle}>ENTIRE AGREEMENT AND AMENDMENT</div>
                <div className={classes.uaDefinitionText}>These TERMS expressly supersedes and completely replaces any
                    and all prior ‘Terms of Use’. DCPL shall not be bound by or liable to YOU for any pre-existing or
                    contemporaneous written or oral representations or warranties, made by anyone, with respect to
                    DHAAKAD CINEMA, including any authorized agents, employees, or representatives. DCPL reserves the
                    right, at its sole discretion, to modify the TERMS from time to time (“Updated Terms of Use”). The
                    Updated Terms of Use shall be effective immediately and shall supersede these Terms of Use. DCPL
                    shall not be under an obligation to notify you of any changes to the Terms of Use. YOU shall be
                    solely responsible for reviewing the Terms of Use from time to time for any modifications. By
                    continuing to use DHAAKAD CINEMA after the Updated Terms of Use have been published, YOU affirm YOUR
                    agreement to the Updated Terms of Use. CONTACT you have any questions about these Terms of Use,
                    please contact DCPL at <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=support@dhaakadcinema.com" target="_blank">support@dhaakadcinema.com</a>.
                </div>

            </div>
        </div>
    );
}

export default UserAgreement;
