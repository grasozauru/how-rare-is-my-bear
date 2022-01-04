import React, { useCallback, useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import possibleAttrs from './data/possible_attributes.json';
import './App.scss';
import './toggle-switch.scss';

import CollectionStats from './CollectionStats';
import SearchBar from './SearchBar';
import BearInfo from './BearInfo';

const ultraRareBears = ['1556', '3056', '5762', '8782', '7630'];

function App() {
    const [bearCollection, setBearCollection] = useState([]);
    const [possibleAttrsCount, setPossibleAttrsCount] = useState(possibleAttrs);

    const [bearNumber, setBearNumber] = useState('');
    const [selectedBear, setSelectedBear] = useState({});
    const [trustMarketUrl, setTrustMarketUrl] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUrlSearch, setIsUrlSearch] = useState(true);
    const [showBearInfo, setShowBearInfo] = useState(false);

    const getPossibleAttrsCount = useCallback(() => {
        const _possibleAttrsCount = {};
        Object.assign(_possibleAttrsCount, possibleAttrs);
        bearCollection.forEach(bear => {
            _possibleAttrsCount.background[bear.attributes[0].value] += 1; // background
            _possibleAttrsCount.base[bear.attributes[1].value] += 1; // base
            _possibleAttrsCount.clothes[bear.attributes[2].value] += 1; //clothes
            _possibleAttrsCount.glasses[bear.attributes[3].value] += 1; // glasses
            _possibleAttrsCount.mouth[bear.attributes[4].value] += 1; // mouth
            _possibleAttrsCount.cap[bear.attributes[5].value] += 1; // cap
        });
        return _possibleAttrsCount;
    }, [bearCollection]);

    // get collection data
    useEffect(() => {
        fetch('https://ipfs.io/ipfs/Qmeoen8g4kaAnaUQz1GQeaFPgq9hsRRaD5nqWZZhtwopJW/collection.json')
            .then(response => response.json())
            .then(collection => setBearCollection(collection));
    }, []);

    // get the max counts of every attribute
    useEffect(() => {
        setPossibleAttrsCount(getPossibleAttrsCount());
    }, [bearCollection, getPossibleAttrsCount]);

    const handleSearch = e => {
        e.preventDefault();
        searchBearData();
        setShowBearInfo(true);
    };

    const searchBearData = async () => {
        let bearName, image, _bearNumber, bear_drop_chance;

        if (isUrlSearch) {
            const bearId = trustMarketUrl.split('/').slice(-1)[0];
            await fetch(`https://trustmarket.azureedge.net/nfts/${bearId}`) //
                .then(response => response.json())
                .then(data => {
                    bearName = data.metadata.name;
                    image = data.url;
                    _bearNumber = data.metadata.edition;
                });
        } else {
            bearName = `Bear #${bearNumber}`;
            _bearNumber = bearNumber;
            image = `https://media.elrond.com/nfts/asset/Qmeoen8g4kaAnaUQz1GQeaFPgq9hsRRaD5nqWZZhtwopJW/${_bearNumber}.png`;
            // image = `https://ipfs.io/ipfs/Qmeoen8g4kaAnaUQz1GQeaFPgq9hsRRaD5nqWZZhtwopJW/${bearNumber}.png`;
        }

        const bear = bearCollection.find(bear => bear.name === bearName);

        const background = bear.attributes[0].value;
        const base = bear.attributes[1].value;
        const clothes = bear.attributes[2].value;
        const glasses = bear.attributes[3].value;
        const mouth = bear.attributes[4].value;
        const cap = bear.attributes[5].value;
        const background_rarity = (possibleAttrsCount.background[background] / 100).toFixed(2);
        const base_rarity = (possibleAttrsCount.base[base] / 100).toFixed(2);
        const clothes_rarity = (possibleAttrsCount.clothes[clothes] / 100).toFixed(2);
        const glasses_rarity = (possibleAttrsCount.glasses[glasses] / 100).toFixed(2);
        const mouth_rarity = (possibleAttrsCount.mouth[mouth] / 100).toFixed(2);
        const cap_rarity = (possibleAttrsCount.cap[cap] / 100).toFixed(2);

        if (ultraRareBears.includes(_bearNumber)) {
            bear_drop_chance = 0.05;
        } else {
            bear_drop_chance = (
                (Number(background_rarity) +
                    Number(base_rarity) +
                    Number(clothes_rarity) +
                    Number(glasses_rarity) +
                    Number(mouth_rarity) +
                    Number(cap_rarity)) /
                6
            ).toFixed(2);
        }

        setSelectedBear({
            name: bear.name,
            image: image,
            background: background,
            background_rarity: background_rarity,
            base: base,
            base_rarity: base_rarity,
            clothes: clothes,
            clothes_rarity: clothes_rarity,
            glasses: glasses,
            glasses_rarity: glasses_rarity,
            mouth: mouth,
            mouth_rarity: mouth_rarity,
            cap: cap,
            cap_rarity: cap_rarity,
            bear_drop_chance: bear_drop_chance,
        });
    };

    return (
        <>
            <div className='App'>
                <SearchBar
                    bearNumber={bearNumber}
                    setBearNumber={setBearNumber}
                    handleSearch={handleSearch}
                    isUrlSearch={isUrlSearch}
                    trustMarketUrl={trustMarketUrl}
                    setTrustMarketUrl={setTrustMarketUrl}
                />

                <div className='search-switch'>
                    <span>Search by bear number:</span>
                    <label className='switch'>
                        <input
                            type='checkbox'
                            value={!isUrlSearch}
                            onChange={() => setIsUrlSearch(!isUrlSearch)}
                        />
                        <span className='slider round'></span>
                    </label>
                </div>

                <BearInfo showBearInfo={showBearInfo} selectedBear={selectedBear} />

                <CollectionStats possibleAttrsCount={possibleAttrsCount} />
            </div>

            <footer>
                Made with 🍯 by{' '}
                <span className='herotag' onClick={() => setIsModalOpen(true)}>
                    @grss
                </span>
            </footer>

            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Box className='modal'>
                    <Typography sx={{ mt: 2 }}>Thank you!</Typography>
                    <img src='maiar.svg' alt='qr code with eGLD address' />
                    <Typography>eGLD</Typography>
                    <Typography id='maiar-addy' sx={{ mb: 2 }}>
                        erd1z6xz257m2pktgelyea9v3vpqqrxyh8mu8vxtdg4lujy25g5ms3cqrwjjkv
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}

export default App;
