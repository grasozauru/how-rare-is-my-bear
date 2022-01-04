import React from 'react';

const CollectionStats = ({ possibleAttrsCount }) => {
    return (
        <>
            <div className='bear-collection-stats-title'>Collection Stats</div>
            <div className='bear-collection-stats'>
                {/* ------------------ */}
                <table>
                    <thead>
                        <tr>
                            <th colSpan='2'>Mouth 👄</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(possibleAttrsCount.mouth).map((mouth, index) => (
                            <tr key={index}>
                                <th>{mouth}</th>
                                <td>{possibleAttrsCount.mouth[mouth]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* ------------------ */}
                <table>
                    <thead>
                        <tr>
                            <th colSpan='2'>Caps 🧢</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(possibleAttrsCount.cap).map((cap, index) => (
                            <tr key={index}>
                                <th>{cap}</th>
                                <td>{possibleAttrsCount.cap[cap]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* ------------------ */}
                <table>
                    <thead>
                        <tr>
                            <th colSpan='2'>Glasses 👓</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(possibleAttrsCount.glasses).map((glasses, index) => (
                            <tr key={index}>
                                <th>{glasses}</th>
                                <td>{possibleAttrsCount.glasses[glasses]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* ------------------ */}
                <table>
                    <thead>
                        <tr>
                            <th colSpan='2'>Background 🖼</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(possibleAttrsCount.background).map((background, index) => (
                            <tr key={index}>
                                <th>{background}</th>
                                <td>{possibleAttrsCount.background[background]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* ------------------ */}
                <table>
                    <thead>
                        <tr>
                            <th colSpan='2'>Clothes 👕</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(possibleAttrsCount.clothes).map((clothes, index) => (
                            <tr key={index}>
                                <th>{clothes}</th>
                                <td>{possibleAttrsCount.clothes[clothes]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* ------------------ */}
                <table>
                    <thead>
                        <tr>
                            <th colSpan='2'>Base 🐻</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(possibleAttrsCount.base).map((base, index) => (
                            <tr key={index}>
                                <th>{base}</th>
                                <td>{possibleAttrsCount.base[base]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* ------------------ */}
            </div>
        </>
    );
};

export default CollectionStats;
