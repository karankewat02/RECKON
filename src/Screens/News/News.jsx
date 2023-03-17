import React from 'react'
import Styles from '../MainProductsellpage/MainProductSellerPage'

export default function News() {
  return (
    <div style={{padding:"0 10vw",backgroundColor:"#FFEED1",minHeight:'70vh'}} className={Styles.productcollectioncard} >
                <br />
                <h1 style={{ color: "#800000", textAlign: "center", fontWeight: "400" }} >Latest News & Schemes</h1>
                <div style={{ Display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", justifyContent: "center", padding: "1rem" }}>
                    <div className={Styles.cardproduct}>
                        {/* <h3>Top Picks for Home</h3>
                                <div style={{padding:"1rem",display:"flex",flexWrap:"wrap",width:"200px",height:"200px"}}>
                                            <img style={{width:"20px",height:"20px"}} src={Saree} alt="" />
                                            <img style={{width:"20px",height:"20px"}} src={Saree} alt="" />
                                            <img style={{width:"20px",height:"20px"}} src={Saree} alt="" />
                                            <img style={{width:"20px",height:"20px"}} src={Saree} alt="" />
                                </div> */}
                        <details style={{ color: "#800000" }} >
                            <summary>Handloom Weavers Comprehensive Welfare Scheme</summary>
                            <p>Handloom Weavers Comprehensive Welfare Scheme (HWCWS) is providing Life, accidental and disability insurance coverage to handloom weavers/workers under the components Pradhan Mantri Jivan Jyoti Bima Yojana(PMJJBY), Pradhan Mantri Suraksha Bima Yojana(PMSBY) and Converged Mahatma Gandhi Bunkar Bima Yojana(MGBBY).</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#800000" }} >
                            <summary>National Handloom Development Program(NHDP)</summary>
                            <p>The National Handloom Development Programme (NHDP) is an attempt to facilitate the sustainable development of handloom weavers located in and outside identified handloom clusters into a cohesive, self-managing and competitive socio- economic unit.</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#800000" }} >
                            <summary>Deen Dayal Hathkargha Protsahan Yojana</summary>
                            <p>This is a comprehensive Scheme for the Handloom Sector, to take care of a wide gamut of activities such as product development, infrastructure support, institutional support, training to weavers, supply of equipments and marketing support etc. both at macro and micro level in an integrated and coordinated manner for an overall development of the sector and benefit to handloom weavers. It is an attempt to provide such facilities, which would enable the weavers both within the cooperative fold, as well as those outside, to produce quality fabric, which are acceptable in the market.</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#800000" }} >
                            <summary>Handloom Marketing Assistance</summary>
                            <p>The objective of the Handloom Marketing Assistance is to develop and promote the marketing channels in domestic as well as export market and bring about linkage between the two in a holistic and integrated manner. </p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#800000" }} >
                            <summary>Weaver MUDRA Assistance</summary>
                            <p>Under the Concessional Credit/Weaver MUDRA Scheme, Margin Money assistance at 20% of loan amount subject to a maximum of Rs.10,000/- per weaver, loan at 6% interest rate  and Credit Guarantee for a period of 3 years is provided to handloom weavers/weaver entrepreneurs across the country. However, the Government of India interest subvention is capped at 7%.</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#800000" }} >
                            <summary>Yarn Supply Scheme</summary>
                            <p>Yarn is the major raw material used by the handloom sector. Being dependent on yarn, manufacturers/traders and handloom weavers are facing shortage with escalating prices. The National Handloom Development Corporation Limited (NHDC) was set up to address the problems. The Yarn Supply Scheme (YSS) seeks to provide under-privileged handloom weavers with subsidized yarn and help them compete with the mill and power loom sectors.</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#800000" }} >
                            <summary>All India Handloom Board abolished in 2020</summary>
                            <p>The All India Handicrafts Board (AIHB), was an organisation in India established in 1952, which aimed to advise the Ministry of Textiles on development programmes for handicrafts. It's early key figures included Pupul Jayakar, Kamaladevi Chattopadhyay, Lakshmi Chand Jain and Fori Nehru. It was abolished by the Government of India in 2020 during the COVID-19 pandemic.</p>
                        </details>
                    </div>
                </div>
    </div>
  )
}
