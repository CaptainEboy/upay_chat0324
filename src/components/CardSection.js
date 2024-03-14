import visaCard from "../assets/cardSectionImages/visaCard.jpg"


function CardSection() {
  return (
    <div style={{marginTop: 70}} class="des container">
        <div class="row">
            <div class="col-lg-5"><img src={visaCard} id="people" alt="people" /></div>
            <div class="col-lg-1"></div>
            <div class="peopleContent col-lg-6">
                <h1>Upay Virtual Visa Card</h1>
                <div class="line"></div>
                    <h4>
                        Instantly issue and start spending securely online using UpayChat Visa virtual cards in less than 1 minute!
                        <h6 style={{fontWeight: 400}}>
                            ♾  Issue unlimited number of cards for yourself & team members. 

                            <br />🌏 UpayChat Visa card are globally accepted.

                            <br />💳 UpayChat Visa card can be used in-person & online.

                            <br />⛔️ Instantly freeze and unfreeze your UpayChat Visa cards.
                        </h6>
                    </h4>
                </div>
        </div>
    </div>
   
  );
}

export default CardSection;


