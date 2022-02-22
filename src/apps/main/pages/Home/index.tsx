import React, { SyntheticEvent } from 'react';
import { H1, H2, H3, H4, H5, H6, Span, Button, TextInput, Select, Chip } from 'src/components';
import styles from './index.css';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store/hooks';
import { getCounter } from 'src/store/modules/testCount/selectors';
import { actions as counterActions } from 'src/store/modules/testCount/slice';

function MainComponent () {

  const dispatch = useDispatch();

  const count = useAppSelector(getCounter);

  function handleIncrement () {
    dispatch(counterActions.increment(1));
  }

  function handleDecrement () {
    dispatch(counterActions.decrement(1));
  }

  return (
    <div>
      <p>{count}</p>
      <div onClick={handleIncrement}>
        <p>Increment</p>
      </div>
      <div onClick={handleDecrement}>
        <p>Decrement</p>
      </div>
    </div>
  );
}

const TAGS_PRESET = [
  'I\'ll have',
  'two number 9\'s',
  'a number 9 large',
  'a number 6',
  'with extra dip',
  'a number 7',
  'two number 45s',
  'one with cheese',
  'and a large soda',
];

// const TAGS = Array(100)
//   .fill(1)
//   .map((a, i) => {
//     return TAGS_PRESET[
//       Math.ceil((Math.random() * 1000) % (TAGS_PRESET.length - 1))
//     ];
//   });


export default function Home () {
  const { t } = useTranslation([ 'main' ]);
  const [ textInput, setTextInput ] = React.useState('');
  return (
    <div className={styles.container}>
      <TextInput
        value={textInput}
        onChange={(value: string) => setTextInput(value)}
        label='test label'
        placeholder='test'
      />

      <Select
        label='test select label'
        items={[ { label: 'test opt1', value: '123' }, { label: 'test opt', value: '456' } ]}
        onChange={(e: SyntheticEvent) => console.log(e)}
      />
      <div>
        {TAGS_PRESET.map(tag => (
          <Chip key={tag} className={styles.chip} label={tag} />
        ))}
      </div>

      <div>{textInput}</div>
      <H1>{t('mainPage')}</H1>
      <H2>Lorem Ipsum</H2>
      <H3>Lorem Ipsum</H3>
      <H4>Lorem Ipsum</H4>
      <H5>Lorem Ipsum</H5>
      <H6>Lorem Ipsum</H6>
      <Span>SPAN</Span>

      <Button
        onPress={() => console.log('>>>>>>>>>')}
        variant='flat'
      >
        Test
      </Button>

      <Button
        onPress={() => console.log('>>>>>>>>>')}
        variant='flat'
        size='s'
      >
        Test
      </Button>
      <br />
      <Button
        onPress={() => console.log('>>>>>>>>>')}
        variant='flat'
        size='m'
      >
        Test
      </Button>

      <br />
      <Button
        onPress={() => console.log('>>>>>>>>>')}
        variant='outlined'
        size='m'
      >
        Test
      </Button>
      {/* <MainComponent /> */}
    </div>
  );
}
