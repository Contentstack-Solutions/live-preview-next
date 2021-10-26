import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Stack, { onEntryChange } from "../utils"
import ContentstackLivePreview from '@contentstack/live-preview-utils';

interface Data {
  [key: string]: any
}

const Home: NextPage = () => {

  const [data, setData] = useState<Data>({})
    
  const updateData = async () => {
      const fetchedData = await Stack
          .ContentType('example')
          .Query()
          .language('en-us')
          .toJSON()
          .find()

      setData(fetchedData[0][0]);
  }
  useEffect(() => {
      onEntryChange(updateData);
  }, []);

  ContentstackLivePreview.init({
    enable: true,
    stackDetails: {
        apiKey: 'blt009fe0bb4e6daa0e',
    },
  });

  let title = data.title;
  let content = data.content;

  // Stack.livePreviewQuery({hash: data.uid, content_type_uid:'example'});

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Home
