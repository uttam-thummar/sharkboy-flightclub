import { FC } from "react";
import { toAbsoluteUrl } from "../../assets/AssetHelpers";

const Roadmap: FC = () => {
    return (
        <>
            <section id="roadmapmenu" className="roadmap sec-desc">
            <div className="container">
                <div className="club-title">
                    <h2>ROADMAP</h2>
                    <div className="club-title-copy">
                        <p>The end goal is to build our very own FighterVerse for us Sharks to hang and Compete. </p>
                    </div>
                </div>
                <div className="percentage-row">
                    <div className="row">
                        <div className="col-md-2 percentage-text">
                            <h5>0% 	</h5>
                        </div>
                        <div className="col-md-10 percentage-desc">
                            <p>Fair Launch, fair distribution: Join discord for pre-sale info.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 percentage-text">
                            <h5>15%</h5>
                        </div>
                        <div className="col-md-10 percentage-desc">
                            <p>5 very rare Sharks will be airdropped to random early Sharksholders. </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 percentage-text">
                            <h5>30%</h5>
                        </div>
                        <div className="col-md-10 percentage-desc">
                            <p>5 very rare Sharks will be airdropped to random early Sharksholders. </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 percentage-text">
                            <h5>60%</h5>
                        </div>
                        <div className="col-md-10 percentage-desc">
                            <p>Training room unlocked. Sharksholders can start training their sharks for $LOX. You will want to earn as much $LOX as you can to later use in the SBFC’s FighterVerse.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 percentage-text">
                            <h5>80%</h5>
                        </div>
                        <div className="col-md-10 percentage-desc">
                            <p>Community Token launched. $CAVIAR will be airdropped to each Sharksholder. It will serve as our community token for the top contributors. </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 percentage-text">
                            <h5>100%</h5>
                        </div>
                        <div className="col-md-10 percentage-desc">
                            <p>FighterVerse launched. Welcome to SBFC.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="the-specs sec-desc">
            <div className="container">
                <div className="club-title">
                    <h2>THE SPECS</h2>
                    <div className="club-title-copy">
                        <p>OVER 180 possible traits. WE FIGHT IN STYLE. DRIPS DRIPS.</p>
                    </div>
                </div>
                <div className="specs-bg-text text-center">
                    <div className="specs-bg">
                        <img className="img-fluid" src={toAbsoluteUrl("/assets/images/Layer--7.png")} alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Roadmap;