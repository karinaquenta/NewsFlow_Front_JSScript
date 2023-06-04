import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Header from './Header';
import CreatePost from './CreatePost';

interface BodyProps {
  createpost: boolean,
  header : boolean;
  children: JSX.Element | JSX.Element[];
}

export default function Body({ createpost, header, children }: BodyProps) {
  return (
    <Container>
      <Stack direction="vertical">
        {header && <Header />}
        <Container>{ createpost && <CreatePost /> } {children}</Container>
      </Stack>
    </Container>
  );
}