import React from 'react'
import styles from './styles.module.css'

export default function ContentSection(){
    return(
        <div className={styles.content_section}>
            <div className={styles.content_section_inner}>
                <div className={styles.text_section}>
                    <p>
                        To build a future where all people are able to work 
                        with dignity and care for themselves and their loved 
                        ones, where our planet is healthy and our economy thrives, 
                        we must reimagine and redesign our economic system so that 
                        it works for all of us today and for the long-term.
                    </p>
                    
                    <h3>
                        We envision a future where our society, our leaders 
                        and our policies work together to create shared prosperity.
                    </h3>

                    <h2>Future Society</h2>
                    <p>
                        We see a culture that values our connection to each other, 
                        our communities and the planet. As a result the most celebrated 
                        and rewarded businesses and investors strive to serve all stakeholders all the time.
                    </p>

                    <h2>Future Leaders</h2>
                    <p>
                        We see an economy where business leaders and investors create long-term 
                        value for all stakeholders based on credible common standards, structures
                         and norms that align the interests of business, people and society.
                    </p>

                    <h2>Future Policy</h2>
                    <p>
                        We see public policies that reward greater positive stakeholder impact, 
                        and create an elevated level playing field in which all businesses and 
                        financial institutions are responsible for their impact not only on financial returns, 
                        but also for all stakeholders and the natural and social systems on which healthy markets 
                        and all life depends.
                    </p>
                </div>
            </div>
        </div>
    )
}
