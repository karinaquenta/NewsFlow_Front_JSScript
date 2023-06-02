import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';

interface BodyProps {
  createpost: boolean,
  sidebar: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function Body({ createpost, sidebar, children }: BodyProps) {
  return (
    <Container>
      <Stack direction="vertical">
        {sidebar && <Sidebar />}
        <Container>{ createpost && <CreatePost /> } {children}</Container>
      </Stack>
    </Container>
  );
}