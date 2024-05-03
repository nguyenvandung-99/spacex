import './App.css';
import { useQuery, gql } from '@apollo/client';
import type { LaunchData } from './models/Launch';
import LaunchCard from './components/LaunchCard';
import { SelectionContextProvider } from './contexts/compare.context';
import Button from '@mui/material/Button';
import { ModalContextProvider } from './contexts/modal.context';
import LaunchModal from './components/LaunchModal';
import type { QueryVariables } from './models/Query';
import CompareChart from './components/CompareChart';
import Box from '@mui/material/Box';
import LoadingCard from './components/LoadingCard';

function App() {
  const query = gql`
    query ExampleQuery($offset: Int, $limit: Int) {
      launches(offset: $offset, limit: $limit) {
        mission_id
        id
        mission_name
        details
        launch_date_local
        rocket {
          rocket {
            mass {
              kg
            }
            first_stage {
              fuel_amount_tons
            }
            second_stage {
              fuel_amount_tons
            }
          }
        }
      }
    }
  `;

  // TODO: move all this logic into a context
  const { data, fetchMore, loading } = useQuery<LaunchData, QueryVariables>(
    query,
    {
      variables: {
        offset: 0,
        limit: 10,
      },
    }
  );

  return (
    <SelectionContextProvider>
      <ModalContextProvider>
        <LaunchModal></LaunchModal>
        {/* todo: move all this into separate component after context is made */}
        <Box sx={{ display: 'flex', gap: 5 }}>
          <Box>
            {data ? (
              data.launches.map((launch) => (
                <LaunchCard launch={launch} key={launch.id} />
              ))
            ) : (
              <LoadingCard />
            )}
            <Button
              onClick={async () => {
                await fetchMore({
                  variables: { offset: data!.launches.length },
                });
              }}
              variant='contained'
            >
              {loading ? 'Loading...' : 'Load more'}
            </Button>
          </Box>
          <CompareChart />
        </Box>
      </ModalContextProvider>
    </SelectionContextProvider>
  );
}

export default App;
