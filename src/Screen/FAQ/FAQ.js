import React from 'react';
import classes from './FAQ.module.css';
import {NavLink} from "react-router-dom";

const FAQ = () => {
    return (
        <div className="main-content">
            <div className="container">
                <div className={classes.faqTitle}>Registering with Dhaakad Cinema</div>
                <div className="flex flex-row justify-content-center mt-4">
                    <div className={classes.faqSubText}>Signing up with DHAAKAD CINEMA is easy. You can sign up with
                        DHAAKAD
                        CINEMA with your mobile number or email ID. You need to log in to rent and watch a movie/web
                        series.
                    </div>
                </div>
                <div className={classes.faqMainText}>
                    <NavLink to="/register">Click here</NavLink> to register.
                    <br/>
                    <br/>
                    If you're signing up for DHAAKAD CINEMA using your mobile number or email ID,
                    you will be required to provide your first & last name, set a password, share your Date of Birth,
                    Gender and agree to our terms of use & privacy policy. Mobile registrations will have an additional
                    step of verifying OTP.
                    <br/>
                    <br/>
                    <span className={classes.faqMainTextBold}>Benefits of registering</span>
                    <br/>
                    There's plenty of benefits to avail by registering with us. Such as:
                    <br/>
                    <br/>
                    1. Watch a video from where you left, and switch easily across devices too!
                    <br/>
                    2. Download videos for viewing later.
                    <br/>
                    3. Save videos to your watchlist and favorite them too.
                    <br/>
                    4. Set reminders for your favorite shows.
                    <br/>
                    5. Receive personalized recommendations and communication basis your watch history
                    <br/>
                    If you're facing difficulties when trying to register with us, please
                    contact <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=support@dhaakadcinema.com" target="_blank">support@dhaakadcinema.com</a>
                </div>

                <div className={classes.faqLevel1Title}>
                    Renting movies/web series on Dhaakad Cinema
                    <br/>
                    (currently only Full HD and No 4k streaming)
                </div>

                <div className={classes.faqPoints}>
                    1. RENTAL VALIDITY: You have a specific number of days to start playing the movie once rented. This
                    may differ for each movie.
                    <br/>
                    2. WATCH TIME VALIDITY: You have a specific number of hours to finish watching the movie after you
                    start playing. This may differ for each movie.
                    <br/>
                    3. Once the movie/web series rental or watch time validity has expired, you will need to rent the
                    movie/webseries to watch it again.
                </div>

                <div className={classes.faqQuestion}>
                    1. Where can I find the recent movie I’ve rented?
                </div>
                <div className={classes.faqAnswer}>Please login with your credentials and go to your profile
                    click on <NavLink to="/rented-movies">rented movies</NavLink>
                </div>

                <div className={classes.faqQuestion}>
                    2. How can I check the time remaining to stream my movie?
                </div>
                <div className={classes.faqAnswer}>Yet to be implemented</div>

                <div className={classes.faqQuestion}>
                    3. Where are my online downloaded videos?
                </div>
                <div className={classes.faqAnswer}>Yet to be implemented</div>
                {/*<div className={classes.faqAnswer}>You will be able to see the online downloaded videos by tapping on
                    the download icon available on the top right corner of the screen. Alternatively, you can access it
                    via the navigation menu> select “My downloads” available beneath your profile.
                </div>*/}

                <div className={classes.faqQuestion}>
                    4. Why does the app consumes so much data while watching online?
                </div>
                <div className={classes.faqAnswer}>Yet to be implemented</div>
                {/*<div className={classes.faqAnswer}>To reduce data usage while watching content, kindly tap on the
                    Navigation menu available on the app > Click on settings> and Enable the Data Saver option.
                </div>*/}

                <div className={classes.faqQuestion}>
                    5. Can't install app due to insufficient space.
                </div>
                <div className={classes.faqAnswer}>
                    <ul className={classes.faqAnswerList}>
                        <li>Dhaakad Cinema requires up to 20MB of INTERNAL storage space, Android
                            will not install any app on SD card regardless of it having enough storage. You can move it
                            to SD
                            card later but this will be installed on INTERNAL space first.
                        </li>
                        <li>
                            Free internal storage space capacity can be found on Home > Settings > Apps > space gauge at
                            the
                            bottom. You can remove some other apps to increase free internal storage space if necessary.
                        </li>
                    </ul>
                </div>

                <div className={classes.faqQuestion}>
                    6. I am facing video playback issues. What do I do?
                </div>
                <div className={classes.faqAnswer}>
                    <ul className={classes.faqAnswerList}>
                        <li>Step 1: First, let’s make sure you are connected to the internet. If not, please check your
                            internet
                            connection.
                        </li>
                        <li>Step 2: If the app shows an error, then send it to us. We will get back to you asap!</li>
                        <li>
                            Step 3: If it still doesn’t work then please share the following details to –
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=support@dhaakadcinema.com" target="_blank">support@dhaakadcinema.com</a>
                            {/*<span className={classes.highlightColor}>support@dhaakadcinema.com</span>*/}
                            <ul>
                                <li>your device information</li>
                                <li>your internet service provider</li>
                                <li>Detail of the video you were watching</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={classes.faqQuestion}>
                    6. Settings are not remembered. / Last played video or finished videos are not displayed in
                    different colour. / The "What's New" message appears whenever launching the player.
                </div>
                <div className={classes.faqAnswer}>
                    <ul className={classes.faqAnswerList}>
                        <li> This can happen when Player can't write to internal data file. Please clear app data and
                            try again.
                        </li>
                        <li>App data can be cleared in Home > Menu > Settings > Apps > Dhaakad Cinema > Clear data.</li>
                    </ul>
                </div>

                <div className={classes.faqQuestion}>
                    7. There is a bug in the app. Where should I tell?
                </div>
                <div className={classes.faqAnswer}>
                    <ul className={classes.faqAnswerList}>
                        <li> Please upload your bug report to <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=support@dhaakadcinema.com" target="_blank">support@dhaakadcinema.com</a>
                        </li>
                        <li>System log is needed when the bug crashes your player.</li>
                        <li>If you know that specific video file or subtitle file cause a problem, please send us
                            that file or URL where we can download that file. We will do our best to take care of the
                            issue.
                        </li>
                    </ul>
                </div>

                <div className={classes.faqQuestion}>
                    8. I did a factory reset on my phone and it's now wanting me to pay for movie again but I already did.
                </div>
                <div className={classes.faqAnswer}>

                    <ul className={classes.faqAnswerList}>
                        <li> License is per account and is validated through Google Play Services in case of Google Play
                            purchases. In case you logged in with the correct account but still getting prompts to pay
                            again, it's likely that Google Play Service Framework on your device is out of sync. Since
                            this is an issue with Google Play Store, we have limited scope for improvement. However, we
                            recommend trying the following and it may help fix the problem.
                        </li>
                        <li>Remove your Google account from the device.</li>
                        <li>Clear the app data of Google Play Store and Google Play Services.</li>
                        <li>Restart the device</li>
                        <li>Add the account again</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default FAQ;
