import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'

export default function ContentSection2(){
    return(
        <div className={styles.content_section}>
            <div className={styles.content_section_inner}>
                <Fade bottom cascade>
                    <div className={styles.text_section}>
                        <h2>This is the Imperative of our time.</h2>
                        <h3>Imperative 21 is a business-led, network of coalitions driving economic system change.</h3>
                        <p>We are united by our vision and shared mission to equip leaders to lead consistent with 21st 
                            century leadership principles; to shift the cultural narrative about the role of business and 
                            finance in society; and to realign incentives in a supportive policy environment.</p>

                        <p>Together, and with others, we will support business and finance leaders, culture shifters, 
                            and policymakers who are ready to meet this moment with bold and meaningful action. Our network is 
                            fluid, allowing coalitions to form and dissolve around different work, and allies to lean in and 
                            lean out based upon their capacities and interests.</p>

                        <ul>
                            <li>One such coalition is harnessing the power of culture to demand an economic 
                                system that delivers shared wellbeing on a healthy planet.</li>
                            <li>Another is transforming finance to manage systemic risk. </li>
                            <li>A third is stewarding a global process to co-create a set of 
                                'Imperatives for Economic System Change' that give our community 
                                of allies greater coherence and power.</li>
                        </ul>

                    </div>
                </Fade>
            </div>
        </div>
    )
}