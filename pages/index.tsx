import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Contentstack from 'contentstack'
import ContentstackLivePreview from '@contentstack/live-preview-utils';


interface Data {
  [key: string]: any
}


const Home: NextPage = () => {

  const [data, setData] = useState<Data>({});

  const Stack = Contentstack.Stack({
    api_key: 'blt009fe0bb4e6daa0e',
    delivery_token: 'cs01296f24ea7819972e489b9c',
    environment: 'published',
    // live_preview: {
    //   management_token: 'cs9ce6ad6e15a707baa191658c',
    //   enable: true,
    //   host: 'api.contentstack.io',
    // },
  })

  const Query = Stack.ContentType('example').Entry("bltb573fdad58718c24");

  Query.fetch()
    .then(function success(entry) {
      // console.log(entry.get('content')); // Retrieve field value by providing a field's uid
      // console.log(entry.toJSON()); // Convert the entry result object to JSON
      // setData(entry)
      setData(entry.toJSON())
    }, function error(err) {
      // err object
    })

  ContentstackLivePreview.init({
    enable: true,
    stackDetails: {
        apiKey: 'blt009fe0bb4e6daa0e',
    },
  });

  

  let title = data.title;
  let content = data.content;
  return (

    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Home
