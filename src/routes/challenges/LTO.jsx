import { useCallback, useState, useEffect, useRef } from "react";
import ChallengePage from "./ChallengePage"
import { defaultRules, addRule, editRule, deleteRule } from "../../util/rules";

export default function LTO() {
    const fieldDisplayFunc = useCallback(({fieldName, fieldValue}) => {
        try {
            if (fieldName === 'towerset') {
                return JSON.parse(fieldValue).join(', ')
            }
        } catch (e) {
            if (e instanceof SyntaxError) {
                // don't break the program on invalid towerset format
                // but instead log an error
                console.error(e);
            } else {
                // throw for everything else
                throw e;
            }
        }
        return fieldValue;
    }, []);

    const effectRan = useRef(false);
    const [allRules, setAllRules] = useState(defaultRules);

    useEffect(() => {
        if(effectRan.current === true){
            setAllRules(a => [...addRule(a, {
                id: 1, 
                name: 'Version Requirements', 
                rule: <div>
                        <h2>Version-Related Requirements</h2>
                        <p>Least Cost Deflation completions are independent of version and can be submitted on any version.</p>
                    </div>,
            })]);

            setAllRules(a => [...editRule(a, 'Challenge Settings', {
                id: 101,
                name: 'Challenge Settings',
                rule: <div>
                        <h2>Challenge Settings</h2>
                        <ul>
                            <li>The Challenge Editor should be set to the easy difficulty and Deflation mode. </li>
                            <li>Starting Cash, Starting Lives, Max Lives, Start Round, and End Round must be set to their default values.</li> 
                            <li>The end round must strictly be set to Round 60.</li>
                            <li>The "Least Cash" condition should initially be set to "No Score Set". <strong>Unlike most other Index challenges, setting the condition to 99999999 cash is not allowed, as the challenge code needs to incorporate the cash spent.</strong></li>
                            <li>All sliders must be set to 100%.</li>
                            <li>Monkey Knowledge is allowed, but no powers, continues, or <strong>selling</strong> are allowed.</li>
                        </ul>
                    </div>,
            })])
            
            setAllRules(a => [...deleteRule(a, 'Adora')])
        }
        return () => {effectRan.current = true}
    }, [])
    
    return <ChallengePage
        challenge="lto"
        header="Least Tower Odyssey"
        description="In this challenge, beat an odyssey with the least number of towers"
        fieldHeaders={['Odyssey', 'Towers']}
        fields={['odysseyName', 'towerset']}
        altFieldHeaders={[]}
        altFields={[]}
        fieldDisplayFunc={fieldDisplayFunc}
        rules={allRules}
    />
};