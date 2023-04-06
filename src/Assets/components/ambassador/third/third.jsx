import { AnimationOnScroll } from 'react-animation-on-scroll';
import  React from "react";
import '../../homepage/8thgradientsection/gradient.css';
import Button from "@mui/material/Button";
import { ReactComponent as AmbassadorArrow } from '../../../images/ncx-ambassador_arrow.svg';
import { useTranslation } from "react-i18next";

function Home8thGradientSection(){

    const { t } = useTranslation();

    return(
        <div className="gradient">
            <div className="container">
                <h1 className='privileges_head'>{t("other_privileges")}</h1>
                <div className="gradient-bar">
                    <AnimationOnScroll animateIn="animate__slideInLeft">
                        <div className="gradientbar"></div>
                    </AnimationOnScroll>
                </div>
                <div className="row gradient-text">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-one">
                            <h3>{t("privilege_1")}</h3>
                            <h1>{t("exclusive_benefits")}</h1>
                            <p>{t("exclusive_benefits_text")}</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-two">
                            <h3>{t("privilege_2")}</h3>
                            <h1>{t("official_support")}</h1>
                            <p>{t("official_support_text")}</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-three">
                            <h3>{t("privilege_3")}</h3>
                            <h1>{t("vip_privileges")}</h1>
                            <p>{t("vip_privileges_text")}</p>
                        </AnimationOnScroll>
                    </div>
                </div>

                <div className="become_an_ambassador">
                    <h1>{t("become_ncx_ambassador")}</h1>
                    <div className="ambassador_row">
                        <div className="col one">
                            <h1>{t("privilege_4")}</h1>
                            <p>{t("click_apply_ncx_ambassador")}</p>
                        </div>
                        <div className="col two">
                            <AmbassadorArrow />
                        </div>
                        <div className="col three">
                            <h1>{t("privilege_5")}</h1>
                            <p>{t("click_apply_ncx_ambassador")}</p>
                        </div>
                        <div className="col four">
                            <AmbassadorArrow />
                        </div>
                        <div className="col five">
                            <h1>{t("privilege_6")}</h1>
                            <p>{t("click_apply_ncx_ambassador")}</p>
                        </div>
                    </div>
                    <Button className="referral_applynow" href="mailto:support@ncx.cx">{t("apply_now")}</Button>
                </div>
            </div>
        </div>
    )
}
export default Home8thGradientSection;