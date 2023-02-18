import { imgSource } from "../../images/images";

interface IProps {
  title?: string | number | undefined;
}

const Footer: React.FC<IProps> = (props) => {
  const { title } = props;

  return (
    <>
      <div>
        <div id="footer-t">
          <div className="container">
            <div className="row">
              <div id="logo-f" className="col-lg-3 col-md-6 col-sm-12">
                <h2><a href="#"><img src={imgSource.logofooter} /></a></h2>
                <p>
                  Tung Iphone shop
                </p>
              </div>
              <div id="address" className="col-lg-3 col-md-6 col-sm-12">
                <h3>Địa chỉ</h3>
                <p>10 Đoàn Thị Điểm - Hải Châu II - Đà Nẵng</p>
              </div>
              <div id="services" className="col-lg-3 col-md-6 col-sm-12">
                <h3>Dịch vụ</h3>
                <p>Bảo hành rơi vỡ, ngấm nước Care Diamond</p>
                <p>Bảo hành Care X60 rơi vỡ ngấm nước vẫn Đổi mới</p>
              </div>
              <div id="hotline" className="col-lg-3 col-md-6 col-sm-12">
                <h3>Hotline</h3>
                <p>Phone Sale: (+84) 0352524141</p>
                <p>Email: maiducthanhtung3006@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Top */}
        {/* Footer Bottom */}
        <div id="footer-b">
          <div className="container">
            <p>2022 © Tung Iphone. All rights reserved. Developed by Tung DEV. </p>
          </div>
        </div>
      </div>

    </>
  )
}


export default Footer;