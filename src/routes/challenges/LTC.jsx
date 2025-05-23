import { useCallback, useEffect, useState } from "react";
import ChallengePage from "./ChallengePage";
import { defaultRules, addRule } from "../../util/rules";

export default function LTC() {
    const fieldDisplayFunc = useCallback(({fieldName, fieldValue}) => {
        try {
            if (['towerset', 'upgradeset'].includes(fieldName)) {
                return JSON.parse(fieldValue)?.map(v => v ?? 'N/A')?.join(', ') ?? 'N/A';
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
        return fieldValue ?? 'N/A';
    }, []);

    const [allRules, setAllRules] = useState(defaultRules);
    
    useEffect(() => {
        setAllRules(a => [...addRule(a, { 
            name: 'Tower Restrictions', 
            rule: <div>
                    <h2>Tower and Hero Restrictions</h2>
                    <p>Exclude all unused towers from your selection. The towers' path and crosspath need to be restricted.</p>
                    <p>When using heroes, you must not select the "selected hero" option.</p>
                </div>,
        })]);

        setAllRules(a => [...addRule(a, {
            name: 'Alternate Completions', 
            rule: <div>
                    <h2>Alternate Combos</h2>
                    <p>For each map the only combos counted are: </p>
                    <ul>
                        <li><strong>The OG</strong>: The least amount of towers completed on the map, tiebroken by the earliest of those combos.</li>
                        <li><strong>The Cheapest</strong>: The cheapest combo using only the number of towers from the OG.</li>
                        <li><strong>Heroless</strong>: The least number of towers completed on the map without using a hero.</li>
                    </ul>
                </div>,
        })]);
    }, [])

    return <ChallengePage
        challenge="ltc"
        header="Least Towers CHIMPS"
        description="In this challenge, win a game of CHIMPS with the fewest amount of towers (including heroes)."
        fieldHeaders={['Map']}
        fields={['map']}
        altFields={['towerset', 'completiontype']}
        altFieldHeaders={['Towers', 'Completion Type']}
        auxFieldHeaders={['Upgrades', 'Version', 'Date']}
        auxFields={['upgradeset', 'version', 'date']}
        fieldDisplayFunc={fieldDisplayFunc}
        disableOG
        rules={allRules}
    />
}