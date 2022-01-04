import React from 'react';

const BearInfo = ({ showBearInfo, selectedBear }) => {
    if (!showBearInfo) return null;

    return (
        <div className='bear-info'>
            <img src={selectedBear.image} alt='bear' />
            <table>
                <thead>
                    <tr>
                        <th colSpan='2'>{selectedBear.name}</th>
                        <th>Chance %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Background</th>
                        <td>{selectedBear.background}</td>
                        <td>{selectedBear.background_rarity}</td>
                    </tr>
                    <tr>
                        <th>Base</th>
                        <td>{selectedBear.base}</td>
                        <td>{selectedBear.base_rarity}</td>
                    </tr>
                    <tr>
                        <th>Clothes</th>
                        <td>{selectedBear.clothes}</td>
                        <td>{selectedBear.clothes_rarity}</td>
                    </tr>
                    <tr>
                        <th>Glasses</th>
                        <td>{selectedBear.glasses}</td>
                        <td>{selectedBear.glasses_rarity}</td>
                    </tr>
                    <tr>
                        <th>Mouth Accesories</th>
                        <td>{selectedBear.mouth}</td>
                        <td>{selectedBear.mouth_rarity}</td>
                    </tr>
                    <tr>
                        <th>Cap</th>
                        <td>{selectedBear.cap}</td>
                        <td>{selectedBear.cap_rarity}</td>
                    </tr>
                    <tr>
                        <th>Drop Chance</th>
                        <td colSpan='2' className='drop-chance'>
                            {selectedBear.bear_drop_chance}%
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BearInfo;
