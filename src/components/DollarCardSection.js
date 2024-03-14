import usdCard from "../assets/cardSectionImages/usdCard.jpg"


function DollarCardSection() {
  return (
    <div style={{marginTop: 70}} class="des container">
        <div style={{display: "inline-block"}} class="row">
            <div style={{float: "right"}} class="col-lg-5"><img src={usdCard} id="people" alt="people1" /></div>
            <div class="col-lg-1"></div>
            <div style={{float: "left"}} class="peopleContent col-lg-6">
                <h1>Upay USD Card</h1>
                <div class="line"></div>
                    <h4>
                        Pay anywhere and everywhere with your UpayChat USD card! 
                    </h4>
                    <h6 style={{fontWeight: 400}}>
                            1. Download UpayChat app on Google Play or App Store

                            <br />2. Register & Add money (₦) to your wallet

                            <br /> 3. Create a virtual dollar card instantly.

                        </h6>
                </div>
        </div>
    </div>
  );
}

export default DollarCardSection;


