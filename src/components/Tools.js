import React, {
  Fragment,
  useState,
  useEffect,
} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  generateCitizenId,
  generateForeignerId,
} from '../utils/functions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

// 一次產生幾組
const randomCount = 5;

const ListRow = (props) => {
  const { text } = props;
  
  return (
    <li style={{ height: '35px' }}>
      <div key={text} style={{ display: 'flex' }}>
        <div style={{ paddingRight: '10px', paddingTop: '5px', width: '100px' }}>{ text }</div>
        <CopyToClipboard text={text}>
          <Button variant="outlined" color="secondary" size="small">Copy</Button>
        </CopyToClipboard>
      </div>
    </li>
  );
}

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
      <Button variant="contained" color="primary" onClick={handleRandom}>
        Random
      </Button>
      <p>身分證字號</p>
      <ul>
        {
          ids.map(id => (<ListRow text={id} />))
        }
      </ul>
      <p>拘留證號</p>
      <ul>
        {
          livingIds.map(livingId => (<ListRow text={livingId} />))
        }
      </ul>
    </>
  );
}

export default Tools;
