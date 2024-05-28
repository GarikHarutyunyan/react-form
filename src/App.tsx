import axios from 'axios';
import {ReactElement, useEffect, useState} from 'react';
import {Form} from './components/form/Form';
import {IFormConfigDTO} from './data-structures';

const configApi: string =
  'https://9fd21a03-38a1-4e35-9cea-a97bcfc00f4b.mock.pstmn.io/reg';

function App() {
  const [config, setConfig] = useState<IFormConfigDTO>();

  const getConfig = async (): Promise<void> => {
    try {
      const response: any = await axios.get(configApi);
      const newConfig: IFormConfigDTO = response.data;

      setConfig(newConfig);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getConfig();
  }, []);

  const renderPlaceholder = (): ReactElement => {
    return <>{'There is no predefined configuration for Form!'}</>;
  };

  const onSubmit = async (data: {[key: string]: any}) => {
    try {
      await axios.post(configApi, data);
      alert('Data has been saved successfully.');
    } catch (error) {
      console.error(error);
    }
  };

  return config ? (
    <Form config={config} onSubmit={onSubmit} />
  ) : (
    renderPlaceholder()
  );
}

export default App;
