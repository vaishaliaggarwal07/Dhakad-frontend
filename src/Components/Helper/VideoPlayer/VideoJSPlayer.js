import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "./VideoJSPlayer.css"; // styles
import "video.js/dist/video-js.css"; // videoJs Default Styles
import "videojs-hls-quality-selector"; // videojs Quality Selector **
import "videojs-contrib-quality-levels"; // videoJs Quality levels **

const VideoJsPlayer = (props) => {
    const { source, handleActionNext } = props;
    const [videoSource, setVideoSource] = useState(source);
    const [isClicked, setIsClicked] = useState(false);
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const { options, onReady, teaserStartTime, teaserDuration } = props;
    const timeIntervalUpdates = 120;  // 1 min =  4 * 60 where 4 is VideoJS time calling in one sec
    let counter = 0;

    useEffect(() => {
        setVideoSource(source);
    }, [source]);

    React.useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = (playerRef.current = videojs(videoElement, options, () => {
                onReady && onReady(player);
            }));

            // handle the quality Levels of Video
            player.qualityLevels();
            player.hlsQualitySelector({
                displayCurrentQuality: true
            });

            //  get The Button Component of VideoJs
            var Button = videojs.getComponent("Button");

            //  implement the Rewind Button
            var rewind = videojs.extend(Button, {
                constructor: function () {
                    Button.apply(this, arguments);
                    this.addClass("rewindIcon");
                    /* initialize your button */
                },
                handleClick: function () {
                    player.currentTime(player.currentTime() - 10);
                }
            });
            videojs.registerComponent("rewind", rewind);
            player.getChild("ControlBar").addChild("rewind", {}, 2);
            // rewind.addClass("vjs-icon-reply");

            //  implement the Fastforward Button
            var fastForward = videojs.extend(Button, {
                constructor: function () {
                    Button.apply(this, arguments);
                    this.addClass("fast-forward-icon");
                    /* initialize your button */
                },
                handleClick: function () {
                    player.currentTime(player.currentTime() + 10);
                }
            });
            videojs.registerComponent("fastForward", fastForward);
            player.getChild("ControlBar").addChild("fastForward", {}, 3);

            player.on("timeupdate", () => {
                if(counter<timeIntervalUpdates){
                    counter++;
                }else if (counter === timeIntervalUpdates){
                    const time = player.currentTime().toFixed();
                    // console.log('VideoJSPlayer::time update  ',time);
                    counter=0;
                    props.timeUpdate(time);
                }

            });

            // handle The keyboard Keys
            player.on("keydown", (e) => {
                const playerVolume = player.volume();
                const playerCurrentTime = player.currentTime();
                console.log('VideoJSPlayer:e: ',e.code);
                switch (e.code) {
                    case "Space":
                        if (player.paused()) {
                            player.play();
                        } else {
                            player.pause();
                        }
                        break;
                    case "ArrowRight":
                        player.currentTime(playerCurrentTime + 10);
                        break;
                    case "ArrowLeft":
                        player.currentTime(playerCurrentTime - 10);
                        break;
                    case "ArrowUp":
                        player.volume(playerVolume + 0.1);
                        break;
                    case "ArrowDown":
                        player.volume(playerVolume - 0.1);
                        break;
                    case "KeyM":
                        player.volume(0);
                        break;
                    default:
                        return;
                }
            });
        }
    }, [options]);

    // useEffect(() => {
    //   if (playerRef.current) {
    //     playerRef.current.pause();
    //     playerRef.current.src(playList[URLsWatcher]?.src);
    //     playerRef.current.load();
    //     playerRef.current.play();
    //     playerRef.current.on("onloadedmetadata", () => {
    //       console.log(playerRef.current.duration());
    //     });
    //     // window.open(URLs[URLsWatcher]);
    //   }
    // }, [URLsWatcher]);

    React.useEffect(() => {
        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    return (
        <div className="player">
            <div data-vjs-player>
                <video
                    id="video-js-player"
                    ref={videoRef}
                    className="video-js vjs-matrix vjs-big-play-centered">
                    <source src={videoSource} type="application/x-mpegURL" />
                </video>
            </div>
        </div>
    );
};

// playList[URLsWatcher]?.src
export default VideoJsPlayer;
