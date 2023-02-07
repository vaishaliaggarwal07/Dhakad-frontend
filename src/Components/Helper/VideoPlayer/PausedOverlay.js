import { css } from "@emotion/css";
import { PlayCircleFilled } from "@material-ui/icons";
// import Images from "../../../Assets/Images/joker-smoking.jpg";

const PausedOverlay = (props) => (
  <div>
    <img
      src={props.src}
      alt="movie banner"
      className={css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: 50% 100%;
      `}
    />
    <PlayCircleFilled
      className={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
    />
    <div
      className={css`
        z-index: 1;
        font-family: sans-serif;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1em;

        h1 {
          margin: 0 0 0.2em;
        }
        p {
          margin: 0 0.2em 0;
        }
      `}
    ></div>
  </div>
);

export default PausedOverlay;
