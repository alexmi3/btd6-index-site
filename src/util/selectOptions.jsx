import towerNames from './tower-names.json';
import heroNames from './heroes.json';
import { useEffect, useState } from 'react';

const towerToOptions = new Map(
    Object.values(towerNames)
        .flatMap(entries => Object.values(entries)).concat(Object.keys(heroNames))
        .map(entry => [entry, {value: entry, label: entry}])
);

const towerTypeToOptions = new Map(
    Object.keys(towerNames)
    .map(key => [key, {value: key, label: key}])
);

const towerTypeAndHeroToOptions = new Map([
    ...towerTypeToOptions, ...Object.keys(heroNames).map(entry => [entry, {value: entry, label: entry}])
]);

function useMapToOptions(reloadVar = false) {
    const [mapToOptions, setMapToOptions] = useState(new Map());

    useEffect(() => {
        fetch('/list-maps')
        .then(async (res) => {
            let mapsList = await res.json();
            setMapToOptions(
                new Map(mapsList.results.map(mapName => [mapName, {value: mapName, label: mapName}]))
            );
        });
    }, [reloadVar]);
    
    return mapToOptions;
}

export {towerToOptions, useMapToOptions, towerTypeAndHeroToOptions, towerTypeToOptions};