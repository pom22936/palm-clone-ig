import React, { useState } from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";
import SearchText from '../Common/Componants/SearchVocab/SearchText';
import VocabList from '../Common/Componants/SearchVocab/VocabList';

  const client = new ApolloClient({
    uri:
      "https://api-ap-northeast-1.graphcms.com/v2/cktefu37f2up601z78q95htoq/master",
    cache: new InMemoryCache()
  });

const SearchVocab = () => {
    const [text, setText] = useState("");
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>ตัวอย่างโปรแกรม React เรียกใช้งาน GraphQL</h2>
        <SearchText text={text} setText={setText} />
        <VocabList text={text} />
      </div>
    </ApolloProvider>
  )
}

export default SearchVocab