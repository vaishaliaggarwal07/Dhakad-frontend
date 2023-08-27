import React from "react";
import VideoJSPlayer from "../VideoPlayer/VideoJSPlayer";
import videojs from "video.js";


const Trailer = (props) => {
    let videoType = 'video/mp4';
    if(props.trailerLink && props.trailerLink.includes('m3u8')){
        videoType = 'application/x-mpegURL';
    }
    const videoJsOptions = {
        autoPlay: true,
        muted:true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: props.trailerLink,
            type: videoType
        }]
        // for hls stream
        /*
        sources: [{
            src:'https://cdn.flowplayer.com/a30bd6bc-f98b-47bc-abf5-97633d4faea0/hls/de3f6ca7-2db3-4689-8160-0f574a5996ad/playlist.m3u8',
            type: 'application/x-mpegURL'
        }]
         */
    };
    const playerRef = React.useRef(null);
    const handlePlayerReady = (player) => {
        playerRef.current = player;
        props.onPlayerReady(player);

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    const onHandleClose = ()=>{
        playerRef.current.pause();
        playerRef.current.dispose();
        props.onTrailerClose();
    }

    return (
        <React.Fragment>
            <div
                className={`modal fade custom-modal`}

                id="trailerModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content"  >
                        <div className="modal-header">
                            <h4 className="modal-title mx-auto" id="exampleModalLabel">
                                Trailer
                            </h4>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onHandleClose}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className={`modal-body modal-body-outer-sec`}>
                            <VideoJSPlayer options={videoJsOptions} onReady={handlePlayerReady}/>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Trailer;

