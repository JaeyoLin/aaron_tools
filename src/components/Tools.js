import React, {
  useState,
  useEffect,
} from 'react';

import {
  generateCitizenId,
  generateForeignerId,
} from '../utils/functions';

// 一次產生幾組
const randomCount = 5;

const Tools = () => {
  const [ids, setIds] = useState([]);
  const [livingIds, setLivingIds] = useState([]);

  useEffect(() => {
    handleRandom();
  }, []);

  const handleRandom = () => {
    const tmpIds = [];
    for (let i = 1; i <= randomCount; i += 1) {
      tmpIds.push(generateCitizenId());
    }

    const tmpLivingIds = [];
    for (let j = 1; j <= randomCount; j += 1) {
      tmpLivingIds.push(generateForeignerId());
    }

    setIds(tmpIds);
    setLivingIds(tmpLivingIds);
  };

  return (
    <>
      <button onClick={handleRandom}>Random</button>
      <p>身分證字號</p>
      <ul>
        {
          ids.map(id => <li>{id}</li>)
        }
      </ul>
      <p>拘留證號</p>
      <ul>
        {
          livingIds.map(livingId => <li>{livingId}</li>)
        }
      </ul>
    </>
  );
}

export default Tools;
