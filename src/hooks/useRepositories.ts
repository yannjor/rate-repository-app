import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

import { Repository } from '../types';

interface Edge {
  cursor: string;
  node: Repository;
}

const useRepositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const repositoryNodes = data
    ? data.repositories.edges.map((edge: Edge) => edge.node)
    : [];

  return { repositories: repositoryNodes, loading, error };
};

export default useRepositories;
