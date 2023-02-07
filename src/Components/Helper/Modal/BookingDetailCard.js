import React from "react";
import "../../Helper/Style.css";
import ModelStyle from "./ModelStyle";
export function BookingDetail(props) {
  return (
    <React.Fragment>
      <ModelStyle modalTitle="We hope you like it" modalBtn={props.modalBtn}>
        <div className="booking-detail-wrapper">
          <div className="booking-detail-card col-md-12">
            <div className="row">
              <div className="col-md-5 booking-card-banner">
                <div className="booking-card-img">
                  <img src="https://s3-alpha-sig.figma.com/img/8cf2/6eb5/362563670f642ae03d63ca2f349696c9?Expires=1634515200&Signature=XvvQe3iAv5w8D4RTpjo6hXNDiBlvaXQrXsdyeL2BiYUhqz2W6FBsYiuPAhBY5Av5hPfdyEwznHr559H-a~f~rvUwgAe8IK8UR9-vlbfI0raVpq1g1fvY99VYfdiKZ0A71fJzcgT7QIYWvLkqI9vd1yUp8BxL6qX7e0ujQIQmK84cjhY5iI6Pokbk0N1y2IDRluk9OmfvBgMZOksvWksb3oXLMjKNgKmI0tTSBmw7amEWd9bADRvEMLcUslbi3l6mbpZ4QLSF10zuzp6~8JW6TyIxLZyPpn1oxPolxT0vx9JECllgNPzX70NM~lcNSyC2Bqz5V1UzWXoxVP129MBvhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                </div>
              </div>

              <div className="col-md-7 booking-card-content">
                <h2>Jocker</h2>
                <p className="movie-language-content">
                  <span className="booking-movie-language">Hindi</span>
                  <span className="booking-movie-release-date">
                    Wed 20 March 2020
                  </span>
                  <span>05 00 am</span>
                </p>
                <p className="movie-quality-content">
                  <span className="booking-moview-hd-title">HD</span>
                  <span className="booking-moview-expiry-title">
                    Expiry date
                  </span>
                  <span className="booking-movie-expiry-date">
                    20 April 2020
                  </span>
                </p>
              </div>
              <div className="col-md-12 booking-id-outer text-center ">
                <h4 className="booking-id-title">Booking ID</h4>
                <p className="booking-id-address">4080 Q1586 R2162122</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 amount-content">
            <h4 className="booking-amount-title">Amount</h4>
            <p className="booking-amount-title">
              <span className="booking-price-icon">₹</span>145
            </p>
          </div>
          <div className="col-md-12 tax-content">
            <h4 className="booking-tax-title">Tax</h4>
            <p className="booking-tax-price">
              <span className="booking-price-icon">₹</span>15
            </p>
          </div>
          <div className="col-md-12 total-amount-content">
            <h4 className="booking-total-amout-title">Total payable amount</h4>
            <p className="booking-total-amout-price">
              <span className="booking-total-amout-icon">₹</span>150
            </p>
          </div>
        </div>
      </ModelStyle>
    </React.Fragment>
  );
}

export default BookingDetail;
