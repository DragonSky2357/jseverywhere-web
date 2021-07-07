import React from 'react';

import { useQuery, gql } from '@apollo/client';

import Note from '../components/Note';

import { GET_NOTE } from '../gql/query';

function NotePage(props) {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! Note note found</p>;

  return <Note note={data.note} />;
}

export default NotePage;
