import axios from 'axios';
import {useEffect, useState} from 'react';
import './app.css';
import {Form} from './components/form/Form';
import {Loader} from './core-components/loader/Loader';
import {Placeholder} from './core-components/placeholder/Placeholder';
import {IFormConfigDTO} from './data-structures';

const configApi: string =
  'https://9fd21a03-38a1-4e35-9cea-a97bcfc00f4b.mock.pstmn.io/reg';

function App() {
  const [config, setConfig] = useState<IFormConfigDTO>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getConfig = async (): Promise<void> => {
    try {
      const response: any = await axios.get(configApi);
      const newConfig: IFormConfigDTO = response.data;

      setConfig(newConfig);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getConfig();
  }, []);

  const onSubmit = async (data: {[key: string]: any}) => {
    try {
      await axios.post(configApi, data);
      alert('Data has been saved successfully.');
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <Loader className={'app__loader'} />;
  }

  return config ? (
    <Form config={config} onSubmit={onSubmit} />
  ) : (
    <Placeholder
      message={'Cannot find predefined config for Form!'}
      className={'app__placeholder'}
    />
  );
}

export default App;
