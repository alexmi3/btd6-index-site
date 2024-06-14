import { useCallback } from "react";
import ChallengePage from "./ChallengePage"

export default function FTTC() {
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
    return <ChallengePage
        challenge="fttc"
        header="Fewest Types of Towers CHIMPS"
        description="In this challenge, win a game of CHIMPS with no heroes and the smallest number of tower types."
        fieldHeaders={['Map', 'Tower Types']}
        fields={['map', 'towerset']}
        altFieldHeaders={[]}
        altFields={[]}
        fieldDisplayFunc={fieldDisplayFunc}
        rules = {[
            {
                name: 'Tower Limitations',
                rule: 'No Heroes Allowed!'
            },
            {
                name: 'Challenge Settings',
                rule: "The Challenge Editor should be set to the hard difficulty and CHIMPS mode. \nStarting Cash, Starting Lives, Max Lives, Start Round, and End Round must be set to their default values. \nThe end round must strictly be set to Round 100. \nThe \"Least Cash\" condition should be set to \"No Score Set\" (or 99999999 through clicking the auto button twice which does the same thing without needing a reset); this is mainly to prevent exploiting of cash bugs. \nYou can reset the score after completing a run by clicking the auto button twice. \nAll sliders must be set to 100%. \nAll check boxes at the bottom must remain unchecked.",
            },
            {
                
            }
        ]}
    />
};