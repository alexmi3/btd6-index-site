import ChallengePage from "./ChallengePage"

export default function TwoTC() {
    return <ChallengePage
    challenge="2tc"
    header="2 Towers CHIMPS"
    description="In this challenge, win a game of CHIMPS with buying exactly two towers (including heroes and excluding towers/heroes that have, in the past or currently, solo CHIMPS as a single tower)."
    fieldHeaders={['Tower 1', 'Tower 2']}
    fields={['tower1', 'tower2']}
    auxFields={['version', 'date']}
    auxFieldHeaders={['OG Version', 'OG Date']}
    fieldDisplayFunc={({ fieldName, fieldValue, completion }) => {
        if ((fieldName === 'version' || fieldName === 'date') && !completion.og) {
            return 'N/A';
        }
        return fieldValue || 'N/A';
    }}
    rules = {[
        {
            name: 'Tower Limitations',
            rule: 'Towers that have successfully soloed CHIMPS mode in the past or currently are not allowed. As of now, this includes  Sauda, Geraldo, and Corvus.'
        },
        {
            name: 'Challenge Settings',
            rule: "The Challenge Editor should be set to the hard difficulty and CHIMPS mode. \nStarting Cash, Starting Lives, Max Lives, Start Round, and End Round must be set to their default values. \nThe end round must strictly be set to Round 100. \nThe \"Least Cash\" condition should be set to \"No Score Set\" (or 99999999 through clicking the auto button twice which does the same thing without needing a reset); this is mainly to prevent exploiting of cash bugs. \nYou can reset the score after completing a run by clicking the auto button twice. \nAll sliders must be set to 100%. \nAll check boxes at the bottom must remain unchecked.",
        },
        {
            name: 'Tower and Hero Restrictions',
            rule: 'Exclude all unused towers from your selection. The towers\' path and crosspath need to be restricted. When using heroes, you must not select the "selected hero" option.'
        },
        {
            name: 'Submission Requirements',
            rule: 'Victory Screen screenshots alone are insufficient for inclusion in The Index. \nYou must also provide a screenshot of the final tower setup. \nYou must provide a challenge code that reflects the limitations and specifications outlined in the rules of this challenge.(2MP Excluded)'
        },
        {
            name: 'Hard Round Recordings',
            rule: 'For the successful completion of a submission, recordings of gameplay during hard rounds are mandatory. \nIf a helper from the community requests recordings of a particular round, you will have 48 hours to provide the requested footage. Failure to do so within this timeframe may result in a temporary suspension or ban from future submissions. \nAdditionally, any runs featuring Adora must include full recordings of gameplay.'
        },
        {
            name: 'Fair Play and Game Integrity',
            rule: 'No game modification, hacking, or unauthorized software use allowed. \nThis includes the use of speedhacks and any other alterations that deviate from the game\'s original mechanics and settings. Violation leads to disqualification and potential exclusion from future challenges.'
        },
        {
            name: 'Bannes',
            rule: 'Being banned from the Official BTD6 Index Discord Server will result in a ban from submitting.'
        },
        {
            name: 'Cheating',
            rule: 'Being caught cheating will result in your runs being removed from Index'
        },
    ]}
    />
};