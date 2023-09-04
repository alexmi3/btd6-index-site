import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MapSelect from "../../util/MapSelect";

export default function Maps() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [mapInfo, setMapInfo] = useState(null);
    const [lccs, setLccs] = useState(null);
    const [lccError, setLccError] = useState(null);

    useEffect(() => {
        const map = searchParams.get('map');
        if (map) {
            fetch('/fetch-map-info?' + new URLSearchParams({map}))
            .then(async (res) => {
                let resJson = await res.json();
                setMapInfo(resJson);
            });
        }
    }, [searchParams]);

    useEffect(() => {
        const map = searchParams.get('map');
        if (map) {
            fetch('/fetch-lcc?' + new URLSearchParams({map, pending: 0, count: 100}))
            .then(async (res) => {
                let resJson = await res.json();
                if ('error' in resJson) {
                    throw new Error(resJson.error);
                } else {
                    setLccs(resJson.results.toSorted((a, b) => {
                        let aInt = parseInt(a.version.split('.')[0].trim());
                        let bInt = parseInt(b.version.split('.')[0].trim());
                        return bInt - aInt; // sort by descending major version order
                    }));
                }
            })
            .catch(e => {
                setLccError(e.message);
            });
        }
    }, [searchParams]);

    return <>
        <h1>Maps</h1>
        <p>Select a map in the dropdown below to view information about that map.</p>
        <MapSelect
            mapValue={searchParams.get('map')}
            onChange={val => setSearchParams({map: val.value})}
        />
        {
            searchParams.get('map') && mapInfo && <>
                <h2>Map Information for {mapInfo.map}</h2>
                <dl>
                    <dt>Abbreviation</dt>
                    <dd>{mapInfo.abbreviation}</dd>
                    <dt>Map Difficulty</dt>
                    <dd style={{textTransform: 'capitalize'}}>{mapInfo.difficulty}</dd>
                    <dt>Version Added</dt>
                    <dd>{mapInfo.version}</dd>
                    <dt>Average Path Length (RBS)</dt>
                    <dd>{mapInfo.length}</dd>
                    {
                        mapInfo.lengthNotes && <>
                            <dt>Path Length Breakdown (in RBS)</dt>
                            <dd className="multiline">{mapInfo.lengthNotes}</dd>
                        </>
                    }
                    <dt>Number of Entrances / Exits</dt>
                    <dd>{mapInfo.numEntrances} entrance(s), {mapInfo.numExits} exit(s)</dd>
                    <dt>Has significat Line of Sight obstacles? / Has Water?</dt>
                    <dd>{mapInfo.hasLOS ? 'Yes' : 'No'}, {mapInfo.hasWater ? 'Yes' : 'No'}</dd>
                    <dt>Number of Interactable Objects</dt>
                    <dd>{mapInfo.numObjects}</dd>
                    {
                        mapInfo.removalCost && <>
                            <dt>Cost to Remove/Activate All Objects</dt>
                            <dd>{mapInfo.removalCost}</dd>
                        </>
                    }
                    {
                        mapInfo.removalCostNotes && <>
                            <dt>Object Removal/Activation Notes</dt>
                            <dd className="multiline">{mapInfo.removalCostNotes}</dd>
                        </>
                    }
                    {
                        mapInfo.miscNotes && <>
                            <dt>Miscellaneous Notes</dt>
                            <dd className="multiline">{mapInfo.miscNotes}</dd>
                        </>
                    }
                </dl>
                <h2>LCC History for {mapInfo.map}</h2>
                {
                    lccError
                    ? <p>Error fetching LCCs: {lccError}</p>
                    : (lccs && <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Version</th>
                                    <th>Cost</th>
                                    <th>Person</th>
                                    <th>Date</th>
                                    <th>Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lccs.map(lcc => {
                                        const link = lcc.link || `https://media.btd6index.win/${lcc.filekey}`;

                                        return <tr key={lcc.filekey}>
                                            <td>{lcc.version}</td>
                                            <td>{lcc.money}</td>
                                            <td>{lcc.person}</td>
                                            <td>{lcc.date}</td>
                                            <td><a href={link}>Link</a> | <a href={'/lcc/notes?' + new URLSearchParams({filekey: lcc.filekey})}>Notes</a></td>
                                        </tr>;
                                    })
                                }
                            </tbody>
                        </table>
                    </>)
                }
            </>
        }
    </>
}