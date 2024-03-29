import React from 'react';
import { Flex, useQuery } from '@chakra-ui/react';
import { Post } from '../../components/Post';

function TimelineView({ posts, loading }) {
  return (
    <Flex flexDir={'column'} alignItems={'center'} width="100%">
      {posts.map((i) => (
        <Post post={i} key={i.id} />
      ))}
    </Flex>
  );
}

export default TimelineView;
