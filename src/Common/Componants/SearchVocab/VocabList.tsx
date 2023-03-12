import React from 'react'
import {
    useQuery,
    gql
  } from "@apollo/client";

interface Params {
    text: string
}

type Props = Params
const VocabList: React.FC<Props> = (props: Props) => {
    const vocabs = gql`
    query VocabsQuery {
      vocabs(where: {vocab_contains: "${props.text}"}) {
        id
        vocab
        meaning
      }
    }
  `;

  const { loading, error, data } = useQuery(vocabs);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div>
        <h3>รายการคำศัพท์</h3>
        <div>
            {data &&
            data?.vocabs?.map((it: { id: React.Key | null | undefined; vocab: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; meaning: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <p key={it.id}>
                {it.vocab} = {it.meaning}
                </p>
            ))}
        </div>
    </div>
  )
}

export default VocabList