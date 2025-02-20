import { Container } from "react-bootstrap";
import ChannelList from "../components/ChannelList";

export default function Home() {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Welcome to LiveTV</h2>
      <p className="text-center">
        Enjoy live streaming of your favorite channels anytime, anywhere.
      </p>
      <ChannelList />
    </Container>
  );
}
